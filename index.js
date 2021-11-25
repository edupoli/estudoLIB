/*##############################################################################
# File: index.js                                                               #
# Project: estudolib                                                           #
# Created Date: 2021-11-25 01:00:12                                            #
# Author: Eduardo Policarpo                                                    #
# Last Modified: 2021-11-25 01:25:04                                           #
# Modified By: Eduardo Policarpo                                               #
##############################################################################*/
var latest = require('github-latest-release')

latest('eduardo-policarpo', 'wa-js')
    .then(console.log.bind(console))