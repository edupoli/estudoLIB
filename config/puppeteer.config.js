/*##############################################################################
# File: puppeteer.config.js                                                    #
# Project: estudolib                                                           #
# Created Date: 2021-11-24 17:09:00                                            #
# Author: Eduardo Policarpo                                                    #
# Last Modified: 2021-11-24 17:10:07                                           #
# Modified By: Eduardo Policarpo                                               #
##############################################################################*/

const puppeteerConfig = {
    whatsappUrl: 'https://web.whatsapp.com',
    chromiumArgs: [
        '--log-level=3', // fatal only
        //'--start-maximized',
        '--no-default-browser-check',
        '--disable-site-isolation-trials',
        '--no-experiments',
        '--ignore-gpu-blacklist',
        '--ignore-certificate-errors',
        '--ignore-certificate-errors-spki-list',
        '--disable-gpu',
        '--disable-extensions',
        '--disable-default-apps',
        '--enable-features=NetworkService',
        '--disable-setuid-sandbox',
        '--no-sandbox',
        // Extras
        '--disable-webgl',
        '--disable-infobars',
        '--window-position=0,0',
        '--ignore-certifcate-errors',
        '--ignore-certifcate-errors-spki-list',
        '--disable-threaded-animation',
        '--disable-threaded-scrolling',
        '--disable-in-process-stack-traces',
        '--disable-histogram-customizer',
        '--disable-gl-extensions',
        '--disable-composited-antialiasing',
        '--disable-canvas-aa',
        '--disable-3d-apis',
        '--disable-accelerated-2d-canvas',
        '--disable-accelerated-jpeg-decoding',
        '--disable-accelerated-mjpeg-decode',
        '--disable-app-list-dismiss-on-blur',
        '--disable-accelerated-video-decode',
        '--disable-dev-shm-usage',
    ],
};

export { puppeteerConfig };