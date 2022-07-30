import * as vscode from 'vscode';
import c from 'devicon/icons/c/c-plain.svg';
import cplusplus from 'devicon/icons/cplusplus/cplusplus-plain.svg';
import dart from 'devicon/icons/dart/dart-plain.svg';
import html from 'devicon/icons/html5/html5-plain.svg';
import javascript from 'devicon/icons/javascript/javascript-plain.svg';
import python from 'devicon/icons/python/python-plain.svg';
import typescript from 'devicon/icons/typescript/typescript-plain.svg';
import apache from 'devicon/icons/apache/apache-plain.svg';
import csharp from 'devicon/icons/csharp/csharp-plain.svg';
import haskell from 'devicon/icons/haskell/haskell-plain.svg';
import ceylon from 'devicon/icons/ceylon/ceylon-plain.svg';
import clojure from 'devicon/icons/clojure/clojure-line.svg';
import cmake from 'devicon/icons/cmake/cmake-plain.svg';
import coffeescript from 'devicon/icons/coffeescript/coffeescript-original.svg';
import crystal from 'devicon/icons/crystal/crystal-original.svg';
import css from 'devicon/icons/css3/css3-plain.svg';
import debian from 'devicon/icons/debian/debian-plain.svg';
import docker from 'devicon/icons/docker/docker-plain.svg';
import elixir from 'devicon/icons/elixir/elixir-plain.svg';
import elm from 'devicon/icons/elm/elm-plain.svg';
import ember from 'devicon/icons/ember/ember-original-wordmark.svg';
import erlang from 'devicon/icons/erlang/erlang-plain.svg';
import gcc from 'devicon/icons/gcc/gcc-plain.svg';
import gentoo from 'devicon/icons/gentoo/gentoo-plain.svg';
import git from 'devicon/icons/git/git-plain.svg';
import go from 'devicon/icons/go/go-line.svg';
import gradle from 'devicon/icons/gradle/gradle-plain.svg';
import graphql from 'devicon/icons/graphql/graphql-plain.svg';
import groovy from 'devicon/icons/groovy/groovy-plain.svg';
import handlebars from 'devicon/icons/handlebars/handlebars-original.svg';
import haxe from 'devicon/icons/haxe/haxe-plain.svg';
import java from 'devicon/icons/java/java-plain.svg';
import jest from 'devicon/icons/jest/jest-plain.svg';
import jetbrains from 'devicon/icons/jetbrains/jetbrains-plain.svg';
import julia from 'devicon/icons/julia/julia-plain.svg';
import jupyter from 'devicon/icons/jupyter/jupyter-plain.svg';
import kotlin from 'devicon/icons/kotlin/kotlin-plain.svg';
import labview from 'devicon/icons/labview/labview-plain.svg';
import less from 'devicon/icons/less/less-plain-wordmark.svg';
import linux from 'devicon/icons/linux/linux-plain.svg';
import lua from 'devicon/icons/lua/lua-plain.svg';
import markdown from 'devicon/icons/markdown/markdown-original.svg';
import matlab from 'devicon/icons/matlab/matlab-plain.svg';
import visualstudio from 'devicon/icons/visualstudio/visualstudio-plain.svg';
import nginx from 'devicon/icons/nginx/nginx-original.svg';
import numpy from 'devicon/icons/numpy/numpy-original.svg';
import objectivec from 'devicon/icons/objectivec/objectivec-plain.svg';
import ocaml from 'devicon/icons/ocaml/ocaml-plain.svg';
import perl from 'devicon/icons/perl/perl-plain.svg';
import php from 'devicon/icons/php/php-plain.svg';
import processing from 'devicon/icons/processing/processing-plain.svg';
import qt from 'devicon/icons/qt/qt-original.svg';
import r from 'devicon/icons/r/r-plain.svg';
import ruby from 'devicon/icons/ruby/ruby-plain.svg';
import rust from 'devicon/icons/rust/rust-plain.svg';
import sass from 'devicon/icons/sass/sass-original.svg';
import scala from 'devicon/icons/scala/scala-plain.svg';
import ssh from 'devicon/icons/ssh/ssh-original-wordmark.svg';
import stylus from 'devicon/icons/stylus/stylus-original.svg';
import svelte from 'devicon/icons/svelte/svelte-plain.svg';
import swift from 'devicon/icons/swift/swift-plain.svg';
import unity from 'devicon/icons/unity/unity-original.svg';
import unix from 'devicon/icons/unix/unix-original.svg';
import vim from 'devicon/icons/vim/vim-plain.svg';
import vue from 'devicon/icons/vuejs/vuejs-original.svg';
import zig from 'devicon/icons/zig/zig-original.svg';
import github from 'devicon/icons/github/github-original-wordmark.svg';

