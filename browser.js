/*##############################################################################
# File: browser.js                                                             #
# Project: estudolib                                                           #
# Created Date: 2021-11-24 17:32:43                                            #
# Author: Eduardo Policarpo                                                    #
# Last Modified: 2021-11-24 17:36:23                                           #
# Modified By: Eduardo Policarpo                                               #
##############################################################################*/

import * as ChromeLauncher from 'chrome-launcher';
import * as os from 'os';
import * as path from 'path';
import * as rimraf from 'rimraf';
import * as waVersion from '@wppconnect/wa-version';
import axios from 'axios';
import { addExitCallback } from 'catch-exit';
import { Browser, BrowserContext, Page } from 'puppeteer';
import puppeteer from 'puppeteer-extra';
//import { CreateConfig } from '../config/create-config';
import { puppeteerConfig } from './config/puppeteer.config';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { injectSessionToken } from './auth';
import { useragentOverride } from './config/WAuserAgente';
import { WebSocketTransport } from './websocket';
import { Logger } from 'winston';
import { SessionToken } from '../token-store';