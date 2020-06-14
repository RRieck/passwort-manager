import { app, BrowserWindow, nativeImage } from 'electron';
import * as path from 'path';
import * as url from 'url';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        title: 'password manager',
        backgroundColor: '#3d3d3d',
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
        },
    });

    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:4000');
    }
    else {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, '../index.html'),
                protocol: 'file:',
                slashes: true
            })
        )
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    })

    mainWindow.setMenu(null);
    mainWindow.setIcon('C:\\Users\\ronri\\Documents\\GitHub\\passwort-manager\\assets\\icon.png')
}

app.on('ready', createWindow);
app.allowRendererProcessReuse = true;