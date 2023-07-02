import * as vscode from 'vscode';
import { HelloWorldProvider } from './elements/HelloWorldProvider';
import { AnotherProvider } from './elements/AnotherProvider';


export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vscode-ext-svelte" is now active!');

    const helloWorldProvider = new HelloWorldProvider(context.extensionUri);
    const anotherProvider = new AnotherProvider(context.extensionUri);

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider("hello-world-sidebar", helloWorldProvider)
    );
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider("another-sidebar", anotherProvider)
    );
}

export function deactivate() { }