const getTreeIcon = (icon: string): vscode.Uri => {
    let iconPath: string;
    switch (icon) {
        case 'c':
            {
                iconPath = `image/svg+xml;utf8,${c}`;
                break;
            }

        case 'c++':
            {
                iconPath = `image/svg+xml;utf8,${cplusplus}`;
                break;
            }

        case 'dart':
            {
                iconPath = `image/svg+xml;utf8,${dart}`;
                break;
            }

        case 'html':
            {
                iconPath = `image/svg+xml;utf8,${html}`;
                break;
            }

        case 'javascript':
        case 'npm config':
            {
                iconPath = `image/svg+xml;utf8,${javascript}`;
                break;
            }

        case 'python':
        case 'python console':
        case 'python traceback':
            {
                iconPath = `image/svg+xml;utf8,${python}`;
                break;
            }

        case 'typescript':
            {
                iconPath = `image/svg+xml;utf8,${typescript}`;
                break;
            }

        case 'apacheconfig':
            {
                iconPath = `image/svg+xml;utf8,${apache}`;
                break;
            }

        case 'c#':
            {
                iconPath = `image/svg+xml;utf8,${csharp}`;
                break;
            }

        case 'c2hs haskell':
        case 'haskell':
            {
                iconPath = `image/svg+xml;utf8,${haskell}`;
                break;
            }

        case 'ceylon':
            {
                iconPath = `image/svg+xml;utf8,${ceylon}`;
                break;
            }

        case 'clojure':
            {
                iconPath = `image/svg+xml;utf8,${clojure}`;
                break;
            }

        case 'cmake':
            {
                iconPath = `image/svg+xml;utf8,${cmake}`;
                break;
            }

        case 'coffeescript':
            {
                iconPath = `image/svg+xml;utf8,${coffeescript}`;
                break;
            }

        case 'crysal':
            {
                iconPath = `image/svg+xml;utf8,${crystal}`;
                break;
            }

        case 'css':
        case 'postcss':
            {
                iconPath = `image/svg+xml;utf8,${css}`;
                break;
            }

        case 'debian package control file':
            {
                iconPath = `image/svg+xml;utf8,${debian}`;
                break;
            }

        case 'dockerfile':
            {
                iconPath = `image/svg+xml;utf8,${docker}`;
                break;
            }

        case 'elixir':
            {
                iconPath = `image/svg+xml;utf8,${elixir}`;
                break;
            }

        case 'elm':
            {
                iconPath = `image/svg+xml;utf8,${elm}`;
                break;
            }

        case 'emberscript':
            {
                iconPath = `image/svg+xml;utf8,${ember}`;
                break;
            }

        case 'erlang':
            {
                iconPath = `image/svg+xml;utf8,${erlang}`;
                break;
            }

        case 'gcc machine description':
            {
                iconPath = `image/svg+xml;utf8,${gcc}`;
                break;
            }

        case 'gentoo ebuild':
        case 'gentoo eclass':
            {
                iconPath = `image/svg+xml;utf8,${gentoo}`;
                break;
            }

        case 'git attributes':
        case 'git config':
            {
                iconPath = `image/svg+xml;utf8,${git}`;
                break;
            }

        case 'go':
        case 'go checksums':
        case 'go module':
            {
                iconPath = `image/svg+xml;utf8,${go}`;
                break;
            }

        case 'gradle':
            {
                iconPath = `image/svg+xml;utf8,${gradle}`;
                break;
            }

        case 'graphql':
            {
                iconPath = `image/svg+xml;utf8,${graphql}`;
                break;
            }

        case 'groovy':
        case 'groovy server pages':
            {
                iconPath = `image/svg+xml;utf8,${groovy}`;
                break;
            }

        case 'handlebars':
            {
                iconPath = `image/svg+xml;utf8,${handlebars}`;
                break;
            }

        case 'haxe':
            {
                iconPath = `image/svg+xml;utf8,${haxe}`;
                break;
            }

        case 'jar mainfest':
        case 'java':
        case 'java properities':
        case 'java server pages':
            {
                iconPath = `image/svg+xml;utf8,${java}`;
                break;
            }

        case 'jest snapshot':
            {
                iconPath = `image/svg+xml;utf8,${jest}`;
                break;
            }

        case 'jetbrains mps':
            {
                iconPath = `image/svg+xml;utf8,${jetbrains}`;
                break;
            }

        case 'julia':
            {
                iconPath = `image/svg+xml;utf8,${julia}`;
                break;
            }

        case 'jupyter notebook':
            {
                iconPath = `image/svg+xml;utf8,${jupyter}`;
                break;
            }

        case 'kotlin':
            {
                iconPath = `image/svg+xml;utf8,${kotlin}`;
                break;
            }

        case 'labview':
            {
                iconPath = `image/svg+xml;utf8,${labview}`;
                break;
            }

        case 'less':
            {
                iconPath = `image/svg+xml;utf8,${less}`;
                break;
            }

        case 'linux kernel module':
        case 'selinux policy':
            {
                iconPath = `image/svg+xml;utf8,${linux}`;
                break;
            }

        case 'lua':
            {
                iconPath = `image/svg+xml;utf8,${lua}`;
                break;
            }

        case 'markdown':
        case 'rmarkdown':
            {
                iconPath = `image/svg+xml;utf8,${markdown}`;
                break;
            }

        case 'matlab':
            {
                iconPath = `image/svg+xml;utf8,${matlab}`;
                break;
            }

        case 'microsoft visual studio solution':
            {
                iconPath = `image/svg+xml;utf8,${visualstudio}`;
                break;
            }

        case 'nginx':
            {
                iconPath = `image/svg+xml;utf8,${nginx}`;
                break;
            }

        case 'numpy':
            {
                iconPath = `image/svg+xml;utf8,${numpy}`;
                break;
            }

        case 'objective-c':
            {
                iconPath = `image/svg+xml;utf8,${objectivec}`;
                break;
            }

        case 'ocaml':
            {
                iconPath = `image/svg+xml;utf8,${ocaml}`;
                break;
            }

        case 'perl':
            {
                iconPath = `image/svg+xml;utf8,${perl}`;
                break;
            }

        case 'php':
            {
                iconPath = `image/svg+xml;utf8,${php}`;
                break;
            }

        case 'processing':
            {
                iconPath = `image/svg+xml;utf8,${processing}`;
                break;
            }

        case 'qmake':
        case 'qml':
        case 'qt script':
            {
                iconPath = `image/svg+xml;utf8,${qt}`;
                break;
            }

        case 'r':
            {
                iconPath = `image/svg+xml;utf8,${r}`;
                break;
            }

        case 'ruby':
            {
                iconPath = `image/svg+xml;utf8,${ruby}`;
                break;
            }

        case 'rust':
            {
                iconPath = `image/svg+xml;utf8,${rust}`;
                break;
            }

        case 'sass':
        case 'scss':
            {
                iconPath = `image/svg+xml;utf8,${sass}`;
                break;
            }

        case 'scala':
            {
                iconPath = `image/svg+xml;utf8,${scala}`;
                break;
            }

        case 'ssh':
            {
                iconPath = `image/svg+xml;utf8,${ssh}`;
                break;
            }

        case 'stylus':
            {
                iconPath = `image/svg+xml;utf8,${stylus}`;
                break;
            }

        case 'svelte':
            {
                iconPath = `image/svg+xml;utf8,${svelte}`;
                break;
            }

        case 'swift':
            {
                iconPath = `image/svg+xml;utf8,${swift}`;
                break;
            }

        case 'unity3d assest':
            {
                iconPath = `image/svg+xml;utf8,${unity}`;
                break;
            }

        case 'unix assembly':
            {
                iconPath = `image/svg+xml;utf8,${unix}`;
                break;
            }

        case 'vim help file':
        case 'vim script':
        case 'vim snippet':
            {
                iconPath = `image/svg+xml;utf8,${vim}`;
                break;
            }

        case 'vue':
            {
                iconPath = `image/svg+xml;utf8,${vue}`;
                break;
            }

        case 'zig':
            {
                iconPath = `image/svg+xml;utf8,${zig}`;
                break;
            }

        default:
            {
                iconPath = `image/svg+xml;utf8,${github}`;
                break;
            }
    }
    return vscode.Uri.from({
        scheme: 'data',
        path: iconPath,
    });
};

export default getTreeIcon;
