const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

// window オブジェクトはグローバル参照しなければなりません。
// これがない場合、JavaScriptのオブジェクトがガベージコレクトされた時に、
// ウィンドウが自動的に閉じてしまうでしょう。
let win

function createWindow () {
  // browser window を生成する
  win = new BrowserWindow({width: 960, height: 700})

  // アプリの index.html を読み込む
  win.loadURL(url.format({
    pathname: path.join(__dirname, './../dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()

  // ウィンドウが閉じられた時に発火
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// このイベントは、Electronが初期化処理と
// browser windowの作成を完了した時に呼び出されます。
// 一部のAPIはこのイベントが発生した後にのみ利用できます。
app.on('ready', createWindow)

// 全てのウィンドウが閉じられた時に終了する
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
