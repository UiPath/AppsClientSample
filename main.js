// Modules to control application life and create native browser window
const {app, BrowserWindow, globalShortcut} = require('electron')
const path = require('path')

// CHANGE THIS URL TO MATCH THE PRODUCTION URL FOR YOUR APP
// Example "https://cloud.uipath.com/YourAccount/apps_/default/run/production/ID123a567n89c012d3e4567fg8h9012345"
const RUNTIME_URL = "https://cloud.uipath.com/YourAccount/apps_/default/run/production/ID123a567n89c012d3e4567fg8h9012345"

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  let {width, height} = require('electron').screen.getPrimaryDisplay().workAreaSize

  //UPDATE THE WINDOW PARAMETERS TO MEET YOUR NEEDS
  mainWindow = new BrowserWindow({
    width: 500,                             // Width of the client window
    height: 500,                            // Height of the client window
    title: "UiPath Apps Sample",            // Title of the client window
    icon: path.join(__dirname, 'icon.png'),
    x: 200,                                 // Initial X coordinate when the client window opens
    y: 200,                                 // Initial Y coordinate when the client window opens
    alwaysOnTop: false,                     // Set to true if you want the client window to always be the top-most window
    resizable: true,                        // Set to false if you don't want the window to be resizable
    movable: true,                          // Set to false if you want the window docked to a specific location
    frame: true                             // Set to false if you don't want a frame around the window
  })

  mainWindow.setMenu(null)

  // and load the index.html of the app.
  mainWindow.loadURL(RUNTIME_URL)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('page-title-updated', function(event){
    event.preventDefault();
  })

  // Register the refresh keyboard shortcut
  globalShortcut.register('CommandOrControl+Shift+R', () => {
    mainWindow.reload()
  })

  // Register the quit keyboard shortcut
  globalShortcut.register('CommandOrControl+Alt+X', () => {
    app.quit()
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
    globalShortcut.unregisterAll()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})
