Note: For UiPath Demo Apps, refer Demo Apps folder. This is part of Jan 2024 initiative.



# AppsClientSample
Sample for wrapping a UiPath app in a windows client side exe

## Getting Started
1. Install [Node](https://nodejs.org/en/download/) (LTS) on your machine if you do not have it already.
2. Clone or Download this repo.
3. From the root of the sample directory run the following in your command prompt.
```
npm install
```
## Customization
Modify the sample to meet your needs. Here are some of the key modifications:
- `icon.png` - replace this with any icon you wish. Note: It's best if the icon is square.
- `main.js`
  - **RUNTIME_URL** (line 7) - change this to point to the production URL of your App
  - **Window Parameters** (lines 18-27) - change these parameters to meet the needs of your app
- `package.json`
  - **displayName** (line 3) - this will be used as the EXE name of your app
  - **productName** (line 21) - this will be used as the name of the installed app as it appears in Windows

## Testing
To run the app in a windowd client to verify your configuration run
```
npm start
```
## Building and distributing
To build and package your app with a Setup file
```
npm run dist
```
This will result in a EXE in the dist subdirectory (i.e. dist\UiPath Apps sample Setup 1.2.0.exe) which can be distributed to your users
