import * as vscode from 'vscode';
import { decode } from 'js-base64';
import { marked } from 'marked';
import { ExplorerTree } from './explorerTree';
import { getRepoReadmeInfo as RGetRepoReadmeInfo } from './apis/trending';
import { TrendingSince as MTrendingSince } from './models/trendingSince';

export function activate(context: vscode.ExtensionContext) {
    const explorerTree: ExplorerTree = new ExplorerTree();
    vscode.window.registerTreeDataProvider('trending', explorerTree);

    let webviewPanel: vscode.WebviewPanel | undefined;
    function checkWebviewPanel(): void {
        if (webviewPanel === undefined) {
            webviewPanel = vscode.window.createWebviewPanel(
                'github-trending',
                'Github Trending',
                vscode.ViewColumn.One,
                {
                    enableScripts: true
                }
            );
            webviewPanel.onDidDispose(() => {
                webviewPanel = undefined;
            });
        }
    }

    context.subscriptions.push(
        vscode.commands.registerCommand('github-trending.daily', () => {
            explorerTree.getTrending(MTrendingSince.Daily);
        }),
        vscode.commands.registerCommand('github-trending.weekly', () => {
            explorerTree.getTrending(MTrendingSince.Weekly);
        }),
        vscode.commands.registerCommand('github-trending.monthly', () => {
            explorerTree.getTrending(MTrendingSince.Monthly);
        }),
        vscode.commands.registerCommand('github-trending.select', async (userName: string, repoName: string) => {
            checkWebviewPanel();
            webviewPanel!.title = repoName;
            try {
                const response = await RGetRepoReadmeInfo({
                    userName,
                    repoName,
                });
                const { data } = response;
                const readme: string = decode(data.content);
                let markdown: string = marked(readme);
                const html: string = `<!DOCTYPE html>
                    <html>
                        <head>
                            <meta charset="utf-8">
                            <title>${repoName}</title>
                            <base href="https://raw.githubusercontent.com/${userName}/${repoName}/master/">
                        </head>
                        <body>
                            ${markdown}
                        </body>
                    </html>`;

                webviewPanel!.webview.html = html;
            } catch (error) {

            }
        }),
        vscode.commands.registerCommand('github-trending.openInBrowser', (item: vscode.TreeItem) => {
            const eventArguments: any[] = item.command!.arguments as any[];
            const userName = eventArguments[0];
            const repoName = eventArguments[1];
            vscode.env.openExternal(vscode.Uri.parse(`https://github.com/${userName}/${repoName}`));
        }),
    );
};

export function deactivate() { };
