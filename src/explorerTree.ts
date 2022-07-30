import * as vscode from 'vscode';
import cheerio from 'cheerio';
import { getTrending as RGetTrending } from './apis/trending';
import { TrendingSince as MTrendingSince } from './models/trendingSince';

export class ExplorerTree implements vscode.TreeDataProvider<vscode.TreeItem> {
    private onDidChangeTreeDataEvent: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();
    public readonly onDidChangeTreeData: vscode.Event<any> = this.onDidChangeTreeDataEvent.event;
    private since: MTrendingSince | undefined;

    public getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
        return element;
    }

    public async getChildren(element?: vscode.TreeItem): Promise<vscode.TreeItem[]> {
        if (this.since === undefined) {
            return [];
        }
        const nodes: vscode.TreeItem[] = [];
        try {
            const response = await RGetTrending(this.since);
            const $ = cheerio.load(response.data);
            const items = $('.Box-row');
            items.each((i, item) => {
                const title = $(item).find('.lh-condensed').text().replace(/\s+/g, '');
                const list = title.split('/');
                const userName = list[0];
                const repoName = list[1];
                const description = $(item).find('.my-1').text().trim();
                const startCount = $(item).find('a.mr-3').first().text().replace(/\s+/g, '');

                const node = new vscode.TreeItem(repoName, vscode.TreeItemCollapsibleState.None);
                node.description = `    ☆ ${startCount}`;
                node.tooltip = description;
                node.command = {
                    command: 'github-trending.select',
                    title: repoName,
                    arguments: [userName, repoName],
                };
                nodes.push(node);
            });
        } catch (error) {

        }
        return nodes;
    }

    public async getTrending(since: MTrendingSince) {
        this.since = since;
        this.onDidChangeTreeDataEvent.fire(null);
    }
};
