/*!
 * `deployr` JavaScript Client Library v7.4.0
 * http://deployr.revolutionanalytics.com/documents/dev/client-jsdoc
 *
 * Copyright (C) 2010-2015 by Revolution Analytics Inc.
 * Released under the Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Includes:
 *   - superagent: https://github.com/visionmedia/superagent
 *   - ws: https://github.com/einaros/ws
 *   - D.js: http://malko.github.io/D.js
 *   - yui-lang.js: https://github.com/yui/yui3 (DeployR port)
 *
 * superagent
 *
 * Copyright (c) 2014-2015 TJ Holowaychuk <tj@vision-media.ca>
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the,
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * ws
 *
 * Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining 
 * a copy of this software and associated documentation files 
 * (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge
 * publish, distribute, sublicense, and/or sell copies of the Software, 
 * and to permit persons to whom the Software is furnished to do so, 
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be 
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * D
 *
 * Copyright (C) 2013 Jonathan Gotti <jgotti at jgotti dot net>
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the,
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * selfish
 *
 * Copyright 2011 Irakli Gozalishvili. All rights reserved
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the,
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * yui-lang
 *
 * The lang component is a DeployR port of yui-lang.js by Yahoo!
 *
 * Software License Agreement (BSD License)
 * Copyright (c) 2013, Yahoo! Inc. All rights reserved.
 *
 * Redistribution and use of this software in source and binary forms, 
 * with or without modification, are permitted provided that the 
 * following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer. Redistributions
 * in binary form must reproduce the above copyright notice, this list of
 * conditions and  the following disclaimer in the documentation and/or 
 * other materials provided with the distribution.
 * 
 * Neither the name of Yahoo! Inc. nor the names of YUI's contributors 
 * may be used to endorse or promote products derived from this software 
 * without specific prior written permission of Yahoo! Inc.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT 
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR 
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT 
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY 
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT, 
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE 
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Date: 2015-03-24
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.deployr = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2015 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var win         = (typeof window !== 'undefined'),   
    request     = require('superagent'),
    D           = require('d.js'),
    fs          = require('fs'),
    apis        = require('./apis.json'), 
    EventStream = require('./lib/es'),
    utils       = require('./lib/utils'),
    Lang        = require('./lib/lang'),   
    Logger      = require('./lib/logger'),   
    Queue       = require('./lib/queue'),
    Emitter     = require('./lib/emitter'),
    encoder     = require('./lib/encoder'),
    Base        = require('./lib/selfish').Base,
    RInput      = require('./lib/rinput'),    
    RInputs     = require('./lib/rinputs'),
    merge       = utils.merge;

/*
 * Turn global logging off by default
 */
Logger.setLevel(Logger.OFF);

/*
 * Global options the persist through all DeployR requests.
 */
var globalOptions = { 
  cors: false,
  logging: false,
  sticky: false,
  cookies: null,
  host: '',
  maxRequests: null, // no socket pooling in http.Agent
  events:{},
  set: function(prop, value) { if (prop !== 'set') { this[prop] = value; } }
};

/*
 * The top-level DeployR API response entities.
 */
var TOPLEVEL_ENTITIES = [
  'user', 
  'project', 
  'workspace', 
  'execution', 
  'directory', 
  'repository', 
  'packages' 
];

/*
 * Notify global IO error events accessible by all subscribers across requests.
 */
function raiseGlobalErrors(api, res) {
  var code    = res.deployr ? res.deployr.response.errorCode : res.status,
      context = this;

  // -- global events if provided --
  if (globalOptions.events) {
    if (!res.deployr) {
      res = res.text;
    }

    context = globalOptions.events.ctx || context;

    // -- general global failure --
    if (globalOptions.events.error) {
      globalOptions.events.error.apply(context, [api, res]);
    }

    // -- HTTP or DeployR global errors --    
    if (globalOptions.events[code]) {
      globalOptions.events[code].apply(context, [api, res]);
    }
  }
}

/**
 * The `DeployR` request class is a utility that brokers HTTP requests through a 
 * simplified fluid interface to DeployR.
 *
 * @module deployr
 * @for deployr
 */
var DeployR = Base.extend(Emitter, RInputs, {

  /**
   * The `DeployR` Request class is a utility that brokers HTTP requests through 
   * a simplified fluid interface to DeployR.
   * 
   * @class 
   * @constructor
   * @param {String} api The DeployR API
   * @param {Object} link The object literal containing the previous request.
   * @api private
   */
  initialize: function initialize(api, link) {
     Emitter.initialize.call(this, {});
  
     var opts = globalOptions;

     if (!apis[api]) { throw new Error('Invalid API "' + api + '"'); }
    
     this.api        = merge({ 'call': api }, apis[api]);    
     this.link       = link || {};
     this.q          = this.link.queue || new Queue();
     this.deferred   = this.link.deferred || D();
     this.cookies    = this.link.cookies;
     this.logger     = Logger.get(api, Logger.OFF); // transaction-level logging
     this.params     = {};
     this.inputs     = []; // rinputs list 
     this.outputs    = []; // routput object list
     this.rstream    = false;
     this.delayed    = false;
     this.globalEvts = true; // suppress|raise global events fot this `io`     
     this.file       = null; 
     this.filter     = null; 

     // preset deployr's assigned response format for `this` api
     this.data({ format: this.api.format });

     // wrap superagent for the heavly lifting      
     this.req = 
        request[this.api.method.toLowerCase()](opts.host + '/deployr' + api);
     this.req.timeout(20 * 60 * 1000); // default timeout --> 20 minutes

     // All CORS deployr calls require sticky sessions
     if (win && globalOptions.cors) { this.req.withCredentials(); }    
  },

  /**
   * Binds the scope context for the configured `.end()` and `.error()` event    
   * handler callbacks on this request.
   *
   * @method ctx
   * @param {Object} context The `this` object for the configured `.end()` and
   * `.error()` event handlers on this request.
   * @api public   
   */ 
  ctx: function (context) {
    this.scope = context || this;

    return this;
  },

  /**
   * Suppress or raise global events for this `io` request.
   *
   * @method global
   * @param {Boolean} raise `true` to raise global events, `false` to supress 
   * event firing globally.
   * @return {DeployR} for chaining.
   * @api public
   */  
  global: function(raise) {
    this.globalEvts = Lang.isBoolean(raise) ? raise : this.globalEvts;

    return this;
  },  

  /**
   * Retrieve details about user.
   *   
   * @method about
   * @return {Object} details about user otherwies `null`.
   * @api public   
   */
  about: function() {
    var response = this.req.res;

    return this.api['call'] === '/r/user/login' && response ? 
           response.body.get('user') : null;
  },  

  /**
   * Shares the cookies from a diffrent `.io()` agent to preserve session state
   * across `this` request and all requests chained to it.
   *
   * @method share
   * @return {DeployR} for chaining.
   * @api public   
   */  
  share: function (cookies) {
    if (globalOptions.sticky) {
      if (globalOptions.cookies) {
        this.cookies = globalOptions.cookies.slice(0); 
      } else {
        if (cookies) { 
          this.cookies = cookies.slice(0); 
          globalOptions.set('cookies', this.cookies);
        }
      }
    } else {
      this.cookies = (cookies ? cookies.slice(0) : this.cookies);
    }

    return this;
  },

  /**
   * Returns the HTTP cookie previously sent by the server with Set-Cookie.
   * This value can be passed to `.share(ruser.getCookies())` of a diffrent
   * `.io()` agent to preserve session state across requests.
   *
   * @method getCookies
   * @return {Array} The HTTP cookie previously sent by the server with 
   * Set-Cookie.
   * @api public   
   */  
  getCookies: function () {
    return this.cookies;
  }, 

  delay: function (ms) {
    // TODO: support delayed requests based on ms for now this is just a pause.
    this.delayed = !isNaN(parseFloat(ms)) && isFinite(ms) ? ms : true;

    return this;
  },   

  /**
   * Unwind the queue chain clearing requests that might have delays attached.
   *
   * @method drain
   * @return {Promise} A promise wrapping the resolution of either "resolve" or
   * "reject" callback.
   * @api public   
   */
  drain: function () {
    this.delayed = false;
    this.q.flush(); 

    return this.deferred.promise;
  },   

  /**
   * The `.promise()` method returns a dynamically generated Promise that is 
   * resolved once all DeployR `.io()` requests have ended.
   *   
   * @method promise
   * @return {Promise} A promise wrapping the resolution of either "resolve" or
   * "reject" callback.
   * @api public
   */     
  promise: function () {
    this.end();

    return this.deferred.promise;
  },

  /**
   * Abort the DeployR request.
   *
   * @method abort  
   * @return {DeployR} for chaining.
   * @api public
   */  
  abort: function () {
    this.req.abort();
    this.emit('abort');

    return this;
  },

 /**
  * Set timeout to `ms`.
  *
  * @method timeout  
  * @param {Number} ms
  * @return {DeployR} for chaining
  * @api public
  */  
  timeout: function (ms) {
    this.req.timeout(ms);

    return this;
  },

 /**
  * Turn logging on for the specific transaction.
  *
  * @method log
  * @return {DeployR} for chaining
  * @api public
  */ 
  log: function (level) {
    this.logger.setLevel(level || Logger.DEBUG);

    return this;
  },

  /**
   * Filters successful responses to contain only a top-level DeployR API 
   * response entities:
   * - 'user'
   * - 'project'
   * - 'workspace' 
   * - 'execution' 
   * - 'directory' 
   * - 'repository'
   * - 'packages' 
   *   
   * @method entity
   * @return {DeployR} for chaining
   * @api public
   */
  entity: function (entity) {
    this.filter = utils.inArray(TOPLEVEL_ENTITIES, entity);

    return this;
  },

  /**
   * Defines the request data being sent to a DeployR API. 
   *
   * @method data
   * @param {Object} data The object literal configuration hash. 
   * @return {DeployR} for chaining
   * @api public
   */
  data: function (data) {
    data = data || {};    

    // remove any inlined rinput(s) and attach them to the rinput(s) property
    if (data.rinput || data.rinputs) {
      this.rinput(data.rinput);
      this.rinputs(data.rinputs);
    } 

    // remove any `reserved` values that could have been passed by mistake
    var BLACKLIST = ['rinput', 'rinputs', '__cookies__'];
    BLACKLIST.forEach(function(param) { delete data[param]; });  

    this.params = merge(this.params, data);

    return this;
  },

  /**
   * Attaches a file to be uploaded. 
   *
   * @method attach
   * @param {File|Blob|path} file The file to be attached for an upload. For 
   * Browser environments the HTML5 File|Blob is used. For the Node.js 
   * environment, a file path is accepted.
   * @param {String} filename (optional) the name of the file to be uploaded. 
   * This name does not have to match the actual source filename.
   * @return {DeployR} for chaining
   * @api public
   */
  attach: function (file, filename) {
    if (this.api.upload) {
      this.file = file;

      // optional filename here for convenience
      if (filename) { this.data( { filename: filename } ); }
    }

    return this;
  },

  /**
   * Supported only in Node.js, this method works in conjunction with the 
   * attach method to indicate that the file should be read in as a readable 
   * stream during a file upload.
   *
   * @method stream
   * @param {Object} options (optional) the Readable Stream options hash.
   *  ```
   *    { flags: 'r',
   *      encoding: null,
   *      fd: null,
   *      mode: 0666,
   *      autoClose: true
   *    }
   * ```
   * @return {DeployR} for chaining
   * @api public
   */
  stream: function () {
    this.rstream = (!win && this.api.upload); //nodejs only

    return this;
  },
  
  /**
   * Acts as a finally statement allowing you to execute "cleanup" type tasks 
   * in a request chain. It arranges for cleanup to be called, with no 
   * arguments, when the DeployR request chain is either completely fulfilled 
   * or rejected.
   *
   * @method ensure
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining
   * @api public
   */  
  ensure: function (fn) {
    this.deferred.promise.ensure(fn);

    return this.deferred.promise;
  },
      
  /**
   * The general failure callback. If called, all DeployR errors for this 
   * transaction will be returned here when raised.
   *
   * @method error
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining
   * @api public
   */
  error: function (fn) {
    this.on('error', fn);

    return this;
  },

  /**
   * Stream the DeployR response into the pipe. It is important to note that if 
   * the `.pipe()` method is never called the request will not be sent.
   *
   * The `.pipe()` method should be be used as an alternative to `.end()` and 
   * never along side of it. `.pipe()` and `.end()` are an either-or.
   *
   * @method pipe
   * @param {Stream} stream A destination Stream.
   * @return {Stream} The passed in destination stream to be used for additional 
   * piping.
   * @api public
   */
  pipe: function (dest) {
    var q   = this.q,
        api = this.api;        

    q.add(function(responseChain, error, prevArgs) {    
      // brake the call chain on error      
      if (error) {        
        this.deferred.reject(error);      
        q.flush(responseChain, error, prevArgs); // drain the queue
        this._clear();
        return;
      }
      
      this._prepRequest(responseChain, prevArgs);

      Logger.info('pipe()', api, this.req);
      this.logger.info('pipe()', api, this.req);   

      var stream = this.req.pipe(dest);
      q.yield(true);
      stream.on('error', function () { });    
      stream.on('end', function() { });     
      stream.on('data', function() { });      
    }, this);
  
    if (q.size() <= 1) { q.flush(); }

    return dest;
  },

  /**
   * Indicates that the request is ready to be sent to DeployR. It is important 
   * to note that if the `.end()` method is never called the request will not be
   * sent.
   *
   * @method end
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining.
   * @api public
   */ 
  end: function (fn) {
    var self   = this,
        q      = this.q,
        api    = this.api,
        args   = null,
        entity = this.filter;

    q.add(function(responseChain, error, prevArgs) {
      // break the call chain on error      
      if (error) {        
        this.deferred.reject(error);        
        q.flush(responseChain, error, prevArgs); // drain the queue
        this._clear();
        return;
      }
      
      this._prepRequest(responseChain, prevArgs);

      Logger.info('io()', api, this.req);
      this.logger.info('io()', api, this.req);    

      this.req.end(function(res) {
        self.share(self.cookies || res.headers['set-cookie']);         

        // -- log cookies across requests --
        if (self.cookies) {
          Logger.info('cookies', api, self.cookies); 
          self.logger.info('cookies', api, self.cookies); 
        }

        error = self._handleError(res);
        var dres = (res.body && res.body.deployr ? res.body : res);             
      
        self.inputs = [];
        self.outputs = [];

        if (!error) {
           // -- Log global + transaction log --
           Logger.info('end()', api, dres, res);
           self.logger.info('end()', api, dres, res);

           // -- walk response for top-level entity response assignment --        
           if (entity) { dres = dres.deployr.response[entity] || dres; }

           dres.get = function(key) { 
              return utils.get(dres.deployr.response, key); 
           };

           dres.workspace = function(name) { 
              return utils.workspace(dres.deployr.response, name); 
           };

           // -- callback --
           if (fn) { args = fn.apply(self.scope, [dres, responseChain]);}

           // -- notify that the queue has been drained... --
           if (q.size() === 0) { 
             self._clear();
             self.deferred.resolve(responseChain || dres);
           }          

           // -- include cookies in next request in the queue --
           args = merge(args, { __cookies__: self.cookies });          
        }        

        q.yield(false);
        q.flush(dres, error, args); // pass result|error|args to next 
      });

      q.yield(true);
    }, this, this.delayed);
  
    if (!this.delayed && q.size() <= 1) { q.flush(); }

    return this;
  }, 

  /** 
   * Add an additional IO request to the exsisting sequential request chain.
   *
   * @method io
   * @param {String} api One of the supported DeployR APIs.
   * @return {DeployR} for chaining.
   * @api public
   */   
  io: function (api) {    
    return DeployR.new(api, { 
      cookies: this.cookies, 
      queue: this.q, 
      deferred: this.deferred
    });
  },

  /** 
   * Convenience function for adding an additional script execution to the 
   * exsisting sequential request chain.
   *
   * @method script
   * @param {Arguments} Arguments to define the fully qualified script for 
   * execution.
   * @return {DeployR} for chaining.   
   * @api public
   */
  script: function() {
     var args = utils.signature(arguments),
         opts = args.opts,
         api  = args.api,
         link = { 
          cookies: this.cookies, 
          queue: this.q, 
          deferred: this.deferred
        };  

    // convenience - if the project is a boolen `true` rather than a pid, first
    // create a new project and then prepare the project api call to execute
    if (args.create) {
      return DeployR.new('/r/project/create', link)
               .end(function(res) {
                  return { project: res.get('project').project };
                })
               .io(api)
               .data(opts);
    } else {
      return DeployR.new(api, link).data(opts);
    }    
  },

  /** 
   * Convenience function for adding an additional repository-managed shell 
   * script execution to the exsisting sequential request chain.
   *
   * This call executes repository-managed shell scripts .sh, .csh, .bash, .bat 
   * on the DeployR server. Due to the special security concerns associated with 
   * excuting shell scripts on the DeployR server, only shell scripts owned by 
   * _ADMINISTRATOR_ users can be executed on this API call. Any attempt to 
   * execute a shell script stored in the repository that is not owned by an 
   * _ADMINISTRATOR_ user will be rejected.
   *
   * To execute a repository-managed shell script the caller must provide 
   * parameter values for _author_, _directory_, _filename_. This can be
   * achieved by providing a fully qualified shell script 
   * `/<author>/<directory>/<filename>`, for example:
   *
   *  ```
   *  .shell('/admin/external:public:admin/echo.sh', 'echo.sh args to pass.')
   *  ```
   *
   * @method shell
   * @param {String} filepath to define the fully qualified shell script for
   * execution. 
   * @param {String} args (optional) arguments to be passed into the shell 
   * script on execution.
   * @return {DeployR} for chaining.   
   * @api public
   */
  shell: function(path, args) {   
    var link = { 
          cookies: this.cookies, 
          queue: this.q, 
          deferred: this.deferred
        },
        tokens = Lang.isString(path) ? path.split('\/') : [];

    // handle both: `/author/directory/filename` & `author/directory/filename`
    if (tokens.length > 3) { tokens = tokens.slice(1); }

    return DeployR.new('/r/repository/shell/execute', link).data({
      author: tokens[0],
      directory: tokens[1],
      filename: tokens[2],
      args: args
    });
  },

  /** 
   * Convenience function for executing a block of R code on the R session.

   * Example:
   *  ```
   *  .code('x<-5')
   *  // -- or --
   *  .code('x<-5', projectId)
   *  ```
   *   
   * @method code
   * @param {String} r - The block of R code to execute.
   * @param {String} project - (optional) if omitted a new project will first be 
   * created and used, otherwise it will execute on the R session identified by 
   * this `project`.
   * @return {DeployR} for chaining.   
   * @api public
   */
  code: function(r, project) {
     var link = {
             cookies: this.cookies,
             queue: this.q,
             deferred: this.deferred
         },
         api = '/r/project/execute/code';

     if (!project) {
         return DeployR.new('/r/project/create', link)
             .end(function(res) {
                 return { project: res.get('project').project };
             })
             .io(api)
             .data({ code: r });
     } else {
         return DeployR.new(api, link).data({ code: r, project: project });
     }
  },
  
  /** 
   * Release any residual project resources associated with the application 
   * instance whenever a client application terminates. This includes closing 
   * any supplied projects down and logging out.
   *
   * @method release
   * @param {String|Array} projects The project or list of projects to close.
   * @param {Boolean} auth (optional) to remain authenticated.
   * @return {DeployR} for chaining.   
   * @api public
   */
  release: function(projects, auth) {
     projects = Lang.isArray(projects) ? projects : [projects];

     var self     = this,
         deferred = D(),
         empty    = !projects || !projects[0],
         count    = 0,
         last     = !empty ? projects.length - 1 : count,
         cookies  = this.getCookies();           

    function logout(index) {
      if (index === last) {
        if (!auth) {
          DeployR.new('/r/user/logout')
          .share(cookies)
          .error(function() {          
            deferred.reject(false);
          })      
          .end(function() { 
            deferred.resolve(true);
          })
          .ensure(function() {
            self.destroy();
          });
        } else {
          deferred.resolve(true);
          self.destroy();
        }
      } 
    }

    if (!empty) {
      projects.forEach(function(project) {
        DeployR.new('/r/project/close')
        .data({ project: project })
        .share(cookies)
        .end()
        .ensure(function() {
          logout(count);
          count++;
        });
      });   
    } else {
      logout(count);
    }

    return deferred.promise;  
  },  

  /** 
   * A convenience alternative to multiple `.rinput()` calls. Defines a name 
   * list of R objects that will be returned as DeployR-encoded R objects on the 
   * response markup.
   *
   * Calling this method ~.routputs([ ... ])` is equivalent to invoking multiple 
   * `.routput(...)` calls.
   *
   * @method routputs
   * @param {Array} robjects A name list of R objects that will be returned.
   * @return {DeployR} for chaining.   
   * @api public
   */
  routputs: function (routputs) {
    if (routputs) { this.outputs = this.outputs.concat(routputs); }

    return this;
  },
  
  /** 
   * Defines the name of the R object that will be returned as a DeployR-encoded 
   * R object on the response markup.
   *
   * @method routput
   * @param {String} robject The name of the R object that will be returned.
   * @return {DeployR} for chaining.   
   * @api public
   */
  routput: function (routput) {
    if (routput) { this.routputs([routput]); }

    return this;
  },

  /** 
   * Used to pass multiple inputs at once from JavaScript to an R script using 
   * one of the defined `RInput` factories.
   *
   * @method rinputs
   * @param {Array} rinputs The `RInput` list of DeployR-specific encoded R 
   * object data for use on an API call.
   * @return {DeployR} for chaining.   
   * @api public
   */
  rinputs: function (rinputs) {
    if (rinputs) { this.inputs = this.inputs.concat(rinputs); }

    return this;
  },

  /** 
   * Used to pass multiple inputs at once from JavaScript to an R script using 
   * one of the defined `RInput` factories.
   *
   * @method rinput
   * @param {RInput} rinput The DeployR-specific encoded R object data for use 
   * on an API call.   
   * @return {DeployR} for chaining.   
   * @api public
   */
  rinput: function (rinput) {
    if (rinput) { this.inputs.push(rinput); }

    return this;
  },

  /**
   * Destroy lifecycle method. Fires the `destroy` event, prior to invoking 
   * destructors for the class hierarchy. Called internally when `.release()`
   * is called.
   *
   * @method destroy
   * @api public   
   */
  destroy: function () {
    try {
      this.emit('destroy');
      this.offAll();
    
      for (var key in this) {
        if (this.hasOwnProperty(key)) { 
          this[key] = null; 
          delete this[key];
        }
      }
    } catch(err) {}
  },  

  // --------------------------------------------------------------------------
  // Private methods
  // --------------------------------------------------------------------------

  /**
   * @api private
   */
  _clear: function() {    
    this.params  = {};
    this.inputs  = [];
    this.outputs = [];
    this.rstream = false;
    this.delayed = false;
    this.api     = null;    
    this.file    = null;  
    this.filter  = null;
  }, 

  /**
   * @api private
   */
  _prepRequest: function (responseChain, args) {
    var req  = this.req,
        file = this.file;

    // set the request type    
    if (this.api.upload) {
       // If the env is the Browser there is no need to manually set the
       // Content-Type. The browser will automatically set the 
       // "multipart/form-data; boundary=..." value. If the env is Node we need
       // to set it manually.
       if (!win) { this.req.type('multipart/form-data'); }    
    } else {
      req.type('form');
    }    

    req.on('error', function(err) { 
      err = err || {  code: 'UNKNOWN CODE', text: 'UNKNOWN ERROR' };

      this._handleError({ 
        status: err.code || 'UNKNOWN CODE',
        text: err
      });
    }.bind(this));    

    this.share(args ? args.__cookies__ : null);

    // arguments returned from prev request's io().end(function() { return x; })
    if (args) { 
       this.data(args);
    } 

    if (this.inputs.length > 0) { 
      this.data({ inputs: encoder.encode(this.inputs) }); 
    }
  
    if (this.outputs.length > 0) { 
      this.data({ robjects: this.outputs.join() }); 
    }    

    if (this.cookies) {     
      this.cookies.forEach( function(c) { req.set('Cookie', c); });
    }

    if (this.api.upload) {    
      for(var p in this.params) {
       req.field(p, this.params[p] ? this.params[p] + '' : '');  
      } 
      req.attach('file', this.rstream ? fs.createReadStream(file) : file);
    } else {
      req[this.api.method === 'GET' ? 'query' : 'send'](this.params);
    } 
  },

  /**
   * @api private
   */
  _handleError: function (raw) {
    var stat  = raw.status,
        res   = (raw.body && raw.body.deployr ? raw.body : raw),
        error = ((stat !== 200) || res.deployr && !res.deployr.response.success);

    // -- Handle errors --
    if (error) {
      res = {
        get: function(key) { 
          return utils.get(this.deployr.response, key); 
        },
        deployr: {          
          response: {
            success: false,
            call: this.api['call'],
            errorCode: res.deployr ? res.deployr.response.errorCode : stat,
            error: res.deployr ? res.deployr.response.error : res.text
          }
        }
      };

      Logger.error('error()', this.api, res, raw);
      this.logger.error('error()', this.api, res, raw);

      // -- notify global errors first (if any) for this call --      
      if (this.globalEvts) {
        raiseGlobalErrors(this.api['call'], res);        
      }

      // -- tranaction level HTTP or DeployR errors come next --    
      this.emit('error', res);
      this.emit('deployr-io:' + res.deployr.response.errorCode, res);
      this.deferred.reject(res);
    }

    return error;
  }
});

/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/

// Include the `deprecated` jsDeployR for now.
if (win) {
  window.Revolution = window.Revolution || require('./lib/deprecated');
}

/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/

/**
 * Expose for a cleaner client api into DeployR
 */
module.exports = {

  /**
   * Exposes the `DeployR` object for extending.
   *
   * ```var DeployR = require('deployr').DeployR;```
   *
   * @static
   * @api public
   * @return {DeployR} The `DeployR` object.
   */   
  DeployR: DeployR,

  /**
   * Exposes the supported DeployR APIs.
   *
   * @method apis
   * @param {Boolean} flat (optional) if `true` will return an array of just the 
   * API's endpoint properties, for example: 
   * ```
   * ['/r/user/login', '/r/user/logout', '/r/user/about', ...]
   * ```
   * @static
   * @api public
   * @return {Object|Array} The HTTP request to the DeployR server.      
   */  
  apis: function(flat) {
    return flat ? Object.keys(apis) : apis;
  },

  /**
   * Represents a static method for configuring all DeployR requests. Settings 
   * made here are applied globally across every request.
   *
   * @method configure
   * @param {Object} options The object literal configuration hash. 
   * @static
   * @chainable
   * @api public
   */
  configure: function(options) {
    options = options || {};

    for (var i in options) { globalOptions.set(i, options[i]); }

    // assert global cookies are empty if global `sticky` jsessionid is off
    if (!globalOptions.sticky)  { globalOptions.set('cookies', null); }

    // turn global logging on|off (off by default)
    Logger.setLevel(globalOptions.logging ? Logger.DEBUG : Logger.OFF);

    return this;
  },

  /**
   * Factory for creating new IO requests to `DeployR`.
   *
   * Example:
   * ```   
   *    deployr.io('/r/user/about').end(callback);
   * ```
   *
   * @method io
   * @param {String} api One of the supported DeployR APIs.
   * @static
   * @return {DeployR} The HTTP request to the DeployR server.
   * @api public   
   */
  io: function(api) {  
    return DeployR.new(api);
  },

  /**
   * Convenience function to sign the user in by authenticating the credentials 
   * with the DeployR server.   
   *
   * @method auth
   * @param {String} username Specifies the username.
   * @param {String} password Specifies the password.
   * @static
   * @return {DeployR} The HTTP request to the DeployR server.   
   * @api public   
   */   
  auth: function(un, pw) {
    var data = { username: un, password: pw };
    return DeployR.new('/r/user/login').data(data).end();    
  },

  /**
   * Convenience function to sign the user in by authenticating the credentials 
   * with the DeployR server.   
   *
   * Example:
   * ```
   *    deployr.script('/testuser/root/reduce.R')
   *    deployr.script({ filename: 'reduce.R', author: 'testuser',
   *                     directory: 'root'})
   *    deployr.script('reduce.R', 'testuser', 'root')
   *    deployr.script('/testuser/root/reduce.R', project)     
   * ```   
   *
   * @method script
   * @param {Arguments} arguments Arguments to define the fully qualified script 
   * for execution.
   * @static
   * @return {DeployR} The HTTP request to the DeployR server.   
   * @api public   
   */     
  script: function() {
    var args = utils.signature(arguments),
        opts = args.opts,
        api  = args.api;  

    // convenience - if the project is a boolen `true` rather than a pid, first
    // create a new project and then prepare the project api call to execute
    if (args.create) {
      return DeployR.new('/r/project/create')
               .end(function(res) {
                  return { project: res.get('project').project };
                })
               .io(api)
               .data(opts);
    } else {
      return DeployR.new(api).data(opts);
    }
  },  

  /**
   * Run an series of chained DeployR requests in sequence and without overlap.       
   *
   * @method pipline
   * @param {Array} tasks Specifies the list of `Function` tasks.
   * @static
   * @return {Promise} A promise wrapping the resolution of either "resolve" or
   * "reject" callback.
   * @api public   
   */
  pipeline: function(chains) {      
    var deployr  = this,
        deferred = D(),
        q        = new Queue(),
        results  = [],
        errors   = [],
        NOOP     = null, // NOOP errors|results for [a] batch request chain
        orig     = {
          sticky: globalOptions.sticky,
          cookies: globalOptions.cookies
        };

    // make a copy
    chains = chains.slice(0);

    // turn sticky session for these request (hacky)
    deployr.configure( { sticky: true });

    function add() {
      q.add(function() { 
        chains.shift().drain()
        .then(function(chain) {
          results.push(chain);  
          errors.push(NOOP);           
          if (q.isEmpty()) { 
            deployr.configure(orig); // reset
            deferred.resolve({ results: results, errors: errors }); 
          }  

          q.take();
        }, function(err) {          
          results.push(NOOP); 
          errors.push(err);
          // rejections are only met when they [all] fail
          if (q.isEmpty() && results.length === 0) { 
            deployr.configure(orig); // reset
            deferred.reject(errors); 
          }  
          q.take();
        });       
      }, null, true);
    }

    // convert to a seq queue for better handling
    for(var i = 0; i < chains.length; i++) { add(); }

    // start: dequeue first item and run it
    q.take();

    return deferred.promise;
  },

  /**
   * The event stream API is unique within the DeployR API as it supports push 
   * notifications from the DeployR server to client applications. Notifications 
   * correspond to discrete events that occur within the DeployR server. There 
   * are four distinct event categories:
   * 
   * - Stream Lifecycle events
   * - Execution events
   * - Job Lifecycle events
   * - Management events
   *
   * Example:
   * ```
   * deployr.es({ username: 'testuser', password: 'secret' })
   *    // -- connection choices for event types --
   *    .management()  //.session() | .all() | .project(id) | .job(id)
   *    .on('es:gridHeartbeat', function(data) {
   *        console.log('===================');
   *        console.log('es:gridHeartbeat');
   *        console.log('===================');          
   *     })
   *     .open();
   * ```
   * 
   * @method es
   * @param {Object} options The object literal configuration hash. 
   * @static
   * @return {EventStream} a new `EventStream` for binding.
   * @api public   
   */  
  es: function(options) {    
    var stream = EventStream.new(globalOptions.host, options);

    if (options && options.username && options.password) {
      var ruser = this.auth(options.username, options.password);
      ruser.ensure(function() { 
        stream.share(ruser.getCookies());
        stream.flush(); 
      });
    }

    return stream;
  },

  /**
   * Defines the factory for creating a DeployR-specific encoded R object to be 
   * sent as input parameters to an R script.
   *
   * Example:
   * ```
   *    var rinput = deployr.RInput.logical('logical_name', true);
   *    var rinput = deployr.RInput.numeric('numeric_name', 10.5);
   *    var rinput = deployr.RInput.integer('integer_name', 5);
   *    var rinput = deployr.RInput.character('character_name', 'Hello');
   *    // ect...
   * ```
   * @property RInput
   * @static
   * @api public
   */
  RInput: {
    numeric: function (name, value) {
      return RInput.new(name, value).numeric();
    },

    integer: function (name, value) {
      return RInput.new(name, value).integer();
    },

    logical: function (name, value) {
      return RInput.new(name, value).logical();
    },

    character: function (name, value) {
      return RInput.new(name, value).character();
    },

    date: function (name, value) {
      return RInput.new(name, value).date();
    },

    posixct: function (name, value) {
      return RInput.new(name, value).posixct();
    },  

    numericVector: function(name, value) {
      return RInput.new(name, value).numericVector();
    }, 

    integerVector: function (name, value) {
      return RInput.new(name, value).integerVector();
    },

    logicalVector: function (name, value) { 
      return RInput.new(name, value).logicalVector();
    },

    characterVector: function (name, value) { 
      return RInput.new(name, value).characterVector();
    },  

    dateVector: function (name, value) { 
      return RInput.new(name, value).dateVector();
    },  

    posixctVector: function (name, value) { 
      return RInput.new(name, value).posixctVector();
    },

    list: function (name, value) {
      return RInput.new(name, value).list(); 
    },

    dataframe: function (name, value) { 
      return RInput.new(name, value).dataframe();
    },
  
    factor: function (name, value, levels, labels) {
      var opts = { levels: levels, labels: labels };
      return RInput.new(name, value, opts).factor();
    },

    ordered: function (name, value, levels, labels) {
      var opts = { levels: levels, labels: labels };
      return RInput.new(name, value, opts).ordered();
    },

    numericMatrix: function (name, value) { 
      return RInput.new(name, value).numericMatrix();
    },

    integerMatrix: function (name, value) { 
      return RInput.new(name, value).integerMatrix();
    },

    logicalMatrix: function (name, value) { 
      return RInput.new(name, value).logicalMatrix();
    },

    characterMatrix: function (name, value) {
      return RInput.new(name, value).characterMatrix();
    }
  }
};
},{"./apis.json":2,"./lib/deprecated":3,"./lib/emitter":4,"./lib/encoder":5,"./lib/es":6,"./lib/lang":7,"./lib/logger":8,"./lib/queue":10,"./lib/rinput":11,"./lib/rinputs":12,"./lib/selfish":14,"./lib/utils":15,"d.js":18,"fs":16,"superagent":19}],2:[function(require,module,exports){
module.exports={
    "/r/user/login": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/logout": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/about": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/autosave": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/release": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/create": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/pool": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/recycle": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/ping": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/about": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/about/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/save": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/saveas": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/close": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/grant": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/import": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/project/export": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/code": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/script": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/interrupt": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/console": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/history": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/flush": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/result/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/result/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/result/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/get": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/project/workspace/transfer": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/push": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/save": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/store": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/load": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/project/directory/transfer": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/write": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/store": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/load": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/package/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/package/attach": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/package/detach": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/submit": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/schedule": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/query": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/cancel": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/create": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/rename": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/copy": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/move": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/execute": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/render": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/interrupt": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/shell/execute": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/archive": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/repository/directory/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/fetch": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/fetch": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/repository/file/transfer": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/write": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/diff": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/revert": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/grant": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/copy": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/move": {
        "method": "POST",
        "format": "json"
    },

    "/r/server/info": {
        "method": "GET",
        "format": "json"
    }
}

},{}],3:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */
var Lang = require('./lang'),
    Base = require('./selfish').Base,
    RInput = require('./rinput');

var Deprecated,
    emitter,
    _config = {},
    TOPLEVEL_ENTITIES = [
        'user',
        'project',
        'workspace',
        'execution',
        'directory',
        'repository',
        'packages'
    ];

/**********************************************************************/
/**********************************************************************/
/**********************************************************************/

var SessionManager = {
    ENDPOINT_WHITELIST: {
        login: '/r/user/login',
        logout: '/r/user/logout',
        projectCreate: '/r/project/create',
        projectClose: '/r/project/close',
        projectAboutUpdate: '/r/project/about/update',
        projectSave: '/r/project/save',
        projectSaveAs: '/r/project/saveas',
        // --- private APIS ---
        clientProjectSave: '/r/client/project/save',
        clientProjectClose: '/r/client/project/close'
    },

    session: {},

    config: {},

    setUnloadConfig: function(config) {
        config = config || {};
        this.config = {
            disableautosave: config.disableautosave || true,
            dropworkspace: config.dropworkspace || true,
            dropdirectory: config.dropdirectory || true,
            drophistory: config.drophistory || true,
            flushhistory: config.flushhistory || true
        };
    },
    setSession: function(session) {
        this.session = session;
    },
    setProject: function(project) {
        this.session.project = project;
    },
    clearSession: function() {
        this.session = {};
    },
    clearProject: function() {
        this.session.project = null;
    },
    unloadHandler: function() {
        try {
            var project = this.session.project;
            if (project) {

                var data = this._config;
                data.project = project.id;
                data.projectcookie = project.cookie;

                deployr.io('/r/project/close')
                    .data(data)
                    .sync()
                    .end();
            }
        } catch (e) {
            throw new Error(e);
        }
    }
};

/**********************************************************************/
/**********************************************************************/
/**********************************************************************/

function format(response, transEntity) {
    // -- transaction entity formats override global entity formats --  
    //var format = transEntity || _config.entity;
    var format = transEntity || globalConfig.entity;

    if (format) {
        var resObj = response.deployr.response,
            // -- top-level entities --
            entities = TOPLEVEL_ENTITIES;

        for (var index = 0; index < entities.length; index++) {
            var entity = entities[index];

            if (resObj[entity] && format[entity]) { // response entity hit
                // -- user-defined parse for top-level entity --                
                if (format[entity].parser) {
                    var formatScope = format[entity].scope || this;
                    resObj[entity] = format[entity].parser.call(formatScope, resObj[entity]);
                }
            }
        }
    }

    return response;
}

function changeEndpoint(response, endpoint, args) {

    var resObj = response.deployr.response,
        ENDPOINT = SessionManager.ENDPOINT_WHITELIST;

    switch (endpoint) {

        case ENDPOINT.login:

            SessionManager.setSession({
                httpcookie: resObj.httpcookie,
                user: resObj.user,
                limits: resObj.limits,
                project: null
            });
            break;

        case ENDPOINT.logout:
            SessionManager.clearSession();
            break;

        case ENDPOINT.projectClose:
        case ENDPOINT.clientProjectClose:
            SessionManager.clearProject();
            break;

        case ENDPOINT.projectCreate:
        case ENDPOINT.projectAboutUpdate:
        case ENDPOINT.projectSave:
        case ENDPOINT.projectSaveAs:
        case ENDPOINT.clientProjectSave:
            var project = resObj.project;
            SessionManager.setProject({
                id: project.project,
                cookie: project.cookie
            });
            break;

    } // end switch

    Deprecated.Event.fire('DeployR:endpointChange', {
        response: response,
        endpoint: endpoint,
        args: args
    });
}


function camelCase(input) {
    // convert format: '/r/user/login' --> 'userLogin'
    input = input.replace('\/r\/', '');
    return input.toLowerCase().replace(/\/(.)/g, function(match, segment) {
        return segment.toUpperCase();
    });
}

// turn the old deprecated inputs into new inputs
function normalizeInputs(inputs) {
    var rinputs = [];

    for (var i = 0; i < inputs.length; i++) {
        rinputs.push(inputs[i].normalize());
    }

    return rinputs;
}

/**********************************************************************/
/**********************************************************************/
/**********************************************************************/

/**
 * The Deprecated interface.
 */
var RData = Base.extend({
    initialize: function(type, rclass, rinput) {
        this.type = type;
        this.rclass = rclass;
        this.rinput = rinput;
    },

    getType: function() {
        return this.type;
    },

    getRClass: function() {
        return this.rclass;
    },

    getName: function() {
        return this.rinput.name;
    },

    getValue: function() {
        return this.rinput.value;
    },

    getLevels: function() {
        return this.rinput.levels;
    },

    getLabels: function() {
        return this.rinput.labels;
    },

    getOrdered: function() {
        return this.rinput.ordered;
    },

    normalize: function() {
        return this.rinput;
    }
});

/**********************************************************************/
/**********************************************************************/
/**********************************************************************/

function Emitter(obj) {  
  
}

function debug(msg) {  
}

Emitter.prototype = {

  events: {},

  scope: null,

  /**
   * Adds a listener.  Multiple can be added per name.  Aliased as `on`.
   *
   * @param {String} name The name of the event
   * @param {Function} handler A callback
   */
  on: function(name, handler) {
    if (name in this.events === false) { this.events[name] = []; }        

    this.events[name].push(handler);
    debug('Emitter.on("' + name + '")');

    return this;
  },

  /**
   * Triggers all matching listeners.
   *
   * @param {String} name The name of the event
   * @returns {Boolean} `true` if an event fired
   */
  emit: function(name) {
    if (name in this.events === false) { return this; }

    for (var i = 0; i < this.events[name].length; i++) {
      debug('Fired event: "' + name + '"');
      this.events[name][i].apply(this.scope || this, Array.prototype.slice.call(arguments, 1));       
    }

    return this;
  },

  /**
   * Removes all matching listeners.
   *
   * @param {String} name The name of the event
   * @returns {Boolean} `true` if an event was removed
   */
  removeAllListeners: function(name) {
    if (!name) {
      for (var e in this.events) {
        delete this.events[e];
      }
    } else {
      if (name in this.events === false) { return this; }
      delete this.events[name];        
    }

    return this;
  },

  removeListenerAt: function(name, index) {
    var array = this.events[name],
        rest = array.slice(index + 1);

    array.length = index;
    array.push.apply(array, rest);
    this.events[name] = array;
  },

  /**
   * Removes a listener based on the handler function.
   *
   * @param {String} name The name of the event
   * @param {Function} handler The handler function to remove
   * @returns {Boolean} `true` if an event was removed
   */
  off: function(name, handler) {
    if (name in this.events === false) { return this; }

    // remove all events handlers by this name
    if (!handler) {
      return this.removeAllListeners(name);
    } else { // remove all events handlers == 'handler' by this name
      for (var i = 0; i < this.events[name].length; i++) {
        if (this.events[name][i] == handler) {
          this.removeListenerAt(name, i);
          return this;
        }
      }
    } 

    return this;
  }
};


emitter = new Emitter();

/**
 * Provides simple adapter methods which wrap the raw <code>Revolution.DeployR.io(...)</code>
 * remote DeployR API AJAX transactions. These methods are an opt-in feature to
 * complement the low level DeployR IO communication.
 *
 * @class Revolution.DeployR.PublicAdapter
 * @extensionfor Revolution.DeployR
 */

Deprecated = {
    version: require('../package').version,

    Event: {
        on: function(type, fn, scope) {
            emitter.on(type, fn, scope);
        },

        detach: function(type, fn, obj) {
            emitter.off(type, fn);            
        }
    },

    RDataFactory: {
        createNumeric: function(name, value) {
            return RData.new('primitive', 'numeric', RInput.new(name, value).numeric());
        },

        createInteger: function(name, value) {
            return RData.new('primitive', 'integer', RInput.new(name, value).integer());
        },

        createBoolean: function(name, value) {
            return RData.new('primitive', 'numeric', RInput.new(name, value).logical());
        },

        createString: function(name, value) {
            return RData.new('primitive', 'character', RInput.new(name, value).character());
        },

        createDate: function(name, value) {
            return RData.new('date', 'Date', RInput.new(name, value).date());
        },

        createPOSIXDate: function(name, value) {
            return RData.new('date', 'POSIXct', RInput.new(name, value).posixct());
        },

        createNumericVector: function(name, value) {
            return RData.new('vector', 'numeric', RInput.new(name, value).numericVector());
        },

        createIntegerVector: function(name, value) {
            return RData.new('vector', 'integer', RInput.new(name, value).integerVector());
        },

        createBooleanVector: function(name, value) {
            return RData.new('vector', 'logical', RInput.new(name, value).logicalVector());
        },

        createStringVector: function(name, value) {
            return RData.new('vector', 'character', RInput.new(name, value).characterVector());
        },

        createDateVector: function(name, value) {
            return RData.new('type', 'Date', RInput.new(name, value).dateVector());
        },

        createPOSIXDateVector: function(name, value) {
            return RData.new('vector', 'POSIXct', RInput.new(name, value).posixctVector());
        },

        createList: function(name, value) {
            return RData.new('list', 'list', RInput.new(name, value).list());
        },

        createDataframe: function(name, value) {
            return RData.new('dataframe', 'data.frame', RInput.new(name, value).dataframe());
        },

        createFactor: function(name, value, ordered, levels, labels) {
            var opts = {
                levels: levels,
                labels: labels
            };

            if (ordered) {
                return RData.new('factor', 'factor', RInput.new(name, value, opts).ordered());
            } else {
                return RData.new('factor', 'factor', RInput.new(name, value, opts).factor());
            }
        },

        createNumericMatrix: function(name, value) {
            return RData.new('matrix', 'matrix', RInput.new(name, value).numericMatrix());
        },

        createIntegerMatrix: function(name, value) {
            return RData.new('matrix', 'matrix', RInput.new(name, value).integerMatrix());
        },

        createBooleanMatrix: function(name, value) {
            return RData.new('matrix', 'matrix', RInput.new(name, value).logicalMatrix());
        },

        createStringMatrix: function(name, value) {
            return RData.new('matrix', 'matrix', RInput.new(name, value).characterMatrix());
        }
    }, // RDataFactory

    DeployR: {

        init: function(config) {
            config = config || {};

            // --- Assert JSDeploy compatability against the connected DeployR version ---
            if (config.compatibility) {
                //compatibilityCheck();
            }

            // --- Event registration ---
            if (config.events) {
                var events = config.events;

                // -- Manage cleanup on browser close (close project, logout, ect...)--
                if (events.unload) {
                    SessionManager.setUnloadConfig(events.unload);
                    Deprecated.Event.on('deployR:unload', SessionManager.unloadHandler, SessionManager);
                }

                // -- IO Global Events --
                if (events.globalIO) {
                    var scope = events.globalIO.scope || window,
                        lifecycle = events.globalIO.lifecycle,
                        statusCode = events.globalIO.statusCode;

                    if (lifecycle) {
                        for (var eventName in lifecycle) {
                            Deprecated.Event.on('deployR-io:' + eventName, lifecycle[eventName], scope);
                        }
                    }

                    if (statusCode) {
                        for (var eventName in statusCode) {
                            Deprecated.Event.on('deployR-io:' + eventName, statusCode[eventName], scope);
                        }
                    }
                }
            }

            // New API
            deployr.configure({
                host: config.deployrURI,
                cors: config.deployrURI ? true : false,
                logging: config.logging,
                sticky: true
            });
        },

        io: function(api, config, cb) {
            if (console) {
                console.warn('"' + camelCase(api) + '()" API is now deprecated.');
            }

            cb = cb || {};
            config = config || {};

            var transaction = config.transaction || {},
                transArgs = transaction['arguments'],
                statusCode = transaction.statusCode || {},
                scope = cb.scope || window,
                routputs = config.robjects,
                rinputs = config.inputs; // config.inputs = R.DeployR.parseInputs(config.inputs);

            // --- omit deprecated props ---
            if (config.transaction) {
                delete config.transaction;
            }
            if (config.method) {
                delete config.method;
            }
            if (config.on) {
                delete config.on;
            }
            if (config.format) {
                delete config.format;
            }
            if (config.inputs) {
                delete config.inputs;
            }
            if (config.robjects) {
                delete config.robjects;
            }

            // --- make the new request ---
            var io = deployr.io(api)
                .data(config || {})
                .error(function(response) {
                    // global-failure
                    emitter.emit('deployR-io:failure', [response, api, transArgs]);

                    // transaction-failure
                    if (cb.failure) {
                        cb.failure.apply(scope, [response, api, transArgs]);                        
                    }

                    // global-statusError
                    emitter.emit(('deployR-io:' + code), [response, api, transArgs]);
                });

            if (rinputs) {
                io.rinputs(normalizeInputs(rinputs));
            }
            if (routputs) {
                io.routputs(routputs);
            }
            if (transaction.sync) {
                io.sync();
            }
            if (transaction.timeout) {
                io.timeout(transaction.timeout);
            }

            // --- Error status code --- //
            if (statusCode) {

                for (var eventName in statusCode) {                    
                    io.on('deployr-io:' + eventName, function(response) {
                        var cb = statusCode;
                        var statusText = response.deployr.response.error;
                        var status = response.deployr.response.errorCode;
                        cb[status].apply(scope, [response, status, statusText, api, transArgs]);
                    });
                }                

                // @@@@TODO @@@@@@
            }

            // global-start
            emitter.emit('deployR-io:start');

            /// transaction-start
            if (cb.start) {
                cb.start.apply(scope, [api, transArgs]); 
            }

            io.end(function(response) {
                // global-complete
                emitter.emit('deployR-io:complete');

                // transaction-complete
                if (cb.complete) {
                    cb.complete.apply(scope, [response, api, transArgs]); 
                }

                // entity manipulation of the response
                if (transaction.entity) {
                    response = format(response, transaction.entity);
                }

                // global-success
                emitter.emit('deployR-io:success', [response, api]);

                // transaction-success
                if (cb.success) {
                    cb.success.apply(scope, [response, api, transArgs]);                    
                }

                // global-end
                emitter.emit('deployR-io:end', [response, api]);

                // transaction-end
                if (cb.end) {
                    cb.end.apply(scope, [response, api, transArgs]); 
                }                
            });

            return io;
        },

        /**
         * Flattens a given <code>Revolution.RData</code> type into a JSON
         * string representing the expected DeployR input format.
         *
         * @method parseInputs
         * @public
         * @param {Array} rdata An Array of RData Objects to be flattened.
         * @return {String} The flattend RData JSON string representing the
         * DeployR input format.
         */
        parseInputs: function(rdata) {
            return rdata;
        },

        /////////////////////////////////////
        // Project Workspace APIs
        //////////////////////////////////////

        /**
         * This call lists the objects in the workspace for the project indicated.
         *
         * @method projectWorkspaceList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>root</dt>
         *    <dd>(optional) specifies object graph root</dd>
         *
         *    <dt>clazz</dt>
         *    <dd>(optional) specifies R class based filter</dd>
         *
         *    <dt>filter</dt>
         *    <dd>(optional) specifies R object name based filter</dd>
         *
         *    <dt>restrict</dt>
         *    <dd>
         *       (optional) if <code>true</code, limits returned objects to object
         *       types with supported RevoDeployR-encoding
         *    </dd>
         *
         *    <dt>pagesize</dt>
         *    <dd>
         *       (optional) specifies the page size for paging results in response
         *       markup
         *    </dd>
         *
         *    <dt>pageoffset</dt>
         *    <dd>
         *       (optional) specifies the page offset for paging results in response
         *       markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceList: function(config, callback) {
            return this.io('/r/project/workspace/list', config, callback);
        },

        /**
         * This call retrieves RevoDeployR-encoded objects from the workspace for the
         * specified project.
         *
         * @method projectWorkspaceGet
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies a comma-separated list of object names</dd>
         *
         *    <dt>root</dt>
         *    <dd>optional) specifies object graph root</dd>
         *
         *    <dt>start</dt>
         *    <dd>optional) specifies the offset into object data</dd>
         *
         *    <dt>length</dt>
         *    <dd>optional) specifies the segment of object data to retrieve</dd>
         *
         *      <dt>infinity</dt>
         *    <dd>
         *       (optional) specifies a custom value for Infinity appearing in R
         *       object data returned on the call, otherwise Infinity is represented
         *       by 0x7ff0000000000000L
         *    </dd>
         *
         *      <dt>nan</dt>
         *    <dd>
         *       (optional) specifies custom value for NaN appearing in R object data
         *       returned on the call, otherwise NaN is represented by null
         *    </dd>
         *
         *    <dt>encodeDataFramePrimitiveAsVector</dt>
         *    <dd>
         *       (optional) if <code>true</code>, data.frame primitives are encoded
         *       vectors in R object data returned on call
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceGet: function(config, callback) {
            return this.io('/r/project/workspace/get', config, callback);
        },

        /**
         * This call uploads a binary object from file into the workspace for the
         * specified project.
         *
         * @method projectWorkspaceUpload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the name of the object file</dd>
         *
         *    <dt>file</dt>
         *    <dd>file content</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceUpload: function(config, callback) {
            config.format = "text";
            var ioConfig = {
                data: config,
                method: "POST",
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/project/workspace/upload', config, callback);
        },

        /**
         * This call transfers a binary object from a URL into the workspace for the
         * specified project.
         *
         * @method projectWorkspaceTransfer
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the name of the object file found on the URL</dd>
         *
         *    <dt>url</dt>
         *    <dd>specifies the URL</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceTransfer: function(config, callback) {
            return this.io('/r/project/workspace/transfer', config, callback);
        },

        /**
         * This call pushes a RevoDeployR-encoded object into the workspace for the
         * specified project.
         *
         * @method projectWorkspacePush
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded object inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspacePush: function(config, callback) {            
            return this.io('/r/project/workspace/push', config, callback);
        },

        /**
         * This call saves the workspace to a file in the working directory for the
         * specified project.
         *
         * If the name parameter is specified on the call then only the named object
         * is saved as a binary object file to the working directory. Otherwise the
         * entire contents of the workspace are saved.
         *
         * @method projectWorkspaceSave
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>(optional) specifies a named object for saving</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to accompany the saved file</dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) if true, the new file will be renamed to avoid
         *       overwriting
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceSave: function(config, callback) {            
            return this.io('/r/project/workspace/save', config, callback);
        },

        /**
         * This call stores the workspace as a binary object to the repository.
         *
         * If the name parameter is specified on the call, then only the named object
         * is stored as a binary object in the repository. Otherwise the entire
         * contents of the workspace are stored.
         *
         * @method projectWorkspaceStore
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *      <dt>name</dt>
         *      <dd>(optional) specifies a named object for storing</dd>
         *
         *      <dt>descr</dt>
         *      <dd>(optional) specifies a description to accompany the saved file</dd>
         *
         *    <dt>tags</dt>
         *    <dd>
         *       (optional) specifies tag words to associate with the repository file
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) comma-separated list of role names, which makes the file
         *       visible to authenticated users with these roles
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, the file will be shared, which
         *       makes the file visible to authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, the file will be published, which
         *       makes the file visible to authenticated and anonymous users
         *    </dd>
         *
         *      <dt>newversion</dt>
         *      <dd>
         *       (optional) if <code>true</code>, the new file will be renamed to
         *       avoid overwriting
         *    </dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceStore: function(config, callback) {
            return this.io('/r/project/workspace/store', config, callback);
        },

        /**
         * This call loads a binary object from a file in the repository into the
         * workspace for the specified project.
         *
         * @method projectWorkspaceLoad
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>repo</dt>
         *    <dd>specifies the repository name</dd>
         *
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>author</dt>
         *    <dd>specifies the repository file author</dd>
         *
         *      <dt>version</dt>
         *      <dd>(optional) specifies the repository file version</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceLoad: function(config, callback) {
            return this.io('/r/project/workspace/load', config, callback);
        },

        /**
         * This call deletes an object from the workspace for the specified project.
         *
         * @method projectWorkspaceDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the object name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectWorkspaceDelete: function(config, callback) {            
            return this.io('/r/project/workspace/delete', config, callback);
        },

        /////////////////////////////////////
        // Project Management APIs
        /////////////////////////////////////

        /**
         * This call creates a new project for the currently authenticated user.
         * If the projectname parameter is specified on the call, then the newly
         * created project will be a persistent project . If the projectname parameter
         * is omitted on the call, then the newly created project will be a temporary
         * project. The projectdescr parameter is ignored if the projectname parameter
         * is omitted.
         *
         * The blackbox parameter ensures that calls on the temporary project are
         * limited to the Blackbox API Controls .
         *
         * Using the inputs , preloadfile , preloadobject and adopt parameters the
         * project can be pre-initialized with data in the workspace and/or working
         * directory.
         *
         * The inputs parameter allows the caller to pass RevoDeployR-encoded R object
         * values as inputs. These inputs are turned into R objects in the workspace
         * of the new R session before the call returns.
         *
         * The preloadfile parameters allow the caller to load one or more files from
         * the repository into the working directory of the new R session before the
         * call returns.
         *
         * The preloadobject parameters allow the caller to load one or more binary R
         * objects (.rData) from the repository into the workspace of the new R
         * session before the call returns.
         *
         * The adopt parameters allow the caller to load a pre-existing project
         * workspace, project working directory and/or project package dependencies
         * into the new R session before the call returns.
         *
         * @method projectCreate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>projectname</dt>
         *    <dd>(optional) names a new persistent project</dd>
         *
         *    <dt>projectdescr</dt>
         *    <dd>(optional) describes a new persistent project</dd>
         *
         *    <dt>blackbox</dt>
         *    <dd>
         *       (optional) when enabled, a temporary project is limited to blackbox
         *       API controls
         *    </dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>
         *       (optional) comma-separated list of authors,
         *       author-per-preloadfilename
         *    </dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>
         *       (optional) comma-separated list of versions,
         *       version-per-preloadfilename
         *    </dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>
         *       (optional) comma-separated list of repository object (.rData)
         *       filenames
         *    </dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>
         *       (optional) comma-separated list of authors,
         *       author-per-preloadobjectname
         *    </dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>
         *       (optional) comma-separated list of versions,
         *       version-per-object-preloadobjectname
         *    </dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>
         *       (optional) identifies the project whose workspace is to be adopted
         *    </dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>
         *       (optional) identifies the project whose directory is to be adopted
         *    </dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>
         *       (optional) identifies the project whose package dependencies are to
         *       be adopted
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectCreate: function(config, callback) {
            return this.io('/r/project/create', config, callback);            
        },

        /**
         * This call creates a pool of temporary projects for the currently
         * authenticated user. The caller can specify their preferred number of
         * projects to create using the poolsize parameter. RevoDeployR will attempt
         * to create up to poolsize number of projects. However, standard com
         * policy contraints apply to individual users and on the grid so there is no
         * guarantee that poolsize projects will be returned. If the number of
         * projects returned on this call is less than poolsize the caller can inspect
         * the error and errorCode properties in the response markup to determine
         * exactly why their pool size was limited.
         *
         * The blackbox parameter ensures that calls on each project in the pool are
         * limited to the Blackbox API Controls .
         *
         * Using the inputs, preloadfile, preloadobject and adopt parameters each
         * project in the pool can be pre-initialized with data in the workspace
         * and/or working directory.
         *
         * The inputs parameter allows the caller to pass RevoDeployR-encoded R object
         * values as inputs. These inputs are turned into R objects in the workspace
         * of the new R session before the call returns.
         *
         * The preloadfile parameters allow the caller to load one or more files from
         * the repository into the working directory of the new R session before the
         * call returns.
         *
         * The preloadobject parameters allow the caller to load one or more binary R
         * objects (.rData) from the repository into the workspace of the new R
         * session before the call returns.
         *
         * The adopt parameters allow the caller to load a pre-existing project
         * workspace, project working directory and/or project package dependencies
         * into the new R session before the call returns.
         *
         * @method projectPool
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>poolsize</dt>
         *    <dd>the preferred size of the pool of temporary projects</dd>
         *    <dt>blackbox</dd>
         *    <dd>(optional) when enabled, each temporary project in the pool is limited to blackbox API controls</dd>
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded inputs</dd>
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPool: function(config, callback) {
            return this.io('/r/project/pool', config, callback);
        },

        /**
         * This call recycles the R session associated with the project by deleting
         * all R objects from the workspace and all files from the working directory.
         *
         * Recycling a project is a convenient and efficient alternative to starting
         * over by closing an existing project and then creating a new project.
         *
         * @method projectRecycle
         * @static
         * @param {Object} config the call configuration. The configuration object
         * supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *    <dt>preserveworkspace</dt>
         *    <dd>(optional) if true, the objects in the workspace are preserved on recycle</dd>
         *    <dt>preservedirectory</dt>
         *    <dd>(optional) if true, the files in the working directory are preserved on recycle</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectRecycle: function(config, callback) {
            return this.io('/r/project/recycle', config, callback);
        },

        /**
         * This call lists all projects owned by the currently authenticated user
         * and/or all projects shared by other users.
         *
         * Shared projects are available as read-only projects to the caller. The
         * shared or private nature of a project can be controlled using the
         * <code>/r/project/about/update</code> call
         * <a href="#method_projectAboutUpdate">projectAboutUpdate</a>.
         *
         * @method projectList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>sharedprojectsalso</dt>
         *    <dd>
         *       (optional) when true, the project response list contains the caller's
         *       projects plus projects shared by other users
         *    </dd>
         *
         *    <dt>sharedprojectsonly</dt>
         *    <dd>
         *       (optional) when true, the project response list contains only
         *       projects shared by other users and not the users's own projects
         *    </dd>
         *
         *    <dt>isordered</dt>
         *    <dd>
         *       (optional) when true, the project response list is ordered in a
         *       most-recently-modified first order. Otherwise the list is ordered
         *       chronologically by creation date
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectList: function(config, callback) {
            return this.io('/r/project/list', config, callback);
        },
        /**
         * This call pings the specified project to determine if the project is live
         * on the RevoDeployR grid.
         *
         * @method projectPing
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *      <dt>project</dt>
         *      <dd>specifies the project identifier</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPing: function(config, callback) {
            return this.io('/r/project/ping', config, callback);
        },

        /**
         * This call retrieves a set of properties that describe the specified
         * project.
         *
         * @method projectAbout
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectAbout: function(config, callback) {
            return this.io('/r/project/about', config, callback);
        },

        /**
         * This call updates a set of properties that describe the specified project.
         *
         * @method projectAboutUpdate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the project name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the project description</dd>
         *
         *    <dt>longdescr</dt>
         *    <dd>(optional) specifies the project long description</dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, specifies that the project is a
         *       shared project
         *    </dd>
         *
         *    <dt>projectcookie</dt>
         *    <dd>
         *       (optional) specifies a client-application specific project cookie
         *    </dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectAboutUpdate: function(config, callback) {
            return this.io('/r/project/about/update', config, callback);
        },

        /**
         * This call saves the persistent state of the project indicated.
         *
         * The set of drop parameters allows the caller to selectively drop aspects,
         * such as workspace, working directory, or execution history of the project
         * state when saving. The flushhistory parameter allows the caller to preserve
         * the project execution history itself while destroying all generated console
         * output and results associated with that history.
         *
         * @method projectSave
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>(optional) specifies the project name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the project description</dd>
         *
         *    <dt>longdescr</dt>
         *    <dd>(optional) specifies the project long description</dd>
         *
         *    <dt>shared</dt>
         *    <dd>(optional) if true, specifies the project is a shared project</dd>
         *
         *    <dt>projectcookie</dt>
         *    <dd>(optional) specifies a client-application specific project cookie</dd>
         *
         *    <dt>dropworkspace</dt>
         *    <dd>(optional) if true, the content of the project's workspace is dropped on save</dd>
         *
         *    <dt>dropdirectory</dt>
         *    <dd>(optional) if true, the content of the project's working directory is dropped on save</dd>
         *
         *    <dt>drophistory</dt>
         *    <dd>(optional) if true, the project's execution history is dropped on save</dd>
         *
         *    <dt>flushhistory</dt>
         *    <dd>(optional) if true, the project's execution history is flushed on save</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectSave: function(config, callback) {
            return this.io('/r/project/save', config, callback);
        },

        /**
         * This call saves the persistent state of the specified project to a new
         * persistent project.
         *
         * The set of drop parameters allows the caller to selectively drop aspects,
         * such as workspace, working directory, or execution history of the project
         * state when saving to the new project. The flushhistory parameter allows the
         * caller to preserve the project execution history itself for the new project
         * while dropping all generated console output and results associated with the
         * original history.
         *
         * @method projectSaveas
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies the new project name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the new project description</dd>
         *
         *    <dt>longdescr</dt>
         *    <dd>(optional) specifies the new project long description</dd>
         *
         *    <dt>shared</dt>
         *    <dd>(optional) if true, specifies the new project is a shared project</dd>
         *
         *    <dt>projectcookie</dt>
         *    <dd>(optional) specifies a client-application specific cookie for the new project</dd>
         *
         *    <dt>dropworkspace</dt>
         *    <dd>(optional) if true, the content of the original project's workspace is dropped when saving to the new project</dd>
         *
         *    <dt>dropdirectory</dt>
         *    <dd>(optional) if true, the content of the project's working directory is dropped when saving to the new project</dd>
         *
         *    <dt>drophistory</dt>
         *    <dd>(optional) if true, the project's execution history is dropped when saving to the new project</dd>
         *
         *    <dt>flushhistory</dt>
         *    <dd>(optional) if true, the project's execution history is flushed when saving to the new project</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectSaveas: function(config, callback) {
            return this.io('/r/project/saveas', config, callback);
        },

        /**
         * This call closes the project indicated.
         *
         * Closing a live project releases all resources associated with the project
         * on the RevoDeployR grid. If the specified project is a persistent project
         * then the default autosave semantics will cause the project to be saved
         * automatically. The caller can override that default behavior using the
         * disableautosave parameter.
         *
         * The set of drop parameters allow the caller to selectively drop aspects,
         * such as workspace, working directory, or execution history, of the project
         * state when closing. The flushhistory parameter allows the caller to
         * preserve the project execution history itself while destroying all
         * generated console output and results associated with that history.
         *
         * @method projectClose
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         *
         *    <dt>disableautosave</dt>
         *    <dd>(optional) if true, the default autosave semantics for persistent projects are disabled</dd>
         *
         *    <dt>projectcookie</dt>
         *    <dd>(optional) specifies a client-application specific project cookie</dd>
         *
         *    <dt>dropworkspace</dt>
         *    <dd>(optional) if true, the content of the project's workspace is dropped on close</dd>
         *
         *    <dt>dropdirectory</dt>
         *    <dd>(optional) if true, the content of the project's working directory is dropped on close</dd>
         *
         *    <dt>drophistory</dt>
         *    <dd>(optional) if true, the project's execution history is dropped on close</dd>
         *
         *    <dt>flushhistory</dt>
         *    <dd>(optional) if true, the project's execution history is flushed on close</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectClose: function(config, callback) {
            return this.io('/r/project/close', config, callback);
        },

        /**
         * This call grants authorship of the specified project to other users.
         *
         * @method projectGrant
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>newauthor</dt>
         *    <dd>
         *       specifies a comma-separated list of usernames indicating the new
         *       owners
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectGrant: function(config, callback) {
            return this.io('/r/project/grant', config, callback);
        },

        /**
         * This call imports the specified project archive as a new persistent
         * project.
         *
         * @method projectImport
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>name</dt>
         *    <dd>specifies the name of the project archive file</dd>
         *
         *    <dt>file</dt>
         *    <dd>...file content...</dd>
         *
         *    <dt>descr</dt>
         *    <dd>
         *       (optional) specifies a description for the newly imported project
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectImport: function(config, callback) {
            config.format = "text";
            var ioConfig = {
                data: config,
                method: "POST",
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/project/import', config, callback);
        },
        /**
         * This call exports a compressed archive file for the specified project.
         *
         * The set of drop parameters allow the caller to selectively drop aspects,
         * such as workspace, working directory, or execution history of the project
         * state when generating the archive. The flushhistory parameter allows the
         * caller to preserve the project execution history itself while excluding all
         * generated console output and results associated with that history.
         *
         * @method projectExport
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         *
         *    <dt>dropworkspace</dt>
         *    <dd>(optional) if true, the content of the project's workspace is dropped on export</dd>
         *
         *    <dt>dropdirectory</dt>
         *    <dd>(optional) if true, the content of the project's working directory is dropped on export</dd>
         *
         *    <dt>drophistory</dt>
         *    <dd>(optional) if true, the project's execution history is dropped on export</dd>
         *
         *    <dt>flushhistory</dt>
         *    <dd>(optional) if true, the project's execution history is flushed on export</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExport: function(config, callback) {
            return this.io('/r/project/export', config, callback);
        },

        /**
         * This call deletes the specified project.
         * Deleting a project is a permanent operation that cannot be undone or
         * recovered.
         *
         * @method projectDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies project identifier</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDelete: function(config, callback) {
            return this.io('/r/project/delete', config, callback);
        },

        /////////////////////////////////////
        // Project Execution APIs
        /////////////////////////////////////

        /**
         * This call executes a block of R code on the R session identified by the
         * project parameter.
         *
         * Please note the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The robjects parameter allows the caller to specify a comma-separated
         *       list of object names that will be returned as RevoDeployR-encoded R
         *       objects on the response markup after the execution completes.
         *    </li>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         * </ol>
         *
         *  <strong>Some key data indicated in the response markup on this call:</strong>
         *
         * <ol>
         *    <li>code - indicates the code that has been executed</li>
         *    <li>
         *       console - indicates the console output resulting from the code
         *       execution
         *    </li>
         *    <li>
         *       results - indicates the list of files generated by the R graphics
         *       device
         *    </li>
         *    <li>
         *       artifacts - indicates the list of files generated or modified in the
         *       working directory
         *    </li>
         *    <li>
         *       objects -  indicates the list of R objects returned from the
         *       workspace
         *    </li>
         *    <li>
         *       files - indicates the list of files and objects stored in the
         *       repository after the execution completes
         *    </li>
         *    <li>
         *       interrupted - indicates the interrupted status of execution
         *    </li>
         *    <li>
         *       error - on failure, indicates the reason for failure
         *    </li>
         *    <li>
         *       errorCode - on failure, indicates the error code for failure
         *    </li>
         * </ol>
         *
         * @method projectExecuteCode
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>code</dt>
         *    <dd>specifies the block of R code</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>(optional) if true R commands will not appear in the console output</dd>
         *
         *    <dt>consoleoff</dt>
         *    <dd>(optional) if true console output is not returned in the response markup</dd>
         *
         *      <dt>graphics</dt>
         *      <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *      <dt>graphicswidth</dt>
         *      <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *      <dt>graphicsheight</dt>
         *      <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *      <dt>robjects</dt>
         *      <dd>(optional) specifies a comma-separated list of objects for retrieval following the execution</dd>
         *
         *      <dt>storefile</dt>
         *      <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *      <dt>storeobject</dt>
         *      <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *      <dt>storeworkspace</dt>
         *      <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *      <dt>storenewversion</dt>
         *      <dd>(optional) if <code>true</code>, ensures each file stored in
         *    repository results in new version being created if needed</dd>
         *
         *      <dt>storepublic</dt>
         *      <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *      <dt>infinity</dt>
         *      <dd>(optional) specifies custom value for Infinity appearing in R object
         *    data returned on call, otherwise Infinity is represented by <code>0x7ff0000000000000L</code>
         *    </dd>
         *
         *      <dt>nan</dt>
         *      <dd>(optional) specifies custom value for NaN appearing in R object data
         *    returned on call, otherwise NaN is represented by <code>null</code></dd>
         *
         *      <dt>encodeDataFramePrimitiveAsVector</dt>
         *      <dd>(optional) if <code>true</code>, data.frame primitives are encoded vectors in R object data returned on call</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteCode: function(config, callback) {           
            return this.io('/r/project/execute/code', config, callback);
        },
        /**
         * This call executes executes repository-managed scripts or external scripts
         * on the R session identified by the project parameter.
         *
         * To execute a single repository-managed script the caller must provide
         * parameter values for filename, author and optionally version. To execute
         * a chain of repository-managed scripts the caller must provide a
         * comma-separated list of values on the filename , author and optionally
         * version parameters.
         *
         * To execute a single external script the caller must provide a valid URL or
         * file path using the externalsource parameter. To execute a chain of
         * external scripts the caller must provide a comma-separated list of values
         * on the externalsource parameter. Note, to execute an external script the
         * caller must have POWER_USER privileges.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session, with execution occuring in
         * the order specified on the parameter list.
         *
         * Please not the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The robjects parameter allows the caller to specify a comma-separated
         *       list of object names that will be returned as RevoDeployR-encoded R
         *       objects on the response markup after the execution completes.
         *    </li>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         * </ol>
         *
         * <strong>
         *    Some of the key data indicated in the response markup on this call
         *    include:
         * </strong>
         *
         * <ol>
         *    <li>
         *       console - indicates the console output resulting from the script
         *       execution
         *    </li>
         *    <li>
         *       results - indicates the list of files generated by the R graphics
         *       device
         *    </li>
         *    <li>
         *       artifacts - indicates the list of files generated or modified in the
         *       working directory
         *    </li>
         *    <li>
         *       objects - indicates the list of R objects returned from the workspace
         *    </li>
         *    <li>
         *       files - indicates the list of files and objects stored in the
         *       repository after the execution completes
         *    </li>
         *    <li>interrupted - indicates the interrupted status of execution</li>
         *    <li>error - on failure, indicates the reason for failure</li>
         *    <li>errorCode - on failure, indicates the error code for failure</li>
         * </ol>
         *
         * @method projectExecuteScript
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>(optional) comma-separated list of repository-managed script filenames</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) comma-separated list of repository-managed directories for
         *       scripts, defaults to root
         *    </dd>
         *
         *    <dt>author</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-filename</dd>
         *
         *    <dt>version</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-filename</dd>
         *
         *    <dt>externalsource</dt>
         *    <dd>(optional) comma-separated list of URLs or file paths to external scripts</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dd>adoptpackages</dd>
         *    <dt>(optional) identifies project from which package dependencies are to be adopted</dt>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>(optional) if true R commands will not appear in the console output</dd>
         *
         *    <dt>graphics</dt>
         *    <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *    <dt>graphicswidth</dt>
         *    <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *    <dt>graphicsheight</dt>
         *    <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *    <dt>robjects</dt>
         *    <dd>(optional) specifies a comma-separated list of objects for retrieval following the execution</dd>
         *
         *    <dt>storefile</dt>
         *    <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *    <dt>storeobject</dt>
         *    <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *    <dt>storeworkspace</dt>
         *    <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *    <dt>storenewversion</dt>
         *    <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *    <dt>storepublic</dt>
         *    <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *    <dt>infinity</dt>
         *    <dd>(optional) specifies custom value for Infinity appearing in R object data returned on call, otherwise Infinity is represented by <code>0x7ff0000000000000L</code></dd>
         *
         *    <dt>nan</dt>
         *    <dd>(optional) specifies custom value for NaN appearing in R object data returned on call, otherwise NaN is represented by <code>null</code></dd>
         *
         *    <dt>encodeDataFramePrimitiveAsVector</dt>
         *    <dd>(optional) if <code>true</code>, data.frame primitives are encoded vectors in R object data returned on call</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteScript: function(config, callback) {            
            return this.io('/r/project/execute/script', config, callback);
        },

        /**
         * This call interrupts the current execution on specified project.
         *
         * @method projectExecuteInterrupt
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *      <dt>project</dt>
         *      <dd>specifies the project identifier</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteInterrupt: function(config, callback) {
            return this.io('/r/project/execute/interrupt', config, callback);
        },

        /**
         * This call retrieves the R console output for the latest execution on
         * specified project.
         *
         * @method projectExecuteConsole
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *    <dt>project</dt>
         *      <dd>specifies the project identifier</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteConsole: function(config, callback) {
            return this.io('/r/project/execute/console', config, callback);
        },

        /**
         * This call retrieves the execution history for the specified project.
         *
         * Some of the key data indicated for each history item in the response markup
         * on this call include:
         *
         * <ol>
         *  <li>code - indicates the code that has been executed</li>
         *  <li>console - indicates the console output resulting from the code execution</li>
         *  <li>resultsGenerated - indicates the number of generated results on the execution</li>
         *  <li>resultsAvailable - indicates the number of generated results still stored on the execution</li>
         *  <li>resourceUsage - indicates the current storage byte count for results on the execution</li>
         *  <li>execution - indicates the execution identifier, which can then be used on /r/project/execution/result calls to retrieve or manage results</li>
         *  <li>interrupted - indicates the interrupted status of execution</li>
         *  <li>error - on failure, indicates the reason for failure</li>
         *  <li>errorCode - on failure, indicates the error code for failure</li>
         * </ol>
         * @method projectExecuteHistory
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filterdepth</dt>
         *    <dd>specifies the max number of executions to be returned in the history</dd>
         *
         *    <dt>execution</dt>
         *    <dd>(optional) specifies the comma-separated list of execution identifiers on which to filter history</dd>
         *
         *    <dt>filtertag</dt>
         *    <dd>(optional) specifies the execution tag on which to filter history</dd>
         *
         *    <dt>reversed</dt>
         *    <dd>
         *       (optional) if true, the execution history is returned in a
         *       reverse-chronological order
         *    </dt>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteHistory: function(config, callback) {
            return this.io('/r/project/execute/history', config, callback);
        },

        /**
         * This call flushes executions in the history on the specified project.
         * Flushing an execution deletes both the R console output and the generated
         * results associated with that execution but does not remove the execution
         * itself from the history. By omitting the execution parameter, the caller
         * can flush every execution in the history on the specified project.
         *
         * This flushing facility is provided to help users manage the levels of
         * resource usage associated with their persistent projects.
         *
         * @method projectExecuteFlush
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         *  <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>execution</dt>
         *    <dd>(optional) comma-separated list of execution identifiers</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteFlush: function(config, callback) {
            return this.io('/r/project/execute/flush', config, callback);
        },

        /**
         * This call lists the execution results for the specified project.
         *
         * By specifying a value for the execution parameter the caller can limit the
         * response to those results found on a specific execution or set of
         * executions.
         *
         * <blockquote>
         *    Important! The URLs indicated in the response markup on this call remain
         *    valid for as long as the results remain part of the project.
         * </blockquote>
         *
         * @method projectExecuteResultList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>execution</dt>
         *    <dd>
         *       (optional) specifies a comma-separated list of execution identifiers
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteResultList: function(config, callback) {
            return this.io('/r/project/execute/result/list', config, callback);
        },

        /**
         * This call downloads the execution results for the specified project.
         *
         * By specifying a value for the execution parameter the caller can download
         * only results on the specified executions. By specifying a value for the
         * filename parameter the caller can download a specific result on the
         * specified execution.
         *
         * @method projectExecuteResultDownload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>execution</dt>
         *    <dd>
         *       (optional) specifies a comma-separated list of execution identifiers
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>(optional) specifies a result file name</dd>
         *
         *    <dt>inline</dt>
         *    <dd>
         *       (optional) if true, the Content-Disposition response header
         *       indicating attachment is omitted
         *    </dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteResultDownload: function(config, callback) {
            return this.io('/r/project/execute/result/download', config, callback);
        },

        /**
         * This call deletes the execution results for the specified project.
         *
         * By specifying a value for the execution parameter the caller can delete
         * only those results on the specified executions. By specifying a value for
         * the filename parameter the caller can delete a specific result on the
         * specified executions.
         *
         * @method projectExecuteResultDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *   <dt>project</dt>
         *   <dd>specifies the project identifier</dd>
         *
         *   <dt>execution</dt>
         *   <dd>
         *      (optional) specifies a comma-separated list of execution identifiers
         *   </dd>
         *
         *   <dt>filename</dt>
         *   <dd>(optional) specifies a result file name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectExecuteResultDelete: function(config, callback) {
            return this.io('/r/project/execute/result/delete', config, callback);
        },

        /////////////////////////////////////
        // Project Directory APIs
        /////////////////////////////////////

        /**
         * This call lists working directory files for the specified project.
         *
         * The filter parameter can be specified on the call to filter, the types of
         * files returned according to their category. The following filter values are
         * supported:
         *
         * <ol>
         *    <li>plot - files ending with a .png, .svg or .jpg extension</li>
         *    <li>script - files ending with a .R or .r extension</li>
         *    <li>R - files ending with a .rData or .rdata extension</li>
         *    <li>data - files ending with a .csv or .xls extension</li>
         *    <li>text - files ending with a .txt extension</li>
         * </ol>
         *
         * @method projectDirectoryList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filter</dt>
         *    <dd>(optional) specifies the filter by category value</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryList: function(config, callback) {
            return this.io('/r/project/directory/list', config, callback);
        },

        /**
         * This call uploads a file into the working directory for the specified
         * project.
         *
         * @method projectDirectoryUpload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the name of the file</dd>
         *
         *    <dt>file</dt>
         *    <dd>...file content...</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the description to be associated with file</dd>
         *
         *    <dt>overwrite</dt>
         *    <dd>(optional) if true, overwrites the existing file of same name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryUpload: function(config, callback) {
            config.format = "text";
            var ioConfig = {
                data: config,
                method: "POST",
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/project/directory/upload', config, callback);
        },

        /**
         * This call transfers a file from a URL into the working directory for the
         * specified project.
         *
         * @method projectDirectoryTransfer
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the name of the file</dd>
         *
         *    <dt>url</dt>
         *    <dd>specifies the URL for the file</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the description to be associated with file</dd>
         *
         *    <dt>overwrite</dt>
         *    <dd>(optional) if true, overwrites the existing file of same name</dd>
         *  </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryTransfer: function(config, callback) {
            return this.io('/r/project/directory/transfer', config, callback);
        },

        /**
         * This call writes a text file into the working directory for the specified
         * project.
         *
         * @method projectDirectoryWrite
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the name of the file</dd>
         *
         *    <dt>text</dt>
         *    <dd>specifies the text content for the file</dd>
         *
         *    <dt>delimiter</dt>
         *    <dd>
         *       (optional) specifies a custom delimiter for text when writing
         *       multiple files, defaults to #,#
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies the description to be associated with file</dd>
         *
         *    <dt>overwrite</dt>
         *    <dd>(optional) if true, overwrites the existing file of same name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryWrite: function(config, callback) {
            return this.io('/r/project/directory/write', config, callback);
        },

        /** 
         * This call updates a file name and/or description in the working directory
         * for the specified project.
         *
         * @method projectDirectoryUpdate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the name of the file</dd>
         *
         *    <dt>rename</dt>
         *    <dd>(optional) specifies the new name for the file</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifices the new description for the file</dd>
         *
         *    <dt>overwrite</dt>
         *    <dd>(optional) if true, overwrites the existing file of same name</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryUpdate: function(config, callback) {
            return this.io('/r/project/directory/update', config, callback);
        },

        /**
         * This call stores a file from the working directory to the repository.
         *
         * @method projectDirectoryStore
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>(optional) specifies the file for storing</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to accompany the saved file</dd>
         *
         *    <dt>tags</dt>
         *    <dd>
         *       (optional) specifies tag words to associate with repository file
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *        (optional) comma-separated list of role names, which makes the file
         *        visible to authenticated users with these roles
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if true, the file will be shared , which makes the file
         *       visible to authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if true, the file will be published , which makes the
         *       file visible to authenticated and anonymous users
         *    </dd>
         *
         *    <dt>newversion</dt>
         *    <dd>
         *       (optional) if true, the new file will be renamed to avoid overwriting
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryStore: function(config, callback) {
            return this.io('/r/project/directory/store', config, callback);
        },

        /**
         * This call loads a file from the repository into the working directory for
         * the specified project.
         *
         * @method projectDirectoryLoad
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies the repository file name</dd>
         *
         *    <dt>author</dt>
         *    <dd>specifies the author name</dd>
         *
         *    <dt>version</dt>
         *    <dd>(optional) specifies the repository file version</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryLoad: function(config, callback) {
            return this.io('/r/project/directory/load', config, callback);
        },

        /**
         * This call downloads the working directory contents for the specified
         * project.
         *
         * By specifying a single value for the filename parameter, the caller can
         * download a specific file. By specifying multiple values for the filename
         * parameter, the caller can download a zip archive of those files. By
         * omitting the filename parameter, then the caller can download a zip archive
         * with all of the files in the working directory.
         *
         * @method projectDirectoryDownload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>(optional) specifies comma-separated file names for download</dd>
         *
         *    <dt>inline</dt>
         *    <dd>
         *       (optional) if true, the Content-Disposition response header
         *       indicating attachment is omitted
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryDownload: function(config, callback) {
            return this.io('/r/project/directory/download', config, callback);
        },

        /**
         * This call deletes files from the working directory for the specified
         * project.
         *
         * @method projectDirectoryDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>specifies a comma-separated list of file names for deletion</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectDirectoryDelete: function(config, callback) {
            return this.io('/r/project/directory/delete', config, callback);
        },

        /////////////////////////////////////
        // Project Package APIs
        /////////////////////////////////////

        /**
         * This call lists R package dependencies for the specified project.
         *
         * @method projectPackageList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>installed</dt>
         *    <dd>
         *       if true, response lists all packages installed in project environment
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPackageList: function(config, callback) {
            return this.io('/r/project/package/list', config, callback);
        },

        /**
         * This call attaches R package dependencies for the specified project.
         *
         * @method projectPackageAttach
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies a comma-separated list of R package names to attach</dd>
         *
         *    <dt>repo</dt>
         *    <dd>(optional) specifies R repository location for named packages</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPackageAttach: function(config, callback) {
            return this.io('/r/project/package/attach', config, callback);
        },

        /**
         * This call detaches R package dependencies for the specified project.
         *
         * @method projectPackageDetach
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>name</dt>
         *    <dd>specifies a comma-separated list of R package names to detach</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        projectPackageDetach: function(config, callback) {
            return this.io('/r/project/package/detach', config, callback);
        },

        /////////////////////////////////////
        // User APIs
        /////////////////////////////////////

        /**
         * This call signs the user in by authenticating the credentials with the
         * RevoDeployR server.
         *
         * @method userLogin
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>username</dt>
         *    <dd>specifies the username</dd>
         *
         *    <dt>password</dt>
         *    <dd>specifies the password</dd>
         *
         *    <dt>disableautosave</dt>
         *    <dd>
         *       (optional) when true, disables autosave semantics for persistent
         *       projects
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        userLogin: function(config, callback) {
            return this.io('/r/user/login', config, callback);            
        },

        /**
         * This call signs out the currently authenticated user.
         *
         * @method userLogout
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>usercookie</dt>
         *    <dd>
         *       (optional) when specified, value sets application-specific persistent
         *       user cookie, which is retrievable on response to
         *       <a href="#method_userLogin">userLogin</a> call.
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        userLogout: function(config, callback) {
            return this.io('/r/user/logout', config, callback);            
        },

        /**
         * This call retrieves details about the currently authenticated user. The
         * details returned in the response markup on this call are exactly the same
         * details as those returned in the response markup on the
         * <a href="#method_userLogin">userLogin</a> call.
         *
         * @method userAbout
         * @static
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        userAbout: function(callback) {            
            return this.io('/r/user/about', {}, callback);
        },

        /**
         * This call enables or disables the autosave semantics on persistent projects
         * for the duration of the current users HTTP session. By default, all live
         * persistent projects are autosaved under the following conditions:
         *
         * <ul>
         *    <li>
         *       When a user closes a project using the
         *       <a href="#method_projectClose">projectClose</a> call.
         *    </li>
         *    <li>
         *       When a user signs-out using the
         *       <a href="#method_userLogout">userLogout</a> call.
         *    </li>
         *    <li>
         *       When a user is automatically signed-out by the system after a
         *       prolonged period of inactivity.
         *    </li>
         * </ul>
         *
         * When the autosave feature is disabled a user must make an explicit call on
         * <a href="#method_projectSave">projectSave</a> in order to save a project.
         *
         * @method userAutosave
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>enable</dt>
         *    <dd>(optional) toggles autosave semantics for persistent projects.</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        userAutosave: function(config, callback) {
            return this.io('/r/user/autosave', config, callback);
        },

        /////////////////////////////////////
        // Repository Script APIs
        /////////////////////////////////////

        /**
         * This call lists repository-managed scripts.
         *
         * This call is available to authenticated and anonymous users. However, if
         * the caller is an anonymous user then only published scripts will be
         * returned in the response markup.
         *
         * @method repositoryScriptList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) when specified, call returns list of script versions for
         *       filename
         *   </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files that are restricted but
         *       visible or shared by other users are included in the response markup
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, scripts published by other users are
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryScriptList: function(callback) {            
            return this.io('/r/repository/script/list', {}, callback);
        },
        /**
         * This call executes repository-managed scripts or external scripts on an
         * Anonymous Project.
         *
         * To execute a single repository-managed script the caller must provide
         * parameter values for filename, author and optionally version. To execute a
         * chain of repository-managed scripts the caller must provide a
         * comma-separated list of values on the filename , author and optionally
         * version parameters.
         *
         * To execute a single external script the caller must provide a valid URL
         * or file path using the externalsource parameter. To execute a chain of
         * external scripts the caller must provide a comma-separated list of
         * values on the externalsource parameter. Note, to execute an external script
         * the caller must have POWER_USER privileges so this feature is not available
         * to anonymous users on this call.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session, with execution occuring in
         * the order specified on the parameter list.
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The robjects parameter allows the caller to specify a comma-separated
         *       list of object names that will be returned as RevoDeployR-encoded R
         *       objects on the response markup after the execution completes.
         *    </li>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The infinity , nan and encodeDataFramePrimitiveAsVector parameters
         *       allow the caller to control how RevoDeployR-encoded R object data is
         *       encoded in the response markkup.
         *    </li>
         * </ol>
         *
         *  <strong>
         *     Some key data indicated in the response markup on this call:
         *  </strong>
         *
         *  <ol>
         *    <li>
         *       console - indicates the console output resulting from the code
         *       execution
         *    </li>
         *    <li>
         *       results - indicates the list of files generated by the R graphics
         *       device
         *    </li>
         *    <li>
         *       artifacts - indicates the list of files generated or modified in the
         *       working directory
         *    </li>
         *    <li>
         *       objects -  indicates the list of R objects returned from the
         *       workspace
         *    </li>
         *    <li>
         *       files - indicates the list of files and objects stored in the
         *       repository after the execution completes
         *    </li>
         *    <li>interrupted - indicates the interrupted status of execution</li>
         *    <li>error - on failure, indicates the reason for failure</li>
         *    <li>errorCode - on failure, indicates the error code for failure</li>
         * </ol>
         * @method repositoryScriptExecute
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>comma-separated list of repository-managed script filenames</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) comma-separated list of repository-managed directories for
         *       scripts, defaults to root
         *    </dd>
         *
         *    <dt>author</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-filename</dd>
         *
         *    <dt>version</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-filename</dd>
         *
         *    <dt>externalsource</dt>
         *    <dd>(optional) comma-separated list of URLs or file paths to external scripts</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *    <dt>blackbox</dt>
         *      <dd>
         *       (optional) if true, the execution will occur on the HTTP blackbox
         *       project for the current HTTP session
         *    </dd>
         *
         *      <dt>recycle</dt>
         *      <dd>
         *       (optional) if true, recycles the R session associated with the HTTP
         *       blackbox project on the current HTTP session
         *    </dd>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>(optional) </dd>
         *
         *    <dt>graphics</dt>
         *    <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *    <dt>graphicswidth</dt>
         *    <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *    <dt>graphicsheight</dt>
         *    <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *    <dt>robjects</dt>
         *    <dd>(optional) specifies a comma-separated list of objects for retrieval following the execution</dd>
         *
         *    <dt>storefile</dt>
         *    <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *    <dt>storeobject</dt>
         *    <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *    <dt>storeworkspace</dt>
         *    <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *    <dt>storenewversion</dt>
         *    <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *    <dt>storepublic</dt>
         *    <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *    <dt>infinity</dt>
         *    <dd>
         *       (optional) specifies custom value for Infinity appearing in R object
         *       data returned on call, otherwise Infinity is represented by
         *       <code>0x7ff0000000000000L</code>
         *    </dd>
         *
         *    <dt>nan</dt>
         *    <dd>
         *       (optional) specifies custom value for NaN appearing in R object data
         *       returned on call, otherwise NaN is represented by <code>null</code>
         *    </dd>
         *
         *    <dt>encodeDataFramePrimitiveAsVector</dt>
         *    <dd>
         *       (optional) if <code>true</code>, data.frame primitives are encoded
         *       vectors in R object data returned on call
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryScriptExecute: function(config, callback) {            
            return this.io('/r/repository/script/execute', config, callback);
        },


        /**
         * This call executes repository-managed scripts or external scripts on an
         * Anonymous Project and returns a simple HTML page that displays the results
         * generated on the execution.
         *
         * On a successful execution, the HTML page will display the following data
         * when available on the response:
         *
         * <ul>
         *    <li>R console output</li>
         *    <li>R workspace object data</li>
         *    <li>R generated plots</li>
         *    <li>Links to R working directory artifacts</li>
         *    <li>Links to Repository stored artifacts</li>
         * </ul>
         *
         * On a failed execution, the HTML page will display an error message
         * indicating the cause of the failure and when available, R console output.
         *
         * The API call makes it very simple to integrate outputs generated by
         * RevoDeployR-managed R scripts into any third-party application. It can also
         * be used as a very simple test and debugging aid for R script and
         * application developers.
         *
         * To execute a single repository-managed script the caller must provide
         * parameter values for filename , author and optionally version . To execute
         * a chain of repository-managed scripts the caller must provide a
         * comma-separated list of values on the filename , author and optionally
         * version parameters.
         *
         * To execute a single external script the caller must provide a valid URL or
         * file path using the externalsource parameter. To execute a chain of
         * external scripts the caller must provide a comma-separated list of values
         * on the externalsource parameter. Note, to execute an external script the
         * caller must have POWER_USER privileges so this feature is not available to
         * anonymous users on this call.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session, with execution occuring in
         * the order specified on the parameter list.
         *
         * Please note the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The csvinputs parameter allows the caller to pass R object primitive
         *       values as comma-separated name/value pairs. These inputs are turned
         *       into R objects in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The robjects parameter allows the caller to specify a comma-separated
         *       list of object names that will be returned as RevoDeployR-encoded R
         *       objects on the response markup after the execution completes.
         *    </li>
         *    <li>
         *       The storefile parameter allows the caller to specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller to specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         *    <li>
         *      The infinity , nan and encodeDataFramePrimitiveAsVector parameters
         *      allow the caller to control how RevoDeployR-encoded R object data is
         *      encoded in the response markkup.
         *    </li>
         * </ol>
         *
         * <strong>Some key data indicated in the response markup on this call:</strong>
         *
         * <ol>
         *    <li>
         *       console - indicates the R console output resulting from the execution
         *    </li>
         *    <li>
         *       results - indicates the list of files generated by the R graphics
         *       device
         *    </li>
         *    <li>
         *       artifacts - indicates the list of files generated or modified in the
         *       working directory
         *    </li>
         *    <li>
         *       objects -  indicates the list of R objects returned from the
         *       workspace
         *    </li>
         *    <li>
         *       files - indicates the list of files and objects stored in the
         *       repository after the execution completes
         *    </li>
         *    <li>
         *       interrupted - indicates the interrupted status of execution
         *    </li>
         *    <li>
         *       error - on failure, indicates the reason for failure
         *    </li>
         *    <li>
         *       errorCode - on failure, indicates the error code for failure
         *    </li>
         * </ol>
         *
         * @method repositoryScriptRender
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>project</dt>
         *    <dd>specifies the project identifier</dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of repository-managed script
         *       filenames
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) comma-separated list of repository-managed directories for
         *       scripts, defaults to root
         *    </dd>
         *
         *    <dt>author</dt>
         *    <dd>
         *       (optional) comma-separated list of authors, one author per filename
         *    </dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) comma-separated list of versions, one version per filename
         *    </dd>
         *
         *    <dt>externalsource</dt>
         *    <dd>
         *       (optional) comma-separated list of URLs or file paths to external
         *       scripts
         *    </dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *      <dt>blackbox</dt>
         *      <dd>(optional) if true, the execution will occur on the HTTP blackbox project for the current HTTP session</dd>
         *
         *      <dt>recycle</dt>
         *      <dd>(optional) if true, recycles the R session associated with the HTTP blackbox project on the current HTTP session</dd>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>(optional) if true R commands will not appear in the console output</dd>
         *
         *    <dt>consoleoff</dt>
         *    <dd>(optional) if true console output is not returned in the response markup</dd>
         *
         *    <dt>graphics</dt>
         *    <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *    <dt>graphicswidth</dt>
         *    <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *    <dt>graphicsheight</dt>
         *    <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *    <dt>robjects</dt>
         *    <dd>(optional) specifies a comma-separated list of objects for retrieval following the execution</dd>
         *
         *    <dt>storefile</dt>
         *    <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *    <dt>storeobject</dt>
         *    <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *    <dt>storeworkspace</dt>
         *    <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *    <dt>storenewversion</dt>
         *    <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *    <dt>storepublic</dt>
         *    <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *    <dt>infinity</dt>
         *    <dd>
         *       (optional) specifies custom value for Infinity appearing in R object
         *       data returned on call, otherwise Infinity is represented by
         *       0x7ff0000000000000L
         *    </dd>
         *
         *    <dt>nan</dt>
         *    <dd>
         *       (optional) specifies custom value for NaN appearing in R object data
         *       returned on call, otherwise NaN is represented by null
         *    </dd>
         *
         *    <dt>encodeDataFramePrimitiveAsVector</dt>
         *    <dd>
         *       (optional) if true, data.frame primitives are encoded vectors in R
         *       object data returned on call
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryScriptRender: function(config, callback) {
            return this.io('/r/repository/script/render', config, callback);
        },

        /**
         * This call interrupts the current execution on the HTTP Blackbox project
         * associated with the current HTTP session.
         *
         * @method repositoryScriptInterrupt
         * @static
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryScriptInterrupt: function(callback) {            
            return this.io('/r/repository/script/interrupt', config, callback);
        },

        /////////////////////////////////////
        // Repository File APIs
        /////////////////////////////////////

        /**
         * This call lists repository-managed files.
         *
         * @method repositoryFiletList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) when specified, call returns list of script versions for
         *       filename
         *   </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files that are restricted but
         *       visible or shared by other users are included in the response markup
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, scripts published by other users are
         *       included in the response markup
         *    </dd>
         *
         *    <dt>categoryFilter</dt>
         *    <dd>
         *       (optional) when specified list of files in response markup is limited
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileList: function(config, callback) {            
            return this.io('/r/repository/file/list', config, callback);
        },
        /**
         * This call uploads a file from the user's computer to the repository.
         *
         * @method repositoryFileUpload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>file</dt>
         *    <dd>...file content...</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to associate with the uploaded file</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>tags</dt>
         *    <dd>(optional) specifies tag words to associate with the repository file</dd>
         *
         *    <dt>restricted</dt>
         *    <dd>(optional) (optional) comma-separated list of role names, which makes the file visible to authenticated users with these roles</dd>
         *
         *     <dt>shared</dt>
         *     <dd>(optional) if true, the file will be shared which makes the file visible to authenticated users</dd>
         *
         *    <dt>published</dt>
         *    <dd>(optional) if true, the file will be published which makes the file visible to authenticated and anonymous users</dd>
         *
         *    <dt>newversion</dt>
         *    <dd>(optional) if true, the repository will create new version rather than overwrite</dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>(optional) if newversion is true, message to associate with new version</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) specifies the inputs property on a repository-managed script</dd>
         *
         *    <dt>outputs</dt>
         *    <dd>(optional) specifies the outputs property on a repository-managed script</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileUpload: function(config, callback) {
            config.format = "text";
            var ioConfig = {
                data: config,
                method: "POST",
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/repository/file/upload', config, callback);
        },

        /**
         * This call transfers a file from a URL to the repository.
         *
         * @method repositoryFileTransfer
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>url</dt>
         *    <dd>specifies a url of the file to upload</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to associate with the uploaded file</dd>
         *
         *    <dt>tags</dt>
         *    <dd>(optional) specifies tag words to associate with the repository file</dd>
         *
         *    <dt>restricted</dt>
         *    <dd>(optional) (optional) comma-separated list of role names, which makes the file visible to authenticated users with these roles</dd>
         *
         *     <dt>shared</dt>
         *     <dd>(optional) if true, the file will be shared which makes the file visible to authenticated users</dd>
         *
         *    <dt>published</dt>
         *    <dd>(optional) if true, the file will be published which makes the file visible to authenticated and anonymous users</dd>
         *
         *    <dt>newversion</dt>
         *    <dd>(optional) if true, the repository will create new version rather than overwrite</dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>(optional) if newversion is true, message to associate with new version</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) specifies the inputs property on a repository-managed script</dd>
         *
         *    <dt>outputs</dt>
         *    <dd>(optional) specifies the outputs property on a repository-managed script</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileTransfer: function(config, callback) {
            return this.io('/r/repository/file/transfer', config, callback);
        },

        /**
         * This call writes a text file to the repository.
         *
         * @method repositoryFileWrite
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>text</dt>
         *    <dd>specifies the text content of the file to upload</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>
         *       (optional) specifies a description to associate with the uploaded
         *       file
         *    </dd>
         *
         *    <dt>tags</dt>
         *    <dd>
         *       (optional) specifies tag words to associate with the repository file
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) (optional) comma-separated list of role names, which makes
         *       the file visible to authenticated users with these roles
         *    </dd>
         *
         *    <dt>share</dt>
         *    <dd>
         *       (optional) if true, ile is shared and visible to authenticated users
         *    </dd>
         *
         *    <dt>publish</dt>
         *    <dd>
         *       (optional) if true, the file will be published which makes the file
         *       visible to authenticated and anonymous users
         *    </dd>
         *
         *    <dt>newversion</dt>
         *    <dd>
         *       (optional) if true, the repository will create new version rather
         *       than overwrite
         *    </dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>
         *       (optional) if newversion is true, message to associate with new
         *       version
         *    </dd>
         *
         *    <dt>inputs</dt>
         *    <dd>
         *       (optional) specifies the inputs property on a repository-managed
         *       script
         *    </dd>
         *
         *    <dt>outputs</dt>
         *    <dd>
         *       (optional) specifies the outputs property on a repository-managed
         *       script
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileWrite: function(config, callback) {
            return this.io('/r/repository/file/write', config, callback);
        },

        /**
         * This call updates the properties on a repository-managed file.
         *
         * @method repositoryFileUpdate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to associate with the uploaded file</dd>
         *
         *    <dt>tags</dt>
         *    <dd>(optional) specifies tag words to associate with the repository file</dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) (optional) comma-separated list of role names, which makes
         *       the file visible to authenticated users with these roles
         *    </dd>
         *
         *     <dt>shared</dt>
         *     <dd>(optional) if true, the file will be shared which makes the file visible to authenticated users</dd>
         *
         *    <dt>published</dt>
         *    <dd>(optional) if true, the file will be published which makes the file visible to authenticated and anonymous users</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) specifies the inputs property on a repository-managed script</dd>
         *
         *    <dt>outputs</dt>
         *    <dd>(optional) specifies the outputs property on a repository-managed script</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileUpdate: function(config, callback) {
            return this.io('/r/repository/file/update', config, callback);
        },

        /**
         * This call reverts the current working copy of a file to a specific version
         * found in the files version history.
         *
         * @method repositoryFileRevert
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies name of the file to upload</dd>
         *
         *    <dt>version</dt>
         *    <dd>specifies the repository file version to revert into the current working copy</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) specifies a description to associate with the uploaded file</dd>
         *
         *    <dt>restricted</dt>
         *    <dd>(optional) (optional) comma-separated list of role names, which makes the file visible to authenticated users with these roles</dd>
         *
         *     <dt>shared</dt>
         *     <dd>(optional) if true, the file will be shared which makes the file visible to authenticated users</dd>
         *
         *    <dt>published</dt>
         *    <dd>(optional) if true, the file will be published which makes the file visible to authenticated and anonymous users</dd>
         *
         *    <dt>newversion</dt>
         *    <dd>(optional) if true, the repository will create new version rather than overwrite</dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>(optional) if newversion is true, message to associate with new version</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) specifies the inputs property on a repository-managed script</dd>
         *
         *    <dt>outputs</dt>
         *    <dd>(optional) specifies the outputs property on a repository-managed script</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileRevert: function(config, callback) {
            return this.io('/r/repository/file/revert', config, callback);
        },

        /**
         * This call generates a diff between the current working copy of a file and
         * a specific version found in the files version history.
         *
         * @method repositoryFileDiff
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies the repository file name</dd>
         *
         *    <dt>author</dt>
         *    <dd>specifies the repository file author</dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       specifies the repository file version to diff against the current
         *       working copy
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileDiff: function(config, callback) {
            return this.io('/r/repository/file/diff', config, callback);
        },

        /**
         * This call grants ownership rights on a file to one or more authenticated
         * users.
         *
         * Note, unlike most repository APIs that require both filename and author
         * parameters, there is no explicit author parameter on this call. The author
         * is understood to be the caller.
         *
         * @method repositoryFileGrant
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>filename</dt>
         *    <dd>specifies the name of the repository file</dd>
         *
         *    <dt>newauthor</dt>
         *    <dd> specifies a comma-separated list of grantee usernames</dd>
         *
         *    <dt>revokeauthor</dt>
         *    <dd>
         *       (optional) specifies a comma-separated list of revokee usernames
         *    </dd>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileGrant: function(config, callback) {
            return this.io('/r/repository/file/grant', config, callback);
        },

        /**
         * This call downloads a repository-managed file.
         *
         * @method repositoryFileDownload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *      <dt>author</dt>
         *      <dd>specifies the repository author</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *      <dt>version</dt>
         *      <dd>(optional) specifies the repository file version</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileDownload: function(config, callback) {
            return this.io('/r/repository/file/download', config, callback);
        },

        /**
         * This call deletes a file from the repository.
         *
         * @method repositoryFileDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileDelete: function(config, callback) {
            return this.io('/r/repository/file/delete', config, callback);
        },

        /**
         * This call fetches the latest meta-data on a file in the repository.
         *
         * @method repositoryFileFetch
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>author</dt>
         *    <dd>
         *       (optional) specifies the repository file author
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) specifies the repository file version
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileFetch: function(config, callback) {
            return this.io('/r/repository/file/fetch', config, callback);
        },

        /**
         * This call copies one or more repository-managed files to the destination
         * directory.
         *
         * If the destination directory already contains a filename matching an
         * incoming filename, then a new version of the file is automatically created.
         *
         * @method repositoryFileCopy
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the name of the destination user directory in
         *       the repository
         *    </dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) specifies the repository file version
         *    </dd>
         *
         *    <dt>filerename</dt>
         *    <dd>
         *       (optional) comma-separated list of new filenames for copied files
         *       identified on filename parameter
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileCopy: function(config, callback) {            
            return this.io('/r/repository/file/copy', config, callback);
        },

        /**
         * This call moves one or more repository-managed files to the destination
         * directory.
         *
         * If the destination directory already contains a filename matching an
         * incoming filename, then a new version of the file is automatically created.
         *
         * @method repositoryFileMove
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *      <dt>filename</dt>
         *      <dd>specifies the repository file name</dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the name of the destination user directory in
         *       the repository
         *    </dd>
         *
         *    <dt>version</dt>
         *    <dd>
         *       (optional) specifies the repository file version
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryFileMove: function(config, callback) {            
            return this.io('/r/repository/file/move', config, callback);
        },

        /////////////////////////////////////
        // Repository Directory APIs
        /////////////////////////////////////

        /**
         * This call lists repository-managed directories.
         * By default, a list of the caller's user directories ( root and custom ) are
         * returned in the response markup.
         *
         * If the userfiles parameter is specified, the files in all of the caller's
         * user directories are listed in the response markup. Note, depending on the
         * number of files owned by the caller, when this parameter is enabled the
         * response markup returned on this call can be a verbose.
         *
         * If the directory parameter is specified then only the files in the
         * directory indicated are returned in the response markup.
         *
         * Additional parameters are provided to return files in the caller's archived
         * directories and/or files in the Restricted , Shared and Public system
         * directories.
         *
         * Note: The metadata property in the response markup on this call is provided
         * as a convenience for client application developers. It provides a complete
         * list fo the user directories available to the current caller.
         *
         * @method repositoryDirectoryList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>userfiles</dt>
         *    <dd>
         *       (optional) if specified, files in all user directories are listed in
         *       the response markup
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>archived</dt>
         *    <dd>
         *       (optional) if true, files found in archived directories are included
         *       in the response markup
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if true, files that are restricted but visible or shared
         *       by other users are included in the response markup
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if true, files that are published by other users are
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryList: function(config, callback) {            
            return this.io('/r/repository/directory/list', config, callback);
        },

        /**
         * This call creates a repository-managed custom directory.
         *
         * If the name of the new custom directory is already in use by the caller the
         * response markup will indicate an appropriate error.
         *
         * @method repositoryDirectoryList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryCreate: function(config, callback) {            
            return this.io('/r/repository/directory/create', config, callback);
        },

        /**
         * This call renames an existing repository-managed user directory
         * ( custom or archived ). When renaming a user directory, all files in the
         * source directory are automatically moved to the destination directory. If
         * the destination directory already exists the call will be rejected and the
         * response markup will indicate an appropriate error.
         *
         * You can use this call to convert an archived directory back into a custom
         * directory, essentially unarchiving the archived directory.
         *
         * Note: You can not rename the root directory. To move files from the root
         * directory use the /r/repository/directory/move call.
         *
         * <strong>Important:</strong>
         *
         * This call will only move files that are owned by a single author to the
         * destination directory. If a repository-managed file in the source directory
         * has multiple authors, as a result of collaboration using the
         * /r/repository/file/grant call, the file will not be moved to the
         * destination directory and a warning to that affect will be indicated in the
         * response markup.
         *
         * @method repositoryDirectoryRename
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryRename: function(config, callback) {           
            return this.io('/r/repository/directory/rename', config, callback);
        },

        /** 
         * This call copies one or more repository-managed files from a source user
         * directory to a destination user directory.
         *
         * If the filename parameter is specified, only those files indicated on that
         * parameter are copied. Otherwise, all files in the source directory are
         * copied.
         *
         * To ensure copying files does not accidentally overwrite any existing files
         * in the destination directory, all copied files are created as new versions
         * in the destination directory.
         *
         * @method repositoryDirectoryCopy
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         *
         *    <dt>filerename</dt>
         *    <dd>
         *       (optional) comma-separated list of new filenames for copied files
         *       identified on filename parameter
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryCopy: function(config, callback) {            
            return this.io('/r/repository/directory/copy', config, callback);
        },

        /**
         * This call moves one or more repository-managed files from a source user
         * directory to a destination user directory.
         *
         * If the filename parameter is specified, only those files indicated on that
         * parameter are moved. Otherwise, all files in the source directory are moved.
         *
         * To ensure moving files does not accidentally overwrite any existing files
         * in the destination directory, all moved files are created as new versions
         * in the destination directory.
         *
         * <strong>Important:</strong>
         *
         * This call will only move files that are owned by a single author to the
         * destination directory. If a repository-managed file in the source directory
         * has multiple authors, as result of collaboration using the
         * /r/repository/file/grant call, the file will not be moved to the
         * destination directory and a warning to that affect will be indicated in the
         * response markup.
         *
         * @method repositoryDirectoryMove
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>destination</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryMove: function(config, callback) {            
            return this.io('/r/repository/directory/move', config, callback);
        },

        /**
         * This call updates repository-managed file access controls by directory.
         *
         * If the filename parameter is specified, only those files indicated on that
         * parameter are updated. Otherwise, all files in the source directory are
         * updated.
         *
         * @method repositoryDirectoryUpdate
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are shared and visible to
         *       authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are published and visible to
         *       authenticated and anonymous users
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryUpdate: function(config, callback) {
            return this.io('/r/repository/directory/update', config, callback);
        },

        /**
         * This call archives one or more repository-managed files from a source user
         * directory ( root or custom ) to an archive directory.
         *
         * If the value of the archive parameter indicates an existing archive
         * directory then the files in the source directory are added to the existing
         * archive. Otherwise, a new archive directory is automatically created on
         * behalf of the caller. Archived directories automatically have a .archive
         * postfix appended to their name if it is not supplied on the archive
         * parameter value.
         *
         * If all of the files in the source directory are successfully archived, the
         * source directory is automatically deleted from the repository. If the
         * source directory was root , an empty root directory is preserved. If any of
         * the files in the source directory are skipped or can not be archived (see
         * following note), those files and the source directory are preserved.
         *
         * <strong>Important:</strong>
         *
         * This call will only archive files that are owned by a single author to the
         * destination directory. If a repository-managed file in the source directory
         * has multiple authors, as a result of collaboration using the
         * /r/repository/file/grant call, the file will not be archived to the
         * destination directory and a warning to that affect will be indicated in the
         * response markup.
         *
         * @method repositoryDirectoryArchive
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are shared and visible to
         *       authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are published and visible to
         *       authenticated and anonymous users
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryArchive: function(config, callback) {

            return this.io('/r/repository/directory/archive', config, callback);
        },

        /**
         * This call uploads a set of files in a zip archive into an existing
         * repository-managed user directory ( root , custom or archived ).
         *
         * @method repositoryDirectoryUpload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>file</dt>
         *    <dd>
         *       ...zip archive file content...
         *    </dd>
         *
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>descr</dt>
         *    <dd>
         *       (optional) specifies a description to associate with the uploaded file
         *    </dd>
         *
         *    <dt>tags</dt>
         *    <dd>
         *       (optional) specifies tag words to associate with the repository file
         *    </dd>
         *
         *    <dt>restricted</dt>
         *    <dd>
         *       (optional) specifies the new name for the destination custom directory
         *    </dd>
         *
         *    <dt>shared</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are shared and visible to
         *       authenticated users
         *    </dd>
         *
         *    <dt>published</dt>
         *    <dd>
         *       (optional) if <code>true</code>, files are published and visible to
         *       authenticated and anonymous users
         *    </dd>
         *
         *    <dt>newversion</dt>
         *    <dd>
         *       (optional) if <code>true</code>, the repository will create new
         *       version rather than overwrite
         *    </dd>
         *
         *    <dt>newversionmsg</dt>
         *    <dd>
         *       (optional) if newversion is true, message to associate with new
         *       version
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryUpload: function(config, callback) {
            config = config || {};
            config.format = 'text';
            var ioConfig = {
                data: config,
                method: 'POST',
                form: {
                    id: config.formId
                },
                on: callback
            };
            return this.io('/r/repository/directory/upload', config, callback);
        },

        /**
         * This call downloads one or more repository-managed files from a directory
         * in the repository. The response type on this call is a zip archive file.
         *
         * If the filename parameter is specified, only those files indicated on that
         * parameter are downloaded. Otherwise, all files in the source directory are
         * downloaded.
         *
         * @method repositoryDirectoryDownload
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         *
         *    <dt>filename</dt>
         *    <dd>
         *       (optional) comma-separated list of filenames to be copied. If omitted,
         *       all files in the source directory are copied
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryDownload: function(config, callback) {            
            return this.io('/r/repository/directory/download', config, callback);
        },

        /**
         * This call deletes a repository-managed user directory ( root , custom or
         * archived ).
         *
         * When deleting a user directory, all files in the directory are
         * automatically deleted along with the directory. If the target directory is
         * root, an empty root directory is preserved.
         *
         * @method repositoryDirectoryDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>directory</dt>
         *    <dd>
         *       (optional) specifies the target repository directory, defaults to root
         *       included in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        repositoryDirectoryDelete: function(config, callback) {
            return this.io('/r/repository/directory/delete', config, callback);
        },

        /////////////////////////////////////
        // Job APIs
        /////////////////////////////////////

        /**  
         * This call lists jobs for the currently authenticated user.
         *
         * The openonly parameter allows the caller to see only those jobs in an open
         * state. The set of job open states are shown here:
         *
         * <ul>
         *  <li>Scheduled : job is scheduled but not yet queued for running.</li>
         *  <li>Queued : job is queued for running.</li>
         *  <li>Running : job is running.</li>
         * </ul>
         *
         * <blockquote>
         *    Important! Any open job can be cancelled using the
         *    <a href="#method_jobCancel">jobCancel</a> call.
         * </blockquote>
         *
         * @method jobList
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>openonly</dt>
         *    <dd>
         *       (optional) if true, only jobs in an open-state are listed in the
         *       response markup
         *    </dd>
         *
         *    <dt>extended</dt>
         *    <dd>
         *       (optional) If true, additional data properties describing each job
         *       are listed in the response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobList: function(config, callback) {
            return this.io('/r/job/list', config, callback);
        },

        /**
         * This call submits a job for background execution on behalf of the user.
         *
         * To submit the execution of an arbitrary block of R code the caller must
         * provide a value on the code parameter.
         *
         *
         * To submit the execution of a single repository-managed script the caller
         * must provide parameter values for rscriptname , rscriptauthor and
         * optionally rscriptversion . To submit the execution of a chain of
         * repository-managed scripts the caller must provide a comma-separated list
         * of values on the rscriptname,, _rscriptauthor and optionally rscriptversion
         * parameters.
         *
         *
         * To submit the execution of a single external script the caller must
         * provide a valid URL or file path using the externalsource parameter. To
         * submit the execution of a chain of external scripts the caller must
         * provide a comma-separated list of values on the externalsource parameter.
         * Note, to submit the execution of an external script the caller must have
         * POWER_USER privileges.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session for the job, with execution
         * occuring in the order specified on the parameter list.
         *
         * Please not the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storenoproject parameter allows the caller to skip the
         *       persistence-to-project step after the execution.
         *    </li>
         * </ol>
         *
         * @method jobSubmit
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>name</dt>
         *    <dd>job name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) job description</dd>
         *
         *    <dt>code</dt>
         *    <dd>(optional) R code to execute on job</dd>
         *
         *      <dt>rscriptname</dt>
         *      <dd>(optional) comma-separated list of repository-managed script filenames</dd>
         *
         *    <dt>rscriptdirectory</dt>
         *    <dd>(optional) comma-separated list of repository-managed directories for scripts, defaults to root</dd>
         *
         *      <dt>rscriptauthor</dt>
         *      <dd>(optional) comma-separated list of authors, author-per-rscriptname</dd>
         *
         *      <dt>rscriptversion</dt>
         *      <dd>(optional) comma-separated list of versions, version-per-rscriptname</dd>
         *
         *      <dt>externalsource</dt>
         *      <dd>(optional) comma-separated list of URLs or file paths to external scripts</dd>
         *
         *      <dt>inputs</dt>
         *      <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *      <dt>preloadfilename</dt>
         *      <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *      <dt>preloadfileauthor</dt>
         *      <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *      <dt>preloadfileversion</dt>
         *      <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *      <dt>preloadobjectname</dt>
         *      <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *      <dt>preloadobjectauthor</dt>
         *      <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *      <dt>preloadobjectversion</dt>
         *      <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *      <dt>adoptworkspace</dt>
         *      <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *      <dt>adoptdirectory</dt>
         *      <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *      <dt>adoptpackages</dt>
         *      <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *      <dt>priority</dt>
         *      <dd>(optional) specifies the scheduling priority for the job: low (default), medium or high</dd>
         *
         *      <dt>tag</dt>
         *      <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *      <dt>echooff</dt>
         *      <dd>
         *       (optional) if true R commands will not appear in the console output
         *       saved on the project execution history for the job
         *    </dd>
         *
         *      <dt>graphics</dt>
         *      <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *      <dt>graphicswidth</dt>
         *      <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *      <dt>graphicsheight</dt>
         *      <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *      <dt>storefile</dt>
         *      <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *      <dt>storeobject</dt>
         *      <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *      <dt>storeworkspace</dt>
         *      <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *      <dt>storenewversion</dt>
         *      <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *      <dt>storepublic</dt>
         *      <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *      <dt>storenoproject</dt>
         *      <dd>(optional) if <code>true</code>, no project persistence following job execution</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobSubmit: function(config, callback) {            
            return this.io('/r/job/submit', config, callback);
        },

        /**
         * This call schedules a job for background execution on behalf of the user.
         *
         * The schedstart parameter identifies the start time for the job. This
         * parameter value is specified as UTC in milliseconds. The schedrepeat
         * parameter indicates the number of times the job is to be repeated, and if
         * omitted the job is executed just once. The schedinterval parameter
         * indicates the interval, measured in milliseconds, between repeat
         * executions.
         *
         * To schedule the execution of an arbitrary block of R code the caller
         * must provide a value on the code parameter.
         *
         * To schedule the execution of a single repository-managed script the
         * caller must provide parameter values for rscriptname , rscriptauthor and
         * optionally rscriptversion . To schedule the execution of a chain of
         * repository-managed scripts the caller must provide a comma-separated list
         * of values on the rscriptname,, _rscriptauthor and optionally rscriptversion
         * parameters.
         *
         * To schedule the execution of a single external script the caller must
         * provide a valid URL or file path using the externalsource parameter. To
         * schedule the execution of a chain of external scripts the caller must
         * provide a comma-separated list of values on the externalsource parameter.
         * Note, to schedule the execution of an external script the caller must
         * have POWER_USER privileges.
         *
         * Note: A chained execution executes each of the scripts identified on the
         * call in a sequential fashion on the R session for the job, with
         * execution occuring in the order specified on the parameter list.
         *
         * Please not the following pre and post execution parameters:
         *
         * <strong>Pre-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The inputs parameter allows the caller to pass RevoDeployR-encoded
         *       R object values as inputs. These inputs are turned into R objects
         *       in the workspace before the execution begins.
         *    </li>
         *    <li>
         *       The preloadfile parameters allows the caller to load one or more
         *       files from the repository into the working directory before the
         *       execution begins.
         *    </li>
         *    <li>
         *       The preloadobject parameters allow the caller to load one or more
         *       binary R objects (.rData) from the repository into the workspace
         *       before the execution begins.
         *    </li>
         *    <li>
         *       The adopt parameters allow the caller to load a pre-existing
         *       project workspace, project working directory and/or project package
         *       dependencies before the execution begins.
         *    </li>
         * </ol>
         *
         * <strong>Post-execution parameters:</strong>
         *
         * <ol>
         *    <li>
         *       The storefile parameter allows the caller specify a comma-separated
         *       list of working directory files to be stored in the repository after
         *       the execution completes.
         *    </li>
         *    <li>
         *       The storeobject parameter allows the caller specify a comma-separated
         *       list of workspace objects to be stored in the repository after the
         *       execution completes.
         *    </li>
         *    <li>
         *       The storeworkspace parameter allows the caller to store the entire
         *       workspace in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storedirectory parameter allows the caller to specify a target
         *       repository directory for stored files and objects after the execution
         *       completes.
         *    </li>
         *    <li>
         *       The storenewversion parameter allows the caller to create new
         *       versions of each stored file in the repository after the execution
         *       completes. By default, stored files overwrite any pre-existing file
         *       by the same name.
         *    </li>
         *    <li>
         *       The storepublic parameter allows the caller to assign public access
         *       to each stored file in the repository after the execution completes.
         *    </li>
         *    <li>
         *       The storenoproject parameter allows the caller to skip the
         *       persistence-to-project step after the execution.
         *    </li>
         * </ol>
         *
         * @method jobSchedule
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>name</dt>
         *    <dd>job name</dd>
         *
         *    <dt>descr</dt>
         *    <dd>(optional) job description</dd>
         *
         *    <dt>schedstart</dt>
         *    <dd>(optional) specifies the start time for job</dd>
         *
         *    <dt>schedrepeat</dt>
         *    <dd>(optional) specifies the number of times job is to be repeated</dd>
         *
         *    <dt>schedinterval</dt>
         *    <dd>(optional) specifies the interval (ms) on which job is to be repeated</dd>
         *
         *    <dt>code</dt>
         *    <dd>(optional) R code to execute on job</dd>
         *
         *    <dt>rscriptname</dt>
         *    <dd>(optional) comma-separated list of repository-managed script filenames</dd>
         *
         *    <dt>rscriptdirectory</dt>
         *    <dd>(optional) comma-separated list of repository-managed directories for scripts, defaults to root</dd>
         *
         *    <dt>rscriptauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-rscriptname</dd>
         *
         *    <dt>rscriptversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-rscriptname</dd>
         *
         *    <dt>externalsource</dt>
         *    <dd>(optional) comma-separated list of URLs or file paths to external scripts</dd>
         *
         *    <dt>inputs</dt>
         *    <dd>(optional) RevoDeployR-encoded script inputs</dd>
         *
         *    <dt>csvinputs</dt>
         *    <dd>(optional) comma-separated list of primitive name/value inputs</dd>
         *
         *    <dt>preloadfilename</dt>
         *    <dd>(optional) comma-separated list of repository filenames</dd>
         *
         *    <dt>preloadfileauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadfilename</dd>
         *
         *    <dt>preloadfileversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-preloadfilename</dd>
         *
         *    <dt>preloadobjectname</dt>
         *    <dd>(optional) comma-separated list of repository object (.rData) filenames</dd>
         *
         *    <dt>preloadobjectauthor</dt>
         *    <dd>(optional) comma-separated list of authors, author-per-preloadobjectname</dd>
         *
         *    <dt>preloadobjectversion</dt>
         *    <dd>(optional) comma-separated list of versions, version-per-object-preloadobjectname</dd>
         *
         *    <dt>adoptworkspace</dt>
         *    <dd>(optional) identifies project from which workspace is to be adopted</dd>
         *
         *    <dt>adoptdirectory</dt>
         *    <dd>(optional) identifies project from which directory is to be adopted</dd>
         *
         *    <dt>adoptpackages</dt>
         *    <dd>(optional) identifies project from which package dependencies are to be adopted</dd>
         *
         *      <dt>priority</dt>
         *      <dd>(optional) specifies the scheduling priority for the job: low (default), medium or high</dd>
         *
         *    <dt>tag</dt>
         *    <dd>(optional) specifies a tag that labels the execution</dd>
         *
         *    <dt>echooff</dt>
         *    <dd>
         *       (optional) if true R commands will not appear in the console output
         *       saved on the project execution history for the job
         *    </dd>
         *
         *    <dt>consoleoff</dt>
         *    <dd>
         *       (optional) if true console output is not saved on the project
         *       execution history for the job
         *    </dd>
         *
         *    <dt>graphics</dt>
         *    <dd>(optional) specifies preferred R graphics device for execution: png or svg</dd>
         *
         *    <dt>graphicswidth</dt>
         *    <dd>(optional) specifies preferred width for R graphics device images</dd>
         *
         *    <dt>graphicsheight</dt>
         *    <dd>(optional) specifies preferred height for R graphics device images</dd>
         *
         *    <dt>storefile</dt>
         *    <dd>(optional) comma-separated list of working directory filenames</dd>
         *
         *    <dt>storeobject</dt>
         *    <dd>(optional) comma-separated list of workspace object names</dd>
         *
         *    <dt>storeworkspace</dt>
         *    <dd>(optional) filename (.rData) where workspace contents will be saved in the repository</dd>
         *
         *    <dt>storenewversion</dt>
         *    <dd>(optional) if <code>true</code>, ensures each file stored in repository results in new version being created if needed</dd>
         *
         *    <dt>storepublic</dt>
         *    <dd>(optional) if <code>true</code>, publishes each file stored in the repository</dd>
         *
         *    <dt>storenoproject</dt>
         *    <dd>(optional) if <code>true</code>, no project persistence following job execution</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobSchedule: function(config, callback) {           
            return this.io('/r/job/schedule', config, callback);
        },

        /**
         * This call queries the job status. The status property will indicate one of
         * the following values:
         *
         * Scheduled, Queued, Running, Completed, Cancelling, Cancelled, Interrupted,
         * Aborted, Failed.
         *
         * @method jobQuery
         * @static
         * @param {Object} config the call configuration. The configuration object
         * supports the following properties:
         * <dl>
         *    <dt>job</dt>
         *    <dd>specifies a comma-separated list of job identifiers</dd>
         *
         *    <dt>extended</dt>
         *    <dd>
         *       (optional) if true, only jobs in an extended-state are listed in the
         *       response markup
         *    </dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobQuery: function(config, callback) {
            return this.io('/r/job/query', config, callback);
        },

        /**
         * This call cancels the specified job.
         *
         * Only jobs in an open-state can be cancelled. The set of job open-states are
         * shown here:
         *
         * <ul>
         *    <li>Scheduled : job is scheduled but not yet queued for running.</li>
         *    <li>Queued : job is queued for running.</li>
         *    <li>Running : job is running.</li>
         * </ul>
         * @method jobCancel
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *    <dt>job</dt>
         *    <dd>specifies a comma-separated list of job identifiers</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobCancel: function(config, callback) {
            return this.io('/r/job/list', config, callback);
        },

        /**
         * This call deletes the specified job.
         *
         * Only jobs in one of the completed-states can be deleted. The set of job
         * compelted-states are shown here:
         *
         * <ul>
         *    <li>Completed : job execution has run to successful completion.</li>
         *    <li>Interrupted : job execution has been interrupted.</li>
         *    <li>Cancelled : job has been cancelled.</li>
         *    <li>Aborted : job execution has been aborted.</li>
         *    <li>Failed : job execution has resulted in failure.</li>
         * </ul>
         *
         * Jobs in an open-state must first run to completion or be cancelled before
         * they are eligible for deletion.
         *
         * <blockquote>
         *    Important! Deleting jobs will not delete the projects that resulted from
         *    those jobs.
         * </blockquote>
         *
         * @method jobDelete
         * @static
         * @param {Object} config the call configuration. The configuration object
         *        supports the following properties:
         * <dl>
         *  <dt>job</dt>
         *  <dd>specifies a comma-separated list of job identifiers</dd>
         * </dl>
         * @param {Object} callback the callback configuration.
         * @return {Object} the io transaction object.
         */
        jobDelete: function(config, callback) {
            return this.io('/r/job/delete', config, callback);
        }
    } // DeployR

};

module.exports = Deprecated;
},{"../package":22,"./lang":7,"./rinput":11,"./selfish":14}],4:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base = require('./selfish').Base;

function debug(msg) { }

module.exports = Base.extend({

  initialize: function() {
    this.events = {};
    this.scope  = null;
  },

  /**
   * Adds a listener.  Multiple can be added per name.  Aliased as `on`.
   *
   * @param {String} name The name of the event
   * @param {Function} handler A callback
   * @return {Emitter} `this` for chaining      
   */
  on: function(name, handler) {
    if (name in this.events === false) { this.events[name] = []; }        

    this.events[name].push(handler);
    debug('Emitter.on("' + name + '")');

    return this;
  },

  /**
   * Triggers all matching listeners.
   *
   * @param {String} name The name of the event
   * @return {Emitter} `this` for chaining   
   */
  emit: function(name) {
    if (name in this.events === false) { return this; }

    for (var i = 0; i < this.events[name].length; i++) {
      debug('Fired event: "' + name + '"');
      this.events[name][i].apply(this.scope || this, Array.prototype.slice.call(arguments, 1));       
    }

    return this;
  },

  /**
   * Removes all matching listeners.
   *
   * @param {String} name The name of the event
   * @return {Emitter} `this` for chaining
   */
  offAll: function(name) {
    if (!name) {
      for (var e in this.events) {
        delete this.events[e];
      }
    } else {
      if (name in this.events === false) { return this; }
      delete this.events[name];        
    }

    return this;
  },

  /**
   * Removes a listener based on an index.
   *
   * @private
   * @param {String} name The name of the event
   * @param {Number} index The index of the event 
   */
  offAt: function(name, index) {
    var array = this.events[name],
        rest  = array.slice(index + 1);

    array.length = index;
    array.push.apply(array, rest);
    this.events[name] = array;
  },

  /**
   * Removes a listener based on the handler function.
   *
   * @param {String} name The name of the event
   * @param {Function} handler The handler function to remove
   * @return {Emitter} `this` for chaining
   */
  off: function(name, handler) {
    if (name in this.events === false) { return this; }

    // remove all events handlers by this name
    if (!handler) {
      return this.offAll(name);
    } else { // remove all events handlers == 'handler' by this name
      for (var i = 0; i < this.events[name].length; i++) {
        if (this.events[name][i] == handler) {
          this.offAt(name, i);
          return this;
        }
      }
    } 

    return this;
  }

}); 
},{"./selfish":14}],5:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */
var Lang = require('./lang'),
    RTypes = require('./rtypes'),
    R = RTypes.r,
    DeployR = RTypes.deployr;

function formatDates(dates, type) {
    var formats = [];

    for (var i = 0; i < dates.length; i++) {
        formats.push(formatDate(dates[i], type));
    }

    return formats;
}

function formatDate(date, type) {    
   var year   = date.getFullYear(),
       month  = (date.getMonth() + 1),
       day    = date.getDate(),    
       hour   = date.getHours(),
       min    = date.getMinutes(),
       sec    = date.getSeconds(),
       zone   = date.getTimezoneOffset(),
       format = '';

       month  = (month < 10 ? '0' + month : month);
       hour   = (hour < 10 ? '0' + hour : hour);
       min    = (min < 10 ? '0' + min : min);
       sec    = (sec < 10 ? '0' + sec : sec);       
       format = year + '-' + month + '-' + day;

    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }
   
    if (type === DeployR.RPOSIX_DATE || type === DeployR.RPOSIX_DATE_VECTOR) {
        var time  = hour + ':' + min + ':' + sec,
            a = -zone,
            b = "+";

        if (a < 0) {
            a = -a;
            b = "-";
        }

        zone = b + leftZeroFill((a / 60), 2) + '' + leftZeroFill(a % 60, 2);
        format += (' ' + time + ' ' + zone);
    }

    return format;
}

function encodeEmbeddedDataframe(obj, rdf) {
    var dfValue = obj.value;
    for (var index = 0; index < dfValue.length; index++) {
        var dfObj = dfValue[index];
        if (dfObj.type === DeployR.RDATAFRAME) {
            rdf = encodeEmbeddedDataframe(dfObj, rdf);
        } else {
            // format dates
            if (RTypes.isDate(dfObj.type)) {
                if (Lang.isArray(dfObj.value)) {
                    dfObj.value = formatDates(dfObj.value, dfObj.type);
                } else {
                    dfObj.value = formatDate(dfObj.value, dfObj.type);
                }
            }

            dfObj.type = RTypes.deployrToR(dfObj.type);
            rdf.value.push(dfObj);            
        }

    }
    return rdf;
};

function encodeDataframe(obj) {
    var rdf = {
            type: R.DATAFRAME,
            value: [],
            name: obj.name
        },
        dfValue = obj.value;

    for (var index = 0; index < dfValue.length; index++) {
        var dfObj = dfValue[index];

        if (dfObj.type === DeployR.RDATAFRAME) {
            rdf = encodeEmbeddedDataframe(dfObj, rdf);
        } else {
            // format dates
            if (RTypes.isDate(dfObj.type)) {
                if (Lang.isArray(dfObj.value)) {
                    dfObj.value = formatDates(dfObj.value, dfObj.type);
                } else {
                    dfObj.value = formatDate(dfObj.value, dfObj.type);
                }
            }

            dfObj.type = RTypes.deployrToR(dfObj.type);
            rdf.value.push(dfObj);
        }

    }
    return rdf;
};

function encodeList(obj) {
    var rlist = {
            type: R.LIST,
            value: [],
            name: obj.name
        },
        dfValue = obj.value,
        r;

    for (var index = 0; index < dfValue.length; index++) {
        var dfObj = dfValue[index];

        switch (dfObj.type) {
            case DeployR.RDATAFRAME:
                r = encodeDataframe(dfObj);
                break;

            case DeployR.RLIST:
                r = encodeList(dfObj);
                break;

            case DeployR.RNUMERIC_MATRIX:
            case DeployR.RINTEGER_MATRIX:
            case DeployR.RBOOLEAN_MATRIX:
            case DeployR.RSTRING_MATRIX:
                r = {
                    name: dfObj.name,
                    type: R.MATRIX,
                    value: dfObj.value
                };
                break;

            case DeployR.RDATE:
            case DeployR.RPOSIX_DATE:
                r = {
                    name: dfObj.name,
                    type: R.DATE,
                    format: dfObj.format,
                    value: formatDate(dfObj.value, dfObj.type)
                };
                break;

            case DeployR.RFACTOR:
            case DeployR.RORDERED:
                r = {
                    name: dfObj.name,
                    type: R.FACTOR,
                    ordered: dfObj.ordered,
                    labels: dfObj.labels,
                    levels: dfObj.levels,
                    value: dfObj.value
                };
                break;

            case DeployR.RSTRING:
            case DeployR.RBOOLEAN:
            case DeployR.RNUMERIC:
            case DeployR.RINTEGER:
                r = {
                    name: dfObj.name,
                    type: R.PRIMITIVE,
                    value: dfObj.value
                };
                break;

            case DeployR.RNUMERIC_VECTOR:
            case DeployR.RINTEGER_VECTOR:
            case DeployR.RBOOLEAN_VECTOR:
            case DeployR.RSTRING_VECTOR:
                r = {
                    name: dfObj.name,
                    type: R.VECTOR,
                    value: dfObj.value
                };
                break;

            case DeployR.RDATE_VECTOR:
            case DeployR.RPOSIX_DATE_VECTOR:
                r = {
                    name: dfObj.name,
                    type: R.VECTOR,                    
                    value: formatDates(dfObj.value, dfObj.type),
                    format: dfObj.format
                };
                break;

            default:
                throw new Error('No RDataType found for "' + dfObj.type + '"');
                break;
        }

        rlist.value.push(r);
    }
    return rlist;
};

module.exports = {

    /**
     * Flattens a given <code>Revolution.RData</code> type into a JSON string
     * representing the
     * expected DeployR input format.
     *
     * @method parseInputs
     * @public
     * @param {Array} rdata An Array of RData Objects to be flattened.
     * @return {String} The flattend RData JSON string representing the DeployR
     *                  input format.
     */
    encode: function(rdata) {
        var r = {};

        for (var index = 0; index < rdata.length; index++) {
            var obj = rdata[index];

            switch (obj.type) { // -- DeployR Type -- //

                case DeployR.RDATAFRAME:
                    r[obj.name] = encodeDataframe(obj);
                    break;

                case DeployR.RLIST:
                    r[obj.name] = encodeList(obj);
                    break;

                case DeployR.RNUMERIC_MATRIX:
                case DeployR.RINTEGER_MATRIX:
                case DeployR.RBOOLEAN_MATRIX:
                case DeployR.RSTRING_MATRIX:
                    r[obj.name] = {
                        type: R.MATRIX,
                        value: obj.value
                    };
                    break;

                case DeployR.RDATE:
                case DeployR.RPOSIX_DATE:
                    r[obj.name] = {
                        type: R.DATE,
                        format: obj.format,                        
                        value: formatDate(obj.value, obj.type)
                    };
                    break;

                case DeployR.RFACTOR:
                case DeployR.RORDERED:                
                    r[obj.name] = {
                        type: R.FACTOR,
                        ordered: obj.ordered,
                        labels: obj.labels,
                        levels: obj.levels,
                        value: obj.value
                    };
                    break;

                case DeployR.RSTRING:
                case DeployR.RBOOLEAN:
                case DeployR.RNUMERIC:
                case DeployR.RINTEGER:
                    r[obj.name] = {
                        type: R.PRIMITIVE,
                        value: obj.value
                    };
                    break;

                case DeployR.RNUMERIC_VECTOR:
                case DeployR.RINTEGER_VECTOR:
                case DeployR.RBOOLEAN_VECTOR:
                case DeployR.RSTRING_VECTOR:
                    r[obj.name] = {
                        type: R.VECTOR,
                        value: obj.value
                    };
                    break;

                case DeployR.RDATE_VECTOR:
                case DeployR.RPOSIX_DATE_VECTOR:
                    r[obj.name] = {
                        type: R.VECTOR,            
                        value: formatDates(obj.value, obj.type),
                        format: obj.format
                    };
                    break;

                default:
                    throw new Error('No RDataType found for "' + obj.type + '"');
                    break;
            }
        }

        return (JSON.stringify(r));
    }
};
},{"./lang":7,"./rtypes":13}],6:[function(require,module,exports){
 var optional = require('./optional'),
     WS       = optional('ws'),
     Queue    = require('./queue'),     
     Emitter  = require('./emitter'),
     Base     = require('./selfish').Base,
     merge    = require('./utils').merge;

/**
 * Initialize a new `EventStream` with the given set of `options`.
 *
 * @param {Object} options
 * @api private
 */
var EventStream = Base.extend(Emitter, {   

  initialize: function initialize(host, options) {
    Emitter.initialize.call(this, {});

    this.host        = host;
    this.options     = options || {};
    this.options.log = this.options.log || this.LOG.error;
    this.ws          = null;
    this.q           = new Queue();
    this.channel     = {};     
  },  

  LOG: { 
    info: 'info', 
    debug: 'debug', 
    error: 'error' 
  },
  
  open: function(options) {    
    var self   = this,
        uri    = (this.host || '') + '/deployr/r/event/stream?',
        params = [];

    options = options || {};
    options.headers = options.headers || {};
    options = this.options = merge(options, this.channel);    

    this.cookies = !this.cookies ? options.headers.Cookie : this.cookies;

    // -- append option parameters --
    if (options.project) {
      params.push('project=' + options.project);
    } else {
      if (options.job) {
        params.push('job=' + options.job);
      }
    }

    if (options.management) {
      params.push('managementEventOnly=true');
    } else {
      if (options.httponly) {
        params.push('httpEventOnly=true');
      } else {
        if (options.revoonly) {
          params.push('revoEventOnly=true');
        }
      }
    }

    uri += params.join('&').substr(0);
    uri = uri.replace(/^http/,'ws');

    this.q.yield(true);
    this.q.add(function() {

      var headers = this.cookies ? { 'Cookie': this.cookies } : {};
      this.emit('es:connecting', { uri: uri, headers: headers });

      var ws = new WS(uri, 'http', { headers: headers });

      ws.onopen = function (message) {
        self.emit('es:open', message);
      };

      var _message = '';
      ws.onmessage = function (message) {
        try {          
          if (message.data.split('!|!')[1]) {
            _message = _message + message.data.split('!|!')[1];
            message = JSON.parse(_message);
            _message = '';
            var type = message.deployr.response.event.type;
            self.emit('es:' + type.replace('Event', ''), message);
          }
        } catch (e) {} 
      };

      ws.onerror = function (err) { self.emit('es:error', err); };
      ws.onclose = function (message) { self.emit('es:disconnect', message); };

      this.ws = ws;
    }, this);

    if (options.force) { this.flush(); }

    return this;    
  },

  close: function() {
    if (this.ws) { this.ws.close(); }

    return this;
  },

  error: function(fn) {
    this.on('es:error', fn);

    return this;
  },  

  all: function() {
    this.channel = { revoonly: true };  // revoEventOnly=true

    return this;
  },

  session: function() {
    this.channel = { httponly: true }; //httpEventOnly=true

    return this;
  },

  project: function(project) {
    this.channel = { project: project }; // project=12345

    return this;
  },

  job: function(job) {
    this.channel = { job: job }; //job=12345

    return this;
  },

  management: function() {
    this.channel = { management: true }; //managementEventOnly=true

    return this;
  },

  flush: function() {
    this.q.yield(false);
    this.q.flush();
  },

  share: function(cookies) {
    this.cookies = cookies;
  }

});

module.exports = EventStream;

},{"./emitter":4,"./optional":9,"./queue":10,"./selfish":14,"./utils":15}],7:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 *
 * This component is a DeployR port of yui-lang.js by Yahoo!
 *
 * Software License Agreement (BSD License)
 * Copyright (c) 2013, Yahoo! Inc. All rights reserved.
 *
 * Redistribution and use of this software in source and binary forms, with or 
 * without modification, are permitted provided that the following conditions 
 * are met:
 *
 * Redistributions of source code must retain the above copyright notice, this 
 * list of conditions and the following disclaimer. Redistributions in binary 
 * form must reproduce the above copyright notice, this list of conditions and 
 * the following disclaimer in the documentation and/or other materials provided 
 * with the distribution.
 *
 * Neither the name of Yahoo! Inc. nor the names of YUI's contributors may be 
 * used to endorse or promote products derived from this software without 
 * specific prior written permission of Yahoo! Inc.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE  
 * POS SIBILITY OF SUCH DAMAGE.
 */

/**
 * Provides core language utilites and extensions used throughout DeployR.
 *
 * @class Lang
 * @static
 */
var L = {}, 
	TOSTRING = Object.prototype.toString, 
	TYPES = {	
		'undefined' : 'undefined',
		'number' : 'number',
		'boolean' : 'boolean',
		'string' : 'string',
		'[object Function]' : 'function',
		'[object RegExp]' : 'regexp',
		'[object Array]' : 'array',
		'[object Date]' : 'date',
		'[object Error]' : 'error'
	}, unsafeNatives = false;

/**
 * Determines whether or not the provided item is null.
 * @method isNull
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is null.
 */
L.isNull = function(o) {
	return o === null;
};

/**
 * Determines whether or not the provided item is undefined.
 * @method isUndefined
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is undefined.
 */
L.isUndefined = function(o) {
	return typeof o === 'undefined';
};

/**
 * Determines whether or not the provided item is of type object
 * or function. Note that arrays are also objects, so
 * <code>Y.Lang.isObject([]) === true</code>.
 * @method isObject
 * @static
 * @param o The object to test.
 * @param failfn {boolean} fail if the input is a function.
 * @return {boolean} true if o is an object.
 * @see isPlainObject
 */
L.isObject = function(o, failfn) {
	var t = typeof o;
	return (o && (t === 'object' || (!failfn && (t === 'function' || L.isFunction(o))))) || false;
};
/**
 * Determines whether or not the provided item is an array.
 *
 * Returns `false` for array-like collections such as the function `arguments`
 * collection or `HTMLElement` collections.
 *
 * @method isArray
 * @param o The object to test.
 * @return {boolean} true if o is an array.
 * @static
 */
L.isArray = (!unsafeNatives && Array.isArray) ||
function(o) {
	return L.type(o) === 'array';
};

L.isFunction = function isFunctionA(o) {
	return (typeof(o) === "function");
};

/**
 * Determines whether or not the provided item is a boolean.
 * @method isBoolean
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a boolean.
 */
L.isBoolean = function(o) {
	return typeof o === 'boolean';
};

/**
 * Determines whether or not the supplied item is a date instance.
 * @method isDate
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a date.
 */
L.isDate = function(o) {
	return L.type(o) === 'date' && o.toString() !== 'Invalid Date' && !isNaN(o);
};

/**
 * Determines whether or not the provided item is a legal number.
 * @method isNumber
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a number.
 */
L.isNumber = function(o) {
	return typeof o === 'number' && isFinite(o);
};

/**
 * Determines whether or not the provided item is a string.
 * @method isString
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a string.
 */
L.isString = function(o) {
	return typeof o === 'string';
};

/**
 * Returns a string representing the type of the item passed in.
 *
 * @method type
 * @param o the item to test.
 * @return {string} the detected type.
 * @static
 */
L.type = function(o) {
	return TYPES[ typeof o] || TYPES[TOSTRING.call(o)] || ( o ? 'object' : 'null');
};

module.exports = L;
},{}],8:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */
 
var Logger = {},
    loggerMap = {},
    globalLogger;

/**
 * Universal stdout|stderr printer
 */
function log(messages, context) {	
	if (!console) { return; }

	function sep(level) {
		var sep = '=========================================================' +
		          '=========================================================\n',
		    offset = 0;

		if (level === Logger.DEBUG || level === Logger.ERROR) offset = 8;
		else if (level === Logger.INFO || level === Logger.WARN) offset = 8;
		else offset = 7;

		return { start: sep.substring(offset), end: sep };
	}

	var hdlr,
	    args = Array.prototype.slice.call(messages, 0),
	    name = context.name,
	    error = context.level === Logger.ERROR,
  	    delim = sep(context.level);

  	if (context.level === Logger.WARN && console.warn) {
  		hdlr = 'warn';
  	} else if (context.level === Logger.ERROR && console.error) {
  		hdlr = 'error';
  	} else if (context.level === Logger.INFO && console.info) {
  		hdlr = 'info';
  	} else {
  		hdlr = 'log';
  	}

  	// -- custom format logging statement for deployr request/response/error --
  	args.unshift('[' + (error ? Logger.ERROR.name : name) + '] ' + delim.start);
  	args.push(delim.end);

  	console[hdlr](args[0], [args[1] + ' ---> ' + args[2]['call']]);

    for (var i = 2; i < args.length; i++) { console.log(args[i]); }  
}

/**
 * Logging category by id.
 */
function Category(id, level, fn) {
	this.id = id;
	this.context = level || Logger.DEBUG;
}

Category.prototype = {	
	log: function(level, msgArgs) {
		if (level.value >= this.context.value) {			
			log(msgArgs, { 
				level: level,
				name: this.context.name,
				value: this.context.value
			});		
		}
	},

	debug: function () {		
		this.log(Logger.DEBUG, arguments);
	},

	error: function () {
		this.log(Logger.ERROR, arguments);
	},

	info: function () {		
		this.log(Logger.INFO, arguments);
	},

	warn: function () {
		this.log(Logger.WARN, arguments);
	},

	setLevel: function(level) {
		if (level && 'value' in level) {
			this.context = level;
		}
	}
};

Logger.DEBUG = { value: 1, name: 'DEBUG' };
Logger.INFO  = { value: 2, name: 'INFO' };
Logger.WARN  = { value: 4, name: 'WARN' };
Logger.ERROR = { value: 8, name: 'ERROR' };
Logger.OFF   = { value: 99, name: 'OFF' };   		

Logger.setLevel = function(newLevel) {
	globalLogger.setLevel(newLevel);
};

Logger.debug = function () {
	globalLogger.debug.apply(globalLogger, arguments);
};

Logger.info = function () {
	globalLogger.info.apply(globalLogger, arguments);
};

Logger.warn = function () {
	globalLogger.warn.apply(globalLogger, arguments);
};

Logger.error = function () {
	globalLogger.error.apply(globalLogger, arguments);
};

Logger.get = function (id, level, fn) {	
	return (loggerMap[id] || (function() {
		loggerMap[id] = new Category(id, level, fn);
		return loggerMap[id];
	})());
};

// --- setup the global logger ---
globalLogger = Logger.get('global');

module.exports 	= Logger;

},{}],9:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */
 
module.exports = function(module) {
  try {
    return require(module);
  } catch (e) {}
};
},{}],10:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

function Queue() {
  this.emptyCallback = null;
  this.callbacks = [];
  this.yielded = false;
  this.response = null;
  this.responseChain = [];  
}

Queue.prototype = {

  add: function(fn, ctx, defer) {
    // currently not waiting and there is no defer delay just make call
    if (!this.yielded && !defer) {      
      fn.apply(ctx || this, [this.response]);
    } else { // add to queue
      this.callbacks.push({ fn: fn, ctx: ctx });
    }
  },

  size: function() {
    return this.callbacks.length;
  },

  isEmpty: function() {
    return this.callbacks.length === 0;
  },

  empty: function(fn, ctx) {
    this.emptyCallback = { fn: fn, ctx: ctx };
  },

  yield: function(yield) {
    this.yielded = yield;
  },

  take: function(response, error, args) { 
    var cb;

    if (response) {
      this.response = response;
      this.responseChain.push(response);
    }


    if (!this.yielded && this.callbacks[0]) {
      cb = this.callbacks.shift();
      cb.fn.apply(cb.ctx || this, [this.responseChain, error, args]);

      // notify that the queue is now empty   
      if (this.callbacks[0] && this.emptyCallback) {
        this.emptyCallback.fn.call(this.emptyCallback.ctx || this);         
      }
    }
  },
  
  flush: function(response, error, args) {        
    if (response) {
      this.response = response;
      this.responseChain.push(response);
    }

    // pop and call next inline
    while (this.callbacks[0]) {
      if (this.yielded) { break; }
      var cb = this.callbacks.shift();
      cb.fn.apply(cb.ctx || this, [this.responseChain, error, args]);

      // notify that the queue is now empty
      if (this.callbacks[0] && this.emptyCallback) {
        this.emptyCallback.fn.call(this.emptyCallback.ctx || this);         
      }
    }
  }
};

module.exports = Queue;
},{}],11:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base   = require('./selfish').Base,
    RTypes = require('./rtypes');

module.exports = Base.extend(RTypes, {
	initialize: function initialize(name, value, options) {  	
		this.name  = name;
		this.value = value;
		this.options = options || {};
	},

	numeric: function () {
		return this.assert({
			type: this.deployr.RNUMERIC,
			name: this.name, 
			value: this.value,
			toString: this.toString
		});
	},	

	integer: function () {
		return this.assert({ 
			type: this.deployr.RINTEGER,
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	logical: function () {
		return this.assert({ 
			type: this.deployr.RBOOLEAN, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	character: function () {
		return this.assert({ 
			type: this.deployr.RSTRING, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	date: function () {
		return this.assert({ 
			type: this.deployr.RDATE,
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd',
			toString: this.toString
		}); 
	},

	posixct: function () {
		return this.assert({ 
			type: this.deployr.RPOSIX_DATE, 
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd HH:mm:ss Z',
			toString: this.toString
		}); 
	},	
	
	numericVector: function () { 
		return this.assert({ 
			type: this.deployr.RNUMERIC_VECTOR,
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	integerVector: function () {
		return this.assert({ 
			type: this.deployr.RINTEGER_VECTOR, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	logicalVector: function () { 
		return this.assert({ 
			type: this.deployr.RBOOLEAN_VECTOR, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	characterVector: function () { 
		return this.assert({ 
			type: this.deployr.RSTRING_VECTOR, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},  
	
	dateVector: function () { 
		return this.assert({ 
			type: this.deployr.RDATE_VECTOR, 
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd',
			toString: this.toString
		}); 
	},	
	
	posixctVector: function () { 
		return this.assert({ 
			type: this.deployr.RPOSIX_DATE_VECTOR, 
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd HH:mm:ss Z',
			toString: this.toString
		}); 
	},
	
	list: function () {
		return this.assert({ 
			type: this.deployr.RLIST, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	dataframe: function () { 
		return this.assert({ 
			type: this.deployr.RDATAFRAME, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	factor: function () {
		var opts = this.options;

		return this.assert( { 
			type: this.deployr.RFACTOR, 
			name: this.name, 
			value: this.value,
			ordered: false,
			levels: opts.levels,
			labels: opts.labels,
			toString: this.toString
		}); 
	},

	ordered: function () {
		var opts = this.options;

		return this.assert( { 
			type: this.deployr.RORDERED, 
			name: this.name, 
			value: this.value,
			ordered: true,
			levels: opts.levels,
			labels: opts.labels,
			toString: this.toString
		}); 
	},		

	numericMatrix: function () { 
		return this.assert({ 
			type: this.deployr.RNUMERIC_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	integerMatrix: function () { 
		return this.assert({ 
			type: this.deployr.RINTEGER_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	logicalMatrix: function () { 
		return this.assert({ 
			type: this.deployr.RBOOLEAN_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	characterMatrix: function () {
		return this.assert({ 
			type: this.deployr.RSTRING_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	toString: function() {
		var opts   = this.options || {},
		    levels = opts.levels ? '[ levels = ' + opts.levels + ']' : '',
		    labels = opts.labels ? '[ labels = ' + opts.labels + ']' : '';

		return '[ name = '  + this.name + ' ] ' +
		       '[ value = ' + this.value + ' ] ' +
		       '[ type = '  + this.type + ' ] ' +
		       levels + labels;		       
	}
});
},{"./rtypes":13,"./selfish":14}],12:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base   = require('./selfish').Base,
    RTypes = require('./rtypes'),
    Lang   = require('./lang'),
    RInput = require('./rinput'); 

function create(type, name, value, options) {
	var rinput;

	if (Lang.isObject(name)) {
		rinput = name;
		if (!rinput.type !== type) {
			throw new Error('IllegalArgumentError:' + 
				'Expecting "' + type + '" but found "' + rinput.type + '"');
		}
	} else {
	    rinput = RInput.new(name, value, options)[type]();
	} 

	return rinput;
}

module.exports = Base.extend(RTypes, {	
	numeric: function (name, value) {
		this.inputs.push(create(this.deployr.RNUMERIC, name, value));
		return this;
	},
	
	integer: function (name, value) {
		this.inputs.push(create(this.deployr.RINTEGER, name, value));
		return this; 
	},
	
	logical: function (name, value) {
		this.inputs.push(create(this.deployr.RBOOLEAN, name, value));
		return this; 
	},
	
	character: function (name, value) {
		this.inputs.push(create(this.deployr.RSTRING, name, value));
		return this; 
	},
	
	date: function (name, value) {
		this.inputs.push(create(this.deployr.RDATE, name, value));
		return this; 
	},

	posixct: function (name, value) {
		this.inputs.push(create(this.deployr.RPOSIX_DATE, name, value));
		return this; 
	},	
	
	numericVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RNUMERIC_VECTOR, name, value));
		return this; 
	},
	
	integerVector: function (name, value) {
		this.inputs.push(create(this.deployr.RINTEGER_VECTOR, name, value));
		return this; 
	},
	
	logicalVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RBOOLEAN_VECTOR, name, value));
		return this; 
	},
	
	characterVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RSTRING_VECTOR, name, value));
		return this; 
	},  
	
	dateVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RDATE_VECTOR, name, value));
		return this; 
	},	
	
	posixctVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RPOSIX_DATE_VECTOR, name, value));
		return this; 
	},
	
	list: function (name, value) {
		this.inputs.push(create(this.deployr.RLIST, name, value));
		return this; 
	},
	
	dataframe: function (name, value) { 
		this.inputs.push(create(this.deployr.RDATAFRAME, name, value));
		return this; 
	},	

	factor: function (name, value, levels, labels) {
		var opts = { levels: levels, labels: labels };
		this.inputs.push(create(this.deployr.RFACTOR, name, value, opts));
		return this;
	},

	ordered: function (name, value, levels, labels) {
		var opts = { levels: levels, labels: labels };
		this.inputs.push(create(this.deployr.RORDERED, name, value, opts));
		return this;
	},		

	numericMatrix: function (name, value) { 
		this.inputs.push(create(this.deployr.RNUMERIC_MATRIX, name, value));
		return this; 
	},

	integerMatrix: function (name, value) { 
		this.inputs.push(create(this.deployr.RINTEGER_MATRIX, name, value));
		return this; 
	},

	logicalMatrix: function (name, value) { 
		this.inputs.push(create(this.deployr.RBOOLEAN_MATRIX, name, value));
		return this; 
	},

	characterMatrix: function (name, value) {
		this.inputs.push(create(this.deployr.RSTRING_MATRIX, name, value));
		return this;
	}
});
},{"./lang":7,"./rinput":11,"./rtypes":13,"./selfish":14}],13:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var Base = require('./selfish').Base,
    Lang = require('./lang'),
    map  = {}; // deployr->To->R catalog

module.exports = Base.extend({
	r: {
		PRIMITIVE: 'primitive',
		DATAFRAME: 'dataframe',
		LIST: 'list',
		MATRIX: 'matrix',
		DATE: 'date',
		FACTOR: 'factor',
		VECTOR: 'vector'
	},

	deployr: {
		RBOOLEAN: 'logical',
		RNUMERIC: 'numeric',
		RINTEGER: 'integer',
		RSTRING: 'character',
		RDATE: 'date',
		RPOSIX_DATE: 'posixct',
		RBOOLEAN_VECTOR: 'logicalVector',
		RNUMERIC_VECTOR:'numericVector',
		RINTEGER_VECTOR: 'integerVector',	
		RSTRING_VECTOR: 'characterVector',
		RDATE_VECTOR: 'dateVector',
		RPOSIX_DATE_VECTOR: 'posixctVector',
		RLIST: 'list',
		RDATAFRAME: 'dataframe',
		RFACTOR: 'factor',
		RORDERED: 'ordered',		
		RBOOLEAN_MATRIX: 'logicalMatrix',
		RNUMERIC_MATRIX: 'numericMatrix',
		RINTEGER_MATRIX: 'integerMatrix',		
		RSTRING_MATRIX: 'characterMatrix'
	},

	isDate: function(type) {
		return (type === this.deployr.RDATE || 
		        type === this.deployr.RPOSIX_DATE || 
		        type === this.deployr.RDATE_VECTOR ||
		        type === this.deployr.RPOSIX_DATE_VECTOR ||
		        type === this.r.DATE);
	},

	deployrToR: function(type) {	
		var deployr = this.deployr,
		    r       = this.r;

		if (!map[type]) { // build catalog only once	
			map[deployr.RBOOLEAN]           = r.PRIMITIVE;
			map[deployr.RNUMERIC]           = r.PRIMITIVE;
			map[deployr.RINTEGER]           = r.PRIMITIVE;
			map[deployr.RSTRING]            = r.PRIMITIVE;
			map[deployr.RDATE]              = r.DATE;
			map[deployr.RPOSIX_DATE]        = r.DATE;
			map[deployr.RBOOLEAN_VECTOR]    = r.VECTOR;
			map[deployr.RNUMERIC_VECTOR]    = r.VECTOR;
			map[deployr.RINTEGER_VECTOR]    = r.VECTOR;
			map[deployr.RSTRING_VECTOR]     = r.VECTOR;
			map[deployr.RDATE_VECTOR]       = r.VECTOR;
			map[deployr.RPOSIX_DATE_VECTOR] = r.VECTOR;
			map[deployr.RLIST]              = r.LIST;
			map[deployr.RDATAFRAME]         = r.DATAFRAME;
			map[deployr.RFACTOR]            = r.FACTOR;
			map[deployr.RORDERED]           = r.FACTOR;
			map[deployr.RBOOLEAN_MATRIX]    = r.MATRIX;
			map[deployr.RNUMERIC_MATRIX]    = r.MATRIX;
			map[deployr.RINTEGER_MATRIX]    = r.MATRIX;
			map[deployr.RSTRING_MATRIX]     = r.MATRIX;
		}

		return map[type];		
	},

	/**
	 * Assert that the `rinput` value is the correct JavaScript Data Type.
	 */
	assert: function (rinput) {
		var deployr = this.deployr,
    		NOOP    = null,
		    values  = rinput.value,
		    fn;

		values = !Lang.isArray(values) ? [values] : values;

		for (var i = 0; i < values.length; i++) {
			var value = values[i];

			switch (rinput.type) {
				case deployr.RNUMERIC :
				case deployr.RNUMERIC_VECTOR :
				case deployr.RNUMERIC_VECTOR :
				fn = Lang.isNumber;
				// support string numbers
				var val = parseFloat(value);
			    value = isNaN(val) ? value : val; 
			    break;

			    case deployr.RINTEGER :
			    case deployr.RINTEGER_VECTOR :
			    fn = Lang.isNumber;
			    // support string numbers
			    var val = parseFloat(value);
			    value = isNaN(val) ? value : val; 
			    break;

			    case deployr.RBOOLEAN :
			    case deployr.RBOOLEAN_VECTOR :
			    fn = Lang.isBoolean;
			    break;
			    
			    case deployr.RSTRING :
			    case deployr.RSTRING_VECTOR :	
			    fn = Lang.isString;
			    break;

			    case deployr.RDATE :
			    case deployr.RPOSIX_DATE :
			    case deployr.RDATE_VECTOR :
			    case deployr.RPOSIX_DATE_VECTOR :
			    fn = Lang.isDate;
			    break;

			    case deployr.RFACTOR :
			    case deployr.RORDERED :			    
			    case deployr.RDATAFRAME :
			    case deployr.RINTEGER_MATRIX :
			    case deployr.RBOOLEAN_MATRIX :
			    case deployr.RSTRING_MATRIX :	    
			    fn = NOOP;
			    break
			}

			if (fn && !fn(value)) {
				throw new Error('RInputFormatError: ' + '"' + value + 
					'" is not a valid "' + rinput.type + '" type.');
			}
		}

		return rinput;
	}
});
},{"./lang":7,"./selfish":14}],14:[function(require,module,exports){
/*!
 * https://github.com/Gozala/selfish
 */

/* vim:set ts=2 sw=2 sts=2 expandtab */
/*jshint undef: true es5: true node: true devel: true evil: true
         forin: true latedef: false supernew: true */
/*global define: true */

!(typeof define !== "function" ? function($){ $(null, typeof exports !== 'undefined' ? exports : window); } : define)(function(require, exports) {

"use strict";

exports.Base = Object.freeze(Object.create(Object.prototype, {
  /**
   * Creates an object that inherits from `this` object (Analog of
   * `new Object()`).
   * @examples
   *
   *    var Dog = Base.extend({
   *      bark: function bark() {
   *        return 'Ruff! Ruff!'
   *      }
   *    });
   *    var dog = Dog.new();
   */
  'new': { value: function create() {
    var object = Object.create(this);
    object.initialize.apply(object, arguments);
    return object;
  }},
  /**
   * When new instance of the this prototype is created it's `initialize`
   * method is called with all the arguments passed to the `new`. You can
   * override `initialize` to set up an instance.
   */
  initialize: { value: function initialize() {
  }},
  /**
   * Merges all the properties of the passed objects into `this` instance (This
   * method can be used on instances only as prototype objects are frozen).
   *
   * If two or more argument objects have own properties with the same name,
   * the property is overridden, with precedence from right to left, implying,
   * that properties of the object on the left are overridden by a same named
   * property of the object on the right.
   *
   * @examples
   *
   *    var Pet = Dog.extend({
   *      initialize: function initialize(options) {
   *        // this.name = options.name -> would have thrown (frozen prototype)
   *        this.merge(options) // will override all properties.
   *      },
   *      call: function(name) {
   *        return this.name === name ? this.bark() : ''
   *      },
   *      name: null
   *    })
   *    var pet = Pet.new({ name: 'Benzy', breed: 'Labrador' })
   *    pet.call('Benzy')   // 'Ruff! Ruff!'
   */
  merge: { value: function merge() {
    var descriptor = {};
    Array.prototype.forEach.call(arguments, function (properties) {
      Object.getOwnPropertyNames(properties).forEach(function(name) {
        descriptor[name] = Object.getOwnPropertyDescriptor(properties, name);
      });
    });
    Object.defineProperties(this, descriptor);
    return this;
  }},
  /**
   * Takes any number of argument objects and returns frozen, composite object
   * that inherits from `this` object and combines all of the own properties of
   * the argument objects. (Objects returned by this function are frozen as
   * they are intended to be used as types).
   *
   * If two or more argument objects have own properties with the same name,
   * the property is overridden, with precedence from right to left, implying,
   * that properties of the object on the left are overridden by a same named
   * property of the object on the right.
   * @examples
   *
   *    // ## Object composition ##
   *
   *    var HEX = Base.extend({
   *      hex: function hex() {
   *        return '#' + this.color;
   *      }
   *    })
   *
   *    var RGB = Base.extend({
   *      red: function red() {
   *        return parseInt(this.color.substr(0, 2), 16);
   *      },
   *      green: function green() {
   *        return parseInt(this.color.substr(2, 2), 16);
   *      },
   *      blue: function blue() {
   *        return parseInt(this.color.substr(4, 2), 16);
   *      }
   *    })
   *
   *    var CMYK = Base.extend(RGB, {
   *      black: function black() {
   *        var color = Math.max(Math.max(this.red(), this.green()), this.blue());
   *        return (1 - color / 255).toFixed(4);
   *      },
   *      cyan: function cyan() {
   *        var K = this.black();
   *        return (((1 - this.red() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      },
   *      magenta: function magenta() {
   *        var K = this.black();
   *        return (((1 - this.green() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      },
   *      yellow: function yellow() {
   *        var K = this.black();
   *        return (((1 - this.blue() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      }
   *    })
   *
   *    var Color = Base.extend(HEX, RGB, CMYK, {
   *      initialize: function Color(color) {
   *        this.color = color;
   *      }
   *    });
   *
   *    // ## Prototypal inheritance ##
   *
   *    var Pixel = Color.extend({
   *      initialize: function Pixel(x, y, hex) {
   *        Color.initialize.call(this, hex);
   *        this.x = x;
   *        this.y = y;
   *      },
   *      toString: function toString() {
   *        return this.x + ':' + this.y + '@' + this.hex();
   *      }
   *    });
   *
   *    var pixel = Pixel.new(11, 23, 'CC3399')
   *    pixel.toString(); // 11:23@#CC3399
   *
   *    pixel.red();      // 204
   *    pixel.green();    // 51
   *    pixel.blue();     // 153
   *
   *    pixel.cyan();     // 0.0000
   *    pixel.magenta();  // 0.7500
   *    pixel.yellow();   // 0.2500
   *
   */
   extend: { value: function extend() {
    return Object.freeze(this.merge.apply(Object.create(this), arguments));
  }}
}));

});
},{}],15:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var Lang = require('./lang');

var get = exports.get = function(s, key) {
    function traverse(obj, fn, parent) {
        for (var i in obj) {
            var result = fn.apply(this, [i, obj[i], parent]);
            if (result) {
                return result;
            } else {
                if (obj[i] instanceof Object && !(obj[i] instanceof Array)) {                
                   traverse(obj[i], fn, i);
               }
            }
        }
    }

    function getProperty(obj, property) {
        var acc = {};
        traverse(obj, function(key, value, parent) {
            if (key === property) {  
                acc = value;
                return acc;
            } else {
                return null;
            }
        });
        return acc;
    }

    function empty(obj) {
        for (var prop in obj) { if (obj.hasOwnProperty(prop)) return obj; }
        return !Lang.isObject(obj) ? obj : null;
    }

    return empty(getProperty(s, key));
};

var inArray = exports.inArray = function(haystack, needle, key) {
    var i, max = haystack.length;

    for (i = 0; i < max; i++) {
        if (key) {
            if (haystack[i][key] === needle) { return haystack[i]; }
        } else {
            if (haystack[i] === needle) { return haystack[i]; }
        }   
    }
    return null;
};

exports.merge = function(to, from) {        
    if (!to || typeof(to) !== 'object') { to = {}; }
    if (!from || typeof(from) !== 'object') { from = {}; }

    for (var k in from) { to[k] = from[k]; }

    return to;
};

exports.workspace = function(obj, name) {
    var ws = get(obj, 'workspace');
    return (ws ? name ? inArray(ws.objects, name, 'name') : ws.objects || ws.object: null);
};

exports.signature = function() {
    var args   = Array.prototype.slice.call(arguments['0'], 0),
        len    = args.length,
        create = false,
        opts   = {},
        api;

    if (len === 1 && Lang.isObject(args[0])) {
        opts = args[0];
        api  = opts.project ? '/r/project/execute/script' :
            '/r/repository/script/execute';
    } else if (len === 1 && Lang.isString(args[0])) {
        args = args[0].split('\/');
        api  = '/r/repository/script/execute'
        opts = {
            author: args[1],
            directory: args[2],
            filename: args[3]
        };
    } else if (len === 2) {
        // ex: .script('/testuser/root/DeployR - Hello World.R', project)
        var project = args[1];
        api = project ? '/r/project/execute/script' : '/r/repository/script/execute';

        args = args[0].split('\/');
        opts = {
            project: project,
            author: args[1],
            directory: args[2],
            filename: args[3]
        };
    } else if (len > 2) {
        // ex: .script('DeployR - Hello World.R', 'testuser', 'root')
        opts = {
            author: args[2],
            directory: args[1],
            filename: args[0]
        };
    }

    // indicate a new project should be created
    if (opts.project && Lang.isBoolean(opts.project)) {
      delete opts['project'];
      create = true;
    }

    return {
        api: api,
        opts: opts,
        create: create
    };
};
},{"./lang":7}],16:[function(require,module,exports){

},{}],17:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],18:[function(require,module,exports){
(function (process){
/**
* attempt of a simple defer/promise library for mobile development
* @author Jonathan Gotti < jgotti at jgotti dot net>
* @since 2012-10
* @version 0.6.0
* @changelog
*           - 2013-12-07 - last promise 1.1 specs test passings (thx to wizardwerdna)
 *                       - reduce promises footprint by unscoping methods that could be
*           - 2013-10-23 - make it workig across node-webkit contexts
*           - 2013-07-03 - bug correction in promixify method (thx to adrien gibrat )
*           - 2013-06-22 - bug correction in nodeCapsule method
*           - 2013-06-17 - remove unnecessary Array.indexOf method dependency
*           - 2013-04-18 - add try/catch block around nodeCapsuled methods
*           - 2013-04-13 - check promises/A+ conformity
*                        - make some minication optimisations
*           - 2013-03-26 - add resolved, fulfilled and rejected methods
*           - 2013-03-21 - browser/node compatible
*                        - new method nodeCapsule
*                        - simpler promixify with full api support
*           - 2013-01-25 - add rethrow method
*                        - nextTick optimisation -> add support for process.nextTick + MessageChannel where available
*           - 2012-12-28 - add apply method to promise
*           - 2012-12-20 - add alwaysAsync parameters and property for default setting
*/
(function(undef){
	"use strict";

	var nextTick
		, isFunc = function(f){ return ( typeof f === 'function' ); }
		, isArray = function(a){ return Array.isArray ? Array.isArray(a) : (a instanceof Array); }
		, isObjOrFunc = function(o){ return !!(o && (typeof o).match(/function|object/)); }
		, isNotVal = function(v){ return (v === false || v === undef || v === null); }
		, slice = function(a, offset){ return [].slice.call(a, offset); }
		, undefStr = 'undefined'
		, tErr = typeof TypeError === undefStr ? Error : TypeError
	;
	if ( (typeof process !== undefStr) && process.nextTick ) {
		nextTick = process.nextTick;
	} else if ( typeof MessageChannel !== undefStr ) {
		var ntickChannel = new MessageChannel(), queue = [];
		ntickChannel.port1.onmessage = function(){ queue.length && (queue.shift())(); };
		nextTick = function(cb){
			queue.push(cb);
			ntickChannel.port2.postMessage(0);
		};
	} else {
		nextTick = function(cb){ setTimeout(cb, 0); };
	}
	function rethrow(e){ nextTick(function(){ throw e;}); }

	/**
	 * @typedef deferred
	 * @property {promise} promise
	 * @method resolve
	 * @method fulfill
	 * @method reject
	 */

	/**
	 * @typedef {function} fulfilled
	 * @param {*} value promise resolved value
	 * @returns {*} next promise resolution value
	 */

	/**
	 * @typedef {function} failed
	 * @param {*} reason promise rejection reason
	 * @returns {*} next promise resolution value or rethrow the reason
	 */

	//-- defining unenclosed promise methods --//
	/**
	 * same as then without failed callback
	 * @param {fulfilled} fulfilled callback
	 * @returns {promise} a new promise
	 */
	function promise_success(fulfilled){ return this.then(fulfilled, undef); }

	/**
	 * same as then with only a failed callback
	 * @param {failed} failed callback
	 * @returns {promise} a new promise
	 */
	function promise_error(failed){ return this.then(undef, failed); }


	/**
	 * same as then but fulfilled callback will receive multiple parameters when promise is fulfilled with an Array
	 * @param {fulfilled} fulfilled callback
	 * @param {failed} failed callback
	 * @returns {promise} a new promise
	 */
	function promise_apply(fulfilled, failed){
		return this.then(
			function(a){
				return isFunc(fulfilled) ? fulfilled.apply(null, isArray(a) ? a : [a]) : (defer.onlyFuncs ? a : fulfilled);
			}
			, failed || undef
		);
	}

	/**
	 * cleanup method which will be always executed regardless fulfillment or rejection
	 * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
	 *                      when the promise is not pending anymore
	 * @returns {promise} the same promise untouched
	 */
	function promise_ensure(cb){
		function _cb(){ cb(); }
		this.then(_cb, _cb);
		return this;
	}

	/**
	 * take a single callback which wait for an error as first parameter. other resolution values are passed as with the apply/spread method
	 * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
	 *                      when the promise is not pending anymore with error as first parameter if any as in node style
	 *                      callback. Rest of parameters will be applied as with the apply method.
	 * @returns {promise} a new promise
	 */
	function promise_nodify(cb){
		return this.then(
			function(a){
				return isFunc(cb) ? cb.apply(null, isArray(a) ? a.splice(0,0,undefined) && a : [undefined,a]) : (defer.onlyFuncs ? a : cb);
			}
			, function(e){
				return cb(e);
			}
		);
	}

	/**
	 *
	 * @param {function} [failed] without parameter will only rethrow promise rejection reason outside of the promise library on next tick
	 *                            if passed a failed method then will call failed on rejection and throw the error again if failed didn't
	 * @returns {promise} a new promise
	 */
	function promise_rethrow(failed){
		return this.then(
			undef
			, failed ? function(e){ failed(e); throw e; } : rethrow
		);
	}

	/**
	* @param {boolean} [alwaysAsync] if set force the async resolution for this promise independantly of the D.alwaysAsync option
	* @returns {deferred} defered object with property 'promise' and methods reject,fulfill,resolve (fulfill being an alias for resolve)
	*/
	var defer = function (alwaysAsync){
		var alwaysAsyncFn = (undef !== alwaysAsync ? alwaysAsync : defer.alwaysAsync) ? nextTick : function(fn){fn();}
			, status = 0 // -1 failed | 1 fulfilled
			, pendings = []
			, value
			/**
			 * @typedef promise
			 */
			, _promise  = {
				/**
				 * @param {fulfilled|function} fulfilled callback
				 * @param {failed|function} failed callback
				 * @returns {promise} a new promise
				 */
				then: function(fulfilled, failed){
					var d = defer();
					pendings.push([
						function(value){
							try{
								if( isNotVal(fulfilled)){
									d.resolve(value);
								} else {
									d.resolve(isFunc(fulfilled) ? fulfilled(value) : (defer.onlyFuncs ? value : fulfilled));
								}
							}catch(e){
								d.reject(e);
							}
						}
						, function(err){
							if ( isNotVal(failed) || ((!isFunc(failed)) && defer.onlyFuncs) ) {
								d.reject(err);
							}
							if ( failed ) {
								try{ d.resolve(isFunc(failed) ? failed(err) : failed); }catch(e){ d.reject(e);}
							}
						}
					]);
					status !== 0 && alwaysAsyncFn(execCallbacks);
					return d.promise;
				}

				, success: promise_success

				, error: promise_error
				, otherwise: promise_error

				, apply: promise_apply
				, spread: promise_apply

				, ensure: promise_ensure

				, nodify: promise_nodify

				, rethrow: promise_rethrow

				, isPending: function(){ return !!(status === 0); }

				, getStatus: function(){ return status; }
			}
		;
		_promise.toSource = _promise.toString = _promise.valueOf = function(){return value === undef ? this : value; };


		function execCallbacks(){
			if ( status === 0 ) {
				return;
			}
			var cbs = pendings, i = 0, l = cbs.length, cbIndex = ~status ? 0 : 1, cb;
			pendings = [];
			for( ; i < l; i++ ){
				(cb = cbs[i][cbIndex]) && cb(value);
			}
		}

		/**
		 * fulfill deferred with given value
		 * @param {*} val
		 * @returns {deferred} this for method chaining
		 */
		function _resolve(val){
			var done = false;
			function once(f){
				return function(x){
					if (done) {
						return undefined;
					} else {
						done = true;
						return f(x);
					}
				};
			}
			if ( status ) {
				return this;
			}
			try {
				var then = isObjOrFunc(val) && val.then;
				if ( isFunc(then) ) { // managing a promise
					if( val === _promise ){
						throw new tErr("Promise can't resolve itself");
					}
					then.call(val, once(_resolve), once(_reject));
					return this;
				}
			} catch (e) {
				once(_reject)(e);
				return this;
			}
			alwaysAsyncFn(function(){
				value = val;
				status = 1;
				execCallbacks();
			});
			return this;
		}

		/**
		 * reject deferred with given reason
		 * @param {*} Err
		 * @returns {deferred} this for method chaining
		 */
		function _reject(Err){
			status || alwaysAsyncFn(function(){
				try{ throw(Err); }catch(e){ value = e; }
				status = -1;
				execCallbacks();
			});
			return this;
		}
		return /**@type deferred */ {
			promise:_promise
			,resolve:_resolve
			,fulfill:_resolve // alias
			,reject:_reject
		};
	};

	defer.deferred = defer.defer = defer;
	defer.nextTick = nextTick;
	defer.alwaysAsync = true; // setting this will change default behaviour. use it only if necessary as asynchronicity will force some delay between your promise resolutions and is not always what you want.
	/**
	* setting onlyFuncs to false will break promises/A+ conformity by allowing you to pass non undefined/null values instead of callbacks
	* instead of just ignoring any non function parameters to then,success,error... it will accept non null|undefined values.
	* this will allow you shortcuts like promise.then('val','handled error'')
	* to be equivalent of promise.then(function(){ return 'val';},function(){ return 'handled error'})
	*/
	defer.onlyFuncs = true;

	/**
	 * return a fulfilled promise of given value (always async resolution)
	 * @param {*} value
	 * @returns {promise}
	 */
	defer.resolved = defer.fulfilled = function(value){ return defer(true).resolve(value).promise; };

	/**
	 * return a rejected promise with given reason of rejection (always async rejection)
	 * @param {*} reason
	 * @returns {promise}
	 */
	defer.rejected = function(reason){ return defer(true).reject(reason).promise; };

	/**
	 * return a promise with no resolution value which will be resolved in time ms (using setTimeout)
	 * @param {int} [time] in ms default to 0
	 * @returns {promise}
	 */
	defer.wait = function(time){
		var d = defer();
		setTimeout(d.resolve, time || 0);
		return d.promise;
	};

	/**
	 * return a promise for the return value of function call which will be fulfilled in delay ms or rejected if given fn throw an error
	 * @param {function} fn
	 * @param {int} [delay] in ms default to 0
	 * @returns {promise}
	 */
	defer.delay = function(fn, delay){
		var d = defer();
		setTimeout(function(){ try{ d.resolve(fn.apply(null)); }catch(e){ d.reject(e); } }, delay || 0);
		return d.promise;
	};

	/**
	 * if given value is not a promise return a fulfilled promise resolved to given value
	 * @param {*} promise a value or a promise
	 * @returns {promise}
	 */
	defer.promisify = function(promise){
		if ( promise && isFunc(promise.then) ) { return promise;}
		return defer.resolved(promise);
	};

	function multiPromiseResolver(callerArguments, returnPromises){
		var promises = slice(callerArguments);
		if ( promises.length === 1 && isArray(promises[0]) ) {
			if(! promises[0].length ){
				return defer.fulfilled([]);
			}
			promises = promises[0];
		}
		var args = []
			, d = defer()
			, c = promises.length
		;
		if ( !c ) {
			d.resolve(args);
		} else {
			var resolver = function(i){
				promises[i] = defer.promisify(promises[i]);
				promises[i].then(
					function(v){
						if (! (i in args) ) { //@todo check this is still required as promises can't be resolve more than once
							args[i] = returnPromises ? promises[i] : v;
							(--c) || d.resolve(args);
						}
					}
					, function(e){
						if(! (i in args) ){
							if( ! returnPromises ){
								d.reject(e);
							} else {
								args[i] = promises[i];
								(--c) || d.resolve(args);
							}
						}
					}
				);
			};
			for( var i = 0, l = c; i < l; i++ ){
				resolver(i);
			}
		}
		return d.promise;
	}

	/**
	 * return a promise for all given promises / values.
	 * the returned promises will be fulfilled with a list of resolved value.
	 * if any given promise is rejected then on the first rejection the returned promised will be rejected with the same reason
	 * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
	 * @returns {promise} of a list of given promise resolution value
	 */
	defer.all = function(){ return multiPromiseResolver(arguments,false); };

	/**
	 * return an always fulfilled promise of array<promise> list of promises/values regardless they resolve fulfilled or rejected
	 * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
	 *                     (non promise values will be promisified)
	 * @returns {promise} of the list of given promises
	 */
	defer.resolveAll = function(){ return multiPromiseResolver(arguments,true); };

	/**
	 * transform a typical nodejs async method awaiting a callback as last parameter, receiving error as first parameter to a function that
	 * will return a promise instead. the returned promise will resolve with normal callback value minus the first error parameter on
	 * fulfill and will be rejected with that error as reason in case of error.
	 * @param {object} [subject] optional subject of the method to encapsulate
	 * @param {function} fn the function to encapsulate if the normal callback should receive more than a single parameter (minus the error)
	 *                      the promise will resolve with the list or parameters as fulfillment value. If only one parameter is sent to the
	 *                      callback then it will be used as the resolution value.
	 * @returns {Function}
	 */
	defer.nodeCapsule = function(subject, fn){
		if ( !fn ) {
			fn = subject;
			subject = void(0);
		}
		return function(){
			var d = defer(), args = slice(arguments);
			args.push(function(err, res){
				err ? d.reject(err) : d.resolve(arguments.length > 2 ? slice(arguments, 1) : res);
			});
			try{
				fn.apply(subject, args);
			}catch(e){
				d.reject(e);
			}
			return d.promise;
		};
	};

	typeof window !== undefStr && (window.D = defer);
	typeof module !== undefStr && module.exports && (module.exports = defer);

})();

}).call(this,require('_process'))

},{"_process":17}],19:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root = 'undefined' == typeof window
  ? this
  : window;

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Determine XHR.
 */

function getXHR() {
  if (root.XMLHttpRequest
    && ('file:' != root.location.protocol || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
}

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(obj[key]));
    }
  }
  return pairs.join('&');
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  this.text = this.req.method !='HEAD' 
     ? this.xhr.responseText 
     : null;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  return parse && str && str.length
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  var type = status / 100 | 0;

  // status / class
  this.status = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status || 1223 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self); 
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
    }

    self.callback(err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new FormData();
  this._formData.append(field, file, filename);
  return this;
};

/**
 * Send `data`, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // querystring
 *       request.get('/search')
 *         .end(callback)
 *
 *       // multiple data "writes"
 *       request.get('/search')
 *         .send({ search: 'query' })
 *         .send({ range: '1..5' })
 *         .send({ order: 'desc' })
 *         .end(callback)
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"})
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  if (2 == fn.length) return fn(err, res);
  if (err) return this.emit('error', err);
  fn(res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
  err.crossDomain = true;
  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;
    if (0 == xhr.status) {
      if (self.aborted) return self.timeoutError();
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  if (xhr.upload) {
    xhr.upload.onprogress = function(e){
      e.percent = e.loaded / e.total * 100;
      self.emit('progress', e);
    };
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var serialize = request.serialize[this.getHeader('Content-Type')];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);
  xhr.send(data);
  return this;
};

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.del = function(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":20,"reduce":21}],20:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],21:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],22:[function(require,module,exports){
module.exports={
  "name": "deployr",
  "version": "7.4.0",
  "description": "Simplified JavaScript client library for making requests to DeployR.",
  "keywords": [
    "deployr",
    "deployr.io",
    "ajax",
    "R",
    "api",
    "simple"
  ],
  "author": "DeployR - Revolution Analytics Inc.",
  "contributors": [
    {
      "name": "Sean Wells"
    }
  ],
  "repository": {
    "type": "git",
    "url": "git://github.com/deployr/js-client-library.git"
  },
  "homepage": "http://deployr.revolutionanalytics.com/documents/dev/client-jsdoc",
  "scripts": {
    "start": "gulp start",
    "build": "gulp"
  },
  "devDependencies": {
    "browserify": "^9.0.3",
    "gulp": "^3.8.11",
    "gulp-connect": "^2.2.0",
    "gulp-header": "^1.2.2",
    "gulp-jshint": "^1.9.2",
    "gulp-livereload": "^3.8.0",
    "gulp-plumber": "^0.6.6",
    "gulp-uglifyjs": "^0.6.0",
    "gulp-util": "^3.0.4",
    "tape": "^3.5.0",
    "vinyl-source-stream": "^1.0.0"
  },
  "dependencies": {
    "d.js": "^0.6.0",
    "superagent": "^0.21.0",
    "ws": "^0.4.32"
  },
  "main": "deployr.js",
  "engines": {
    "node": ">= 0.10.0"
  },
  "license": "Apache 2.0 License"
}

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXBsb3lyLmpzIiwiYXBpcy5qc29uIiwibGliL2RlcHJlY2F0ZWQuanMiLCJsaWIvZW1pdHRlci5qcyIsImxpYi9lbmNvZGVyLmpzIiwibGliL2VzLmpzIiwibGliL2xhbmcuanMiLCJsaWIvbG9nZ2VyLmpzIiwibGliL29wdGlvbmFsLmpzIiwibGliL3F1ZXVlLmpzIiwibGliL3JpbnB1dC5qcyIsImxpYi9yaW5wdXRzLmpzIiwibGliL3J0eXBlcy5qcyIsImxpYi9zZWxmaXNoLmpzIiwibGliL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvZC5qcy9saWIvRC5qcyIsIm5vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9jbGllbnQuanMiLCJub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9ub2RlX21vZHVsZXMvcmVkdWNlLWNvbXBvbmVudC9pbmRleC5qcyIsInBhY2thZ2UuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4eENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdHlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbmJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDempDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNSBieSBSZXZvbHV0aW9uIEFuYWx5dGljcyBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciB3aW4gICAgICAgICA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyksICAgXG4gICAgcmVxdWVzdCAgICAgPSByZXF1aXJlKCdzdXBlcmFnZW50JyksXG4gICAgRCAgICAgICAgICAgPSByZXF1aXJlKCdkLmpzJyksXG4gICAgZnMgICAgICAgICAgPSByZXF1aXJlKCdmcycpLFxuICAgIGFwaXMgICAgICAgID0gcmVxdWlyZSgnLi9hcGlzLmpzb24nKSwgXG4gICAgRXZlbnRTdHJlYW0gPSByZXF1aXJlKCcuL2xpYi9lcycpLFxuICAgIHV0aWxzICAgICAgID0gcmVxdWlyZSgnLi9saWIvdXRpbHMnKSxcbiAgICBMYW5nICAgICAgICA9IHJlcXVpcmUoJy4vbGliL2xhbmcnKSwgICBcbiAgICBMb2dnZXIgICAgICA9IHJlcXVpcmUoJy4vbGliL2xvZ2dlcicpLCAgIFxuICAgIFF1ZXVlICAgICAgID0gcmVxdWlyZSgnLi9saWIvcXVldWUnKSxcbiAgICBFbWl0dGVyICAgICA9IHJlcXVpcmUoJy4vbGliL2VtaXR0ZXInKSxcbiAgICBlbmNvZGVyICAgICA9IHJlcXVpcmUoJy4vbGliL2VuY29kZXInKSxcbiAgICBCYXNlICAgICAgICA9IHJlcXVpcmUoJy4vbGliL3NlbGZpc2gnKS5CYXNlLFxuICAgIFJJbnB1dCAgICAgID0gcmVxdWlyZSgnLi9saWIvcmlucHV0JyksICAgIFxuICAgIFJJbnB1dHMgICAgID0gcmVxdWlyZSgnLi9saWIvcmlucHV0cycpLFxuICAgIG1lcmdlICAgICAgID0gdXRpbHMubWVyZ2U7XG5cbi8qXG4gKiBUdXJuIGdsb2JhbCBsb2dnaW5nIG9mZiBieSBkZWZhdWx0XG4gKi9cbkxvZ2dlci5zZXRMZXZlbChMb2dnZXIuT0ZGKTtcblxuLypcbiAqIEdsb2JhbCBvcHRpb25zIHRoZSBwZXJzaXN0IHRocm91Z2ggYWxsIERlcGxveVIgcmVxdWVzdHMuXG4gKi9cbnZhciBnbG9iYWxPcHRpb25zID0geyBcbiAgY29yczogZmFsc2UsXG4gIGxvZ2dpbmc6IGZhbHNlLFxuICBzdGlja3k6IGZhbHNlLFxuICBjb29raWVzOiBudWxsLFxuICBob3N0OiAnJyxcbiAgbWF4UmVxdWVzdHM6IG51bGwsIC8vIG5vIHNvY2tldCBwb29saW5nIGluIGh0dHAuQWdlbnRcbiAgZXZlbnRzOnt9LFxuICBzZXQ6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7IGlmIChwcm9wICE9PSAnc2V0JykgeyB0aGlzW3Byb3BdID0gdmFsdWU7IH0gfVxufTtcblxuLypcbiAqIFRoZSB0b3AtbGV2ZWwgRGVwbG95UiBBUEkgcmVzcG9uc2UgZW50aXRpZXMuXG4gKi9cbnZhciBUT1BMRVZFTF9FTlRJVElFUyA9IFtcbiAgJ3VzZXInLCBcbiAgJ3Byb2plY3QnLCBcbiAgJ3dvcmtzcGFjZScsIFxuICAnZXhlY3V0aW9uJywgXG4gICdkaXJlY3RvcnknLCBcbiAgJ3JlcG9zaXRvcnknLCBcbiAgJ3BhY2thZ2VzJyBcbl07XG5cbi8qXG4gKiBOb3RpZnkgZ2xvYmFsIElPIGVycm9yIGV2ZW50cyBhY2Nlc3NpYmxlIGJ5IGFsbCBzdWJzY3JpYmVycyBhY3Jvc3MgcmVxdWVzdHMuXG4gKi9cbmZ1bmN0aW9uIHJhaXNlR2xvYmFsRXJyb3JzKGFwaSwgcmVzKSB7XG4gIHZhciBjb2RlICAgID0gcmVzLmRlcGxveXIgPyByZXMuZGVwbG95ci5yZXNwb25zZS5lcnJvckNvZGUgOiByZXMuc3RhdHVzLFxuICAgICAgY29udGV4dCA9IHRoaXM7XG5cbiAgLy8gLS0gZ2xvYmFsIGV2ZW50cyBpZiBwcm92aWRlZCAtLVxuICBpZiAoZ2xvYmFsT3B0aW9ucy5ldmVudHMpIHtcbiAgICBpZiAoIXJlcy5kZXBsb3lyKSB7XG4gICAgICByZXMgPSByZXMudGV4dDtcbiAgICB9XG5cbiAgICBjb250ZXh0ID0gZ2xvYmFsT3B0aW9ucy5ldmVudHMuY3R4IHx8IGNvbnRleHQ7XG5cbiAgICAvLyAtLSBnZW5lcmFsIGdsb2JhbCBmYWlsdXJlIC0tXG4gICAgaWYgKGdsb2JhbE9wdGlvbnMuZXZlbnRzLmVycm9yKSB7XG4gICAgICBnbG9iYWxPcHRpb25zLmV2ZW50cy5lcnJvci5hcHBseShjb250ZXh0LCBbYXBpLCByZXNdKTtcbiAgICB9XG5cbiAgICAvLyAtLSBIVFRQIG9yIERlcGxveVIgZ2xvYmFsIGVycm9ycyAtLSAgICBcbiAgICBpZiAoZ2xvYmFsT3B0aW9ucy5ldmVudHNbY29kZV0pIHtcbiAgICAgIGdsb2JhbE9wdGlvbnMuZXZlbnRzW2NvZGVdLmFwcGx5KGNvbnRleHQsIFthcGksIHJlc10pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoZSBgRGVwbG95UmAgcmVxdWVzdCBjbGFzcyBpcyBhIHV0aWxpdHkgdGhhdCBicm9rZXJzIEhUVFAgcmVxdWVzdHMgdGhyb3VnaCBhIFxuICogc2ltcGxpZmllZCBmbHVpZCBpbnRlcmZhY2UgdG8gRGVwbG95Ui5cbiAqXG4gKiBAbW9kdWxlIGRlcGxveXJcbiAqIEBmb3IgZGVwbG95clxuICovXG52YXIgRGVwbG95UiA9IEJhc2UuZXh0ZW5kKEVtaXR0ZXIsIFJJbnB1dHMsIHtcblxuICAvKipcbiAgICogVGhlIGBEZXBsb3lSYCBSZXF1ZXN0IGNsYXNzIGlzIGEgdXRpbGl0eSB0aGF0IGJyb2tlcnMgSFRUUCByZXF1ZXN0cyB0aHJvdWdoIFxuICAgKiBhIHNpbXBsaWZpZWQgZmx1aWQgaW50ZXJmYWNlIHRvIERlcGxveVIuXG4gICAqIFxuICAgKiBAY2xhc3MgXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXBpIFRoZSBEZXBsb3lSIEFQSVxuICAgKiBAcGFyYW0ge09iamVjdH0gbGluayBUaGUgb2JqZWN0IGxpdGVyYWwgY29udGFpbmluZyB0aGUgcHJldmlvdXMgcmVxdWVzdC5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBpbml0aWFsaXplOiBmdW5jdGlvbiBpbml0aWFsaXplKGFwaSwgbGluaykge1xuICAgICBFbWl0dGVyLmluaXRpYWxpemUuY2FsbCh0aGlzLCB7fSk7XG4gIFxuICAgICB2YXIgb3B0cyA9IGdsb2JhbE9wdGlvbnM7XG5cbiAgICAgaWYgKCFhcGlzW2FwaV0pIHsgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFQSSBcIicgKyBhcGkgKyAnXCInKTsgfVxuICAgIFxuICAgICB0aGlzLmFwaSAgICAgICAgPSBtZXJnZSh7ICdjYWxsJzogYXBpIH0sIGFwaXNbYXBpXSk7ICAgIFxuICAgICB0aGlzLmxpbmsgICAgICAgPSBsaW5rIHx8IHt9O1xuICAgICB0aGlzLnEgICAgICAgICAgPSB0aGlzLmxpbmsucXVldWUgfHwgbmV3IFF1ZXVlKCk7XG4gICAgIHRoaXMuZGVmZXJyZWQgICA9IHRoaXMubGluay5kZWZlcnJlZCB8fCBEKCk7XG4gICAgIHRoaXMuY29va2llcyAgICA9IHRoaXMubGluay5jb29raWVzO1xuICAgICB0aGlzLmxvZ2dlciAgICAgPSBMb2dnZXIuZ2V0KGFwaSwgTG9nZ2VyLk9GRik7IC8vIHRyYW5zYWN0aW9uLWxldmVsIGxvZ2dpbmdcbiAgICAgdGhpcy5wYXJhbXMgICAgID0ge307XG4gICAgIHRoaXMuaW5wdXRzICAgICA9IFtdOyAvLyByaW5wdXRzIGxpc3QgXG4gICAgIHRoaXMub3V0cHV0cyAgICA9IFtdOyAvLyByb3V0cHV0IG9iamVjdCBsaXN0XG4gICAgIHRoaXMucnN0cmVhbSAgICA9IGZhbHNlO1xuICAgICB0aGlzLmRlbGF5ZWQgICAgPSBmYWxzZTtcbiAgICAgdGhpcy5nbG9iYWxFdnRzID0gdHJ1ZTsgLy8gc3VwcHJlc3N8cmFpc2UgZ2xvYmFsIGV2ZW50cyBmb3QgdGhpcyBgaW9gICAgICBcbiAgICAgdGhpcy5maWxlICAgICAgID0gbnVsbDsgXG4gICAgIHRoaXMuZmlsdGVyICAgICA9IG51bGw7IFxuXG4gICAgIC8vIHByZXNldCBkZXBsb3lyJ3MgYXNzaWduZWQgcmVzcG9uc2UgZm9ybWF0IGZvciBgdGhpc2AgYXBpXG4gICAgIHRoaXMuZGF0YSh7IGZvcm1hdDogdGhpcy5hcGkuZm9ybWF0IH0pO1xuXG4gICAgIC8vIHdyYXAgc3VwZXJhZ2VudCBmb3IgdGhlIGhlYXZseSBsaWZ0aW5nICAgICAgXG4gICAgIHRoaXMucmVxID0gXG4gICAgICAgIHJlcXVlc3RbdGhpcy5hcGkubWV0aG9kLnRvTG93ZXJDYXNlKCldKG9wdHMuaG9zdCArICcvZGVwbG95cicgKyBhcGkpO1xuICAgICB0aGlzLnJlcS50aW1lb3V0KDIwICogNjAgKiAxMDAwKTsgLy8gZGVmYXVsdCB0aW1lb3V0IC0tPiAyMCBtaW51dGVzXG5cbiAgICAgLy8gQWxsIENPUlMgZGVwbG95ciBjYWxscyByZXF1aXJlIHN0aWNreSBzZXNzaW9uc1xuICAgICBpZiAod2luICYmIGdsb2JhbE9wdGlvbnMuY29ycykgeyB0aGlzLnJlcS53aXRoQ3JlZGVudGlhbHMoKTsgfSAgICBcbiAgfSxcblxuICAvKipcbiAgICogQmluZHMgdGhlIHNjb3BlIGNvbnRleHQgZm9yIHRoZSBjb25maWd1cmVkIGAuZW5kKClgIGFuZCBgLmVycm9yKClgIGV2ZW50ICAgIFxuICAgKiBoYW5kbGVyIGNhbGxiYWNrcyBvbiB0aGlzIHJlcXVlc3QuXG4gICAqXG4gICAqIEBtZXRob2QgY3R4XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IFRoZSBgdGhpc2Agb2JqZWN0IGZvciB0aGUgY29uZmlndXJlZCBgLmVuZCgpYCBhbmRcbiAgICogYC5lcnJvcigpYCBldmVudCBoYW5kbGVycyBvbiB0aGlzIHJlcXVlc3QuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyBcbiAgY3R4OiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIHRoaXMuc2NvcGUgPSBjb250ZXh0IHx8IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogU3VwcHJlc3Mgb3IgcmFpc2UgZ2xvYmFsIGV2ZW50cyBmb3IgdGhpcyBgaW9gIHJlcXVlc3QuXG4gICAqXG4gICAqIEBtZXRob2QgZ2xvYmFsXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmFpc2UgYHRydWVgIHRvIHJhaXNlIGdsb2JhbCBldmVudHMsIGBmYWxzZWAgdG8gc3VwcmVzcyBcbiAgICogZXZlbnQgZmlyaW5nIGdsb2JhbGx5LlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgXG4gIGdsb2JhbDogZnVuY3Rpb24ocmFpc2UpIHtcbiAgICB0aGlzLmdsb2JhbEV2dHMgPSBMYW5nLmlzQm9vbGVhbihyYWlzZSkgPyByYWlzZSA6IHRoaXMuZ2xvYmFsRXZ0cztcblxuICAgIHJldHVybiB0aGlzO1xuICB9LCAgXG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGRldGFpbHMgYWJvdXQgdXNlci5cbiAgICogICBcbiAgICogQG1ldGhvZCBhYm91dFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGRldGFpbHMgYWJvdXQgdXNlciBvdGhlcndpZXMgYG51bGxgLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgYWJvdXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IHRoaXMucmVxLnJlcztcblxuICAgIHJldHVybiB0aGlzLmFwaVsnY2FsbCddID09PSAnL3IvdXNlci9sb2dpbicgJiYgcmVzcG9uc2UgPyBcbiAgICAgICAgICAgcmVzcG9uc2UuYm9keS5nZXQoJ3VzZXInKSA6IG51bGw7XG4gIH0sICBcblxuICAvKipcbiAgICogU2hhcmVzIHRoZSBjb29raWVzIGZyb20gYSBkaWZmcmVudCBgLmlvKClgIGFnZW50IHRvIHByZXNlcnZlIHNlc3Npb24gc3RhdGVcbiAgICogYWNyb3NzIGB0aGlzYCByZXF1ZXN0IGFuZCBhbGwgcmVxdWVzdHMgY2hhaW5lZCB0byBpdC5cbiAgICpcbiAgICogQG1ldGhvZCBzaGFyZVxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgXG4gIHNoYXJlOiBmdW5jdGlvbiAoY29va2llcykge1xuICAgIGlmIChnbG9iYWxPcHRpb25zLnN0aWNreSkge1xuICAgICAgaWYgKGdsb2JhbE9wdGlvbnMuY29va2llcykge1xuICAgICAgICB0aGlzLmNvb2tpZXMgPSBnbG9iYWxPcHRpb25zLmNvb2tpZXMuc2xpY2UoMCk7IFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvb2tpZXMpIHsgXG4gICAgICAgICAgdGhpcy5jb29raWVzID0gY29va2llcy5zbGljZSgwKTsgXG4gICAgICAgICAgZ2xvYmFsT3B0aW9ucy5zZXQoJ2Nvb2tpZXMnLCB0aGlzLmNvb2tpZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29va2llcyA9IChjb29raWVzID8gY29va2llcy5zbGljZSgwKSA6IHRoaXMuY29va2llcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIEhUVFAgY29va2llIHByZXZpb3VzbHkgc2VudCBieSB0aGUgc2VydmVyIHdpdGggU2V0LUNvb2tpZS5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgcGFzc2VkIHRvIGAuc2hhcmUocnVzZXIuZ2V0Q29va2llcygpKWAgb2YgYSBkaWZmcmVudFxuICAgKiBgLmlvKClgIGFnZW50IHRvIHByZXNlcnZlIHNlc3Npb24gc3RhdGUgYWNyb3NzIHJlcXVlc3RzLlxuICAgKlxuICAgKiBAbWV0aG9kIGdldENvb2tpZXNcbiAgICogQHJldHVybiB7QXJyYXl9IFRoZSBIVFRQIGNvb2tpZSBwcmV2aW91c2x5IHNlbnQgYnkgdGhlIHNlcnZlciB3aXRoIFxuICAgKiBTZXQtQ29va2llLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gIFxuICBnZXRDb29raWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29va2llcztcbiAgfSwgXG5cbiAgZGVsYXk6IGZ1bmN0aW9uIChtcykge1xuICAgIC8vIFRPRE86IHN1cHBvcnQgZGVsYXllZCByZXF1ZXN0cyBiYXNlZCBvbiBtcyBmb3Igbm93IHRoaXMgaXMganVzdCBhIHBhdXNlLlxuICAgIHRoaXMuZGVsYXllZCA9ICFpc05hTihwYXJzZUZsb2F0KG1zKSkgJiYgaXNGaW5pdGUobXMpID8gbXMgOiB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sICAgXG5cbiAgLyoqXG4gICAqIFVud2luZCB0aGUgcXVldWUgY2hhaW4gY2xlYXJpbmcgcmVxdWVzdHMgdGhhdCBtaWdodCBoYXZlIGRlbGF5cyBhdHRhY2hlZC5cbiAgICpcbiAgICogQG1ldGhvZCBkcmFpblxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2Ugd3JhcHBpbmcgdGhlIHJlc29sdXRpb24gb2YgZWl0aGVyIFwicmVzb2x2ZVwiIG9yXG4gICAqIFwicmVqZWN0XCIgY2FsbGJhY2suXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBkcmFpbjogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVsYXllZCA9IGZhbHNlO1xuICAgIHRoaXMucS5mbHVzaCgpOyBcblxuICAgIHJldHVybiB0aGlzLmRlZmVycmVkLnByb21pc2U7XG4gIH0sICAgXG5cbiAgLyoqXG4gICAqIFRoZSBgLnByb21pc2UoKWAgbWV0aG9kIHJldHVybnMgYSBkeW5hbWljYWxseSBnZW5lcmF0ZWQgUHJvbWlzZSB0aGF0IGlzIFxuICAgKiByZXNvbHZlZCBvbmNlIGFsbCBEZXBsb3lSIGAuaW8oKWAgcmVxdWVzdHMgaGF2ZSBlbmRlZC5cbiAgICogICBcbiAgICogQG1ldGhvZCBwcm9taXNlXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB3cmFwcGluZyB0aGUgcmVzb2x1dGlvbiBvZiBlaXRoZXIgXCJyZXNvbHZlXCIgb3JcbiAgICogXCJyZWplY3RcIiBjYWxsYmFjay5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovICAgICBcbiAgcHJvbWlzZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZW5kKCk7XG5cbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZC5wcm9taXNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBYm9ydCB0aGUgRGVwbG95UiByZXF1ZXN0LlxuICAgKlxuICAgKiBAbWV0aG9kIGFib3J0ICBcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gIFxuICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVxLmFib3J0KCk7XG4gICAgdGhpcy5lbWl0KCdhYm9ydCcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAvKipcbiAgKiBTZXQgdGltZW91dCB0byBgbXNgLlxuICAqXG4gICogQG1ldGhvZCB0aW1lb3V0ICBcbiAgKiBAcGFyYW0ge051bWJlcn0gbXNcbiAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgKiBAYXBpIHB1YmxpY1xuICAqLyAgXG4gIHRpbWVvdXQ6IGZ1bmN0aW9uIChtcykge1xuICAgIHRoaXMucmVxLnRpbWVvdXQobXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAvKipcbiAgKiBUdXJuIGxvZ2dpbmcgb24gZm9yIHRoZSBzcGVjaWZpYyB0cmFuc2FjdGlvbi5cbiAgKlxuICAqIEBtZXRob2QgbG9nXG4gICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICogQGFwaSBwdWJsaWNcbiAgKi8gXG4gIGxvZzogZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgdGhpcy5sb2dnZXIuc2V0TGV2ZWwobGV2ZWwgfHwgTG9nZ2VyLkRFQlVHKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHN1Y2Nlc3NmdWwgcmVzcG9uc2VzIHRvIGNvbnRhaW4gb25seSBhIHRvcC1sZXZlbCBEZXBsb3lSIEFQSSBcbiAgICogcmVzcG9uc2UgZW50aXRpZXM6XG4gICAqIC0gJ3VzZXInXG4gICAqIC0gJ3Byb2plY3QnXG4gICAqIC0gJ3dvcmtzcGFjZScgXG4gICAqIC0gJ2V4ZWN1dGlvbicgXG4gICAqIC0gJ2RpcmVjdG9yeScgXG4gICAqIC0gJ3JlcG9zaXRvcnknXG4gICAqIC0gJ3BhY2thZ2VzJyBcbiAgICogICBcbiAgICogQG1ldGhvZCBlbnRpdHlcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBlbnRpdHk6IGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgICB0aGlzLmZpbHRlciA9IHV0aWxzLmluQXJyYXkoVE9QTEVWRUxfRU5USVRJRVMsIGVudGl0eSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgcmVxdWVzdCBkYXRhIGJlaW5nIHNlbnQgdG8gYSBEZXBsb3lSIEFQSS4gXG4gICAqXG4gICAqIEBtZXRob2QgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgb2JqZWN0IGxpdGVyYWwgY29uZmlndXJhdGlvbiBoYXNoLiBcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBkYXRhOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRhdGEgPSBkYXRhIHx8IHt9OyAgICBcblxuICAgIC8vIHJlbW92ZSBhbnkgaW5saW5lZCByaW5wdXQocykgYW5kIGF0dGFjaCB0aGVtIHRvIHRoZSByaW5wdXQocykgcHJvcGVydHlcbiAgICBpZiAoZGF0YS5yaW5wdXQgfHwgZGF0YS5yaW5wdXRzKSB7XG4gICAgICB0aGlzLnJpbnB1dChkYXRhLnJpbnB1dCk7XG4gICAgICB0aGlzLnJpbnB1dHMoZGF0YS5yaW5wdXRzKTtcbiAgICB9IFxuXG4gICAgLy8gcmVtb3ZlIGFueSBgcmVzZXJ2ZWRgIHZhbHVlcyB0aGF0IGNvdWxkIGhhdmUgYmVlbiBwYXNzZWQgYnkgbWlzdGFrZVxuICAgIHZhciBCTEFDS0xJU1QgPSBbJ3JpbnB1dCcsICdyaW5wdXRzJywgJ19fY29va2llc19fJ107XG4gICAgQkxBQ0tMSVNULmZvckVhY2goZnVuY3Rpb24ocGFyYW0pIHsgZGVsZXRlIGRhdGFbcGFyYW1dOyB9KTsgIFxuXG4gICAgdGhpcy5wYXJhbXMgPSBtZXJnZSh0aGlzLnBhcmFtcywgZGF0YSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogQXR0YWNoZXMgYSBmaWxlIHRvIGJlIHVwbG9hZGVkLiBcbiAgICpcbiAgICogQG1ldGhvZCBhdHRhY2hcbiAgICogQHBhcmFtIHtGaWxlfEJsb2J8cGF0aH0gZmlsZSBUaGUgZmlsZSB0byBiZSBhdHRhY2hlZCBmb3IgYW4gdXBsb2FkLiBGb3IgXG4gICAqIEJyb3dzZXIgZW52aXJvbm1lbnRzIHRoZSBIVE1MNSBGaWxlfEJsb2IgaXMgdXNlZC4gRm9yIHRoZSBOb2RlLmpzIFxuICAgKiBlbnZpcm9ubWVudCwgYSBmaWxlIHBhdGggaXMgYWNjZXB0ZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAob3B0aW9uYWwpIHRoZSBuYW1lIG9mIHRoZSBmaWxlIHRvIGJlIHVwbG9hZGVkLiBcbiAgICogVGhpcyBuYW1lIGRvZXMgbm90IGhhdmUgdG8gbWF0Y2ggdGhlIGFjdHVhbCBzb3VyY2UgZmlsZW5hbWUuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgYXR0YWNoOiBmdW5jdGlvbiAoZmlsZSwgZmlsZW5hbWUpIHtcbiAgICBpZiAodGhpcy5hcGkudXBsb2FkKSB7XG4gICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuXG4gICAgICAvLyBvcHRpb25hbCBmaWxlbmFtZSBoZXJlIGZvciBjb252ZW5pZW5jZVxuICAgICAgaWYgKGZpbGVuYW1lKSB7IHRoaXMuZGF0YSggeyBmaWxlbmFtZTogZmlsZW5hbWUgfSApOyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFN1cHBvcnRlZCBvbmx5IGluIE5vZGUuanMsIHRoaXMgbWV0aG9kIHdvcmtzIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIFxuICAgKiBhdHRhY2ggbWV0aG9kIHRvIGluZGljYXRlIHRoYXQgdGhlIGZpbGUgc2hvdWxkIGJlIHJlYWQgaW4gYXMgYSByZWFkYWJsZSBcbiAgICogc3RyZWFtIGR1cmluZyBhIGZpbGUgdXBsb2FkLlxuICAgKlxuICAgKiBAbWV0aG9kIHN0cmVhbVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAob3B0aW9uYWwpIHRoZSBSZWFkYWJsZSBTdHJlYW0gb3B0aW9ucyBoYXNoLlxuICAgKiAgYGBgXG4gICAqICAgIHsgZmxhZ3M6ICdyJyxcbiAgICogICAgICBlbmNvZGluZzogbnVsbCxcbiAgICogICAgICBmZDogbnVsbCxcbiAgICogICAgICBtb2RlOiAwNjY2LFxuICAgKiAgICAgIGF1dG9DbG9zZTogdHJ1ZVxuICAgKiAgICB9XG4gICAqIGBgYFxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHN0cmVhbTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucnN0cmVhbSA9ICghd2luICYmIHRoaXMuYXBpLnVwbG9hZCk7IC8vbm9kZWpzIG9ubHlcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBcbiAgLyoqXG4gICAqIEFjdHMgYXMgYSBmaW5hbGx5IHN0YXRlbWVudCBhbGxvd2luZyB5b3UgdG8gZXhlY3V0ZSBcImNsZWFudXBcIiB0eXBlIHRhc2tzIFxuICAgKiBpbiBhIHJlcXVlc3QgY2hhaW4uIEl0IGFycmFuZ2VzIGZvciBjbGVhbnVwIHRvIGJlIGNhbGxlZCwgd2l0aCBubyBcbiAgICogYXJndW1lbnRzLCB3aGVuIHRoZSBEZXBsb3lSIHJlcXVlc3QgY2hhaW4gaXMgZWl0aGVyIGNvbXBsZXRlbHkgZnVsZmlsbGVkIFxuICAgKiBvciByZWplY3RlZC5cbiAgICpcbiAgICogQG1ldGhvZCBlbnN1cmVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gzrsgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovICBcbiAgZW5zdXJlOiBmdW5jdGlvbiAoZm4pIHtcbiAgICB0aGlzLmRlZmVycmVkLnByb21pc2UuZW5zdXJlKGZuKTtcblxuICAgIHJldHVybiB0aGlzLmRlZmVycmVkLnByb21pc2U7XG4gIH0sXG4gICAgICBcbiAgLyoqXG4gICAqIFRoZSBnZW5lcmFsIGZhaWx1cmUgY2FsbGJhY2suIElmIGNhbGxlZCwgYWxsIERlcGxveVIgZXJyb3JzIGZvciB0aGlzIFxuICAgKiB0cmFuc2FjdGlvbiB3aWxsIGJlIHJldHVybmVkIGhlcmUgd2hlbiByYWlzZWQuXG4gICAqXG4gICAqIEBtZXRob2QgZXJyb3JcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gzrsgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGVycm9yOiBmdW5jdGlvbiAoZm4pIHtcbiAgICB0aGlzLm9uKCdlcnJvcicsIGZuKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTdHJlYW0gdGhlIERlcGxveVIgcmVzcG9uc2UgaW50byB0aGUgcGlwZS4gSXQgaXMgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCBpZiBcbiAgICogdGhlIGAucGlwZSgpYCBtZXRob2QgaXMgbmV2ZXIgY2FsbGVkIHRoZSByZXF1ZXN0IHdpbGwgbm90IGJlIHNlbnQuXG4gICAqXG4gICAqIFRoZSBgLnBpcGUoKWAgbWV0aG9kIHNob3VsZCBiZSBiZSB1c2VkIGFzIGFuIGFsdGVybmF0aXZlIHRvIGAuZW5kKClgIGFuZCBcbiAgICogbmV2ZXIgYWxvbmcgc2lkZSBvZiBpdC4gYC5waXBlKClgIGFuZCBgLmVuZCgpYCBhcmUgYW4gZWl0aGVyLW9yLlxuICAgKlxuICAgKiBAbWV0aG9kIHBpcGVcbiAgICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSBBIGRlc3RpbmF0aW9uIFN0cmVhbS5cbiAgICogQHJldHVybiB7U3RyZWFtfSBUaGUgcGFzc2VkIGluIGRlc3RpbmF0aW9uIHN0cmVhbSB0byBiZSB1c2VkIGZvciBhZGRpdGlvbmFsIFxuICAgKiBwaXBpbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBwaXBlOiBmdW5jdGlvbiAoZGVzdCkge1xuICAgIHZhciBxICAgPSB0aGlzLnEsXG4gICAgICAgIGFwaSA9IHRoaXMuYXBpOyAgICAgICAgXG5cbiAgICBxLmFkZChmdW5jdGlvbihyZXNwb25zZUNoYWluLCBlcnJvciwgcHJldkFyZ3MpIHsgICAgXG4gICAgICAvLyBicmFrZSB0aGUgY2FsbCBjaGFpbiBvbiBlcnJvciAgICAgIFxuICAgICAgaWYgKGVycm9yKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5kZWZlcnJlZC5yZWplY3QoZXJyb3IpOyAgICAgIFxuICAgICAgICBxLmZsdXNoKHJlc3BvbnNlQ2hhaW4sIGVycm9yLCBwcmV2QXJncyk7IC8vIGRyYWluIHRoZSBxdWV1ZVxuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuX3ByZXBSZXF1ZXN0KHJlc3BvbnNlQ2hhaW4sIHByZXZBcmdzKTtcblxuICAgICAgTG9nZ2VyLmluZm8oJ3BpcGUoKScsIGFwaSwgdGhpcy5yZXEpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygncGlwZSgpJywgYXBpLCB0aGlzLnJlcSk7ICAgXG5cbiAgICAgIHZhciBzdHJlYW0gPSB0aGlzLnJlcS5waXBlKGRlc3QpO1xuICAgICAgcS55aWVsZCh0cnVlKTtcbiAgICAgIHN0cmVhbS5vbignZXJyb3InLCBmdW5jdGlvbiAoKSB7IH0pOyAgICBcbiAgICAgIHN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24oKSB7IH0pOyAgICAgXG4gICAgICBzdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbigpIHsgfSk7ICAgICAgXG4gICAgfSwgdGhpcyk7XG4gIFxuICAgIGlmIChxLnNpemUoKSA8PSAxKSB7IHEuZmx1c2goKTsgfVxuXG4gICAgcmV0dXJuIGRlc3Q7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0IGlzIHJlYWR5IHRvIGJlIHNlbnQgdG8gRGVwbG95Ui4gSXQgaXMgaW1wb3J0YW50IFxuICAgKiB0byBub3RlIHRoYXQgaWYgdGhlIGAuZW5kKClgIG1ldGhvZCBpcyBuZXZlciBjYWxsZWQgdGhlIHJlcXVlc3Qgd2lsbCBub3QgYmVcbiAgICogc2VudC5cbiAgICpcbiAgICogQG1ldGhvZCBlbmRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gzrsgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyBcbiAgZW5kOiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgc2VsZiAgID0gdGhpcyxcbiAgICAgICAgcSAgICAgID0gdGhpcy5xLFxuICAgICAgICBhcGkgICAgPSB0aGlzLmFwaSxcbiAgICAgICAgYXJncyAgID0gbnVsbCxcbiAgICAgICAgZW50aXR5ID0gdGhpcy5maWx0ZXI7XG5cbiAgICBxLmFkZChmdW5jdGlvbihyZXNwb25zZUNoYWluLCBlcnJvciwgcHJldkFyZ3MpIHtcbiAgICAgIC8vIGJyZWFrIHRoZSBjYWxsIGNoYWluIG9uIGVycm9yICAgICAgXG4gICAgICBpZiAoZXJyb3IpIHsgICAgICAgIFxuICAgICAgICB0aGlzLmRlZmVycmVkLnJlamVjdChlcnJvcik7ICAgICAgICBcbiAgICAgICAgcS5mbHVzaChyZXNwb25zZUNoYWluLCBlcnJvciwgcHJldkFyZ3MpOyAvLyBkcmFpbiB0aGUgcXVldWVcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9wcmVwUmVxdWVzdChyZXNwb25zZUNoYWluLCBwcmV2QXJncyk7XG5cbiAgICAgIExvZ2dlci5pbmZvKCdpbygpJywgYXBpLCB0aGlzLnJlcSk7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdpbygpJywgYXBpLCB0aGlzLnJlcSk7ICAgIFxuXG4gICAgICB0aGlzLnJlcS5lbmQoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYuc2hhcmUoc2VsZi5jb29raWVzIHx8IHJlcy5oZWFkZXJzWydzZXQtY29va2llJ10pOyAgICAgICAgIFxuXG4gICAgICAgIC8vIC0tIGxvZyBjb29raWVzIGFjcm9zcyByZXF1ZXN0cyAtLVxuICAgICAgICBpZiAoc2VsZi5jb29raWVzKSB7XG4gICAgICAgICAgTG9nZ2VyLmluZm8oJ2Nvb2tpZXMnLCBhcGksIHNlbGYuY29va2llcyk7IFxuICAgICAgICAgIHNlbGYubG9nZ2VyLmluZm8oJ2Nvb2tpZXMnLCBhcGksIHNlbGYuY29va2llcyk7IFxuICAgICAgICB9XG5cbiAgICAgICAgZXJyb3IgPSBzZWxmLl9oYW5kbGVFcnJvcihyZXMpO1xuICAgICAgICB2YXIgZHJlcyA9IChyZXMuYm9keSAmJiByZXMuYm9keS5kZXBsb3lyID8gcmVzLmJvZHkgOiByZXMpOyAgICAgICAgICAgICBcbiAgICAgIFxuICAgICAgICBzZWxmLmlucHV0cyA9IFtdO1xuICAgICAgICBzZWxmLm91dHB1dHMgPSBbXTtcblxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgIC8vIC0tIExvZyBnbG9iYWwgKyB0cmFuc2FjdGlvbiBsb2cgLS1cbiAgICAgICAgICAgTG9nZ2VyLmluZm8oJ2VuZCgpJywgYXBpLCBkcmVzLCByZXMpO1xuICAgICAgICAgICBzZWxmLmxvZ2dlci5pbmZvKCdlbmQoKScsIGFwaSwgZHJlcywgcmVzKTtcblxuICAgICAgICAgICAvLyAtLSB3YWxrIHJlc3BvbnNlIGZvciB0b3AtbGV2ZWwgZW50aXR5IHJlc3BvbnNlIGFzc2lnbm1lbnQgLS0gICAgICAgIFxuICAgICAgICAgICBpZiAoZW50aXR5KSB7IGRyZXMgPSBkcmVzLmRlcGxveXIucmVzcG9uc2VbZW50aXR5XSB8fCBkcmVzOyB9XG5cbiAgICAgICAgICAgZHJlcy5nZXQgPSBmdW5jdGlvbihrZXkpIHsgXG4gICAgICAgICAgICAgIHJldHVybiB1dGlscy5nZXQoZHJlcy5kZXBsb3lyLnJlc3BvbnNlLCBrZXkpOyBcbiAgICAgICAgICAgfTtcblxuICAgICAgICAgICBkcmVzLndvcmtzcGFjZSA9IGZ1bmN0aW9uKG5hbWUpIHsgXG4gICAgICAgICAgICAgIHJldHVybiB1dGlscy53b3Jrc3BhY2UoZHJlcy5kZXBsb3lyLnJlc3BvbnNlLCBuYW1lKTsgXG4gICAgICAgICAgIH07XG5cbiAgICAgICAgICAgLy8gLS0gY2FsbGJhY2sgLS1cbiAgICAgICAgICAgaWYgKGZuKSB7IGFyZ3MgPSBmbi5hcHBseShzZWxmLnNjb3BlLCBbZHJlcywgcmVzcG9uc2VDaGFpbl0pO31cblxuICAgICAgICAgICAvLyAtLSBub3RpZnkgdGhhdCB0aGUgcXVldWUgaGFzIGJlZW4gZHJhaW5lZC4uLiAtLVxuICAgICAgICAgICBpZiAocS5zaXplKCkgPT09IDApIHsgXG4gICAgICAgICAgICAgc2VsZi5fY2xlYXIoKTtcbiAgICAgICAgICAgICBzZWxmLmRlZmVycmVkLnJlc29sdmUocmVzcG9uc2VDaGFpbiB8fCBkcmVzKTtcbiAgICAgICAgICAgfSAgICAgICAgICBcblxuICAgICAgICAgICAvLyAtLSBpbmNsdWRlIGNvb2tpZXMgaW4gbmV4dCByZXF1ZXN0IGluIHRoZSBxdWV1ZSAtLVxuICAgICAgICAgICBhcmdzID0gbWVyZ2UoYXJncywgeyBfX2Nvb2tpZXNfXzogc2VsZi5jb29raWVzIH0pOyAgICAgICAgICBcbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgcS55aWVsZChmYWxzZSk7XG4gICAgICAgIHEuZmx1c2goZHJlcywgZXJyb3IsIGFyZ3MpOyAvLyBwYXNzIHJlc3VsdHxlcnJvcnxhcmdzIHRvIG5leHQgXG4gICAgICB9KTtcblxuICAgICAgcS55aWVsZCh0cnVlKTtcbiAgICB9LCB0aGlzLCB0aGlzLmRlbGF5ZWQpO1xuICBcbiAgICBpZiAoIXRoaXMuZGVsYXllZCAmJiBxLnNpemUoKSA8PSAxKSB7IHEuZmx1c2goKTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sIFxuXG4gIC8qKiBcbiAgICogQWRkIGFuIGFkZGl0aW9uYWwgSU8gcmVxdWVzdCB0byB0aGUgZXhzaXN0aW5nIHNlcXVlbnRpYWwgcmVxdWVzdCBjaGFpbi5cbiAgICpcbiAgICogQG1ldGhvZCBpb1xuICAgKiBAcGFyYW0ge1N0cmluZ30gYXBpIE9uZSBvZiB0aGUgc3VwcG9ydGVkIERlcGxveVIgQVBJcy5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gICBcbiAgaW86IGZ1bmN0aW9uIChhcGkpIHsgICAgXG4gICAgcmV0dXJuIERlcGxveVIubmV3KGFwaSwgeyBcbiAgICAgIGNvb2tpZXM6IHRoaXMuY29va2llcywgXG4gICAgICBxdWV1ZTogdGhpcy5xLCBcbiAgICAgIGRlZmVycmVkOiB0aGlzLmRlZmVycmVkXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIFxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgYWRkaW5nIGFuIGFkZGl0aW9uYWwgc2NyaXB0IGV4ZWN1dGlvbiB0byB0aGUgXG4gICAqIGV4c2lzdGluZyBzZXF1ZW50aWFsIHJlcXVlc3QgY2hhaW4uXG4gICAqXG4gICAqIEBtZXRob2Qgc2NyaXB0XG4gICAqIEBwYXJhbSB7QXJndW1lbnRzfSBBcmd1bWVudHMgdG8gZGVmaW5lIHRoZSBmdWxseSBxdWFsaWZpZWQgc2NyaXB0IGZvciBcbiAgICogZXhlY3V0aW9uLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBzY3JpcHQ6IGZ1bmN0aW9uKCkge1xuICAgICB2YXIgYXJncyA9IHV0aWxzLnNpZ25hdHVyZShhcmd1bWVudHMpLFxuICAgICAgICAgb3B0cyA9IGFyZ3Mub3B0cyxcbiAgICAgICAgIGFwaSAgPSBhcmdzLmFwaSxcbiAgICAgICAgIGxpbmsgPSB7IFxuICAgICAgICAgIGNvb2tpZXM6IHRoaXMuY29va2llcywgXG4gICAgICAgICAgcXVldWU6IHRoaXMucSwgXG4gICAgICAgICAgZGVmZXJyZWQ6IHRoaXMuZGVmZXJyZWRcbiAgICAgICAgfTsgIFxuXG4gICAgLy8gY29udmVuaWVuY2UgLSBpZiB0aGUgcHJvamVjdCBpcyBhIGJvb2xlbiBgdHJ1ZWAgcmF0aGVyIHRoYW4gYSBwaWQsIGZpcnN0XG4gICAgLy8gY3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIHRoZW4gcHJlcGFyZSB0aGUgcHJvamVjdCBhcGkgY2FsbCB0byBleGVjdXRlXG4gICAgaWYgKGFyZ3MuY3JlYXRlKSB7XG4gICAgICByZXR1cm4gRGVwbG95Ui5uZXcoJy9yL3Byb2plY3QvY3JlYXRlJywgbGluaylcbiAgICAgICAgICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9qZWN0OiByZXMuZ2V0KCdwcm9qZWN0JykucHJvamVjdCB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAuaW8oYXBpKVxuICAgICAgICAgICAgICAgLmRhdGEob3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGksIGxpbmspLmRhdGEob3B0cyk7XG4gICAgfSAgICBcbiAgfSxcblxuICAvKiogXG4gICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBhZGRpbmcgYW4gYWRkaXRpb25hbCByZXBvc2l0b3J5LW1hbmFnZWQgc2hlbGwgXG4gICAqIHNjcmlwdCBleGVjdXRpb24gdG8gdGhlIGV4c2lzdGluZyBzZXF1ZW50aWFsIHJlcXVlc3QgY2hhaW4uXG4gICAqXG4gICAqIFRoaXMgY2FsbCBleGVjdXRlcyByZXBvc2l0b3J5LW1hbmFnZWQgc2hlbGwgc2NyaXB0cyAuc2gsIC5jc2gsIC5iYXNoLCAuYmF0IFxuICAgKiBvbiB0aGUgRGVwbG95UiBzZXJ2ZXIuIER1ZSB0byB0aGUgc3BlY2lhbCBzZWN1cml0eSBjb25jZXJucyBhc3NvY2lhdGVkIHdpdGggXG4gICAqIGV4Y3V0aW5nIHNoZWxsIHNjcmlwdHMgb24gdGhlIERlcGxveVIgc2VydmVyLCBvbmx5IHNoZWxsIHNjcmlwdHMgb3duZWQgYnkgXG4gICAqIF9BRE1JTklTVFJBVE9SXyB1c2VycyBjYW4gYmUgZXhlY3V0ZWQgb24gdGhpcyBBUEkgY2FsbC4gQW55IGF0dGVtcHQgdG8gXG4gICAqIGV4ZWN1dGUgYSBzaGVsbCBzY3JpcHQgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5IHRoYXQgaXMgbm90IG93bmVkIGJ5IGFuIFxuICAgKiBfQURNSU5JU1RSQVRPUl8gdXNlciB3aWxsIGJlIHJlamVjdGVkLlxuICAgKlxuICAgKiBUbyBleGVjdXRlIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIHNoZWxsIHNjcmlwdCB0aGUgY2FsbGVyIG11c3QgcHJvdmlkZSBcbiAgICogcGFyYW1ldGVyIHZhbHVlcyBmb3IgX2F1dGhvcl8sIF9kaXJlY3RvcnlfLCBfZmlsZW5hbWVfLiBUaGlzIGNhbiBiZVxuICAgKiBhY2hpZXZlZCBieSBwcm92aWRpbmcgYSBmdWxseSBxdWFsaWZpZWQgc2hlbGwgc2NyaXB0IFxuICAgKiBgLzxhdXRob3I+LzxkaXJlY3Rvcnk+LzxmaWxlbmFtZT5gLCBmb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIGBgYFxuICAgKiAgLnNoZWxsKCcvYWRtaW4vZXh0ZXJuYWw6cHVibGljOmFkbWluL2VjaG8uc2gnLCAnZWNoby5zaCBhcmdzIHRvIHBhc3MuJylcbiAgICogIGBgYFxuICAgKlxuICAgKiBAbWV0aG9kIHNoZWxsXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlcGF0aCB0byBkZWZpbmUgdGhlIGZ1bGx5IHF1YWxpZmllZCBzaGVsbCBzY3JpcHQgZm9yXG4gICAqIGV4ZWN1dGlvbi4gXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhcmdzIChvcHRpb25hbCkgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBzaGVsbCBcbiAgICogc2NyaXB0IG9uIGV4ZWN1dGlvbi5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgc2hlbGw6IGZ1bmN0aW9uKHBhdGgsIGFyZ3MpIHsgICBcbiAgICB2YXIgbGluayA9IHsgXG4gICAgICAgICAgY29va2llczogdGhpcy5jb29raWVzLCBcbiAgICAgICAgICBxdWV1ZTogdGhpcy5xLCBcbiAgICAgICAgICBkZWZlcnJlZDogdGhpcy5kZWZlcnJlZFxuICAgICAgICB9LFxuICAgICAgICB0b2tlbnMgPSBMYW5nLmlzU3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnXFwvJykgOiBbXTtcblxuICAgIC8vIGhhbmRsZSBib3RoOiBgL2F1dGhvci9kaXJlY3RvcnkvZmlsZW5hbWVgICYgYGF1dGhvci9kaXJlY3RvcnkvZmlsZW5hbWVgXG4gICAgaWYgKHRva2Vucy5sZW5ndGggPiAzKSB7IHRva2VucyA9IHRva2Vucy5zbGljZSgxKTsgfVxuXG4gICAgcmV0dXJuIERlcGxveVIubmV3KCcvci9yZXBvc2l0b3J5L3NoZWxsL2V4ZWN1dGUnLCBsaW5rKS5kYXRhKHtcbiAgICAgIGF1dGhvcjogdG9rZW5zWzBdLFxuICAgICAgZGlyZWN0b3J5OiB0b2tlbnNbMV0sXG4gICAgICBmaWxlbmFtZTogdG9rZW5zWzJdLFxuICAgICAgYXJnczogYXJnc1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKiBcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGV4ZWN1dGluZyBhIGJsb2NrIG9mIFIgY29kZSBvbiB0aGUgUiBzZXNzaW9uLlxuXG4gICAqIEV4YW1wbGU6XG4gICAqICBgYGBcbiAgICogIC5jb2RlKCd4PC01JylcbiAgICogIC8vIC0tIG9yIC0tXG4gICAqICAuY29kZSgneDwtNScsIHByb2plY3RJZClcbiAgICogIGBgYFxuICAgKiAgIFxuICAgKiBAbWV0aG9kIGNvZGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHIgLSBUaGUgYmxvY2sgb2YgUiBjb2RlIHRvIGV4ZWN1dGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9qZWN0IC0gKG9wdGlvbmFsKSBpZiBvbWl0dGVkIGEgbmV3IHByb2plY3Qgd2lsbCBmaXJzdCBiZSBcbiAgICogY3JlYXRlZCBhbmQgdXNlZCwgb3RoZXJ3aXNlIGl0IHdpbGwgZXhlY3V0ZSBvbiB0aGUgUiBzZXNzaW9uIGlkZW50aWZpZWQgYnkgXG4gICAqIHRoaXMgYHByb2plY3RgLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb2RlOiBmdW5jdGlvbihyLCBwcm9qZWN0KSB7XG4gICAgIHZhciBsaW5rID0ge1xuICAgICAgICAgICAgIGNvb2tpZXM6IHRoaXMuY29va2llcyxcbiAgICAgICAgICAgICBxdWV1ZTogdGhpcy5xLFxuICAgICAgICAgICAgIGRlZmVycmVkOiB0aGlzLmRlZmVycmVkXG4gICAgICAgICB9LFxuICAgICAgICAgYXBpID0gJy9yL3Byb2plY3QvZXhlY3V0ZS9jb2RlJztcblxuICAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgIHJldHVybiBEZXBsb3lSLm5ldygnL3IvcHJvamVjdC9jcmVhdGUnLCBsaW5rKVxuICAgICAgICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiB7IHByb2plY3Q6IHJlcy5nZXQoJ3Byb2plY3QnKS5wcm9qZWN0IH07XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAuaW8oYXBpKVxuICAgICAgICAgICAgIC5kYXRhKHsgY29kZTogciB9KTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGksIGxpbmspLmRhdGEoeyBjb2RlOiByLCBwcm9qZWN0OiBwcm9qZWN0IH0pO1xuICAgICB9XG4gIH0sXG4gIFxuICAvKiogXG4gICAqIFJlbGVhc2UgYW55IHJlc2lkdWFsIHByb2plY3QgcmVzb3VyY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgYXBwbGljYXRpb24gXG4gICAqIGluc3RhbmNlIHdoZW5ldmVyIGEgY2xpZW50IGFwcGxpY2F0aW9uIHRlcm1pbmF0ZXMuIFRoaXMgaW5jbHVkZXMgY2xvc2luZyBcbiAgICogYW55IHN1cHBsaWVkIHByb2plY3RzIGRvd24gYW5kIGxvZ2dpbmcgb3V0LlxuICAgKlxuICAgKiBAbWV0aG9kIHJlbGVhc2VcbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHByb2plY3RzIFRoZSBwcm9qZWN0IG9yIGxpc3Qgb2YgcHJvamVjdHMgdG8gY2xvc2UuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gYXV0aCAob3B0aW9uYWwpIHRvIHJlbWFpbiBhdXRoZW50aWNhdGVkLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByZWxlYXNlOiBmdW5jdGlvbihwcm9qZWN0cywgYXV0aCkge1xuICAgICBwcm9qZWN0cyA9IExhbmcuaXNBcnJheShwcm9qZWN0cykgPyBwcm9qZWN0cyA6IFtwcm9qZWN0c107XG5cbiAgICAgdmFyIHNlbGYgICAgID0gdGhpcyxcbiAgICAgICAgIGRlZmVycmVkID0gRCgpLFxuICAgICAgICAgZW1wdHkgICAgPSAhcHJvamVjdHMgfHwgIXByb2plY3RzWzBdLFxuICAgICAgICAgY291bnQgICAgPSAwLFxuICAgICAgICAgbGFzdCAgICAgPSAhZW1wdHkgPyBwcm9qZWN0cy5sZW5ndGggLSAxIDogY291bnQsXG4gICAgICAgICBjb29raWVzICA9IHRoaXMuZ2V0Q29va2llcygpOyAgICAgICAgICAgXG5cbiAgICBmdW5jdGlvbiBsb2dvdXQoaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gbGFzdCkge1xuICAgICAgICBpZiAoIWF1dGgpIHtcbiAgICAgICAgICBEZXBsb3lSLm5ldygnL3IvdXNlci9sb2dvdXQnKVxuICAgICAgICAgIC5zaGFyZShjb29raWVzKVxuICAgICAgICAgIC5lcnJvcihmdW5jdGlvbigpIHsgICAgICAgICAgXG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pICAgICAgXG4gICAgICAgICAgLmVuZChmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVuc3VyZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuZGVzdHJveSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgc2VsZi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgfVxuXG4gICAgaWYgKCFlbXB0eSkge1xuICAgICAgcHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIERlcGxveVIubmV3KCcvci9wcm9qZWN0L2Nsb3NlJylcbiAgICAgICAgLmRhdGEoeyBwcm9qZWN0OiBwcm9qZWN0IH0pXG4gICAgICAgIC5zaGFyZShjb29raWVzKVxuICAgICAgICAuZW5kKClcbiAgICAgICAgLmVuc3VyZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBsb2dvdXQoY291bnQpO1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0pO1xuICAgICAgfSk7ICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ291dChjb3VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7ICBcbiAgfSwgIFxuXG4gIC8qKiBcbiAgICogQSBjb252ZW5pZW5jZSBhbHRlcm5hdGl2ZSB0byBtdWx0aXBsZSBgLnJpbnB1dCgpYCBjYWxscy4gRGVmaW5lcyBhIG5hbWUgXG4gICAqIGxpc3Qgb2YgUiBvYmplY3RzIHRoYXQgd2lsbCBiZSByZXR1cm5lZCBhcyBEZXBsb3lSLWVuY29kZWQgUiBvYmplY3RzIG9uIHRoZSBcbiAgICogcmVzcG9uc2UgbWFya3VwLlxuICAgKlxuICAgKiBDYWxsaW5nIHRoaXMgbWV0aG9kIH4ucm91dHB1dHMoWyAuLi4gXSlgIGlzIGVxdWl2YWxlbnQgdG8gaW52b2tpbmcgbXVsdGlwbGUgXG4gICAqIGAucm91dHB1dCguLi4pYCBjYWxscy5cbiAgICpcbiAgICogQG1ldGhvZCByb3V0cHV0c1xuICAgKiBAcGFyYW0ge0FycmF5fSByb2JqZWN0cyBBIG5hbWUgbGlzdCBvZiBSIG9iamVjdHMgdGhhdCB3aWxsIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByb3V0cHV0czogZnVuY3Rpb24gKHJvdXRwdXRzKSB7XG4gICAgaWYgKHJvdXRwdXRzKSB7IHRoaXMub3V0cHV0cyA9IHRoaXMub3V0cHV0cy5jb25jYXQocm91dHB1dHMpOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgXG4gIC8qKiBcbiAgICogRGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgUiBvYmplY3QgdGhhdCB3aWxsIGJlIHJldHVybmVkIGFzIGEgRGVwbG95Ui1lbmNvZGVkIFxuICAgKiBSIG9iamVjdCBvbiB0aGUgcmVzcG9uc2UgbWFya3VwLlxuICAgKlxuICAgKiBAbWV0aG9kIHJvdXRwdXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJvYmplY3QgVGhlIG5hbWUgb2YgdGhlIFIgb2JqZWN0IHRoYXQgd2lsbCBiZSByZXR1cm5lZC5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcm91dHB1dDogZnVuY3Rpb24gKHJvdXRwdXQpIHtcbiAgICBpZiAocm91dHB1dCkgeyB0aGlzLnJvdXRwdXRzKFtyb3V0cHV0XSk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKiBcbiAgICogVXNlZCB0byBwYXNzIG11bHRpcGxlIGlucHV0cyBhdCBvbmNlIGZyb20gSmF2YVNjcmlwdCB0byBhbiBSIHNjcmlwdCB1c2luZyBcbiAgICogb25lIG9mIHRoZSBkZWZpbmVkIGBSSW5wdXRgIGZhY3Rvcmllcy5cbiAgICpcbiAgICogQG1ldGhvZCByaW5wdXRzXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJpbnB1dHMgVGhlIGBSSW5wdXRgIGxpc3Qgb2YgRGVwbG95Ui1zcGVjaWZpYyBlbmNvZGVkIFIgXG4gICAqIG9iamVjdCBkYXRhIGZvciB1c2Ugb24gYW4gQVBJIGNhbGwuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHJpbnB1dHM6IGZ1bmN0aW9uIChyaW5wdXRzKSB7XG4gICAgaWYgKHJpbnB1dHMpIHsgdGhpcy5pbnB1dHMgPSB0aGlzLmlucHV0cy5jb25jYXQocmlucHV0cyk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKiBcbiAgICogVXNlZCB0byBwYXNzIG11bHRpcGxlIGlucHV0cyBhdCBvbmNlIGZyb20gSmF2YVNjcmlwdCB0byBhbiBSIHNjcmlwdCB1c2luZyBcbiAgICogb25lIG9mIHRoZSBkZWZpbmVkIGBSSW5wdXRgIGZhY3Rvcmllcy5cbiAgICpcbiAgICogQG1ldGhvZCByaW5wdXRcbiAgICogQHBhcmFtIHtSSW5wdXR9IHJpbnB1dCBUaGUgRGVwbG95Ui1zcGVjaWZpYyBlbmNvZGVkIFIgb2JqZWN0IGRhdGEgZm9yIHVzZSBcbiAgICogb24gYW4gQVBJIGNhbGwuICAgXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHJpbnB1dDogZnVuY3Rpb24gKHJpbnB1dCkge1xuICAgIGlmIChyaW5wdXQpIHsgdGhpcy5pbnB1dHMucHVzaChyaW5wdXQpOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogRGVzdHJveSBsaWZlY3ljbGUgbWV0aG9kLiBGaXJlcyB0aGUgYGRlc3Ryb3lgIGV2ZW50LCBwcmlvciB0byBpbnZva2luZyBcbiAgICogZGVzdHJ1Y3RvcnMgZm9yIHRoZSBjbGFzcyBoaWVyYXJjaHkuIENhbGxlZCBpbnRlcm5hbGx5IHdoZW4gYC5yZWxlYXNlKClgXG4gICAqIGlzIGNhbGxlZC5cbiAgICpcbiAgICogQG1ldGhvZCBkZXN0cm95XG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScpO1xuICAgICAgdGhpcy5vZmZBbGwoKTtcbiAgICBcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHsgXG4gICAgICAgICAgdGhpc1trZXldID0gbnVsbDsgXG4gICAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2goZXJyKSB7fVxuICB9LCAgXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgX2NsZWFyOiBmdW5jdGlvbigpIHsgICAgXG4gICAgdGhpcy5wYXJhbXMgID0ge307XG4gICAgdGhpcy5pbnB1dHMgID0gW107XG4gICAgdGhpcy5vdXRwdXRzID0gW107XG4gICAgdGhpcy5yc3RyZWFtID0gZmFsc2U7XG4gICAgdGhpcy5kZWxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5hcGkgICAgID0gbnVsbDsgICAgXG4gICAgdGhpcy5maWxlICAgID0gbnVsbDsgIFxuICAgIHRoaXMuZmlsdGVyICA9IG51bGw7XG4gIH0sIFxuXG4gIC8qKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIF9wcmVwUmVxdWVzdDogZnVuY3Rpb24gKHJlc3BvbnNlQ2hhaW4sIGFyZ3MpIHtcbiAgICB2YXIgcmVxICA9IHRoaXMucmVxLFxuICAgICAgICBmaWxlID0gdGhpcy5maWxlO1xuXG4gICAgLy8gc2V0IHRoZSByZXF1ZXN0IHR5cGUgICAgXG4gICAgaWYgKHRoaXMuYXBpLnVwbG9hZCkge1xuICAgICAgIC8vIElmIHRoZSBlbnYgaXMgdGhlIEJyb3dzZXIgdGhlcmUgaXMgbm8gbmVlZCB0byBtYW51YWxseSBzZXQgdGhlXG4gICAgICAgLy8gQ29udGVudC1UeXBlLiBUaGUgYnJvd3NlciB3aWxsIGF1dG9tYXRpY2FsbHkgc2V0IHRoZSBcbiAgICAgICAvLyBcIm11bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS4uLlwiIHZhbHVlLiBJZiB0aGUgZW52IGlzIE5vZGUgd2UgbmVlZFxuICAgICAgIC8vIHRvIHNldCBpdCBtYW51YWxseS5cbiAgICAgICBpZiAoIXdpbikgeyB0aGlzLnJlcS50eXBlKCdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7IH0gICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcS50eXBlKCdmb3JtJyk7XG4gICAgfSAgICBcblxuICAgIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbihlcnIpIHsgXG4gICAgICBlcnIgPSBlcnIgfHwgeyAgY29kZTogJ1VOS05PV04gQ09ERScsIHRleHQ6ICdVTktOT1dOIEVSUk9SJyB9O1xuXG4gICAgICB0aGlzLl9oYW5kbGVFcnJvcih7IFxuICAgICAgICBzdGF0dXM6IGVyci5jb2RlIHx8ICdVTktOT1dOIENPREUnLFxuICAgICAgICB0ZXh0OiBlcnJcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKSk7ICAgIFxuXG4gICAgdGhpcy5zaGFyZShhcmdzID8gYXJncy5fX2Nvb2tpZXNfXyA6IG51bGwpO1xuXG4gICAgLy8gYXJndW1lbnRzIHJldHVybmVkIGZyb20gcHJldiByZXF1ZXN0J3MgaW8oKS5lbmQoZnVuY3Rpb24oKSB7IHJldHVybiB4OyB9KVxuICAgIGlmIChhcmdzKSB7IFxuICAgICAgIHRoaXMuZGF0YShhcmdzKTtcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuaW5wdXRzLmxlbmd0aCA+IDApIHsgXG4gICAgICB0aGlzLmRhdGEoeyBpbnB1dHM6IGVuY29kZXIuZW5jb2RlKHRoaXMuaW5wdXRzKSB9KTsgXG4gICAgfVxuICBcbiAgICBpZiAodGhpcy5vdXRwdXRzLmxlbmd0aCA+IDApIHsgXG4gICAgICB0aGlzLmRhdGEoeyByb2JqZWN0czogdGhpcy5vdXRwdXRzLmpvaW4oKSB9KTsgXG4gICAgfSAgICBcblxuICAgIGlmICh0aGlzLmNvb2tpZXMpIHsgICAgIFxuICAgICAgdGhpcy5jb29raWVzLmZvckVhY2goIGZ1bmN0aW9uKGMpIHsgcmVxLnNldCgnQ29va2llJywgYyk7IH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFwaS51cGxvYWQpIHsgICAgXG4gICAgICBmb3IodmFyIHAgaW4gdGhpcy5wYXJhbXMpIHtcbiAgICAgICByZXEuZmllbGQocCwgdGhpcy5wYXJhbXNbcF0gPyB0aGlzLnBhcmFtc1twXSArICcnIDogJycpOyAgXG4gICAgICB9IFxuICAgICAgcmVxLmF0dGFjaCgnZmlsZScsIHRoaXMucnN0cmVhbSA/IGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZSkgOiBmaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxW3RoaXMuYXBpLm1ldGhvZCA9PT0gJ0dFVCcgPyAncXVlcnknIDogJ3NlbmQnXSh0aGlzLnBhcmFtcyk7XG4gICAgfSBcbiAgfSxcblxuICAvKipcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uIChyYXcpIHtcbiAgICB2YXIgc3RhdCAgPSByYXcuc3RhdHVzLFxuICAgICAgICByZXMgICA9IChyYXcuYm9keSAmJiByYXcuYm9keS5kZXBsb3lyID8gcmF3LmJvZHkgOiByYXcpLFxuICAgICAgICBlcnJvciA9ICgoc3RhdCAhPT0gMjAwKSB8fCByZXMuZGVwbG95ciAmJiAhcmVzLmRlcGxveXIucmVzcG9uc2Uuc3VjY2Vzcyk7XG5cbiAgICAvLyAtLSBIYW5kbGUgZXJyb3JzIC0tXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXMgPSB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oa2V5KSB7IFxuICAgICAgICAgIHJldHVybiB1dGlscy5nZXQodGhpcy5kZXBsb3lyLnJlc3BvbnNlLCBrZXkpOyBcbiAgICAgICAgfSxcbiAgICAgICAgZGVwbG95cjogeyAgICAgICAgICBcbiAgICAgICAgICByZXNwb25zZToge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBjYWxsOiB0aGlzLmFwaVsnY2FsbCddLFxuICAgICAgICAgICAgZXJyb3JDb2RlOiByZXMuZGVwbG95ciA/IHJlcy5kZXBsb3lyLnJlc3BvbnNlLmVycm9yQ29kZSA6IHN0YXQsXG4gICAgICAgICAgICBlcnJvcjogcmVzLmRlcGxveXIgPyByZXMuZGVwbG95ci5yZXNwb25zZS5lcnJvciA6IHJlcy50ZXh0XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBMb2dnZXIuZXJyb3IoJ2Vycm9yKCknLCB0aGlzLmFwaSwgcmVzLCByYXcpO1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoJ2Vycm9yKCknLCB0aGlzLmFwaSwgcmVzLCByYXcpO1xuXG4gICAgICAvLyAtLSBub3RpZnkgZ2xvYmFsIGVycm9ycyBmaXJzdCAoaWYgYW55KSBmb3IgdGhpcyBjYWxsIC0tICAgICAgXG4gICAgICBpZiAodGhpcy5nbG9iYWxFdnRzKSB7XG4gICAgICAgIHJhaXNlR2xvYmFsRXJyb3JzKHRoaXMuYXBpWydjYWxsJ10sIHJlcyk7ICAgICAgICBcbiAgICAgIH1cblxuICAgICAgLy8gLS0gdHJhbmFjdGlvbiBsZXZlbCBIVFRQIG9yIERlcGxveVIgZXJyb3JzIGNvbWUgbmV4dCAtLSAgICBcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCByZXMpO1xuICAgICAgdGhpcy5lbWl0KCdkZXBsb3lyLWlvOicgKyByZXMuZGVwbG95ci5yZXNwb25zZS5lcnJvckNvZGUsIHJlcyk7XG4gICAgICB0aGlzLmRlZmVycmVkLnJlamVjdChyZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gSW5jbHVkZSB0aGUgYGRlcHJlY2F0ZWRgIGpzRGVwbG95UiBmb3Igbm93LlxuaWYgKHdpbikge1xuICB3aW5kb3cuUmV2b2x1dGlvbiA9IHdpbmRvdy5SZXZvbHV0aW9uIHx8IHJlcXVpcmUoJy4vbGliL2RlcHJlY2F0ZWQnKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqIEV4cG9zZSBmb3IgYSBjbGVhbmVyIGNsaWVudCBhcGkgaW50byBEZXBsb3lSXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIC8qKlxuICAgKiBFeHBvc2VzIHRoZSBgRGVwbG95UmAgb2JqZWN0IGZvciBleHRlbmRpbmcuXG4gICAqXG4gICAqIGBgYHZhciBEZXBsb3lSID0gcmVxdWlyZSgnZGVwbG95cicpLkRlcGxveVI7YGBgXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQGFwaSBwdWJsaWNcbiAgICogQHJldHVybiB7RGVwbG95Un0gVGhlIGBEZXBsb3lSYCBvYmplY3QuXG4gICAqLyAgIFxuICBEZXBsb3lSOiBEZXBsb3lSLFxuXG4gIC8qKlxuICAgKiBFeHBvc2VzIHRoZSBzdXBwb3J0ZWQgRGVwbG95UiBBUElzLlxuICAgKlxuICAgKiBAbWV0aG9kIGFwaXNcbiAgICogQHBhcmFtIHtCb29sZWFufSBmbGF0IChvcHRpb25hbCkgaWYgYHRydWVgIHdpbGwgcmV0dXJuIGFuIGFycmF5IG9mIGp1c3QgdGhlIFxuICAgKiBBUEkncyBlbmRwb2ludCBwcm9wZXJ0aWVzLCBmb3IgZXhhbXBsZTogXG4gICAqIGBgYFxuICAgKiBbJy9yL3VzZXIvbG9naW4nLCAnL3IvdXNlci9sb2dvdXQnLCAnL3IvdXNlci9hYm91dCcsIC4uLl1cbiAgICogYGBgXG4gICAqIEBzdGF0aWNcbiAgICogQGFwaSBwdWJsaWNcbiAgICogQHJldHVybiB7T2JqZWN0fEFycmF5fSBUaGUgSFRUUCByZXF1ZXN0IHRvIHRoZSBEZXBsb3lSIHNlcnZlci4gICAgICBcbiAgICovICBcbiAgYXBpczogZnVuY3Rpb24oZmxhdCkge1xuICAgIHJldHVybiBmbGF0ID8gT2JqZWN0LmtleXMoYXBpcykgOiBhcGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgc3RhdGljIG1ldGhvZCBmb3IgY29uZmlndXJpbmcgYWxsIERlcGxveVIgcmVxdWVzdHMuIFNldHRpbmdzIFxuICAgKiBtYWRlIGhlcmUgYXJlIGFwcGxpZWQgZ2xvYmFsbHkgYWNyb3NzIGV2ZXJ5IHJlcXVlc3QuXG4gICAqXG4gICAqIEBtZXRob2QgY29uZmlndXJlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvYmplY3QgbGl0ZXJhbCBjb25maWd1cmF0aW9uIGhhc2guIFxuICAgKiBAc3RhdGljXG4gICAqIEBjaGFpbmFibGVcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbmZpZ3VyZTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7IGdsb2JhbE9wdGlvbnMuc2V0KGksIG9wdGlvbnNbaV0pOyB9XG5cbiAgICAvLyBhc3NlcnQgZ2xvYmFsIGNvb2tpZXMgYXJlIGVtcHR5IGlmIGdsb2JhbCBgc3RpY2t5YCBqc2Vzc2lvbmlkIGlzIG9mZlxuICAgIGlmICghZ2xvYmFsT3B0aW9ucy5zdGlja3kpICB7IGdsb2JhbE9wdGlvbnMuc2V0KCdjb29raWVzJywgbnVsbCk7IH1cblxuICAgIC8vIHR1cm4gZ2xvYmFsIGxvZ2dpbmcgb258b2ZmIChvZmYgYnkgZGVmYXVsdClcbiAgICBMb2dnZXIuc2V0TGV2ZWwoZ2xvYmFsT3B0aW9ucy5sb2dnaW5nID8gTG9nZ2VyLkRFQlVHIDogTG9nZ2VyLk9GRik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IElPIHJlcXVlc3RzIHRvIGBEZXBsb3lSYC5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgICAgXG4gICAqICAgIGRlcGxveXIuaW8oJy9yL3VzZXIvYWJvdXQnKS5lbmQoY2FsbGJhY2spO1xuICAgKiBgYGBcbiAgICpcbiAgICogQG1ldGhvZCBpb1xuICAgKiBAcGFyYW0ge1N0cmluZ30gYXBpIE9uZSBvZiB0aGUgc3VwcG9ydGVkIERlcGxveVIgQVBJcy5cbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBUaGUgSFRUUCByZXF1ZXN0IHRvIHRoZSBEZXBsb3lSIHNlcnZlci5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGlvOiBmdW5jdGlvbihhcGkpIHsgIFxuICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBzaWduIHRoZSB1c2VyIGluIGJ5IGF1dGhlbnRpY2F0aW5nIHRoZSBjcmVkZW50aWFscyBcbiAgICogd2l0aCB0aGUgRGVwbG95UiBzZXJ2ZXIuICAgXG4gICAqXG4gICAqIEBtZXRob2QgYXV0aFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlcm5hbWUgU3BlY2lmaWVzIHRoZSB1c2VybmFtZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhc3N3b3JkIFNwZWNpZmllcyB0aGUgcGFzc3dvcmQuXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7RGVwbG95Un0gVGhlIEhUVFAgcmVxdWVzdCB0byB0aGUgRGVwbG95UiBzZXJ2ZXIuICAgXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgIFxuICBhdXRoOiBmdW5jdGlvbih1biwgcHcpIHtcbiAgICB2YXIgZGF0YSA9IHsgdXNlcm5hbWU6IHVuLCBwYXNzd29yZDogcHcgfTtcbiAgICByZXR1cm4gRGVwbG95Ui5uZXcoJy9yL3VzZXIvbG9naW4nKS5kYXRhKGRhdGEpLmVuZCgpOyAgICBcbiAgfSxcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gc2lnbiB0aGUgdXNlciBpbiBieSBhdXRoZW50aWNhdGluZyB0aGUgY3JlZGVudGlhbHMgXG4gICAqIHdpdGggdGhlIERlcGxveVIgc2VydmVyLiAgIFxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogICAgZGVwbG95ci5zY3JpcHQoJy90ZXN0dXNlci9yb290L3JlZHVjZS5SJylcbiAgICogICAgZGVwbG95ci5zY3JpcHQoeyBmaWxlbmFtZTogJ3JlZHVjZS5SJywgYXV0aG9yOiAndGVzdHVzZXInLFxuICAgKiAgICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeTogJ3Jvb3QnfSlcbiAgICogICAgZGVwbG95ci5zY3JpcHQoJ3JlZHVjZS5SJywgJ3Rlc3R1c2VyJywgJ3Jvb3QnKVxuICAgKiAgICBkZXBsb3lyLnNjcmlwdCgnL3Rlc3R1c2VyL3Jvb3QvcmVkdWNlLlInLCBwcm9qZWN0KSAgICAgXG4gICAqIGBgYCAgIFxuICAgKlxuICAgKiBAbWV0aG9kIHNjcmlwdFxuICAgKiBAcGFyYW0ge0FyZ3VtZW50c30gYXJndW1lbnRzIEFyZ3VtZW50cyB0byBkZWZpbmUgdGhlIGZ1bGx5IHF1YWxpZmllZCBzY3JpcHQgXG4gICAqIGZvciBleGVjdXRpb24uXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7RGVwbG95Un0gVGhlIEhUVFAgcmVxdWVzdCB0byB0aGUgRGVwbG95UiBzZXJ2ZXIuICAgXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgICAgXG4gIHNjcmlwdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSB1dGlscy5zaWduYXR1cmUoYXJndW1lbnRzKSxcbiAgICAgICAgb3B0cyA9IGFyZ3Mub3B0cyxcbiAgICAgICAgYXBpICA9IGFyZ3MuYXBpOyAgXG5cbiAgICAvLyBjb252ZW5pZW5jZSAtIGlmIHRoZSBwcm9qZWN0IGlzIGEgYm9vbGVuIGB0cnVlYCByYXRoZXIgdGhhbiBhIHBpZCwgZmlyc3RcbiAgICAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgdGhlbiBwcmVwYXJlIHRoZSBwcm9qZWN0IGFwaSBjYWxsIHRvIGV4ZWN1dGVcbiAgICBpZiAoYXJncy5jcmVhdGUpIHtcbiAgICAgIHJldHVybiBEZXBsb3lSLm5ldygnL3IvcHJvamVjdC9jcmVhdGUnKVxuICAgICAgICAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IHByb2plY3Q6IHJlcy5nZXQoJ3Byb2plY3QnKS5wcm9qZWN0IH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC5pbyhhcGkpXG4gICAgICAgICAgICAgICAuZGF0YShvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIERlcGxveVIubmV3KGFwaSkuZGF0YShvcHRzKTtcbiAgICB9XG4gIH0sICBcblxuICAvKipcbiAgICogUnVuIGFuIHNlcmllcyBvZiBjaGFpbmVkIERlcGxveVIgcmVxdWVzdHMgaW4gc2VxdWVuY2UgYW5kIHdpdGhvdXQgb3ZlcmxhcC4gICAgICAgXG4gICAqXG4gICAqIEBtZXRob2QgcGlwbGluZVxuICAgKiBAcGFyYW0ge0FycmF5fSB0YXNrcyBTcGVjaWZpZXMgdGhlIGxpc3Qgb2YgYEZ1bmN0aW9uYCB0YXNrcy5cbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2Ugd3JhcHBpbmcgdGhlIHJlc29sdXRpb24gb2YgZWl0aGVyIFwicmVzb2x2ZVwiIG9yXG4gICAqIFwicmVqZWN0XCIgY2FsbGJhY2suXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBwaXBlbGluZTogZnVuY3Rpb24oY2hhaW5zKSB7ICAgICAgXG4gICAgdmFyIGRlcGxveXIgID0gdGhpcyxcbiAgICAgICAgZGVmZXJyZWQgPSBEKCksXG4gICAgICAgIHEgICAgICAgID0gbmV3IFF1ZXVlKCksXG4gICAgICAgIHJlc3VsdHMgID0gW10sXG4gICAgICAgIGVycm9ycyAgID0gW10sXG4gICAgICAgIE5PT1AgICAgID0gbnVsbCwgLy8gTk9PUCBlcnJvcnN8cmVzdWx0cyBmb3IgW2FdIGJhdGNoIHJlcXVlc3QgY2hhaW5cbiAgICAgICAgb3JpZyAgICAgPSB7XG4gICAgICAgICAgc3RpY2t5OiBnbG9iYWxPcHRpb25zLnN0aWNreSxcbiAgICAgICAgICBjb29raWVzOiBnbG9iYWxPcHRpb25zLmNvb2tpZXNcbiAgICAgICAgfTtcblxuICAgIC8vIG1ha2UgYSBjb3B5XG4gICAgY2hhaW5zID0gY2hhaW5zLnNsaWNlKDApO1xuXG4gICAgLy8gdHVybiBzdGlja3kgc2Vzc2lvbiBmb3IgdGhlc2UgcmVxdWVzdCAoaGFja3kpXG4gICAgZGVwbG95ci5jb25maWd1cmUoIHsgc3RpY2t5OiB0cnVlIH0pO1xuXG4gICAgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgcS5hZGQoZnVuY3Rpb24oKSB7IFxuICAgICAgICBjaGFpbnMuc2hpZnQoKS5kcmFpbigpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGNoYWluKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGNoYWluKTsgIFxuICAgICAgICAgIGVycm9ycy5wdXNoKE5PT1ApOyAgICAgICAgICAgXG4gICAgICAgICAgaWYgKHEuaXNFbXB0eSgpKSB7IFxuICAgICAgICAgICAgZGVwbG95ci5jb25maWd1cmUob3JpZyk7IC8vIHJlc2V0XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHsgcmVzdWx0czogcmVzdWx0cywgZXJyb3JzOiBlcnJvcnMgfSk7IFxuICAgICAgICAgIH0gIFxuXG4gICAgICAgICAgcS50YWtlKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycikgeyAgICAgICAgICBcbiAgICAgICAgICByZXN1bHRzLnB1c2goTk9PUCk7IFxuICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgLy8gcmVqZWN0aW9ucyBhcmUgb25seSBtZXQgd2hlbiB0aGV5IFthbGxdIGZhaWxcbiAgICAgICAgICBpZiAocS5pc0VtcHR5KCkgJiYgcmVzdWx0cy5sZW5ndGggPT09IDApIHsgXG4gICAgICAgICAgICBkZXBsb3lyLmNvbmZpZ3VyZShvcmlnKTsgLy8gcmVzZXRcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcnMpOyBcbiAgICAgICAgICB9ICBcbiAgICAgICAgICBxLnRha2UoKTtcbiAgICAgICAgfSk7ICAgICAgIFxuICAgICAgfSwgbnVsbCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gY29udmVydCB0byBhIHNlcSBxdWV1ZSBmb3IgYmV0dGVyIGhhbmRsaW5nXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNoYWlucy5sZW5ndGg7IGkrKykgeyBhZGQoKTsgfVxuXG4gICAgLy8gc3RhcnQ6IGRlcXVldWUgZmlyc3QgaXRlbSBhbmQgcnVuIGl0XG4gICAgcS50YWtlKCk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGV2ZW50IHN0cmVhbSBBUEkgaXMgdW5pcXVlIHdpdGhpbiB0aGUgRGVwbG95UiBBUEkgYXMgaXQgc3VwcG9ydHMgcHVzaCBcbiAgICogbm90aWZpY2F0aW9ucyBmcm9tIHRoZSBEZXBsb3lSIHNlcnZlciB0byBjbGllbnQgYXBwbGljYXRpb25zLiBOb3RpZmljYXRpb25zIFxuICAgKiBjb3JyZXNwb25kIHRvIGRpc2NyZXRlIGV2ZW50cyB0aGF0IG9jY3VyIHdpdGhpbiB0aGUgRGVwbG95UiBzZXJ2ZXIuIFRoZXJlIFxuICAgKiBhcmUgZm91ciBkaXN0aW5jdCBldmVudCBjYXRlZ29yaWVzOlxuICAgKiBcbiAgICogLSBTdHJlYW0gTGlmZWN5Y2xlIGV2ZW50c1xuICAgKiAtIEV4ZWN1dGlvbiBldmVudHNcbiAgICogLSBKb2IgTGlmZWN5Y2xlIGV2ZW50c1xuICAgKiAtIE1hbmFnZW1lbnQgZXZlbnRzXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYFxuICAgKiBkZXBsb3lyLmVzKHsgdXNlcm5hbWU6ICd0ZXN0dXNlcicsIHBhc3N3b3JkOiAnc2VjcmV0JyB9KVxuICAgKiAgICAvLyAtLSBjb25uZWN0aW9uIGNob2ljZXMgZm9yIGV2ZW50IHR5cGVzIC0tXG4gICAqICAgIC5tYW5hZ2VtZW50KCkgIC8vLnNlc3Npb24oKSB8IC5hbGwoKSB8IC5wcm9qZWN0KGlkKSB8IC5qb2IoaWQpXG4gICAqICAgIC5vbignZXM6Z3JpZEhlYXJ0YmVhdCcsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICogICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09Jyk7XG4gICAqICAgICAgICBjb25zb2xlLmxvZygnZXM6Z3JpZEhlYXJ0YmVhdCcpO1xuICAgKiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT0nKTsgICAgICAgICAgXG4gICAqICAgICB9KVxuICAgKiAgICAgLm9wZW4oKTtcbiAgICogYGBgXG4gICAqIFxuICAgKiBAbWV0aG9kIGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvYmplY3QgbGl0ZXJhbCBjb25maWd1cmF0aW9uIGhhc2guIFxuICAgKiBAc3RhdGljXG4gICAqIEByZXR1cm4ge0V2ZW50U3RyZWFtfSBhIG5ldyBgRXZlbnRTdHJlYW1gIGZvciBiaW5kaW5nLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gIFxuICBlczogZnVuY3Rpb24ob3B0aW9ucykgeyAgICBcbiAgICB2YXIgc3RyZWFtID0gRXZlbnRTdHJlYW0ubmV3KGdsb2JhbE9wdGlvbnMuaG9zdCwgb3B0aW9ucyk7XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnVzZXJuYW1lICYmIG9wdGlvbnMucGFzc3dvcmQpIHtcbiAgICAgIHZhciBydXNlciA9IHRoaXMuYXV0aChvcHRpb25zLnVzZXJuYW1lLCBvcHRpb25zLnBhc3N3b3JkKTtcbiAgICAgIHJ1c2VyLmVuc3VyZShmdW5jdGlvbigpIHsgXG4gICAgICAgIHN0cmVhbS5zaGFyZShydXNlci5nZXRDb29raWVzKCkpO1xuICAgICAgICBzdHJlYW0uZmx1c2goKTsgXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyZWFtO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBmYWN0b3J5IGZvciBjcmVhdGluZyBhIERlcGxveVItc3BlY2lmaWMgZW5jb2RlZCBSIG9iamVjdCB0byBiZSBcbiAgICogc2VudCBhcyBpbnB1dCBwYXJhbWV0ZXJzIHRvIGFuIFIgc2NyaXB0LlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogICAgdmFyIHJpbnB1dCA9IGRlcGxveXIuUklucHV0LmxvZ2ljYWwoJ2xvZ2ljYWxfbmFtZScsIHRydWUpO1xuICAgKiAgICB2YXIgcmlucHV0ID0gZGVwbG95ci5SSW5wdXQubnVtZXJpYygnbnVtZXJpY19uYW1lJywgMTAuNSk7XG4gICAqICAgIHZhciByaW5wdXQgPSBkZXBsb3lyLlJJbnB1dC5pbnRlZ2VyKCdpbnRlZ2VyX25hbWUnLCA1KTtcbiAgICogICAgdmFyIHJpbnB1dCA9IGRlcGxveXIuUklucHV0LmNoYXJhY3RlcignY2hhcmFjdGVyX25hbWUnLCAnSGVsbG8nKTtcbiAgICogICAgLy8gZWN0Li4uXG4gICAqIGBgYFxuICAgKiBAcHJvcGVydHkgUklucHV0XG4gICAqIEBzdGF0aWNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIFJJbnB1dDoge1xuICAgIG51bWVyaWM6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLm51bWVyaWMoKTtcbiAgICB9LFxuXG4gICAgaW50ZWdlcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuaW50ZWdlcigpO1xuICAgIH0sXG5cbiAgICBsb2dpY2FsOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5sb2dpY2FsKCk7XG4gICAgfSxcblxuICAgIGNoYXJhY3RlcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuY2hhcmFjdGVyKCk7XG4gICAgfSxcblxuICAgIGRhdGU6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmRhdGUoKTtcbiAgICB9LFxuXG4gICAgcG9zaXhjdDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkucG9zaXhjdCgpO1xuICAgIH0sICBcblxuICAgIG51bWVyaWNWZWN0b3I6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubnVtZXJpY1ZlY3RvcigpO1xuICAgIH0sIFxuXG4gICAgaW50ZWdlclZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuaW50ZWdlclZlY3RvcigpO1xuICAgIH0sXG5cbiAgICBsb2dpY2FsVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubG9naWNhbFZlY3RvcigpO1xuICAgIH0sXG5cbiAgICBjaGFyYWN0ZXJWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5jaGFyYWN0ZXJWZWN0b3IoKTtcbiAgICB9LCAgXG5cbiAgICBkYXRlVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuZGF0ZVZlY3RvcigpO1xuICAgIH0sICBcblxuICAgIHBvc2l4Y3RWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5wb3NpeGN0VmVjdG9yKCk7XG4gICAgfSxcblxuICAgIGxpc3Q6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmxpc3QoKTsgXG4gICAgfSxcblxuICAgIGRhdGFmcmFtZTogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmRhdGFmcmFtZSgpO1xuICAgIH0sXG4gIFxuICAgIGZhY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBsZXZlbHMsIGxhYmVscykge1xuICAgICAgdmFyIG9wdHMgPSB7IGxldmVsczogbGV2ZWxzLCBsYWJlbHM6IGxhYmVscyB9O1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUsIG9wdHMpLmZhY3RvcigpO1xuICAgIH0sXG5cbiAgICBvcmRlcmVkOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGxldmVscywgbGFiZWxzKSB7XG4gICAgICB2YXIgb3B0cyA9IHsgbGV2ZWxzOiBsZXZlbHMsIGxhYmVsczogbGFiZWxzIH07XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSwgb3B0cykub3JkZXJlZCgpO1xuICAgIH0sXG5cbiAgICBudW1lcmljTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubnVtZXJpY01hdHJpeCgpO1xuICAgIH0sXG5cbiAgICBpbnRlZ2VyTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuaW50ZWdlck1hdHJpeCgpO1xuICAgIH0sXG5cbiAgICBsb2dpY2FsTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubG9naWNhbE1hdHJpeCgpO1xuICAgIH0sXG5cbiAgICBjaGFyYWN0ZXJNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmNoYXJhY3Rlck1hdHJpeCgpO1xuICAgIH1cbiAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCIvci91c2VyL2xvZ2luXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvdXNlci9sb2dvdXRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci91c2VyL2Fib3V0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvdXNlci9hdXRvc2F2ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3VzZXIvcmVsZWFzZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvY3JlYXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9wb29sXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9yZWN5Y2xlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9waW5nXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9hYm91dFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvYWJvdXQvdXBkYXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9zYXZlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9zYXZlYXNcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2Nsb3NlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9ncmFudFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvaW1wb3J0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiLFxuICAgICAgICBcInVwbG9hZFwiOiB0cnVlXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leHBvcnRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9jb2RlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL3NjcmlwdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9pbnRlcnJ1cHRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2V4ZWN1dGUvY29uc29sZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9oaXN0b3J5XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL2ZsdXNoXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL3Jlc3VsdC9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL3Jlc3VsdC9kb3dubG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9yZXN1bHQvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC93b3Jrc3BhY2UvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL2dldFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL3VwbG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIixcbiAgICAgICAgXCJ1cGxvYWRcIjogdHJ1ZVxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL3RyYW5zZmVyXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC93b3Jrc3BhY2UvcHVzaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL3NhdmVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS9zdG9yZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL2xvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS9kZWxldGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RpcmVjdG9yeS9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvdXBsb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiLFxuICAgICAgICBcInVwbG9hZFwiOiB0cnVlXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvdHJhbnNmZXJcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RpcmVjdG9yeS93cml0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L3VwZGF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L3N0b3JlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvbG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L2Rvd25sb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9wYWNrYWdlL2xpc3RcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3BhY2thZ2UvYXR0YWNoXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9wYWNrYWdlL2RldGFjaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3Ivam9iL3N1Ym1pdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9zY2hlZHVsZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9xdWVyeVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9jYW5jZWxcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9qb2IvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2NyZWF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L3JlbmFtZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2NvcHlcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9tb3ZlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvdXBkYXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9zY3JpcHQvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvc2NyaXB0L2V4ZWN1dGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L3NjcmlwdC9yZW5kZXJcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L3NjcmlwdC9pbnRlcnJ1cHRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L3NoZWxsL2V4ZWN1dGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9hcmNoaXZlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvdXBsb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiLFxuICAgICAgICBcInVwbG9hZFwiOiB0cnVlXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvZG93bmxvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9kZWxldGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9mZXRjaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9mZXRjaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS91cGxvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCIsXG4gICAgICAgIFwidXBsb2FkXCI6IHRydWVcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvdHJhbnNmZXJcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvd3JpdGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvdXBkYXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2RpZmZcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvcmV2ZXJ0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2dyYW50XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2Rvd25sb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9jb3B5XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL21vdmVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9zZXJ2ZXIvaW5mb1wiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfVxufVxuIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNCBieSBSZXZvbHV0aW9uIEFuYWx5dGljcyBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKi9cbnZhciBMYW5nID0gcmVxdWlyZSgnLi9sYW5nJyksXG4gICAgQmFzZSA9IHJlcXVpcmUoJy4vc2VsZmlzaCcpLkJhc2UsXG4gICAgUklucHV0ID0gcmVxdWlyZSgnLi9yaW5wdXQnKTtcblxudmFyIERlcHJlY2F0ZWQsXG4gICAgZW1pdHRlcixcbiAgICBfY29uZmlnID0ge30sXG4gICAgVE9QTEVWRUxfRU5USVRJRVMgPSBbXG4gICAgICAgICd1c2VyJyxcbiAgICAgICAgJ3Byb2plY3QnLFxuICAgICAgICAnd29ya3NwYWNlJyxcbiAgICAgICAgJ2V4ZWN1dGlvbicsXG4gICAgICAgICdkaXJlY3RvcnknLFxuICAgICAgICAncmVwb3NpdG9yeScsXG4gICAgICAgICdwYWNrYWdlcydcbiAgICBdO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBTZXNzaW9uTWFuYWdlciA9IHtcbiAgICBFTkRQT0lOVF9XSElURUxJU1Q6IHtcbiAgICAgICAgbG9naW46ICcvci91c2VyL2xvZ2luJyxcbiAgICAgICAgbG9nb3V0OiAnL3IvdXNlci9sb2dvdXQnLFxuICAgICAgICBwcm9qZWN0Q3JlYXRlOiAnL3IvcHJvamVjdC9jcmVhdGUnLFxuICAgICAgICBwcm9qZWN0Q2xvc2U6ICcvci9wcm9qZWN0L2Nsb3NlJyxcbiAgICAgICAgcHJvamVjdEFib3V0VXBkYXRlOiAnL3IvcHJvamVjdC9hYm91dC91cGRhdGUnLFxuICAgICAgICBwcm9qZWN0U2F2ZTogJy9yL3Byb2plY3Qvc2F2ZScsXG4gICAgICAgIHByb2plY3RTYXZlQXM6ICcvci9wcm9qZWN0L3NhdmVhcycsXG4gICAgICAgIC8vIC0tLSBwcml2YXRlIEFQSVMgLS0tXG4gICAgICAgIGNsaWVudFByb2plY3RTYXZlOiAnL3IvY2xpZW50L3Byb2plY3Qvc2F2ZScsXG4gICAgICAgIGNsaWVudFByb2plY3RDbG9zZTogJy9yL2NsaWVudC9wcm9qZWN0L2Nsb3NlJ1xuICAgIH0sXG5cbiAgICBzZXNzaW9uOiB7fSxcblxuICAgIGNvbmZpZzoge30sXG5cbiAgICBzZXRVbmxvYWRDb25maWc6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgZGlzYWJsZWF1dG9zYXZlOiBjb25maWcuZGlzYWJsZWF1dG9zYXZlIHx8IHRydWUsXG4gICAgICAgICAgICBkcm9wd29ya3NwYWNlOiBjb25maWcuZHJvcHdvcmtzcGFjZSB8fCB0cnVlLFxuICAgICAgICAgICAgZHJvcGRpcmVjdG9yeTogY29uZmlnLmRyb3BkaXJlY3RvcnkgfHwgdHJ1ZSxcbiAgICAgICAgICAgIGRyb3BoaXN0b3J5OiBjb25maWcuZHJvcGhpc3RvcnkgfHwgdHJ1ZSxcbiAgICAgICAgICAgIGZsdXNoaGlzdG9yeTogY29uZmlnLmZsdXNoaGlzdG9yeSB8fCB0cnVlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBzZXRTZXNzaW9uOiBmdW5jdGlvbihzZXNzaW9uKSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgfSxcbiAgICBzZXRQcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbi5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9LFxuICAgIGNsZWFyU2Vzc2lvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHt9O1xuICAgIH0sXG4gICAgY2xlYXJQcm9qZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uLnByb2plY3QgPSBudWxsO1xuICAgIH0sXG4gICAgdW5sb2FkSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcHJvamVjdCA9IHRoaXMuc2Vzc2lvbi5wcm9qZWN0O1xuICAgICAgICAgICAgaWYgKHByb2plY3QpIHtcblxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fY29uZmlnO1xuICAgICAgICAgICAgICAgIGRhdGEucHJvamVjdCA9IHByb2plY3QuaWQ7XG4gICAgICAgICAgICAgICAgZGF0YS5wcm9qZWN0Y29va2llID0gcHJvamVjdC5jb29raWU7XG5cbiAgICAgICAgICAgICAgICBkZXBsb3lyLmlvKCcvci9wcm9qZWN0L2Nsb3NlJylcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnN5bmMoKVxuICAgICAgICAgICAgICAgICAgICAuZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZnVuY3Rpb24gZm9ybWF0KHJlc3BvbnNlLCB0cmFuc0VudGl0eSkge1xuICAgIC8vIC0tIHRyYW5zYWN0aW9uIGVudGl0eSBmb3JtYXRzIG92ZXJyaWRlIGdsb2JhbCBlbnRpdHkgZm9ybWF0cyAtLSAgXG4gICAgLy92YXIgZm9ybWF0ID0gdHJhbnNFbnRpdHkgfHwgX2NvbmZpZy5lbnRpdHk7XG4gICAgdmFyIGZvcm1hdCA9IHRyYW5zRW50aXR5IHx8IGdsb2JhbENvbmZpZy5lbnRpdHk7XG5cbiAgICBpZiAoZm9ybWF0KSB7XG4gICAgICAgIHZhciByZXNPYmogPSByZXNwb25zZS5kZXBsb3lyLnJlc3BvbnNlLFxuICAgICAgICAgICAgLy8gLS0gdG9wLWxldmVsIGVudGl0aWVzIC0tXG4gICAgICAgICAgICBlbnRpdGllcyA9IFRPUExFVkVMX0VOVElUSUVTO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBlbnRpdGllcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBlbnRpdHkgPSBlbnRpdGllc1tpbmRleF07XG5cbiAgICAgICAgICAgIGlmIChyZXNPYmpbZW50aXR5XSAmJiBmb3JtYXRbZW50aXR5XSkgeyAvLyByZXNwb25zZSBlbnRpdHkgaGl0XG4gICAgICAgICAgICAgICAgLy8gLS0gdXNlci1kZWZpbmVkIHBhcnNlIGZvciB0b3AtbGV2ZWwgZW50aXR5IC0tICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChmb3JtYXRbZW50aXR5XS5wYXJzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1hdFNjb3BlID0gZm9ybWF0W2VudGl0eV0uc2NvcGUgfHwgdGhpcztcbiAgICAgICAgICAgICAgICAgICAgcmVzT2JqW2VudGl0eV0gPSBmb3JtYXRbZW50aXR5XS5wYXJzZXIuY2FsbChmb3JtYXRTY29wZSwgcmVzT2JqW2VudGl0eV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRW5kcG9pbnQocmVzcG9uc2UsIGVuZHBvaW50LCBhcmdzKSB7XG5cbiAgICB2YXIgcmVzT2JqID0gcmVzcG9uc2UuZGVwbG95ci5yZXNwb25zZSxcbiAgICAgICAgRU5EUE9JTlQgPSBTZXNzaW9uTWFuYWdlci5FTkRQT0lOVF9XSElURUxJU1Q7XG5cbiAgICBzd2l0Y2ggKGVuZHBvaW50KSB7XG5cbiAgICAgICAgY2FzZSBFTkRQT0lOVC5sb2dpbjpcblxuICAgICAgICAgICAgU2Vzc2lvbk1hbmFnZXIuc2V0U2Vzc2lvbih7XG4gICAgICAgICAgICAgICAgaHR0cGNvb2tpZTogcmVzT2JqLmh0dHBjb29raWUsXG4gICAgICAgICAgICAgICAgdXNlcjogcmVzT2JqLnVzZXIsXG4gICAgICAgICAgICAgICAgbGltaXRzOiByZXNPYmoubGltaXRzLFxuICAgICAgICAgICAgICAgIHByb2plY3Q6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFTkRQT0lOVC5sb2dvdXQ6XG4gICAgICAgICAgICBTZXNzaW9uTWFuYWdlci5jbGVhclNlc3Npb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRU5EUE9JTlQucHJvamVjdENsb3NlOlxuICAgICAgICBjYXNlIEVORFBPSU5ULmNsaWVudFByb2plY3RDbG9zZTpcbiAgICAgICAgICAgIFNlc3Npb25NYW5hZ2VyLmNsZWFyUHJvamVjdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFTkRQT0lOVC5wcm9qZWN0Q3JlYXRlOlxuICAgICAgICBjYXNlIEVORFBPSU5ULnByb2plY3RBYm91dFVwZGF0ZTpcbiAgICAgICAgY2FzZSBFTkRQT0lOVC5wcm9qZWN0U2F2ZTpcbiAgICAgICAgY2FzZSBFTkRQT0lOVC5wcm9qZWN0U2F2ZUFzOlxuICAgICAgICBjYXNlIEVORFBPSU5ULmNsaWVudFByb2plY3RTYXZlOlxuICAgICAgICAgICAgdmFyIHByb2plY3QgPSByZXNPYmoucHJvamVjdDtcbiAgICAgICAgICAgIFNlc3Npb25NYW5hZ2VyLnNldFByb2plY3Qoe1xuICAgICAgICAgICAgICAgIGlkOiBwcm9qZWN0LnByb2plY3QsXG4gICAgICAgICAgICAgICAgY29va2llOiBwcm9qZWN0LmNvb2tpZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgIH0gLy8gZW5kIHN3aXRjaFxuXG4gICAgRGVwcmVjYXRlZC5FdmVudC5maXJlKCdEZXBsb3lSOmVuZHBvaW50Q2hhbmdlJywge1xuICAgICAgICByZXNwb25zZTogcmVzcG9uc2UsXG4gICAgICAgIGVuZHBvaW50OiBlbmRwb2ludCxcbiAgICAgICAgYXJnczogYXJnc1xuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGNhbWVsQ2FzZShpbnB1dCkge1xuICAgIC8vIGNvbnZlcnQgZm9ybWF0OiAnL3IvdXNlci9sb2dpbicgLS0+ICd1c2VyTG9naW4nXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKCdcXC9yXFwvJywgJycpO1xuICAgIHJldHVybiBpbnB1dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcLyguKS9nLCBmdW5jdGlvbihtYXRjaCwgc2VnbWVudCkge1xuICAgICAgICByZXR1cm4gc2VnbWVudC50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xufVxuXG4vLyB0dXJuIHRoZSBvbGQgZGVwcmVjYXRlZCBpbnB1dHMgaW50byBuZXcgaW5wdXRzXG5mdW5jdGlvbiBub3JtYWxpemVJbnB1dHMoaW5wdXRzKSB7XG4gICAgdmFyIHJpbnB1dHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJpbnB1dHMucHVzaChpbnB1dHNbaV0ubm9ybWFsaXplKCkpO1xuICAgIH1cblxuICAgIHJldHVybiByaW5wdXRzO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuICogVGhlIERlcHJlY2F0ZWQgaW50ZXJmYWNlLlxuICovXG52YXIgUkRhdGEgPSBCYXNlLmV4dGVuZCh7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24odHlwZSwgcmNsYXNzLCByaW5wdXQpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5yY2xhc3MgPSByY2xhc3M7XG4gICAgICAgIHRoaXMucmlucHV0ID0gcmlucHV0O1xuICAgIH0sXG5cbiAgICBnZXRUeXBlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgICB9LFxuXG4gICAgZ2V0UkNsYXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmNsYXNzO1xuICAgIH0sXG5cbiAgICBnZXROYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlucHV0Lm5hbWU7XG4gICAgfSxcblxuICAgIGdldFZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlucHV0LnZhbHVlO1xuICAgIH0sXG5cbiAgICBnZXRMZXZlbHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yaW5wdXQubGV2ZWxzO1xuICAgIH0sXG5cbiAgICBnZXRMYWJlbHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yaW5wdXQubGFiZWxzO1xuICAgIH0sXG5cbiAgICBnZXRPcmRlcmVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlucHV0Lm9yZGVyZWQ7XG4gICAgfSxcblxuICAgIG5vcm1hbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJpbnB1dDtcbiAgICB9XG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikgeyAgXG4gIFxufVxuXG5mdW5jdGlvbiBkZWJ1Zyhtc2cpIHsgIFxufVxuXG5FbWl0dGVyLnByb3RvdHlwZSA9IHtcblxuICBldmVudHM6IHt9LFxuXG4gIHNjb3BlOiBudWxsLFxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbGlzdGVuZXIuICBNdWx0aXBsZSBjYW4gYmUgYWRkZWQgcGVyIG5hbWUuICBBbGlhc2VkIGFzIGBvbmAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICovXG4gIG9uOiBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKG5hbWUgaW4gdGhpcy5ldmVudHMgPT09IGZhbHNlKSB7IHRoaXMuZXZlbnRzW25hbWVdID0gW107IH0gICAgICAgIFxuXG4gICAgdGhpcy5ldmVudHNbbmFtZV0ucHVzaChoYW5kbGVyKTtcbiAgICBkZWJ1ZygnRW1pdHRlci5vbihcIicgKyBuYW1lICsgJ1wiKScpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIGFsbCBtYXRjaGluZyBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIGFuIGV2ZW50IGZpcmVkXG4gICAqL1xuICBlbWl0OiBmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKG5hbWUgaW4gdGhpcy5ldmVudHMgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzOyB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW25hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1ZygnRmlyZWQgZXZlbnQ6IFwiJyArIG5hbWUgKyAnXCInKTtcbiAgICAgIHRoaXMuZXZlbnRzW25hbWVdW2ldLmFwcGx5KHRoaXMuc2NvcGUgfHwgdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7ICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBtYXRjaGluZyBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIGFuIGV2ZW50IHdhcyByZW1vdmVkXG4gICAqL1xuICByZW1vdmVBbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIGZvciAodmFyIGUgaW4gdGhpcy5ldmVudHMpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzW2VdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmFtZSBpbiB0aGlzLmV2ZW50cyA9PT0gZmFsc2UpIHsgcmV0dXJuIHRoaXM7IH1cbiAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tuYW1lXTsgICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIHJlbW92ZUxpc3RlbmVyQXQ6IGZ1bmN0aW9uKG5hbWUsIGluZGV4KSB7XG4gICAgdmFyIGFycmF5ID0gdGhpcy5ldmVudHNbbmFtZV0sXG4gICAgICAgIHJlc3QgPSBhcnJheS5zbGljZShpbmRleCArIDEpO1xuXG4gICAgYXJyYXkubGVuZ3RoID0gaW5kZXg7XG4gICAgYXJyYXkucHVzaC5hcHBseShhcnJheSwgcmVzdCk7XG4gICAgdGhpcy5ldmVudHNbbmFtZV0gPSBhcnJheTtcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGxpc3RlbmVyIGJhc2VkIG9uIHRoZSBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgaGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiBhbiBldmVudCB3YXMgcmVtb3ZlZFxuICAgKi9cbiAgb2ZmOiBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKG5hbWUgaW4gdGhpcy5ldmVudHMgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzOyB9XG5cbiAgICAvLyByZW1vdmUgYWxsIGV2ZW50cyBoYW5kbGVycyBieSB0aGlzIG5hbWVcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhuYW1lKTtcbiAgICB9IGVsc2UgeyAvLyByZW1vdmUgYWxsIGV2ZW50cyBoYW5kbGVycyA9PSAnaGFuZGxlcicgYnkgdGhpcyBuYW1lXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW25hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tuYW1lXVtpXSA9PSBoYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lckF0KG5hbWUsIGkpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5cbmVtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuXG4vKipcbiAqIFByb3ZpZGVzIHNpbXBsZSBhZGFwdGVyIG1ldGhvZHMgd2hpY2ggd3JhcCB0aGUgcmF3IDxjb2RlPlJldm9sdXRpb24uRGVwbG95Ui5pbyguLi4pPC9jb2RlPlxuICogcmVtb3RlIERlcGxveVIgQVBJIEFKQVggdHJhbnNhY3Rpb25zLiBUaGVzZSBtZXRob2RzIGFyZSBhbiBvcHQtaW4gZmVhdHVyZSB0b1xuICogY29tcGxlbWVudCB0aGUgbG93IGxldmVsIERlcGxveVIgSU8gY29tbXVuaWNhdGlvbi5cbiAqXG4gKiBAY2xhc3MgUmV2b2x1dGlvbi5EZXBsb3lSLlB1YmxpY0FkYXB0ZXJcbiAqIEBleHRlbnNpb25mb3IgUmV2b2x1dGlvbi5EZXBsb3lSXG4gKi9cblxuRGVwcmVjYXRlZCA9IHtcbiAgICB2ZXJzaW9uOiByZXF1aXJlKCcuLi9wYWNrYWdlJykudmVyc2lvbixcblxuICAgIEV2ZW50OiB7XG4gICAgICAgIG9uOiBmdW5jdGlvbih0eXBlLCBmbiwgc2NvcGUpIHtcbiAgICAgICAgICAgIGVtaXR0ZXIub24odHlwZSwgZm4sIHNjb3BlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZXRhY2g6IGZ1bmN0aW9uKHR5cGUsIGZuLCBvYmopIHtcbiAgICAgICAgICAgIGVtaXR0ZXIub2ZmKHR5cGUsIGZuKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBSRGF0YUZhY3Rvcnk6IHtcbiAgICAgICAgY3JlYXRlTnVtZXJpYzogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ3ByaW1pdGl2ZScsICdudW1lcmljJywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubnVtZXJpYygpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVJbnRlZ2VyOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygncHJpbWl0aXZlJywgJ2ludGVnZXInLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5pbnRlZ2VyKCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUJvb2xlYW46IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCdwcmltaXRpdmUnLCAnbnVtZXJpYycsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmxvZ2ljYWwoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlU3RyaW5nOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygncHJpbWl0aXZlJywgJ2NoYXJhY3RlcicsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmNoYXJhY3RlcigpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVEYXRlOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygnZGF0ZScsICdEYXRlJywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuZGF0ZSgpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVQT1NJWERhdGU6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCdkYXRlJywgJ1BPU0lYY3QnLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5wb3NpeGN0KCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZU51bWVyaWNWZWN0b3I6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCd2ZWN0b3InLCAnbnVtZXJpYycsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLm51bWVyaWNWZWN0b3IoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlSW50ZWdlclZlY3RvcjogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ3ZlY3RvcicsICdpbnRlZ2VyJywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuaW50ZWdlclZlY3RvcigpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVCb29sZWFuVmVjdG9yOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygndmVjdG9yJywgJ2xvZ2ljYWwnLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5sb2dpY2FsVmVjdG9yKCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZVN0cmluZ1ZlY3RvcjogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ3ZlY3RvcicsICdjaGFyYWN0ZXInLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5jaGFyYWN0ZXJWZWN0b3IoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlRGF0ZVZlY3RvcjogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ3R5cGUnLCAnRGF0ZScsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmRhdGVWZWN0b3IoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlUE9TSVhEYXRlVmVjdG9yOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygndmVjdG9yJywgJ1BPU0lYY3QnLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5wb3NpeGN0VmVjdG9yKCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUxpc3Q6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCdsaXN0JywgJ2xpc3QnLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5saXN0KCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZURhdGFmcmFtZTogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ2RhdGFmcmFtZScsICdkYXRhLmZyYW1lJywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuZGF0YWZyYW1lKCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUZhY3RvcjogZnVuY3Rpb24obmFtZSwgdmFsdWUsIG9yZGVyZWQsIGxldmVscywgbGFiZWxzKSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICBsZXZlbHM6IGxldmVscyxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IGxhYmVsc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKG9yZGVyZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCdmYWN0b3InLCAnZmFjdG9yJywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSwgb3B0cykub3JkZXJlZCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygnZmFjdG9yJywgJ2ZhY3RvcicsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUsIG9wdHMpLmZhY3RvcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVOdW1lcmljTWF0cml4OiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJEYXRhLm5ldygnbWF0cml4JywgJ21hdHJpeCcsIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLm51bWVyaWNNYXRyaXgoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlSW50ZWdlck1hdHJpeDogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSRGF0YS5uZXcoJ21hdHJpeCcsICdtYXRyaXgnLCBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5pbnRlZ2VyTWF0cml4KCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUJvb2xlYW5NYXRyaXg6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCdtYXRyaXgnLCAnbWF0cml4JywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubG9naWNhbE1hdHJpeCgpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVTdHJpbmdNYXRyaXg6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkRhdGEubmV3KCdtYXRyaXgnLCAnbWF0cml4JywgUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuY2hhcmFjdGVyTWF0cml4KCkpO1xuICAgICAgICB9XG4gICAgfSwgLy8gUkRhdGFGYWN0b3J5XG5cbiAgICBEZXBsb3lSOiB7XG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICAgICAgICAgIC8vIC0tLSBBc3NlcnQgSlNEZXBsb3kgY29tcGF0YWJpbGl0eSBhZ2FpbnN0IHRoZSBjb25uZWN0ZWQgRGVwbG95UiB2ZXJzaW9uIC0tLVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5jb21wYXRpYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgLy9jb21wYXRpYmlsaXR5Q2hlY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tIEV2ZW50IHJlZ2lzdHJhdGlvbiAtLS1cbiAgICAgICAgICAgIGlmIChjb25maWcuZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50cyA9IGNvbmZpZy5ldmVudHM7XG5cbiAgICAgICAgICAgICAgICAvLyAtLSBNYW5hZ2UgY2xlYW51cCBvbiBicm93c2VyIGNsb3NlIChjbG9zZSBwcm9qZWN0LCBsb2dvdXQsIGVjdC4uLiktLVxuICAgICAgICAgICAgICAgIGlmIChldmVudHMudW5sb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIFNlc3Npb25NYW5hZ2VyLnNldFVubG9hZENvbmZpZyhldmVudHMudW5sb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgRGVwcmVjYXRlZC5FdmVudC5vbignZGVwbG95Ujp1bmxvYWQnLCBTZXNzaW9uTWFuYWdlci51bmxvYWRIYW5kbGVyLCBTZXNzaW9uTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gLS0gSU8gR2xvYmFsIEV2ZW50cyAtLVxuICAgICAgICAgICAgICAgIGlmIChldmVudHMuZ2xvYmFsSU8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3BlID0gZXZlbnRzLmdsb2JhbElPLnNjb3BlIHx8IHdpbmRvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZmVjeWNsZSA9IGV2ZW50cy5nbG9iYWxJTy5saWZlY3ljbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlID0gZXZlbnRzLmdsb2JhbElPLnN0YXR1c0NvZGU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpZmVjeWNsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZXZlbnROYW1lIGluIGxpZmVjeWNsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcHJlY2F0ZWQuRXZlbnQub24oJ2RlcGxveVItaW86JyArIGV2ZW50TmFtZSwgbGlmZWN5Y2xlW2V2ZW50TmFtZV0sIHNjb3BlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBldmVudE5hbWUgaW4gc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcHJlY2F0ZWQuRXZlbnQub24oJ2RlcGxveVItaW86JyArIGV2ZW50TmFtZSwgc3RhdHVzQ29kZVtldmVudE5hbWVdLCBzY29wZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE5ldyBBUElcbiAgICAgICAgICAgIGRlcGxveXIuY29uZmlndXJlKHtcbiAgICAgICAgICAgICAgICBob3N0OiBjb25maWcuZGVwbG95clVSSSxcbiAgICAgICAgICAgICAgICBjb3JzOiBjb25maWcuZGVwbG95clVSSSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2dnaW5nOiBjb25maWcubG9nZ2luZyxcbiAgICAgICAgICAgICAgICBzdGlja3k6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlvOiBmdW5jdGlvbihhcGksIGNvbmZpZywgY2IpIHtcbiAgICAgICAgICAgIGlmIChjb25zb2xlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdcIicgKyBjYW1lbENhc2UoYXBpKSArICcoKVwiIEFQSSBpcyBub3cgZGVwcmVjYXRlZC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2IgPSBjYiB8fCB7fTtcbiAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICAgICAgICAgICAgdmFyIHRyYW5zYWN0aW9uID0gY29uZmlnLnRyYW5zYWN0aW9uIHx8IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zQXJncyA9IHRyYW5zYWN0aW9uWydhcmd1bWVudHMnXSxcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlID0gdHJhbnNhY3Rpb24uc3RhdHVzQ29kZSB8fCB7fSxcbiAgICAgICAgICAgICAgICBzY29wZSA9IGNiLnNjb3BlIHx8IHdpbmRvdyxcbiAgICAgICAgICAgICAgICByb3V0cHV0cyA9IGNvbmZpZy5yb2JqZWN0cyxcbiAgICAgICAgICAgICAgICByaW5wdXRzID0gY29uZmlnLmlucHV0czsgLy8gY29uZmlnLmlucHV0cyA9IFIuRGVwbG95Ui5wYXJzZUlucHV0cyhjb25maWcuaW5wdXRzKTtcblxuICAgICAgICAgICAgLy8gLS0tIG9taXQgZGVwcmVjYXRlZCBwcm9wcyAtLS1cbiAgICAgICAgICAgIGlmIChjb25maWcudHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLnRyYW5zYWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLm1ldGhvZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcub24pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLm9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5mb3JtYXQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLmZvcm1hdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcuaW5wdXRzKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pbnB1dHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLnJvYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5yb2JqZWN0cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tIG1ha2UgdGhlIG5ldyByZXF1ZXN0IC0tLVxuICAgICAgICAgICAgdmFyIGlvID0gZGVwbG95ci5pbyhhcGkpXG4gICAgICAgICAgICAgICAgLmRhdGEoY29uZmlnIHx8IHt9KVxuICAgICAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnbG9iYWwtZmFpbHVyZVxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoJ2RlcGxveVItaW86ZmFpbHVyZScsIFtyZXNwb25zZSwgYXBpLCB0cmFuc0FyZ3NdKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2FjdGlvbi1mYWlsdXJlXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYi5mYWlsdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYi5mYWlsdXJlLmFwcGx5KHNjb3BlLCBbcmVzcG9uc2UsIGFwaSwgdHJhbnNBcmdzXSk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBnbG9iYWwtc3RhdHVzRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KCgnZGVwbG95Ui1pbzonICsgY29kZSksIFtyZXNwb25zZSwgYXBpLCB0cmFuc0FyZ3NdKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJpbnB1dHMpIHtcbiAgICAgICAgICAgICAgICBpby5yaW5wdXRzKG5vcm1hbGl6ZUlucHV0cyhyaW5wdXRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm91dHB1dHMpIHtcbiAgICAgICAgICAgICAgICBpby5yb3V0cHV0cyhyb3V0cHV0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHJhbnNhY3Rpb24uc3luYykge1xuICAgICAgICAgICAgICAgIGlvLnN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbi50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgaW8udGltZW91dCh0cmFuc2FjdGlvbi50aW1lb3V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tIEVycm9yIHN0YXR1cyBjb2RlIC0tLSAvL1xuICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUpIHtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGV2ZW50TmFtZSBpbiBzdGF0dXNDb2RlKSB7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaW8ub24oJ2RlcGxveXItaW86JyArIGV2ZW50TmFtZSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYiA9IHN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdHVzVGV4dCA9IHJlc3BvbnNlLmRlcGxveXIucmVzcG9uc2UuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0gcmVzcG9uc2UuZGVwbG95ci5yZXNwb25zZS5lcnJvckNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYltzdGF0dXNdLmFwcGx5KHNjb3BlLCBbcmVzcG9uc2UsIHN0YXR1cywgc3RhdHVzVGV4dCwgYXBpLCB0cmFuc0FyZ3NdKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC8vIEBAQEBUT0RPIEBAQEBAQFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBnbG9iYWwtc3RhcnRcbiAgICAgICAgICAgIGVtaXR0ZXIuZW1pdCgnZGVwbG95Ui1pbzpzdGFydCcpO1xuXG4gICAgICAgICAgICAvLy8gdHJhbnNhY3Rpb24tc3RhcnRcbiAgICAgICAgICAgIGlmIChjYi5zdGFydCkge1xuICAgICAgICAgICAgICAgIGNiLnN0YXJ0LmFwcGx5KHNjb3BlLCBbYXBpLCB0cmFuc0FyZ3NdKTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvLmVuZChmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIC8vIGdsb2JhbC1jb21wbGV0ZVxuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdCgnZGVwbG95Ui1pbzpjb21wbGV0ZScpO1xuXG4gICAgICAgICAgICAgICAgLy8gdHJhbnNhY3Rpb24tY29tcGxldGVcbiAgICAgICAgICAgICAgICBpZiAoY2IuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IuY29tcGxldGUuYXBwbHkoc2NvcGUsIFtyZXNwb25zZSwgYXBpLCB0cmFuc0FyZ3NdKTsgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gZW50aXR5IG1hbmlwdWxhdGlvbiBvZiB0aGUgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNhY3Rpb24uZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gZm9ybWF0KHJlc3BvbnNlLCB0cmFuc2FjdGlvbi5lbnRpdHkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGdsb2JhbC1zdWNjZXNzXG4gICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KCdkZXBsb3lSLWlvOnN1Y2Nlc3MnLCBbcmVzcG9uc2UsIGFwaV0pO1xuXG4gICAgICAgICAgICAgICAgLy8gdHJhbnNhY3Rpb24tc3VjY2Vzc1xuICAgICAgICAgICAgICAgIGlmIChjYi5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiLnN1Y2Nlc3MuYXBwbHkoc2NvcGUsIFtyZXNwb25zZSwgYXBpLCB0cmFuc0FyZ3NdKTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGdsb2JhbC1lbmRcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoJ2RlcGxveVItaW86ZW5kJywgW3Jlc3BvbnNlLCBhcGldKTtcblxuICAgICAgICAgICAgICAgIC8vIHRyYW5zYWN0aW9uLWVuZFxuICAgICAgICAgICAgICAgIGlmIChjYi5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IuZW5kLmFwcGx5KHNjb3BlLCBbcmVzcG9uc2UsIGFwaSwgdHJhbnNBcmdzXSk7IFxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGlvO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGbGF0dGVucyBhIGdpdmVuIDxjb2RlPlJldm9sdXRpb24uUkRhdGE8L2NvZGU+IHR5cGUgaW50byBhIEpTT05cbiAgICAgICAgICogc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZXhwZWN0ZWQgRGVwbG95UiBpbnB1dCBmb3JtYXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcGFyc2VJbnB1dHNcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSByZGF0YSBBbiBBcnJheSBvZiBSRGF0YSBPYmplY3RzIHRvIGJlIGZsYXR0ZW5lZC5cbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgZmxhdHRlbmQgUkRhdGEgSlNPTiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZVxuICAgICAgICAgKiBEZXBsb3lSIGlucHV0IGZvcm1hdC5cbiAgICAgICAgICovXG4gICAgICAgIHBhcnNlSW5wdXRzOiBmdW5jdGlvbihyZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJkYXRhO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gUHJvamVjdCBXb3Jrc3BhY2UgQVBJc1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgbGlzdHMgdGhlIG9iamVjdHMgaW4gdGhlIHdvcmtzcGFjZSBmb3IgdGhlIHByb2plY3QgaW5kaWNhdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RXb3Jrc3BhY2VMaXN0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yb290PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIG9iamVjdCBncmFwaCByb290PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNsYXp6PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIFIgY2xhc3MgYmFzZWQgZmlsdGVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbHRlcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBSIG9iamVjdCBuYW1lIGJhc2VkIGZpbHRlcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yZXN0cmljdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlLCBsaW1pdHMgcmV0dXJuZWQgb2JqZWN0cyB0byBvYmplY3RcbiAgICAgICAgICogICAgICAgdHlwZXMgd2l0aCBzdXBwb3J0ZWQgUmV2b0RlcGxveVItZW5jb2RpbmdcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnBhZ2VzaXplPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgcGFnZSBzaXplIGZvciBwYWdpbmcgcmVzdWx0cyBpbiByZXNwb25zZVxuICAgICAgICAgKiAgICAgICBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnBhZ2VvZmZzZXQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBwYWdlIG9mZnNldCBmb3IgcGFnaW5nIHJlc3VsdHMgaW4gcmVzcG9uc2VcbiAgICAgICAgICogICAgICAgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdFdvcmtzcGFjZUxpc3Q6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L3dvcmtzcGFjZS9saXN0JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCByZXRyaWV2ZXMgUmV2b0RlcGxveVItZW5jb2RlZCBvYmplY3RzIGZyb20gdGhlIHdvcmtzcGFjZSBmb3IgdGhlXG4gICAgICAgICAqIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RXb3Jrc3BhY2VHZXRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygb2JqZWN0IG5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJvb3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+b3B0aW9uYWwpIHNwZWNpZmllcyBvYmplY3QgZ3JhcGggcm9vdDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdGFydDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5vcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBvZmZzZXQgaW50byBvYmplY3QgZGF0YTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5sZW5ndGg8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+b3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgc2VnbWVudCBvZiBvYmplY3QgZGF0YSB0byByZXRyaWV2ZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmluZmluaXR5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyBhIGN1c3RvbSB2YWx1ZSBmb3IgSW5maW5pdHkgYXBwZWFyaW5nIGluIFJcbiAgICAgICAgICogICAgICAgb2JqZWN0IGRhdGEgcmV0dXJuZWQgb24gdGhlIGNhbGwsIG90aGVyd2lzZSBJbmZpbml0eSBpcyByZXByZXNlbnRlZFxuICAgICAgICAgKiAgICAgICBieSAweDdmZjAwMDAwMDAwMDAwMDBMXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0Pm5hbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgY3VzdG9tIHZhbHVlIGZvciBOYU4gYXBwZWFyaW5nIGluIFIgb2JqZWN0IGRhdGFcbiAgICAgICAgICogICAgICAgcmV0dXJuZWQgb24gdGhlIGNhbGwsIG90aGVyd2lzZSBOYU4gaXMgcmVwcmVzZW50ZWQgYnkgbnVsbFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZW5jb2RlRGF0YUZyYW1lUHJpbWl0aXZlQXNWZWN0b3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIGRhdGEuZnJhbWUgcHJpbWl0aXZlcyBhcmUgZW5jb2RlZFxuICAgICAgICAgKiAgICAgICB2ZWN0b3JzIGluIFIgb2JqZWN0IGRhdGEgcmV0dXJuZWQgb24gY2FsbFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RXb3Jrc3BhY2VHZXQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L3dvcmtzcGFjZS9nZXQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHVwbG9hZHMgYSBiaW5hcnkgb2JqZWN0IGZyb20gZmlsZSBpbnRvIHRoZSB3b3Jrc3BhY2UgZm9yIHRoZVxuICAgICAgICAgKiBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0V29ya3NwYWNlVXBsb2FkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgb2JqZWN0IGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5maWxlIGNvbnRlbnQ8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RXb3Jrc3BhY2VVcGxvYWQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbmZpZy5mb3JtYXQgPSBcInRleHRcIjtcbiAgICAgICAgICAgIHZhciBpb0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjb25maWcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBjb25maWcuZm9ybUlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogY2FsbGJhY2tcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC93b3Jrc3BhY2UvdXBsb2FkJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCB0cmFuc2ZlcnMgYSBiaW5hcnkgb2JqZWN0IGZyb20gYSBVUkwgaW50byB0aGUgd29ya3NwYWNlIGZvciB0aGVcbiAgICAgICAgICogc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdFdvcmtzcGFjZVRyYW5zZmVyXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgb2JqZWN0IGZpbGUgZm91bmQgb24gdGhlIFVSTDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD51cmw8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBVUkw8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RXb3Jrc3BhY2VUcmFuc2ZlcjogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3Qvd29ya3NwYWNlL3RyYW5zZmVyJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBwdXNoZXMgYSBSZXZvRGVwbG95Ui1lbmNvZGVkIG9iamVjdCBpbnRvIHRoZSB3b3Jrc3BhY2UgZm9yIHRoZVxuICAgICAgICAgKiBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0V29ya3NwYWNlUHVzaFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgUmV2b0RlcGxveVItZW5jb2RlZCBvYmplY3QgaW5wdXRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNzdmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHByaW1pdGl2ZSBuYW1lL3ZhbHVlIGlucHV0czwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdFdvcmtzcGFjZVB1c2g6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L3dvcmtzcGFjZS9wdXNoJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBzYXZlcyB0aGUgd29ya3NwYWNlIHRvIGEgZmlsZSBpbiB0aGUgd29ya2luZyBkaXJlY3RvcnkgZm9yIHRoZVxuICAgICAgICAgKiBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIG5hbWUgcGFyYW1ldGVyIGlzIHNwZWNpZmllZCBvbiB0aGUgY2FsbCB0aGVuIG9ubHkgdGhlIG5hbWVkIG9iamVjdFxuICAgICAgICAgKiBpcyBzYXZlZCBhcyBhIGJpbmFyeSBvYmplY3QgZmlsZSB0byB0aGUgd29ya2luZyBkaXJlY3RvcnkuIE90aGVyd2lzZSB0aGVcbiAgICAgICAgICogZW50aXJlIGNvbnRlbnRzIG9mIHRoZSB3b3Jrc3BhY2UgYXJlIHNhdmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RXb3Jrc3BhY2VTYXZlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgbmFtZWQgb2JqZWN0IGZvciBzYXZpbmc8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBkZXNjcmlwdGlvbiB0byBhY2NvbXBhbnkgdGhlIHNhdmVkIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgbmV3IGZpbGUgd2lsbCBiZSByZW5hbWVkIHRvIGF2b2lkXG4gICAgICAgICAqICAgICAgIG92ZXJ3cml0aW5nXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdFdvcmtzcGFjZVNhdmU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L3dvcmtzcGFjZS9zYXZlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBzdG9yZXMgdGhlIHdvcmtzcGFjZSBhcyBhIGJpbmFyeSBvYmplY3QgdG8gdGhlIHJlcG9zaXRvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBuYW1lIHBhcmFtZXRlciBpcyBzcGVjaWZpZWQgb24gdGhlIGNhbGwsIHRoZW4gb25seSB0aGUgbmFtZWQgb2JqZWN0XG4gICAgICAgICAqIGlzIHN0b3JlZCBhcyBhIGJpbmFyeSBvYmplY3QgaW4gdGhlIHJlcG9zaXRvcnkuIE90aGVyd2lzZSB0aGUgZW50aXJlXG4gICAgICAgICAqIGNvbnRlbnRzIG9mIHRoZSB3b3Jrc3BhY2UgYXJlIHN0b3JlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0V29ya3NwYWNlU3RvcmVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+bmFtZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgbmFtZWQgb2JqZWN0IGZvciBzdG9yaW5nPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+ZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIGRlc2NyaXB0aW9uIHRvIGFjY29tcGFueSB0aGUgc2F2ZWQgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD50YWdzPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0YWcgd29yZHMgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHJlcG9zaXRvcnkgZmlsZVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVzdHJpY3RlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByb2xlIG5hbWVzLCB3aGljaCBtYWtlcyB0aGUgZmlsZVxuICAgICAgICAgKiAgICAgICB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgdXNlcnMgd2l0aCB0aGVzZSByb2xlc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c2hhcmVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCB0aGUgZmlsZSB3aWxsIGJlIHNoYXJlZCwgd2hpY2hcbiAgICAgICAgICogICAgICAgbWFrZXMgdGhlIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIHVzZXJzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wdWJsaXNoZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIHRoZSBmaWxlIHdpbGwgYmUgcHVibGlzaGVkLCB3aGljaFxuICAgICAgICAgKiAgICAgICBtYWtlcyB0aGUgZmlsZSB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgYW5kIGFub255bW91cyB1c2Vyc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5uZXd2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIHRoZSBuZXcgZmlsZSB3aWxsIGJlIHJlbmFtZWQgdG9cbiAgICAgICAgICogICAgICAgYXZvaWQgb3ZlcndyaXRpbmdcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdFdvcmtzcGFjZVN0b3JlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC93b3Jrc3BhY2Uvc3RvcmUnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGxvYWRzIGEgYmluYXJ5IG9iamVjdCBmcm9tIGEgZmlsZSBpbiB0aGUgcmVwb3NpdG9yeSBpbnRvIHRoZVxuICAgICAgICAgKiB3b3Jrc3BhY2UgZm9yIHRoZSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0V29ya3NwYWNlTG9hZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVwbzwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHJlcG9zaXRvcnkgbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+c3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgYXV0aG9yPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgdmVyc2lvbjwvZGQ+XG4gICAgICAgICAqICA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RXb3Jrc3BhY2VMb2FkOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC93b3Jrc3BhY2UvbG9hZCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZGVsZXRlcyBhbiBvYmplY3QgZnJvbSB0aGUgd29ya3NwYWNlIGZvciB0aGUgc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdFdvcmtzcGFjZURlbGV0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIG9iamVjdCBuYW1lPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0V29ya3NwYWNlRGVsZXRlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC93b3Jrc3BhY2UvZGVsZXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBQcm9qZWN0IE1hbmFnZW1lbnQgQVBJc1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBjcmVhdGVzIGEgbmV3IHByb2plY3QgZm9yIHRoZSBjdXJyZW50bHkgYXV0aGVudGljYXRlZCB1c2VyLlxuICAgICAgICAgKiBJZiB0aGUgcHJvamVjdG5hbWUgcGFyYW1ldGVyIGlzIHNwZWNpZmllZCBvbiB0aGUgY2FsbCwgdGhlbiB0aGUgbmV3bHlcbiAgICAgICAgICogY3JlYXRlZCBwcm9qZWN0IHdpbGwgYmUgYSBwZXJzaXN0ZW50IHByb2plY3QgLiBJZiB0aGUgcHJvamVjdG5hbWUgcGFyYW1ldGVyXG4gICAgICAgICAqIGlzIG9taXR0ZWQgb24gdGhlIGNhbGwsIHRoZW4gdGhlIG5ld2x5IGNyZWF0ZWQgcHJvamVjdCB3aWxsIGJlIGEgdGVtcG9yYXJ5XG4gICAgICAgICAqIHByb2plY3QuIFRoZSBwcm9qZWN0ZGVzY3IgcGFyYW1ldGVyIGlzIGlnbm9yZWQgaWYgdGhlIHByb2plY3RuYW1lIHBhcmFtZXRlclxuICAgICAgICAgKiBpcyBvbWl0dGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgYmxhY2tib3ggcGFyYW1ldGVyIGVuc3VyZXMgdGhhdCBjYWxscyBvbiB0aGUgdGVtcG9yYXJ5IHByb2plY3QgYXJlXG4gICAgICAgICAqIGxpbWl0ZWQgdG8gdGhlIEJsYWNrYm94IEFQSSBDb250cm9scyAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFVzaW5nIHRoZSBpbnB1dHMgLCBwcmVsb2FkZmlsZSAsIHByZWxvYWRvYmplY3QgYW5kIGFkb3B0IHBhcmFtZXRlcnMgdGhlXG4gICAgICAgICAqIHByb2plY3QgY2FuIGJlIHByZS1pbml0aWFsaXplZCB3aXRoIGRhdGEgaW4gdGhlIHdvcmtzcGFjZSBhbmQvb3Igd29ya2luZ1xuICAgICAgICAgKiBkaXJlY3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBpbnB1dHMgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHBhc3MgUmV2b0RlcGxveVItZW5jb2RlZCBSIG9iamVjdFxuICAgICAgICAgKiB2YWx1ZXMgYXMgaW5wdXRzLiBUaGVzZSBpbnB1dHMgYXJlIHR1cm5lZCBpbnRvIFIgb2JqZWN0cyBpbiB0aGUgd29ya3NwYWNlXG4gICAgICAgICAqIG9mIHRoZSBuZXcgUiBzZXNzaW9uIGJlZm9yZSB0aGUgY2FsbCByZXR1cm5zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgcHJlbG9hZGZpbGUgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIGxvYWQgb25lIG9yIG1vcmUgZmlsZXMgZnJvbVxuICAgICAgICAgKiB0aGUgcmVwb3NpdG9yeSBpbnRvIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBvZiB0aGUgbmV3IFIgc2Vzc2lvbiBiZWZvcmUgdGhlXG4gICAgICAgICAqIGNhbGwgcmV0dXJucy5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHByZWxvYWRvYmplY3QgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIGxvYWQgb25lIG9yIG1vcmUgYmluYXJ5IFJcbiAgICAgICAgICogb2JqZWN0cyAoLnJEYXRhKSBmcm9tIHRoZSByZXBvc2l0b3J5IGludG8gdGhlIHdvcmtzcGFjZSBvZiB0aGUgbmV3IFJcbiAgICAgICAgICogc2Vzc2lvbiBiZWZvcmUgdGhlIGNhbGwgcmV0dXJucy5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGFkb3B0IHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBsb2FkIGEgcHJlLWV4aXN0aW5nIHByb2plY3RcbiAgICAgICAgICogd29ya3NwYWNlLCBwcm9qZWN0IHdvcmtpbmcgZGlyZWN0b3J5IGFuZC9vciBwcm9qZWN0IHBhY2thZ2UgZGVwZW5kZW5jaWVzXG4gICAgICAgICAqIGludG8gdGhlIG5ldyBSIHNlc3Npb24gYmVmb3JlIHRoZSBjYWxsIHJldHVybnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdENyZWF0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3RuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgbmFtZXMgYSBuZXcgcGVyc2lzdGVudCBwcm9qZWN0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByb2plY3RkZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGRlc2NyaWJlcyBhIG5ldyBwZXJzaXN0ZW50IHByb2plY3Q8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YmxhY2tib3g8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgd2hlbiBlbmFibGVkLCBhIHRlbXBvcmFyeSBwcm9qZWN0IGlzIGxpbWl0ZWQgdG8gYmxhY2tib3hcbiAgICAgICAgICogICAgICAgQVBJIGNvbnRyb2xzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5pbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBSZXZvRGVwbG95Ui1lbmNvZGVkIGlucHV0czwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5jc3ZpbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBwcmltaXRpdmUgbmFtZS92YWx1ZSBpbnB1dHM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZGZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZGZpbGVhdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycyxcbiAgICAgICAgICogICAgICAgYXV0aG9yLXBlci1wcmVsb2FkZmlsZW5hbWVcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxldmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucyxcbiAgICAgICAgICogICAgICAgdmVyc2lvbi1wZXItcHJlbG9hZGZpbGVuYW1lXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IG9iamVjdCAoLnJEYXRhKVxuICAgICAgICAgKiAgICAgICBmaWxlbmFtZXNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRvYmplY3RhdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycyxcbiAgICAgICAgICogICAgICAgYXV0aG9yLXBlci1wcmVsb2Fkb2JqZWN0bmFtZVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdHZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsXG4gICAgICAgICAqICAgICAgIHZlcnNpb24tcGVyLW9iamVjdC1wcmVsb2Fkb2JqZWN0bmFtZVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHR3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWRlbnRpZmllcyB0aGUgcHJvamVjdCB3aG9zZSB3b3Jrc3BhY2UgaXMgdG8gYmUgYWRvcHRlZFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHRkaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWRlbnRpZmllcyB0aGUgcHJvamVjdCB3aG9zZSBkaXJlY3RvcnkgaXMgdG8gYmUgYWRvcHRlZFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHRwYWNrYWdlczwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZGVudGlmaWVzIHRoZSBwcm9qZWN0IHdob3NlIHBhY2thZ2UgZGVwZW5kZW5jaWVzIGFyZSB0b1xuICAgICAgICAgKiAgICAgICBiZSBhZG9wdGVkXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdENyZWF0ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvY3JlYXRlJywgY29uZmlnLCBjYWxsYmFjayk7ICAgICAgICAgICAgXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBjcmVhdGVzIGEgcG9vbCBvZiB0ZW1wb3JhcnkgcHJvamVjdHMgZm9yIHRoZSBjdXJyZW50bHlcbiAgICAgICAgICogYXV0aGVudGljYXRlZCB1c2VyLiBUaGUgY2FsbGVyIGNhbiBzcGVjaWZ5IHRoZWlyIHByZWZlcnJlZCBudW1iZXIgb2ZcbiAgICAgICAgICogcHJvamVjdHMgdG8gY3JlYXRlIHVzaW5nIHRoZSBwb29sc2l6ZSBwYXJhbWV0ZXIuIFJldm9EZXBsb3lSIHdpbGwgYXR0ZW1wdFxuICAgICAgICAgKiB0byBjcmVhdGUgdXAgdG8gcG9vbHNpemUgbnVtYmVyIG9mIHByb2plY3RzLiBIb3dldmVyLCBzdGFuZGFyZCBjb21cbiAgICAgICAgICogcG9saWN5IGNvbnRyYWludHMgYXBwbHkgdG8gaW5kaXZpZHVhbCB1c2VycyBhbmQgb24gdGhlIGdyaWQgc28gdGhlcmUgaXMgbm9cbiAgICAgICAgICogZ3VhcmFudGVlIHRoYXQgcG9vbHNpemUgcHJvamVjdHMgd2lsbCBiZSByZXR1cm5lZC4gSWYgdGhlIG51bWJlciBvZlxuICAgICAgICAgKiBwcm9qZWN0cyByZXR1cm5lZCBvbiB0aGlzIGNhbGwgaXMgbGVzcyB0aGFuIHBvb2xzaXplIHRoZSBjYWxsZXIgY2FuIGluc3BlY3RcbiAgICAgICAgICogdGhlIGVycm9yIGFuZCBlcnJvckNvZGUgcHJvcGVydGllcyBpbiB0aGUgcmVzcG9uc2UgbWFya3VwIHRvIGRldGVybWluZVxuICAgICAgICAgKiBleGFjdGx5IHdoeSB0aGVpciBwb29sIHNpemUgd2FzIGxpbWl0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBibGFja2JveCBwYXJhbWV0ZXIgZW5zdXJlcyB0aGF0IGNhbGxzIG9uIGVhY2ggcHJvamVjdCBpbiB0aGUgcG9vbCBhcmVcbiAgICAgICAgICogbGltaXRlZCB0byB0aGUgQmxhY2tib3ggQVBJIENvbnRyb2xzIC5cbiAgICAgICAgICpcbiAgICAgICAgICogVXNpbmcgdGhlIGlucHV0cywgcHJlbG9hZGZpbGUsIHByZWxvYWRvYmplY3QgYW5kIGFkb3B0IHBhcmFtZXRlcnMgZWFjaFxuICAgICAgICAgKiBwcm9qZWN0IGluIHRoZSBwb29sIGNhbiBiZSBwcmUtaW5pdGlhbGl6ZWQgd2l0aCBkYXRhIGluIHRoZSB3b3Jrc3BhY2VcbiAgICAgICAgICogYW5kL29yIHdvcmtpbmcgZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgaW5wdXRzIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBwYXNzIFJldm9EZXBsb3lSLWVuY29kZWQgUiBvYmplY3RcbiAgICAgICAgICogdmFsdWVzIGFzIGlucHV0cy4gVGhlc2UgaW5wdXRzIGFyZSB0dXJuZWQgaW50byBSIG9iamVjdHMgaW4gdGhlIHdvcmtzcGFjZVxuICAgICAgICAgKiBvZiB0aGUgbmV3IFIgc2Vzc2lvbiBiZWZvcmUgdGhlIGNhbGwgcmV0dXJucy5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHByZWxvYWRmaWxlIHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBsb2FkIG9uZSBvciBtb3JlIGZpbGVzIGZyb21cbiAgICAgICAgICogdGhlIHJlcG9zaXRvcnkgaW50byB0aGUgd29ya2luZyBkaXJlY3Rvcnkgb2YgdGhlIG5ldyBSIHNlc3Npb24gYmVmb3JlIHRoZVxuICAgICAgICAgKiBjYWxsIHJldHVybnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBwcmVsb2Fkb2JqZWN0IHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBsb2FkIG9uZSBvciBtb3JlIGJpbmFyeSBSXG4gICAgICAgICAqIG9iamVjdHMgKC5yRGF0YSkgZnJvbSB0aGUgcmVwb3NpdG9yeSBpbnRvIHRoZSB3b3Jrc3BhY2Ugb2YgdGhlIG5ldyBSXG4gICAgICAgICAqIHNlc3Npb24gYmVmb3JlIHRoZSBjYWxsIHJldHVybnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBhZG9wdCBwYXJhbWV0ZXJzIGFsbG93IHRoZSBjYWxsZXIgdG8gbG9hZCBhIHByZS1leGlzdGluZyBwcm9qZWN0XG4gICAgICAgICAqIHdvcmtzcGFjZSwgcHJvamVjdCB3b3JraW5nIGRpcmVjdG9yeSBhbmQvb3IgcHJvamVjdCBwYWNrYWdlIGRlcGVuZGVuY2llc1xuICAgICAgICAgKiBpbnRvIHRoZSBuZXcgUiBzZXNzaW9uIGJlZm9yZSB0aGUgY2FsbCByZXR1cm5zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RQb29sXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cG9vbHNpemU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+dGhlIHByZWZlcnJlZCBzaXplIG9mIHRoZSBwb29sIG9mIHRlbXBvcmFyeSBwcm9qZWN0czwvZGQ+XG4gICAgICAgICAqICAgIDxkdD5ibGFja2JveDwvZGQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHdoZW4gZW5hYmxlZCwgZWFjaCB0ZW1wb3JhcnkgcHJvamVjdCBpbiB0aGUgcG9vbCBpcyBsaW1pdGVkIHRvIGJsYWNrYm94IEFQSSBjb250cm9sczwvZGQ+XG4gICAgICAgICAqICAgIDxkdD5pbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBSZXZvRGVwbG95Ui1lbmNvZGVkIGlucHV0czwvZGQ+XG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZWF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIGF1dGhvci1wZXItcHJlbG9hZGZpbGVuYW1lPC9kZD5cbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxldmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1wcmVsb2FkZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdG5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IG9iamVjdCAoLnJEYXRhKSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdGF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIGF1dGhvci1wZXItcHJlbG9hZG9iamVjdG5hbWU8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdHZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucywgdmVyc2lvbi1wZXItb2JqZWN0LXByZWxvYWRvYmplY3RuYW1lPC9kZD5cbiAgICAgICAgICogICAgPGR0PmFkb3B0d29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggd29ya3NwYWNlIGlzIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHRkaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCBkaXJlY3RvcnkgaXMgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqICAgIDxkdD5hZG9wdHBhY2thZ2VzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggcGFja2FnZSBkZXBlbmRlbmNpZXMgYXJlIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RQb29sOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9wb29sJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCByZWN5Y2xlcyB0aGUgUiBzZXNzaW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJvamVjdCBieSBkZWxldGluZ1xuICAgICAgICAgKiBhbGwgUiBvYmplY3RzIGZyb20gdGhlIHdvcmtzcGFjZSBhbmQgYWxsIGZpbGVzIGZyb20gdGhlIHdvcmtpbmcgZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBSZWN5Y2xpbmcgYSBwcm9qZWN0IGlzIGEgY29udmVuaWVudCBhbmQgZWZmaWNpZW50IGFsdGVybmF0aXZlIHRvIHN0YXJ0aW5nXG4gICAgICAgICAqIG92ZXIgYnkgY2xvc2luZyBhbiBleGlzdGluZyBwcm9qZWN0IGFuZCB0aGVuIGNyZWF0aW5nIGEgbmV3IHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdFJlY3ljbGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+cHJlc2VydmV3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgb2JqZWN0cyBpbiB0aGUgd29ya3NwYWNlIGFyZSBwcmVzZXJ2ZWQgb24gcmVjeWNsZTwvZGQ+XG4gICAgICAgICAqICAgIDxkdD5wcmVzZXJ2ZWRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBmaWxlcyBpbiB0aGUgd29ya2luZyBkaXJlY3RvcnkgYXJlIHByZXNlcnZlZCBvbiByZWN5Y2xlPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0UmVjeWNsZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvcmVjeWNsZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgbGlzdHMgYWxsIHByb2plY3RzIG93bmVkIGJ5IHRoZSBjdXJyZW50bHkgYXV0aGVudGljYXRlZCB1c2VyXG4gICAgICAgICAqIGFuZC9vciBhbGwgcHJvamVjdHMgc2hhcmVkIGJ5IG90aGVyIHVzZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBTaGFyZWQgcHJvamVjdHMgYXJlIGF2YWlsYWJsZSBhcyByZWFkLW9ubHkgcHJvamVjdHMgdG8gdGhlIGNhbGxlci4gVGhlXG4gICAgICAgICAqIHNoYXJlZCBvciBwcml2YXRlIG5hdHVyZSBvZiBhIHByb2plY3QgY2FuIGJlIGNvbnRyb2xsZWQgdXNpbmcgdGhlXG4gICAgICAgICAqIDxjb2RlPi9yL3Byb2plY3QvYWJvdXQvdXBkYXRlPC9jb2RlPiBjYWxsXG4gICAgICAgICAqIDxhIGhyZWY9XCIjbWV0aG9kX3Byb2plY3RBYm91dFVwZGF0ZVwiPnByb2plY3RBYm91dFVwZGF0ZTwvYT4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdExpc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5zaGFyZWRwcm9qZWN0c2Fsc288L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgd2hlbiB0cnVlLCB0aGUgcHJvamVjdCByZXNwb25zZSBsaXN0IGNvbnRhaW5zIHRoZSBjYWxsZXInc1xuICAgICAgICAgKiAgICAgICBwcm9qZWN0cyBwbHVzIHByb2plY3RzIHNoYXJlZCBieSBvdGhlciB1c2Vyc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c2hhcmVkcHJvamVjdHNvbmx5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHdoZW4gdHJ1ZSwgdGhlIHByb2plY3QgcmVzcG9uc2UgbGlzdCBjb250YWlucyBvbmx5XG4gICAgICAgICAqICAgICAgIHByb2plY3RzIHNoYXJlZCBieSBvdGhlciB1c2VycyBhbmQgbm90IHRoZSB1c2VycydzIG93biBwcm9qZWN0c1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aXNvcmRlcmVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHdoZW4gdHJ1ZSwgdGhlIHByb2plY3QgcmVzcG9uc2UgbGlzdCBpcyBvcmRlcmVkIGluIGFcbiAgICAgICAgICogICAgICAgbW9zdC1yZWNlbnRseS1tb2RpZmllZCBmaXJzdCBvcmRlci4gT3RoZXJ3aXNlIHRoZSBsaXN0IGlzIG9yZGVyZWRcbiAgICAgICAgICogICAgICAgY2hyb25vbG9naWNhbGx5IGJ5IGNyZWF0aW9uIGRhdGVcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0TGlzdDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvbGlzdCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHBpbmdzIHRoZSBzcGVjaWZpZWQgcHJvamVjdCB0byBkZXRlcm1pbmUgaWYgdGhlIHByb2plY3QgaXMgbGl2ZVxuICAgICAgICAgKiBvbiB0aGUgUmV2b0RlcGxveVIgZ3JpZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0UGluZ1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqICA8ZGw+XG4gICAgICAgICAqICAgICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqICA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RQaW5nOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9waW5nJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCByZXRyaWV2ZXMgYSBzZXQgb2YgcHJvcGVydGllcyB0aGF0IGRlc2NyaWJlIHRoZSBzcGVjaWZpZWRcbiAgICAgICAgICogcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0QWJvdXRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0QWJvdXQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2Fib3V0JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCB1cGRhdGVzIGEgc2V0IG9mIHByb3BlcnRpZXMgdGhhdCBkZXNjcmliZSB0aGUgc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdEFib3V0VXBkYXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBwcm9qZWN0IGRlc2NyaXB0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmxvbmdkZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgcHJvamVjdCBsb25nIGRlc2NyaXB0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNoYXJlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgc3BlY2lmaWVzIHRoYXQgdGhlIHByb2plY3QgaXMgYVxuICAgICAgICAgKiAgICAgICBzaGFyZWQgcHJvamVjdFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdGNvb2tpZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBjbGllbnQtYXBwbGljYXRpb24gc3BlY2lmaWMgcHJvamVjdCBjb29raWVcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdEFib3V0VXBkYXRlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9hYm91dC91cGRhdGUnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHNhdmVzIHRoZSBwZXJzaXN0ZW50IHN0YXRlIG9mIHRoZSBwcm9qZWN0IGluZGljYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHNldCBvZiBkcm9wIHBhcmFtZXRlcnMgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc2VsZWN0aXZlbHkgZHJvcCBhc3BlY3RzLFxuICAgICAgICAgKiBzdWNoIGFzIHdvcmtzcGFjZSwgd29ya2luZyBkaXJlY3RvcnksIG9yIGV4ZWN1dGlvbiBoaXN0b3J5IG9mIHRoZSBwcm9qZWN0XG4gICAgICAgICAqIHN0YXRlIHdoZW4gc2F2aW5nLiBUaGUgZmx1c2hoaXN0b3J5IHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBwcmVzZXJ2ZVxuICAgICAgICAgKiB0aGUgcHJvamVjdCBleGVjdXRpb24gaGlzdG9yeSBpdHNlbGYgd2hpbGUgZGVzdHJveWluZyBhbGwgZ2VuZXJhdGVkIGNvbnNvbGVcbiAgICAgICAgICogb3V0cHV0IGFuZCByZXN1bHRzIGFzc29jaWF0ZWQgd2l0aCB0aGF0IGhpc3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdFNhdmVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgcHJvamVjdCBuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBwcm9qZWN0IGRlc2NyaXB0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmxvbmdkZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgcHJvamVjdCBsb25nIGRlc2NyaXB0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNoYXJlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHNwZWNpZmllcyB0aGUgcHJvamVjdCBpcyBhIHNoYXJlZCBwcm9qZWN0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByb2plY3Rjb29raWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBjbGllbnQtYXBwbGljYXRpb24gc3BlY2lmaWMgcHJvamVjdCBjb29raWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZHJvcHdvcmtzcGFjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0J3Mgd29ya3NwYWNlIGlzIGRyb3BwZWQgb24gc2F2ZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kcm9wZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QncyB3b3JraW5nIGRpcmVjdG9yeSBpcyBkcm9wcGVkIG9uIHNhdmU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZHJvcGhpc3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgcHJvamVjdCdzIGV4ZWN1dGlvbiBoaXN0b3J5IGlzIGRyb3BwZWQgb24gc2F2ZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5mbHVzaGhpc3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgcHJvamVjdCdzIGV4ZWN1dGlvbiBoaXN0b3J5IGlzIGZsdXNoZWQgb24gc2F2ZTwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdFNhdmU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L3NhdmUnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHNhdmVzIHRoZSBwZXJzaXN0ZW50IHN0YXRlIG9mIHRoZSBzcGVjaWZpZWQgcHJvamVjdCB0byBhIG5ld1xuICAgICAgICAgKiBwZXJzaXN0ZW50IHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBzZXQgb2YgZHJvcCBwYXJhbWV0ZXJzIGFsbG93cyB0aGUgY2FsbGVyIHRvIHNlbGVjdGl2ZWx5IGRyb3AgYXNwZWN0cyxcbiAgICAgICAgICogc3VjaCBhcyB3b3Jrc3BhY2UsIHdvcmtpbmcgZGlyZWN0b3J5LCBvciBleGVjdXRpb24gaGlzdG9yeSBvZiB0aGUgcHJvamVjdFxuICAgICAgICAgKiBzdGF0ZSB3aGVuIHNhdmluZyB0byB0aGUgbmV3IHByb2plY3QuIFRoZSBmbHVzaGhpc3RvcnkgcGFyYW1ldGVyIGFsbG93cyB0aGVcbiAgICAgICAgICogY2FsbGVyIHRvIHByZXNlcnZlIHRoZSBwcm9qZWN0IGV4ZWN1dGlvbiBoaXN0b3J5IGl0c2VsZiBmb3IgdGhlIG5ldyBwcm9qZWN0XG4gICAgICAgICAqIHdoaWxlIGRyb3BwaW5nIGFsbCBnZW5lcmF0ZWQgY29uc29sZSBvdXRwdXQgYW5kIHJlc3VsdHMgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgICAgICAgKiBvcmlnaW5hbCBoaXN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RTYXZlYXNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIG5ldyBwcm9qZWN0IG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIG5ldyBwcm9qZWN0IGRlc2NyaXB0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmxvbmdkZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgbmV3IHByb2plY3QgbG9uZyBkZXNjcmlwdGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zaGFyZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCBzcGVjaWZpZXMgdGhlIG5ldyBwcm9qZWN0IGlzIGEgc2hhcmVkIHByb2plY3Q8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdGNvb2tpZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIGNsaWVudC1hcHBsaWNhdGlvbiBzcGVjaWZpYyBjb29raWUgZm9yIHRoZSBuZXcgcHJvamVjdDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kcm9wd29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGNvbnRlbnQgb2YgdGhlIG9yaWdpbmFsIHByb2plY3QncyB3b3Jrc3BhY2UgaXMgZHJvcHBlZCB3aGVuIHNhdmluZyB0byB0aGUgbmV3IHByb2plY3Q8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZHJvcGRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0J3Mgd29ya2luZyBkaXJlY3RvcnkgaXMgZHJvcHBlZCB3aGVuIHNhdmluZyB0byB0aGUgbmV3IHByb2plY3Q8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZHJvcGhpc3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgcHJvamVjdCdzIGV4ZWN1dGlvbiBoaXN0b3J5IGlzIGRyb3BwZWQgd2hlbiBzYXZpbmcgdG8gdGhlIG5ldyBwcm9qZWN0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZsdXNoaGlzdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBwcm9qZWN0J3MgZXhlY3V0aW9uIGhpc3RvcnkgaXMgZmx1c2hlZCB3aGVuIHNhdmluZyB0byB0aGUgbmV3IHByb2plY3Q8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RTYXZlYXM6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L3NhdmVhcycsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgY2xvc2VzIHRoZSBwcm9qZWN0IGluZGljYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQ2xvc2luZyBhIGxpdmUgcHJvamVjdCByZWxlYXNlcyBhbGwgcmVzb3VyY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJvamVjdFxuICAgICAgICAgKiBvbiB0aGUgUmV2b0RlcGxveVIgZ3JpZC4gSWYgdGhlIHNwZWNpZmllZCBwcm9qZWN0IGlzIGEgcGVyc2lzdGVudCBwcm9qZWN0XG4gICAgICAgICAqIHRoZW4gdGhlIGRlZmF1bHQgYXV0b3NhdmUgc2VtYW50aWNzIHdpbGwgY2F1c2UgdGhlIHByb2plY3QgdG8gYmUgc2F2ZWRcbiAgICAgICAgICogYXV0b21hdGljYWxseS4gVGhlIGNhbGxlciBjYW4gb3ZlcnJpZGUgdGhhdCBkZWZhdWx0IGJlaGF2aW9yIHVzaW5nIHRoZVxuICAgICAgICAgKiBkaXNhYmxlYXV0b3NhdmUgcGFyYW1ldGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgc2V0IG9mIGRyb3AgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIHNlbGVjdGl2ZWx5IGRyb3AgYXNwZWN0cyxcbiAgICAgICAgICogc3VjaCBhcyB3b3Jrc3BhY2UsIHdvcmtpbmcgZGlyZWN0b3J5LCBvciBleGVjdXRpb24gaGlzdG9yeSwgb2YgdGhlIHByb2plY3RcbiAgICAgICAgICogc3RhdGUgd2hlbiBjbG9zaW5nLiBUaGUgZmx1c2hoaXN0b3J5IHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0b1xuICAgICAgICAgKiBwcmVzZXJ2ZSB0aGUgcHJvamVjdCBleGVjdXRpb24gaGlzdG9yeSBpdHNlbGYgd2hpbGUgZGVzdHJveWluZyBhbGxcbiAgICAgICAgICogZ2VuZXJhdGVkIGNvbnNvbGUgb3V0cHV0IGFuZCByZXN1bHRzIGFzc29jaWF0ZWQgd2l0aCB0aGF0IGhpc3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdENsb3NlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRpc2FibGVhdXRvc2F2ZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBkZWZhdWx0IGF1dG9zYXZlIHNlbWFudGljcyBmb3IgcGVyc2lzdGVudCBwcm9qZWN0cyBhcmUgZGlzYWJsZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdGNvb2tpZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIGNsaWVudC1hcHBsaWNhdGlvbiBzcGVjaWZpYyBwcm9qZWN0IGNvb2tpZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kcm9wd29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QncyB3b3Jrc3BhY2UgaXMgZHJvcHBlZCBvbiBjbG9zZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kcm9wZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QncyB3b3JraW5nIGRpcmVjdG9yeSBpcyBkcm9wcGVkIG9uIGNsb3NlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRyb3BoaXN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIHByb2plY3QncyBleGVjdXRpb24gaGlzdG9yeSBpcyBkcm9wcGVkIG9uIGNsb3NlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZsdXNoaGlzdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBwcm9qZWN0J3MgZXhlY3V0aW9uIGhpc3RvcnkgaXMgZmx1c2hlZCBvbiBjbG9zZTwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdENsb3NlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9jbG9zZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZ3JhbnRzIGF1dGhvcnNoaXAgb2YgdGhlIHNwZWNpZmllZCBwcm9qZWN0IHRvIG90aGVyIHVzZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RHcmFudFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmV3YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICBzcGVjaWZpZXMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB1c2VybmFtZXMgaW5kaWNhdGluZyB0aGUgbmV3XG4gICAgICAgICAqICAgICAgIG93bmVyc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RHcmFudDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZ3JhbnQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGltcG9ydHMgdGhlIHNwZWNpZmllZCBwcm9qZWN0IGFyY2hpdmUgYXMgYSBuZXcgcGVyc2lzdGVudFxuICAgICAgICAgKiBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RJbXBvcnRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5uYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgcHJvamVjdCBhcmNoaXZlIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4uLi5maWxlIGNvbnRlbnQuLi48L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIGEgZGVzY3JpcHRpb24gZm9yIHRoZSBuZXdseSBpbXBvcnRlZCBwcm9qZWN0XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdEltcG9ydDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uZmlnLmZvcm1hdCA9IFwidGV4dFwiO1xuICAgICAgICAgICAgdmFyIGlvQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IGNvbmZpZyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNvbmZpZy5mb3JtSWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiBjYWxsYmFja1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2ltcG9ydCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGV4cG9ydHMgYSBjb21wcmVzc2VkIGFyY2hpdmUgZmlsZSBmb3IgdGhlIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgc2V0IG9mIGRyb3AgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIHNlbGVjdGl2ZWx5IGRyb3AgYXNwZWN0cyxcbiAgICAgICAgICogc3VjaCBhcyB3b3Jrc3BhY2UsIHdvcmtpbmcgZGlyZWN0b3J5LCBvciBleGVjdXRpb24gaGlzdG9yeSBvZiB0aGUgcHJvamVjdFxuICAgICAgICAgKiBzdGF0ZSB3aGVuIGdlbmVyYXRpbmcgdGhlIGFyY2hpdmUuIFRoZSBmbHVzaGhpc3RvcnkgcGFyYW1ldGVyIGFsbG93cyB0aGVcbiAgICAgICAgICogY2FsbGVyIHRvIHByZXNlcnZlIHRoZSBwcm9qZWN0IGV4ZWN1dGlvbiBoaXN0b3J5IGl0c2VsZiB3aGlsZSBleGNsdWRpbmcgYWxsXG4gICAgICAgICAqIGdlbmVyYXRlZCBjb25zb2xlIG91dHB1dCBhbmQgcmVzdWx0cyBhc3NvY2lhdGVkIHdpdGggdGhhdCBoaXN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RFeHBvcnRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZHJvcHdvcmtzcGFjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0J3Mgd29ya3NwYWNlIGlzIGRyb3BwZWQgb24gZXhwb3J0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRyb3BkaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdCdzIHdvcmtpbmcgZGlyZWN0b3J5IGlzIGRyb3BwZWQgb24gZXhwb3J0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRyb3BoaXN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIHByb2plY3QncyBleGVjdXRpb24gaGlzdG9yeSBpcyBkcm9wcGVkIG9uIGV4cG9ydDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5mbHVzaGhpc3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgcHJvamVjdCdzIGV4ZWN1dGlvbiBoaXN0b3J5IGlzIGZsdXNoZWQgb24gZXhwb3J0PC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RXhwb3J0OiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9leHBvcnQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGRlbGV0ZXMgdGhlIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKiBEZWxldGluZyBhIHByb2plY3QgaXMgYSBwZXJtYW5lbnQgb3BlcmF0aW9uIHRoYXQgY2Fubm90IGJlIHVuZG9uZSBvclxuICAgICAgICAgKiByZWNvdmVyZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdERlbGV0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdERlbGV0ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZGVsZXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBQcm9qZWN0IEV4ZWN1dGlvbiBBUElzXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGV4ZWN1dGVzIGEgYmxvY2sgb2YgUiBjb2RlIG9uIHRoZSBSIHNlc3Npb24gaWRlbnRpZmllZCBieSB0aGVcbiAgICAgICAgICogcHJvamVjdCBwYXJhbWV0ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIFBsZWFzZSBub3RlIHRoZSBmb2xsb3dpbmcgcHJlIGFuZCBwb3N0IGV4ZWN1dGlvbiBwYXJhbWV0ZXJzOlxuICAgICAgICAgKlxuICAgICAgICAgKiA8c3Ryb25nPlByZS1leGVjdXRpb24gcGFyYW1ldGVyczo8L3N0cm9uZz5cbiAgICAgICAgICpcbiAgICAgICAgICogPG9sPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBpbnB1dHMgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHBhc3MgUmV2b0RlcGxveVItZW5jb2RlZFxuICAgICAgICAgKiAgICAgICBSIG9iamVjdCB2YWx1ZXMgYXMgaW5wdXRzLiBUaGVzZSBpbnB1dHMgYXJlIHR1cm5lZCBpbnRvIFIgb2JqZWN0c1xuICAgICAgICAgKiAgICAgICBpbiB0aGUgd29ya3NwYWNlIGJlZm9yZSB0aGUgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgcHJlbG9hZGZpbGUgcGFyYW1ldGVycyBhbGxvd3MgdGhlIGNhbGxlciB0byBsb2FkIG9uZSBvciBtb3JlXG4gICAgICAgICAqICAgICAgIGZpbGVzIGZyb20gdGhlIHJlcG9zaXRvcnkgaW50byB0aGUgd29ya2luZyBkaXJlY3RvcnkgYmVmb3JlIHRoZVxuICAgICAgICAgKiAgICAgICBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBwcmVsb2Fkb2JqZWN0IHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBsb2FkIG9uZSBvciBtb3JlXG4gICAgICAgICAqICAgICAgIGJpbmFyeSBSIG9iamVjdHMgKC5yRGF0YSkgZnJvbSB0aGUgcmVwb3NpdG9yeSBpbnRvIHRoZSB3b3Jrc3BhY2VcbiAgICAgICAgICogICAgICAgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBhZG9wdCBwYXJhbWV0ZXJzIGFsbG93IHRoZSBjYWxsZXIgdG8gbG9hZCBhIHByZS1leGlzdGluZ1xuICAgICAgICAgKiAgICAgICBwcm9qZWN0IHdvcmtzcGFjZSwgcHJvamVjdCB3b3JraW5nIGRpcmVjdG9yeSBhbmQvb3IgcHJvamVjdCBwYWNrYWdlXG4gICAgICAgICAqICAgICAgIGRlcGVuZGVuY2llcyBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqIDwvb2w+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+UG9zdC1leGVjdXRpb24gcGFyYW1ldGVyczo8L3N0cm9uZz5cbiAgICAgICAgICpcbiAgICAgICAgICogPG9sPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSByb2JqZWN0cyBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIG9iamVjdCBuYW1lcyB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgYXMgUmV2b0RlcGxveVItZW5jb2RlZCBSXG4gICAgICAgICAqICAgICAgIG9iamVjdHMgb24gdGhlIHJlc3BvbnNlIG1hcmt1cCBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVmaWxlIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciBzcGVjaWZ5IGEgY29tbWEtc2VwYXJhdGVkXG4gICAgICAgICAqICAgICAgIGxpc3Qgb2Ygd29ya2luZyBkaXJlY3RvcnkgZmlsZXMgdG8gYmUgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyXG4gICAgICAgICAqICAgICAgIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZW9iamVjdCBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIHdvcmtzcGFjZSBvYmplY3RzIHRvIGJlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGVcbiAgICAgICAgICogICAgICAgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmV3b3Jrc3BhY2UgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHN0b3JlIHRoZSBlbnRpcmVcbiAgICAgICAgICogICAgICAgd29ya3NwYWNlIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZWRpcmVjdG9yeSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBhIHRhcmdldFxuICAgICAgICAgKiAgICAgICByZXBvc2l0b3J5IGRpcmVjdG9yeSBmb3Igc3RvcmVkIGZpbGVzIGFuZCBvYmplY3RzIGFmdGVyIHRoZSBleGVjdXRpb25cbiAgICAgICAgICogICAgICAgY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZW5ld3ZlcnNpb24gcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIGNyZWF0ZSBuZXdcbiAgICAgICAgICogICAgICAgdmVyc2lvbnMgb2YgZWFjaCBzdG9yZWQgZmlsZSBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uXG4gICAgICAgICAqICAgICAgIGNvbXBsZXRlcy4gQnkgZGVmYXVsdCwgc3RvcmVkIGZpbGVzIG92ZXJ3cml0ZSBhbnkgcHJlLWV4aXN0aW5nIGZpbGVcbiAgICAgICAgICogICAgICAgYnkgdGhlIHNhbWUgbmFtZS5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVwdWJsaWMgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIGFzc2lnbiBwdWJsaWMgYWNjZXNzXG4gICAgICAgICAqICAgICAgIHRvIGVhY2ggc3RvcmVkIGZpbGUgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqIDwvb2w+XG4gICAgICAgICAqXG4gICAgICAgICAqICA8c3Ryb25nPlNvbWUga2V5IGRhdGEgaW5kaWNhdGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXAgb24gdGhpcyBjYWxsOjwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5jb2RlIC0gaW5kaWNhdGVzIHRoZSBjb2RlIHRoYXQgaGFzIGJlZW4gZXhlY3V0ZWQ8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIGNvbnNvbGUgLSBpbmRpY2F0ZXMgdGhlIGNvbnNvbGUgb3V0cHV0IHJlc3VsdGluZyBmcm9tIHRoZSBjb2RlXG4gICAgICAgICAqICAgICAgIGV4ZWN1dGlvblxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIHJlc3VsdHMgLSBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBSIGdyYXBoaWNzXG4gICAgICAgICAqICAgICAgIGRldmljZVxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIGFydGlmYWN0cyAtIGluZGljYXRlcyB0aGUgbGlzdCBvZiBmaWxlcyBnZW5lcmF0ZWQgb3IgbW9kaWZpZWQgaW4gdGhlXG4gICAgICAgICAqICAgICAgIHdvcmtpbmcgZGlyZWN0b3J5XG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgb2JqZWN0cyAtICBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgUiBvYmplY3RzIHJldHVybmVkIGZyb20gdGhlXG4gICAgICAgICAqICAgICAgIHdvcmtzcGFjZVxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIGZpbGVzIC0gaW5kaWNhdGVzIHRoZSBsaXN0IG9mIGZpbGVzIGFuZCBvYmplY3RzIHN0b3JlZCBpbiB0aGVcbiAgICAgICAgICogICAgICAgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlc1xuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIGludGVycnVwdGVkIC0gaW5kaWNhdGVzIHRoZSBpbnRlcnJ1cHRlZCBzdGF0dXMgb2YgZXhlY3V0aW9uXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgZXJyb3IgLSBvbiBmYWlsdXJlLCBpbmRpY2F0ZXMgdGhlIHJlYXNvbiBmb3IgZmFpbHVyZVxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIGVycm9yQ29kZSAtIG9uIGZhaWx1cmUsIGluZGljYXRlcyB0aGUgZXJyb3IgY29kZSBmb3IgZmFpbHVyZVxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RFeGVjdXRlQ29kZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Y29kZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIGJsb2NrIG9mIFIgY29kZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5pbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBSZXZvRGVwbG95Ui1lbmNvZGVkIHNjcmlwdCBpbnB1dHM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Y3N2aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcHJpbWl0aXZlIG5hbWUvdmFsdWUgaW5wdXRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxlYXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycywgYXV0aG9yLXBlci1wcmVsb2FkZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZGZpbGV2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsIHZlcnNpb24tcGVyLXByZWxvYWRmaWxlbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnkgb2JqZWN0ICguckRhdGEpIGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycywgYXV0aG9yLXBlci1wcmVsb2Fkb2JqZWN0bmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1vYmplY3QtcHJlbG9hZG9iamVjdG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHR3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCB3b3Jrc3BhY2UgaXMgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hZG9wdGRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlkZW50aWZpZXMgcHJvamVjdCBmcm9tIHdoaWNoIGRpcmVjdG9yeSBpcyB0byBiZSBhZG9wdGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFkb3B0cGFja2FnZXM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCBwYWNrYWdlIGRlcGVuZGVuY2llcyBhcmUgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD50YWc8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSB0YWcgdGhhdCBsYWJlbHMgdGhlIGV4ZWN1dGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5lY2hvb2ZmPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSBSIGNvbW1hbmRzIHdpbGwgbm90IGFwcGVhciBpbiB0aGUgY29uc29sZSBvdXRwdXQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Y29uc29sZW9mZjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUgY29uc29sZSBvdXRwdXQgaXMgbm90IHJldHVybmVkIGluIHRoZSByZXNwb25zZSBtYXJrdXA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5ncmFwaGljczwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHByZWZlcnJlZCBSIGdyYXBoaWNzIGRldmljZSBmb3IgZXhlY3V0aW9uOiBwbmcgb3Igc3ZnPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+Z3JhcGhpY3N3aWR0aDwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHByZWZlcnJlZCB3aWR0aCBmb3IgUiBncmFwaGljcyBkZXZpY2UgaW1hZ2VzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+Z3JhcGhpY3NoZWlnaHQ8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgaGVpZ2h0IGZvciBSIGdyYXBoaWNzIGRldmljZSBpbWFnZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5yb2JqZWN0czwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygb2JqZWN0cyBmb3IgcmV0cmlldmFsIGZvbGxvd2luZyB0aGUgZXhlY3V0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+c3RvcmVmaWxlPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB3b3JraW5nIGRpcmVjdG9yeSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5zdG9yZW9iamVjdDwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygd29ya3NwYWNlIG9iamVjdCBuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnN0b3Jld29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBmaWxlbmFtZSAoLnJEYXRhKSB3aGVyZSB3b3Jrc3BhY2UgY29udGVudHMgd2lsbCBiZSBzYXZlZCBpbiB0aGUgcmVwb3NpdG9yeTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnN0b3JlbmV3dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIGVuc3VyZXMgZWFjaCBmaWxlIHN0b3JlZCBpblxuICAgICAgICAgKiAgICByZXBvc2l0b3J5IHJlc3VsdHMgaW4gbmV3IHZlcnNpb24gYmVpbmcgY3JlYXRlZCBpZiBuZWVkZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5zdG9yZXB1YmxpYzwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIHB1Ymxpc2hlcyBlYWNoIGZpbGUgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+aW5maW5pdHk8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBjdXN0b20gdmFsdWUgZm9yIEluZmluaXR5IGFwcGVhcmluZyBpbiBSIG9iamVjdFxuICAgICAgICAgKiAgICBkYXRhIHJldHVybmVkIG9uIGNhbGwsIG90aGVyd2lzZSBJbmZpbml0eSBpcyByZXByZXNlbnRlZCBieSA8Y29kZT4weDdmZjAwMDAwMDAwMDAwMDBMPC9jb2RlPlxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5uYW48L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBjdXN0b20gdmFsdWUgZm9yIE5hTiBhcHBlYXJpbmcgaW4gUiBvYmplY3QgZGF0YVxuICAgICAgICAgKiAgICByZXR1cm5lZCBvbiBjYWxsLCBvdGhlcndpc2UgTmFOIGlzIHJlcHJlc2VudGVkIGJ5IDxjb2RlPm51bGw8L2NvZGU+PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+ZW5jb2RlRGF0YUZyYW1lUHJpbWl0aXZlQXNWZWN0b3I8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBkYXRhLmZyYW1lIHByaW1pdGl2ZXMgYXJlIGVuY29kZWQgdmVjdG9ycyBpbiBSIG9iamVjdCBkYXRhIHJldHVybmVkIG9uIGNhbGw8L2RkPlxuICAgICAgICAgKiAgPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RXhlY3V0ZUNvZGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZXhlY3V0ZS9jb2RlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZXhlY3V0ZXMgZXhlY3V0ZXMgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdHMgb3IgZXh0ZXJuYWwgc2NyaXB0c1xuICAgICAgICAgKiBvbiB0aGUgUiBzZXNzaW9uIGlkZW50aWZpZWQgYnkgdGhlIHByb2plY3QgcGFyYW1ldGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBleGVjdXRlIGEgc2luZ2xlIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHQgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGVcbiAgICAgICAgICogcGFyYW1ldGVyIHZhbHVlcyBmb3IgZmlsZW5hbWUsIGF1dGhvciBhbmQgb3B0aW9uYWxseSB2ZXJzaW9uLiBUbyBleGVjdXRlXG4gICAgICAgICAqIGEgY2hhaW4gb2YgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdHMgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGUgYVxuICAgICAgICAgKiBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2YWx1ZXMgb24gdGhlIGZpbGVuYW1lICwgYXV0aG9yIGFuZCBvcHRpb25hbGx5XG4gICAgICAgICAqIHZlcnNpb24gcGFyYW1ldGVycy5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gZXhlY3V0ZSBhIHNpbmdsZSBleHRlcm5hbCBzY3JpcHQgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGUgYSB2YWxpZCBVUkwgb3JcbiAgICAgICAgICogZmlsZSBwYXRoIHVzaW5nIHRoZSBleHRlcm5hbHNvdXJjZSBwYXJhbWV0ZXIuIFRvIGV4ZWN1dGUgYSBjaGFpbiBvZlxuICAgICAgICAgKiBleHRlcm5hbCBzY3JpcHRzIHRoZSBjYWxsZXIgbXVzdCBwcm92aWRlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmFsdWVzXG4gICAgICAgICAqIG9uIHRoZSBleHRlcm5hbHNvdXJjZSBwYXJhbWV0ZXIuIE5vdGUsIHRvIGV4ZWN1dGUgYW4gZXh0ZXJuYWwgc2NyaXB0IHRoZVxuICAgICAgICAgKiBjYWxsZXIgbXVzdCBoYXZlIFBPV0VSX1VTRVIgcHJpdmlsZWdlcy5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90ZTogQSBjaGFpbmVkIGV4ZWN1dGlvbiBleGVjdXRlcyBlYWNoIG9mIHRoZSBzY3JpcHRzIGlkZW50aWZpZWQgb24gdGhlXG4gICAgICAgICAqIGNhbGwgaW4gYSBzZXF1ZW50aWFsIGZhc2hpb24gb24gdGhlIFIgc2Vzc2lvbiwgd2l0aCBleGVjdXRpb24gb2NjdXJpbmcgaW5cbiAgICAgICAgICogdGhlIG9yZGVyIHNwZWNpZmllZCBvbiB0aGUgcGFyYW1ldGVyIGxpc3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIFBsZWFzZSBub3QgdGhlIGZvbGxvd2luZyBwcmUgYW5kIHBvc3QgZXhlY3V0aW9uIHBhcmFtZXRlcnM6XG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+UHJlLWV4ZWN1dGlvbiBwYXJhbWV0ZXJzOjwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIGlucHV0cyBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gcGFzcyBSZXZvRGVwbG95Ui1lbmNvZGVkXG4gICAgICAgICAqICAgICAgIFIgb2JqZWN0IHZhbHVlcyBhcyBpbnB1dHMuIFRoZXNlIGlucHV0cyBhcmUgdHVybmVkIGludG8gUiBvYmplY3RzXG4gICAgICAgICAqICAgICAgIGluIHRoZSB3b3Jrc3BhY2UgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBwcmVsb2FkZmlsZSBwYXJhbWV0ZXJzIGFsbG93cyB0aGUgY2FsbGVyIHRvIGxvYWQgb25lIG9yIG1vcmVcbiAgICAgICAgICogICAgICAgZmlsZXMgZnJvbSB0aGUgcmVwb3NpdG9yeSBpbnRvIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBiZWZvcmUgdGhlXG4gICAgICAgICAqICAgICAgIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHByZWxvYWRvYmplY3QgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIGxvYWQgb25lIG9yIG1vcmVcbiAgICAgICAgICogICAgICAgYmluYXJ5IFIgb2JqZWN0cyAoLnJEYXRhKSBmcm9tIHRoZSByZXBvc2l0b3J5IGludG8gdGhlIHdvcmtzcGFjZVxuICAgICAgICAgKiAgICAgICBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIGFkb3B0IHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBsb2FkIGEgcHJlLWV4aXN0aW5nXG4gICAgICAgICAqICAgICAgIHByb2plY3Qgd29ya3NwYWNlLCBwcm9qZWN0IHdvcmtpbmcgZGlyZWN0b3J5IGFuZC9vciBwcm9qZWN0IHBhY2thZ2VcbiAgICAgICAgICogICAgICAgZGVwZW5kZW5jaWVzIGJlZm9yZSB0aGUgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogPC9vbD5cbiAgICAgICAgICpcbiAgICAgICAgICogPHN0cm9uZz5Qb3N0LWV4ZWN1dGlvbiBwYXJhbWV0ZXJzOjwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHJvYmplY3RzIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBzcGVjaWZ5IGEgY29tbWEtc2VwYXJhdGVkXG4gICAgICAgICAqICAgICAgIGxpc3Qgb2Ygb2JqZWN0IG5hbWVzIHRoYXQgd2lsbCBiZSByZXR1cm5lZCBhcyBSZXZvRGVwbG95Ui1lbmNvZGVkIFJcbiAgICAgICAgICogICAgICAgb2JqZWN0cyBvbiB0aGUgcmVzcG9uc2UgbWFya3VwIGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZWZpbGUgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHNwZWNpZnkgYSBjb21tYS1zZXBhcmF0ZWRcbiAgICAgICAgICogICAgICAgbGlzdCBvZiB3b3JraW5nIGRpcmVjdG9yeSBmaWxlcyB0byBiZSBzdG9yZWQgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXJcbiAgICAgICAgICogICAgICAgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3Jlb2JqZWN0IHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciBzcGVjaWZ5IGEgY29tbWEtc2VwYXJhdGVkXG4gICAgICAgICAqICAgICAgIGxpc3Qgb2Ygd29ya3NwYWNlIG9iamVjdHMgdG8gYmUgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZVxuICAgICAgICAgKiAgICAgICBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZXdvcmtzcGFjZSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc3RvcmUgdGhlIGVudGlyZVxuICAgICAgICAgKiAgICAgICB3b3Jrc3BhY2UgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlZGlyZWN0b3J5IHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBzcGVjaWZ5IGEgdGFyZ2V0XG4gICAgICAgICAqICAgICAgIHJlcG9zaXRvcnkgZGlyZWN0b3J5IGZvciBzdG9yZWQgZmlsZXMgYW5kIG9iamVjdHMgYWZ0ZXIgdGhlIGV4ZWN1dGlvblxuICAgICAgICAgKiAgICAgICBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlbmV3dmVyc2lvbiBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gY3JlYXRlIG5ld1xuICAgICAgICAgKiAgICAgICB2ZXJzaW9ucyBvZiBlYWNoIHN0b3JlZCBmaWxlIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb25cbiAgICAgICAgICogICAgICAgY29tcGxldGVzLiBCeSBkZWZhdWx0LCBzdG9yZWQgZmlsZXMgb3ZlcndyaXRlIGFueSBwcmUtZXhpc3RpbmcgZmlsZVxuICAgICAgICAgKiAgICAgICBieSB0aGUgc2FtZSBuYW1lLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZXB1YmxpYyBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gYXNzaWduIHB1YmxpYyBhY2Nlc3NcbiAgICAgICAgICogICAgICAgdG8gZWFjaCBzdG9yZWQgZmlsZSBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogPC9vbD5cbiAgICAgICAgICpcbiAgICAgICAgICogPHN0cm9uZz5cbiAgICAgICAgICogICAgU29tZSBvZiB0aGUga2V5IGRhdGEgaW5kaWNhdGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXAgb24gdGhpcyBjYWxsXG4gICAgICAgICAqICAgIGluY2x1ZGU6XG4gICAgICAgICAqIDwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgY29uc29sZSAtIGluZGljYXRlcyB0aGUgY29uc29sZSBvdXRwdXQgcmVzdWx0aW5nIGZyb20gdGhlIHNjcmlwdFxuICAgICAgICAgKiAgICAgICBleGVjdXRpb25cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICByZXN1bHRzIC0gaW5kaWNhdGVzIHRoZSBsaXN0IG9mIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgUiBncmFwaGljc1xuICAgICAgICAgKiAgICAgICBkZXZpY2VcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBhcnRpZmFjdHMgLSBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgZmlsZXMgZ2VuZXJhdGVkIG9yIG1vZGlmaWVkIGluIHRoZVxuICAgICAgICAgKiAgICAgICB3b3JraW5nIGRpcmVjdG9yeVxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIG9iamVjdHMgLSBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgUiBvYmplY3RzIHJldHVybmVkIGZyb20gdGhlIHdvcmtzcGFjZVxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIGZpbGVzIC0gaW5kaWNhdGVzIHRoZSBsaXN0IG9mIGZpbGVzIGFuZCBvYmplY3RzIHN0b3JlZCBpbiB0aGVcbiAgICAgICAgICogICAgICAgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlc1xuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+aW50ZXJydXB0ZWQgLSBpbmRpY2F0ZXMgdGhlIGludGVycnVwdGVkIHN0YXR1cyBvZiBleGVjdXRpb248L2xpPlxuICAgICAgICAgKiAgICA8bGk+ZXJyb3IgLSBvbiBmYWlsdXJlLCBpbmRpY2F0ZXMgdGhlIHJlYXNvbiBmb3IgZmFpbHVyZTwvbGk+XG4gICAgICAgICAqICAgIDxsaT5lcnJvckNvZGUgLSBvbiBmYWlsdXJlLCBpbmRpY2F0ZXMgdGhlIGVycm9yIGNvZGUgZm9yIGZhaWx1cmU8L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RFeGVjdXRlU2NyaXB0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeS1tYW5hZ2VkIGRpcmVjdG9yaWVzIGZvclxuICAgICAgICAgKiAgICAgICBzY3JpcHRzLCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBhdXRob3ItcGVyLWZpbGVuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucywgdmVyc2lvbi1wZXItZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZXh0ZXJuYWxzb3VyY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBVUkxzIG9yIGZpbGUgcGF0aHMgdG8gZXh0ZXJuYWwgc2NyaXB0czwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5pbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBSZXZvRGVwbG95Ui1lbmNvZGVkIHNjcmlwdCBpbnB1dHM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Y3N2aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcHJpbWl0aXZlIG5hbWUvdmFsdWUgaW5wdXRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxlYXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycywgYXV0aG9yLXBlci1wcmVsb2FkZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZGZpbGV2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsIHZlcnNpb24tcGVyLXByZWxvYWRmaWxlbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnkgb2JqZWN0ICguckRhdGEpIGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycywgYXV0aG9yLXBlci1wcmVsb2Fkb2JqZWN0bmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1vYmplY3QtcHJlbG9hZG9iamVjdG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHR3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCB3b3Jrc3BhY2UgaXMgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hZG9wdGRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlkZW50aWZpZXMgcHJvamVjdCBmcm9tIHdoaWNoIGRpcmVjdG9yeSBpcyB0byBiZSBhZG9wdGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGRkPmFkb3B0cGFja2FnZXM8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCBwYWNrYWdlIGRlcGVuZGVuY2llcyBhcmUgdG8gYmUgYWRvcHRlZDwvZHQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD50YWc8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSB0YWcgdGhhdCBsYWJlbHMgdGhlIGV4ZWN1dGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5lY2hvb2ZmPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSBSIGNvbW1hbmRzIHdpbGwgbm90IGFwcGVhciBpbiB0aGUgY29uc29sZSBvdXRwdXQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Z3JhcGhpY3M8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgcHJlZmVycmVkIFIgZ3JhcGhpY3MgZGV2aWNlIGZvciBleGVjdXRpb246IHBuZyBvciBzdmc8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Z3JhcGhpY3N3aWR0aDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgd2lkdGggZm9yIFIgZ3JhcGhpY3MgZGV2aWNlIGltYWdlczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5ncmFwaGljc2hlaWdodDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgaGVpZ2h0IGZvciBSIGdyYXBoaWNzIGRldmljZSBpbWFnZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cm9iamVjdHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBvYmplY3RzIGZvciByZXRyaWV2YWwgZm9sbG93aW5nIHRoZSBleGVjdXRpb248L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmVmaWxlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygd29ya2luZyBkaXJlY3RvcnkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3Jlb2JqZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygd29ya3NwYWNlIG9iamVjdCBuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZXdvcmtzcGFjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGZpbGVuYW1lICguckRhdGEpIHdoZXJlIHdvcmtzcGFjZSBjb250ZW50cyB3aWxsIGJlIHNhdmVkIGluIHRoZSByZXBvc2l0b3J5PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3JlbmV3dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBlbnN1cmVzIGVhY2ggZmlsZSBzdG9yZWQgaW4gcmVwb3NpdG9yeSByZXN1bHRzIGluIG5ldyB2ZXJzaW9uIGJlaW5nIGNyZWF0ZWQgaWYgbmVlZGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3JlcHVibGljPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIHB1Ymxpc2hlcyBlYWNoIGZpbGUgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmluZmluaXR5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGN1c3RvbSB2YWx1ZSBmb3IgSW5maW5pdHkgYXBwZWFyaW5nIGluIFIgb2JqZWN0IGRhdGEgcmV0dXJuZWQgb24gY2FsbCwgb3RoZXJ3aXNlIEluZmluaXR5IGlzIHJlcHJlc2VudGVkIGJ5IDxjb2RlPjB4N2ZmMDAwMDAwMDAwMDAwMEw8L2NvZGU+PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5hbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBjdXN0b20gdmFsdWUgZm9yIE5hTiBhcHBlYXJpbmcgaW4gUiBvYmplY3QgZGF0YSByZXR1cm5lZCBvbiBjYWxsLCBvdGhlcndpc2UgTmFOIGlzIHJlcHJlc2VudGVkIGJ5IDxjb2RlPm51bGw8L2NvZGU+PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmVuY29kZURhdGFGcmFtZVByaW1pdGl2ZUFzVmVjdG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIGRhdGEuZnJhbWUgcHJpbWl0aXZlcyBhcmUgZW5jb2RlZCB2ZWN0b3JzIGluIFIgb2JqZWN0IGRhdGEgcmV0dXJuZWQgb24gY2FsbDwvZGQ+XG4gICAgICAgICAqICA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RFeGVjdXRlU2NyaXB0OiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9leGVjdXRlL3NjcmlwdCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgaW50ZXJydXB0cyB0aGUgY3VycmVudCBleGVjdXRpb24gb24gc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdEV4ZWN1dGVJbnRlcnJ1cHRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiAgPGRsPlxuICAgICAgICAgKiAgICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKiAgPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RXhlY3V0ZUludGVycnVwdDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZXhlY3V0ZS9pbnRlcnJ1cHQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHJldHJpZXZlcyB0aGUgUiBjb25zb2xlIG91dHB1dCBmb3IgdGhlIGxhdGVzdCBleGVjdXRpb24gb25cbiAgICAgICAgICogc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdEV4ZWN1dGVDb25zb2xlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqICA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RFeGVjdXRlQ29uc29sZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZXhlY3V0ZS9jb25zb2xlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCByZXRyaWV2ZXMgdGhlIGV4ZWN1dGlvbiBoaXN0b3J5IGZvciB0aGUgc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIFNvbWUgb2YgdGhlIGtleSBkYXRhIGluZGljYXRlZCBmb3IgZWFjaCBoaXN0b3J5IGl0ZW0gaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiBvbiB0aGlzIGNhbGwgaW5jbHVkZTpcbiAgICAgICAgICpcbiAgICAgICAgICogPG9sPlxuICAgICAgICAgKiAgPGxpPmNvZGUgLSBpbmRpY2F0ZXMgdGhlIGNvZGUgdGhhdCBoYXMgYmVlbiBleGVjdXRlZDwvbGk+XG4gICAgICAgICAqICA8bGk+Y29uc29sZSAtIGluZGljYXRlcyB0aGUgY29uc29sZSBvdXRwdXQgcmVzdWx0aW5nIGZyb20gdGhlIGNvZGUgZXhlY3V0aW9uPC9saT5cbiAgICAgICAgICogIDxsaT5yZXN1bHRzR2VuZXJhdGVkIC0gaW5kaWNhdGVzIHRoZSBudW1iZXIgb2YgZ2VuZXJhdGVkIHJlc3VsdHMgb24gdGhlIGV4ZWN1dGlvbjwvbGk+XG4gICAgICAgICAqICA8bGk+cmVzdWx0c0F2YWlsYWJsZSAtIGluZGljYXRlcyB0aGUgbnVtYmVyIG9mIGdlbmVyYXRlZCByZXN1bHRzIHN0aWxsIHN0b3JlZCBvbiB0aGUgZXhlY3V0aW9uPC9saT5cbiAgICAgICAgICogIDxsaT5yZXNvdXJjZVVzYWdlIC0gaW5kaWNhdGVzIHRoZSBjdXJyZW50IHN0b3JhZ2UgYnl0ZSBjb3VudCBmb3IgcmVzdWx0cyBvbiB0aGUgZXhlY3V0aW9uPC9saT5cbiAgICAgICAgICogIDxsaT5leGVjdXRpb24gLSBpbmRpY2F0ZXMgdGhlIGV4ZWN1dGlvbiBpZGVudGlmaWVyLCB3aGljaCBjYW4gdGhlbiBiZSB1c2VkIG9uIC9yL3Byb2plY3QvZXhlY3V0aW9uL3Jlc3VsdCBjYWxscyB0byByZXRyaWV2ZSBvciBtYW5hZ2UgcmVzdWx0czwvbGk+XG4gICAgICAgICAqICA8bGk+aW50ZXJydXB0ZWQgLSBpbmRpY2F0ZXMgdGhlIGludGVycnVwdGVkIHN0YXR1cyBvZiBleGVjdXRpb248L2xpPlxuICAgICAgICAgKiAgPGxpPmVycm9yIC0gb24gZmFpbHVyZSwgaW5kaWNhdGVzIHRoZSByZWFzb24gZm9yIGZhaWx1cmU8L2xpPlxuICAgICAgICAgKiAgPGxpPmVycm9yQ29kZSAtIG9uIGZhaWx1cmUsIGluZGljYXRlcyB0aGUgZXJyb3IgY29kZSBmb3IgZmFpbHVyZTwvbGk+XG4gICAgICAgICAqIDwvb2w+XG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdEV4ZWN1dGVIaXN0b3J5XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWx0ZXJkZXB0aDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIG1heCBudW1iZXIgb2YgZXhlY3V0aW9ucyB0byBiZSByZXR1cm5lZCBpbiB0aGUgaGlzdG9yeTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5leGVjdXRpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGV4ZWN1dGlvbiBpZGVudGlmaWVycyBvbiB3aGljaCB0byBmaWx0ZXIgaGlzdG9yeTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWx0ZXJ0YWc8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIGV4ZWN1dGlvbiB0YWcgb24gd2hpY2ggdG8gZmlsdGVyIGhpc3Rvcnk8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmV2ZXJzZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGV4ZWN1dGlvbiBoaXN0b3J5IGlzIHJldHVybmVkIGluIGFcbiAgICAgICAgICogICAgICAgcmV2ZXJzZS1jaHJvbm9sb2dpY2FsIG9yZGVyXG4gICAgICAgICAqICAgIDwvZHQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdEV4ZWN1dGVIaXN0b3J5OiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9leGVjdXRlL2hpc3RvcnknLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGZsdXNoZXMgZXhlY3V0aW9ucyBpbiB0aGUgaGlzdG9yeSBvbiB0aGUgc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqIEZsdXNoaW5nIGFuIGV4ZWN1dGlvbiBkZWxldGVzIGJvdGggdGhlIFIgY29uc29sZSBvdXRwdXQgYW5kIHRoZSBnZW5lcmF0ZWRcbiAgICAgICAgICogcmVzdWx0cyBhc3NvY2lhdGVkIHdpdGggdGhhdCBleGVjdXRpb24gYnV0IGRvZXMgbm90IHJlbW92ZSB0aGUgZXhlY3V0aW9uXG4gICAgICAgICAqIGl0c2VsZiBmcm9tIHRoZSBoaXN0b3J5LiBCeSBvbWl0dGluZyB0aGUgZXhlY3V0aW9uIHBhcmFtZXRlciwgdGhlIGNhbGxlclxuICAgICAgICAgKiBjYW4gZmx1c2ggZXZlcnkgZXhlY3V0aW9uIGluIHRoZSBoaXN0b3J5IG9uIHRoZSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBmbHVzaGluZyBmYWNpbGl0eSBpcyBwcm92aWRlZCB0byBoZWxwIHVzZXJzIG1hbmFnZSB0aGUgbGV2ZWxzIG9mXG4gICAgICAgICAqIHJlc291cmNlIHVzYWdlIGFzc29jaWF0ZWQgd2l0aCB0aGVpciBwZXJzaXN0ZW50IHByb2plY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RFeGVjdXRlRmx1c2hcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiAgPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5leGVjdXRpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBleGVjdXRpb24gaWRlbnRpZmllcnM8L2RkPlxuICAgICAgICAgKiAgPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RXhlY3V0ZUZsdXNoOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9leGVjdXRlL2ZsdXNoJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBsaXN0cyB0aGUgZXhlY3V0aW9uIHJlc3VsdHMgZm9yIHRoZSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgc3BlY2lmeWluZyBhIHZhbHVlIGZvciB0aGUgZXhlY3V0aW9uIHBhcmFtZXRlciB0aGUgY2FsbGVyIGNhbiBsaW1pdCB0aGVcbiAgICAgICAgICogcmVzcG9uc2UgdG8gdGhvc2UgcmVzdWx0cyBmb3VuZCBvbiBhIHNwZWNpZmljIGV4ZWN1dGlvbiBvciBzZXQgb2ZcbiAgICAgICAgICogZXhlY3V0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogPGJsb2NrcXVvdGU+XG4gICAgICAgICAqICAgIEltcG9ydGFudCEgVGhlIFVSTHMgaW5kaWNhdGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXAgb24gdGhpcyBjYWxsIHJlbWFpblxuICAgICAgICAgKiAgICB2YWxpZCBmb3IgYXMgbG9uZyBhcyB0aGUgcmVzdWx0cyByZW1haW4gcGFydCBvZiB0aGUgcHJvamVjdC5cbiAgICAgICAgICogPC9ibG9ja3F1b3RlPlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3RFeGVjdXRlUmVzdWx0TGlzdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZXhlY3V0aW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGV4ZWN1dGlvbiBpZGVudGlmaWVyc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RFeGVjdXRlUmVzdWx0TGlzdDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZXhlY3V0ZS9yZXN1bHQvbGlzdCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZG93bmxvYWRzIHRoZSBleGVjdXRpb24gcmVzdWx0cyBmb3IgdGhlIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBzcGVjaWZ5aW5nIGEgdmFsdWUgZm9yIHRoZSBleGVjdXRpb24gcGFyYW1ldGVyIHRoZSBjYWxsZXIgY2FuIGRvd25sb2FkXG4gICAgICAgICAqIG9ubHkgcmVzdWx0cyBvbiB0aGUgc3BlY2lmaWVkIGV4ZWN1dGlvbnMuIEJ5IHNwZWNpZnlpbmcgYSB2YWx1ZSBmb3IgdGhlXG4gICAgICAgICAqIGZpbGVuYW1lIHBhcmFtZXRlciB0aGUgY2FsbGVyIGNhbiBkb3dubG9hZCBhIHNwZWNpZmljIHJlc3VsdCBvbiB0aGVcbiAgICAgICAgICogc3BlY2lmaWVkIGV4ZWN1dGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0RXhlY3V0ZVJlc3VsdERvd25sb2FkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5leGVjdXRpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgZXhlY3V0aW9uIGlkZW50aWZpZXJzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIHJlc3VsdCBmaWxlIG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aW5saW5lPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBDb250ZW50LURpc3Bvc2l0aW9uIHJlc3BvbnNlIGhlYWRlclxuICAgICAgICAgKiAgICAgICBpbmRpY2F0aW5nIGF0dGFjaG1lbnQgaXMgb21pdHRlZFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiAgPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RXhlY3V0ZVJlc3VsdERvd25sb2FkOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9leGVjdXRlL3Jlc3VsdC9kb3dubG9hZCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZGVsZXRlcyB0aGUgZXhlY3V0aW9uIHJlc3VsdHMgZm9yIHRoZSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgc3BlY2lmeWluZyBhIHZhbHVlIGZvciB0aGUgZXhlY3V0aW9uIHBhcmFtZXRlciB0aGUgY2FsbGVyIGNhbiBkZWxldGVcbiAgICAgICAgICogb25seSB0aG9zZSByZXN1bHRzIG9uIHRoZSBzcGVjaWZpZWQgZXhlY3V0aW9ucy4gQnkgc3BlY2lmeWluZyBhIHZhbHVlIGZvclxuICAgICAgICAgKiB0aGUgZmlsZW5hbWUgcGFyYW1ldGVyIHRoZSBjYWxsZXIgY2FuIGRlbGV0ZSBhIHNwZWNpZmljIHJlc3VsdCBvbiB0aGVcbiAgICAgICAgICogc3BlY2lmaWVkIGV4ZWN1dGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdEV4ZWN1dGVSZXN1bHREZWxldGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgPGR0PmV4ZWN1dGlvbjwvZHQ+XG4gICAgICAgICAqICAgPGRkPlxuICAgICAgICAgKiAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgZXhlY3V0aW9uIGlkZW50aWZpZXJzXG4gICAgICAgICAqICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIHJlc3VsdCBmaWxlIG5hbWU8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3RFeGVjdXRlUmVzdWx0RGVsZXRlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9leGVjdXRlL3Jlc3VsdC9kZWxldGUnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vIFByb2plY3QgRGlyZWN0b3J5IEFQSXNcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgbGlzdHMgd29ya2luZyBkaXJlY3RvcnkgZmlsZXMgZm9yIHRoZSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGZpbHRlciBwYXJhbWV0ZXIgY2FuIGJlIHNwZWNpZmllZCBvbiB0aGUgY2FsbCB0byBmaWx0ZXIsIHRoZSB0eXBlcyBvZlxuICAgICAgICAgKiBmaWxlcyByZXR1cm5lZCBhY2NvcmRpbmcgdG8gdGhlaXIgY2F0ZWdvcnkuIFRoZSBmb2xsb3dpbmcgZmlsdGVyIHZhbHVlcyBhcmVcbiAgICAgICAgICogc3VwcG9ydGVkOlxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2w+XG4gICAgICAgICAqICAgIDxsaT5wbG90IC0gZmlsZXMgZW5kaW5nIHdpdGggYSAucG5nLCAuc3ZnIG9yIC5qcGcgZXh0ZW5zaW9uPC9saT5cbiAgICAgICAgICogICAgPGxpPnNjcmlwdCAtIGZpbGVzIGVuZGluZyB3aXRoIGEgLlIgb3IgLnIgZXh0ZW5zaW9uPC9saT5cbiAgICAgICAgICogICAgPGxpPlIgLSBmaWxlcyBlbmRpbmcgd2l0aCBhIC5yRGF0YSBvciAucmRhdGEgZXh0ZW5zaW9uPC9saT5cbiAgICAgICAgICogICAgPGxpPmRhdGEgLSBmaWxlcyBlbmRpbmcgd2l0aCBhIC5jc3Ygb3IgLnhscyBleHRlbnNpb248L2xpPlxuICAgICAgICAgKiAgICA8bGk+dGV4dCAtIGZpbGVzIGVuZGluZyB3aXRoIGEgLnR4dCBleHRlbnNpb248L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3REaXJlY3RvcnlMaXN0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWx0ZXI8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIGZpbHRlciBieSBjYXRlZ29yeSB2YWx1ZTwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdERpcmVjdG9yeUxpc3Q6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2RpcmVjdG9yeS9saXN0JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCB1cGxvYWRzIGEgZmlsZSBpbnRvIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBmb3IgdGhlIHNwZWNpZmllZFxuICAgICAgICAgKiBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3REaXJlY3RvcnlVcGxvYWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlPC9kdD5cbiAgICAgICAgICogICAgPGRkPi4uLmZpbGUgY29udGVudC4uLjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgZGVzY3JpcHRpb24gdG8gYmUgYXNzb2NpYXRlZCB3aXRoIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+b3ZlcndyaXRlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgb3ZlcndyaXRlcyB0aGUgZXhpc3RpbmcgZmlsZSBvZiBzYW1lIG5hbWU8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3REaXJlY3RvcnlVcGxvYWQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbmZpZy5mb3JtYXQgPSBcInRleHRcIjtcbiAgICAgICAgICAgIHZhciBpb0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjb25maWcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBjb25maWcuZm9ybUlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogY2FsbGJhY2tcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9kaXJlY3RvcnkvdXBsb2FkJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCB0cmFuc2ZlcnMgYSBmaWxlIGZyb20gYSBVUkwgaW50byB0aGUgd29ya2luZyBkaXJlY3RvcnkgZm9yIHRoZVxuICAgICAgICAgKiBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0RGlyZWN0b3J5VHJhbnNmZXJcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD51cmw8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBVUkwgZm9yIHRoZSBmaWxlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBkZXNjcmlwdGlvbiB0byBiZSBhc3NvY2lhdGVkIHdpdGggZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5vdmVyd3JpdGU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCBvdmVyd3JpdGVzIHRoZSBleGlzdGluZyBmaWxlIG9mIHNhbWUgbmFtZTwvZGQ+XG4gICAgICAgICAqICA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3REaXJlY3RvcnlUcmFuc2ZlcjogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZGlyZWN0b3J5L3RyYW5zZmVyJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCB3cml0ZXMgYSB0ZXh0IGZpbGUgaW50byB0aGUgd29ya2luZyBkaXJlY3RvcnkgZm9yIHRoZSBzcGVjaWZpZWRcbiAgICAgICAgICogcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0RGlyZWN0b3J5V3JpdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD50ZXh0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgdGV4dCBjb250ZW50IGZvciB0aGUgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZWxpbWl0ZXI8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIGEgY3VzdG9tIGRlbGltaXRlciBmb3IgdGV4dCB3aGVuIHdyaXRpbmdcbiAgICAgICAgICogICAgICAgbXVsdGlwbGUgZmlsZXMsIGRlZmF1bHRzIHRvICMsI1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIGRlc2NyaXB0aW9uIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCBmaWxlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm92ZXJ3cml0ZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIG92ZXJ3cml0ZXMgdGhlIGV4aXN0aW5nIGZpbGUgb2Ygc2FtZSBuYW1lPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RGlyZWN0b3J5V3JpdGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2RpcmVjdG9yeS93cml0ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBcbiAgICAgICAgICogVGhpcyBjYWxsIHVwZGF0ZXMgYSBmaWxlIG5hbWUgYW5kL29yIGRlc2NyaXB0aW9uIGluIHRoZSB3b3JraW5nIGRpcmVjdG9yeVxuICAgICAgICAgKiBmb3IgdGhlIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3REaXJlY3RvcnlVcGRhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIG5ldyBuYW1lIGZvciB0aGUgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmljZXMgdGhlIG5ldyBkZXNjcmlwdGlvbiBmb3IgdGhlIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+b3ZlcndyaXRlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgb3ZlcndyaXRlcyB0aGUgZXhpc3RpbmcgZmlsZSBvZiBzYW1lIG5hbWU8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3REaXJlY3RvcnlVcGRhdGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2RpcmVjdG9yeS91cGRhdGUnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHN0b3JlcyBhIGZpbGUgZnJvbSB0aGUgd29ya2luZyBkaXJlY3RvcnkgdG8gdGhlIHJlcG9zaXRvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdERpcmVjdG9yeVN0b3JlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgZmlsZSBmb3Igc3RvcmluZzwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kZXNjcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIGRlc2NyaXB0aW9uIHRvIGFjY29tcGFueSB0aGUgc2F2ZWQgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD50YWdzPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0YWcgd29yZHMgdG8gYXNzb2NpYXRlIHdpdGggcmVwb3NpdG9yeSBmaWxlXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yZXN0cmljdGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByb2xlIG5hbWVzLCB3aGljaCBtYWtlcyB0aGUgZmlsZVxuICAgICAgICAgKiAgICAgICAgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIHVzZXJzIHdpdGggdGhlc2Ugcm9sZXNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNoYXJlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgZmlsZSB3aWxsIGJlIHNoYXJlZCAsIHdoaWNoIG1ha2VzIHRoZSBmaWxlXG4gICAgICAgICAqICAgICAgIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCB1c2Vyc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHVibGlzaGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBmaWxlIHdpbGwgYmUgcHVibGlzaGVkICwgd2hpY2ggbWFrZXMgdGhlXG4gICAgICAgICAqICAgICAgIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIGFuZCBhbm9ueW1vdXMgdXNlcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5ld3ZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIG5ldyBmaWxlIHdpbGwgYmUgcmVuYW1lZCB0byBhdm9pZCBvdmVyd3JpdGluZ1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3REaXJlY3RvcnlTdG9yZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZGlyZWN0b3J5L3N0b3JlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBsb2FkcyBhIGZpbGUgZnJvbSB0aGUgcmVwb3NpdG9yeSBpbnRvIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBmb3JcbiAgICAgICAgICogdGhlIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHByb2plY3REaXJlY3RvcnlMb2FkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHJlcG9zaXRvcnkgZmlsZSBuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIGF1dGhvciBuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHJlcG9zaXRvcnkgZmlsZSB2ZXJzaW9uPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBwcm9qZWN0RGlyZWN0b3J5TG9hZDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZGlyZWN0b3J5L2xvYWQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGRvd25sb2FkcyB0aGUgd29ya2luZyBkaXJlY3RvcnkgY29udGVudHMgZm9yIHRoZSBzcGVjaWZpZWRcbiAgICAgICAgICogcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgc3BlY2lmeWluZyBhIHNpbmdsZSB2YWx1ZSBmb3IgdGhlIGZpbGVuYW1lIHBhcmFtZXRlciwgdGhlIGNhbGxlciBjYW5cbiAgICAgICAgICogZG93bmxvYWQgYSBzcGVjaWZpYyBmaWxlLiBCeSBzcGVjaWZ5aW5nIG11bHRpcGxlIHZhbHVlcyBmb3IgdGhlIGZpbGVuYW1lXG4gICAgICAgICAqIHBhcmFtZXRlciwgdGhlIGNhbGxlciBjYW4gZG93bmxvYWQgYSB6aXAgYXJjaGl2ZSBvZiB0aG9zZSBmaWxlcy4gQnlcbiAgICAgICAgICogb21pdHRpbmcgdGhlIGZpbGVuYW1lIHBhcmFtZXRlciwgdGhlbiB0aGUgY2FsbGVyIGNhbiBkb3dubG9hZCBhIHppcCBhcmNoaXZlXG4gICAgICAgICAqIHdpdGggYWxsIG9mIHRoZSBmaWxlcyBpbiB0aGUgd29ya2luZyBkaXJlY3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdERpcmVjdG9yeURvd25sb2FkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBjb21tYS1zZXBhcmF0ZWQgZmlsZSBuYW1lcyBmb3IgZG93bmxvYWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aW5saW5lPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBDb250ZW50LURpc3Bvc2l0aW9uIHJlc3BvbnNlIGhlYWRlclxuICAgICAgICAgKiAgICAgICBpbmRpY2F0aW5nIGF0dGFjaG1lbnQgaXMgb21pdHRlZFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3REaXJlY3RvcnlEb3dubG9hZDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3Byb2plY3QvZGlyZWN0b3J5L2Rvd25sb2FkJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBkZWxldGVzIGZpbGVzIGZyb20gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IGZvciB0aGUgc3BlY2lmaWVkXG4gICAgICAgICAqIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdERpcmVjdG9yeURlbGV0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgZmlsZSBuYW1lcyBmb3IgZGVsZXRpb248L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHByb2plY3REaXJlY3RvcnlEZWxldGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L2RpcmVjdG9yeS9kZWxldGUnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vIFByb2plY3QgUGFja2FnZSBBUElzXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGxpc3RzIFIgcGFja2FnZSBkZXBlbmRlbmNpZXMgZm9yIHRoZSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0UGFja2FnZUxpc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pmluc3RhbGxlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgaWYgdHJ1ZSwgcmVzcG9uc2UgbGlzdHMgYWxsIHBhY2thZ2VzIGluc3RhbGxlZCBpbiBwcm9qZWN0IGVudmlyb25tZW50XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdFBhY2thZ2VMaXN0OiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcHJvamVjdC9wYWNrYWdlL2xpc3QnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGF0dGFjaGVzIFIgcGFja2FnZSBkZXBlbmRlbmNpZXMgZm9yIHRoZSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBwcm9qZWN0UGFja2FnZUF0dGFjaFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnByb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIHRoZSBwcm9qZWN0IGlkZW50aWZpZXI8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBSIHBhY2thZ2UgbmFtZXMgdG8gYXR0YWNoPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJlcG88L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgUiByZXBvc2l0b3J5IGxvY2F0aW9uIGZvciBuYW1lZCBwYWNrYWdlczwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdFBhY2thZ2VBdHRhY2g6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L3BhY2thZ2UvYXR0YWNoJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBkZXRhY2hlcyBSIHBhY2thZ2UgZGVwZW5kZW5jaWVzIGZvciB0aGUgc3BlY2lmaWVkIHByb2plY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcHJvamVjdFBhY2thZ2VEZXRhY2hcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgUiBwYWNrYWdlIG5hbWVzIHRvIGRldGFjaDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJvamVjdFBhY2thZ2VEZXRhY2g6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9wcm9qZWN0L3BhY2thZ2UvZGV0YWNoJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBVc2VyIEFQSXNcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgc2lnbnMgdGhlIHVzZXIgaW4gYnkgYXV0aGVudGljYXRpbmcgdGhlIGNyZWRlbnRpYWxzIHdpdGggdGhlXG4gICAgICAgICAqIFJldm9EZXBsb3lSIHNlcnZlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCB1c2VyTG9naW5cbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD51c2VybmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHVzZXJuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnBhc3N3b3JkPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcGFzc3dvcmQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlzYWJsZWF1dG9zYXZlPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHdoZW4gdHJ1ZSwgZGlzYWJsZXMgYXV0b3NhdmUgc2VtYW50aWNzIGZvciBwZXJzaXN0ZW50XG4gICAgICAgICAqICAgICAgIHByb2plY3RzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdXNlckxvZ2luOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvdXNlci9sb2dpbicsIGNvbmZpZywgY2FsbGJhY2spOyAgICAgICAgICAgIFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgc2lnbnMgb3V0IHRoZSBjdXJyZW50bHkgYXV0aGVudGljYXRlZCB1c2VyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHVzZXJMb2dvdXRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD51c2VyY29va2llPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHdoZW4gc3BlY2lmaWVkLCB2YWx1ZSBzZXRzIGFwcGxpY2F0aW9uLXNwZWNpZmljIHBlcnNpc3RlbnRcbiAgICAgICAgICogICAgICAgdXNlciBjb29raWUsIHdoaWNoIGlzIHJldHJpZXZhYmxlIG9uIHJlc3BvbnNlIHRvXG4gICAgICAgICAqICAgICAgIDxhIGhyZWY9XCIjbWV0aG9kX3VzZXJMb2dpblwiPnVzZXJMb2dpbjwvYT4gY2FsbC5cbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICB1c2VyTG9nb3V0OiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvdXNlci9sb2dvdXQnLCBjb25maWcsIGNhbGxiYWNrKTsgICAgICAgICAgICBcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHJldHJpZXZlcyBkZXRhaWxzIGFib3V0IHRoZSBjdXJyZW50bHkgYXV0aGVudGljYXRlZCB1c2VyLiBUaGVcbiAgICAgICAgICogZGV0YWlscyByZXR1cm5lZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwIG9uIHRoaXMgY2FsbCBhcmUgZXhhY3RseSB0aGUgc2FtZVxuICAgICAgICAgKiBkZXRhaWxzIGFzIHRob3NlIHJldHVybmVkIGluIHRoZSByZXNwb25zZSBtYXJrdXAgb24gdGhlXG4gICAgICAgICAqIDxhIGhyZWY9XCIjbWV0aG9kX3VzZXJMb2dpblwiPnVzZXJMb2dpbjwvYT4gY2FsbC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCB1c2VyQWJvdXRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJBYm91dDogZnVuY3Rpb24oY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci91c2VyL2Fib3V0Jywge30sIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIGF1dG9zYXZlIHNlbWFudGljcyBvbiBwZXJzaXN0ZW50IHByb2plY3RzXG4gICAgICAgICAqIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIGN1cnJlbnQgdXNlcnMgSFRUUCBzZXNzaW9uLiBCeSBkZWZhdWx0LCBhbGwgbGl2ZVxuICAgICAgICAgKiBwZXJzaXN0ZW50IHByb2plY3RzIGFyZSBhdXRvc2F2ZWQgdW5kZXIgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICAgICAgICAgKlxuICAgICAgICAgKiA8dWw+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgV2hlbiBhIHVzZXIgY2xvc2VzIGEgcHJvamVjdCB1c2luZyB0aGVcbiAgICAgICAgICogICAgICAgPGEgaHJlZj1cIiNtZXRob2RfcHJvamVjdENsb3NlXCI+cHJvamVjdENsb3NlPC9hPiBjYWxsLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFdoZW4gYSB1c2VyIHNpZ25zLW91dCB1c2luZyB0aGVcbiAgICAgICAgICogICAgICAgPGEgaHJlZj1cIiNtZXRob2RfdXNlckxvZ291dFwiPnVzZXJMb2dvdXQ8L2E+IGNhbGwuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgV2hlbiBhIHVzZXIgaXMgYXV0b21hdGljYWxseSBzaWduZWQtb3V0IGJ5IHRoZSBzeXN0ZW0gYWZ0ZXIgYVxuICAgICAgICAgKiAgICAgICBwcm9sb25nZWQgcGVyaW9kIG9mIGluYWN0aXZpdHkuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqXG4gICAgICAgICAqIFdoZW4gdGhlIGF1dG9zYXZlIGZlYXR1cmUgaXMgZGlzYWJsZWQgYSB1c2VyIG11c3QgbWFrZSBhbiBleHBsaWNpdCBjYWxsIG9uXG4gICAgICAgICAqIDxhIGhyZWY9XCIjbWV0aG9kX3Byb2plY3RTYXZlXCI+cHJvamVjdFNhdmU8L2E+IGluIG9yZGVyIHRvIHNhdmUgYSBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHVzZXJBdXRvc2F2ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PmVuYWJsZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHRvZ2dsZXMgYXV0b3NhdmUgc2VtYW50aWNzIGZvciBwZXJzaXN0ZW50IHByb2plY3RzLjwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdXNlckF1dG9zYXZlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvdXNlci9hdXRvc2F2ZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gUmVwb3NpdG9yeSBTY3JpcHQgQVBJc1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBsaXN0cyByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBjYWxsIGlzIGF2YWlsYWJsZSB0byBhdXRoZW50aWNhdGVkIGFuZCBhbm9ueW1vdXMgdXNlcnMuIEhvd2V2ZXIsIGlmXG4gICAgICAgICAqIHRoZSBjYWxsZXIgaXMgYW4gYW5vbnltb3VzIHVzZXIgdGhlbiBvbmx5IHB1Ymxpc2hlZCBzY3JpcHRzIHdpbGwgYmVcbiAgICAgICAgICogcmV0dXJuZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5U2NyaXB0TGlzdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHdoZW4gc3BlY2lmaWVkLCBjYWxsIHJldHVybnMgbGlzdCBvZiBzY3JpcHQgdmVyc2lvbnMgZm9yXG4gICAgICAgICAqICAgICAgIGZpbGVuYW1lXG4gICAgICAgICAqICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNoYXJlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZmlsZXMgdGhhdCBhcmUgcmVzdHJpY3RlZCBidXRcbiAgICAgICAgICogICAgICAgdmlzaWJsZSBvciBzaGFyZWQgYnkgb3RoZXIgdXNlcnMgYXJlIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnB1Ymxpc2hlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgc2NyaXB0cyBwdWJsaXNoZWQgYnkgb3RoZXIgdXNlcnMgYXJlXG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5U2NyaXB0TGlzdDogZnVuY3Rpb24oY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L3NjcmlwdC9saXN0Jywge30sIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBleGVjdXRlcyByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0cyBvciBleHRlcm5hbCBzY3JpcHRzIG9uIGFuXG4gICAgICAgICAqIEFub255bW91cyBQcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBleGVjdXRlIGEgc2luZ2xlIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHQgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGVcbiAgICAgICAgICogcGFyYW1ldGVyIHZhbHVlcyBmb3IgZmlsZW5hbWUsIGF1dGhvciBhbmQgb3B0aW9uYWxseSB2ZXJzaW9uLiBUbyBleGVjdXRlIGFcbiAgICAgICAgICogY2hhaW4gb2YgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdHMgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGUgYVxuICAgICAgICAgKiBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2YWx1ZXMgb24gdGhlIGZpbGVuYW1lICwgYXV0aG9yIGFuZCBvcHRpb25hbGx5XG4gICAgICAgICAqIHZlcnNpb24gcGFyYW1ldGVycy5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gZXhlY3V0ZSBhIHNpbmdsZSBleHRlcm5hbCBzY3JpcHQgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGUgYSB2YWxpZCBVUkxcbiAgICAgICAgICogb3IgZmlsZSBwYXRoIHVzaW5nIHRoZSBleHRlcm5hbHNvdXJjZSBwYXJhbWV0ZXIuIFRvIGV4ZWN1dGUgYSBjaGFpbiBvZlxuICAgICAgICAgKiBleHRlcm5hbCBzY3JpcHRzIHRoZSBjYWxsZXIgbXVzdCBwcm92aWRlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICAgICAgICogdmFsdWVzIG9uIHRoZSBleHRlcm5hbHNvdXJjZSBwYXJhbWV0ZXIuIE5vdGUsIHRvIGV4ZWN1dGUgYW4gZXh0ZXJuYWwgc2NyaXB0XG4gICAgICAgICAqIHRoZSBjYWxsZXIgbXVzdCBoYXZlIFBPV0VSX1VTRVIgcHJpdmlsZWdlcyBzbyB0aGlzIGZlYXR1cmUgaXMgbm90IGF2YWlsYWJsZVxuICAgICAgICAgKiB0byBhbm9ueW1vdXMgdXNlcnMgb24gdGhpcyBjYWxsLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOiBBIGNoYWluZWQgZXhlY3V0aW9uIGV4ZWN1dGVzIGVhY2ggb2YgdGhlIHNjcmlwdHMgaWRlbnRpZmllZCBvbiB0aGVcbiAgICAgICAgICogY2FsbCBpbiBhIHNlcXVlbnRpYWwgZmFzaGlvbiBvbiB0aGUgUiBzZXNzaW9uLCB3aXRoIGV4ZWN1dGlvbiBvY2N1cmluZyBpblxuICAgICAgICAgKiB0aGUgb3JkZXIgc3BlY2lmaWVkIG9uIHRoZSBwYXJhbWV0ZXIgbGlzdC5cbiAgICAgICAgICpcbiAgICAgICAgICogPHN0cm9uZz5QcmUtZXhlY3V0aW9uIHBhcmFtZXRlcnM6PC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxvbD5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgaW5wdXRzIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBwYXNzIFJldm9EZXBsb3lSLWVuY29kZWRcbiAgICAgICAgICogICAgICAgUiBvYmplY3QgdmFsdWVzIGFzIGlucHV0cy4gVGhlc2UgaW5wdXRzIGFyZSB0dXJuZWQgaW50byBSIG9iamVjdHNcbiAgICAgICAgICogICAgICAgaW4gdGhlIHdvcmtzcGFjZSBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHByZWxvYWRmaWxlIHBhcmFtZXRlcnMgYWxsb3dzIHRoZSBjYWxsZXIgdG8gbG9hZCBvbmUgb3IgbW9yZVxuICAgICAgICAgKiAgICAgICBmaWxlcyBmcm9tIHRoZSByZXBvc2l0b3J5IGludG8gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IGJlZm9yZSB0aGVcbiAgICAgICAgICogICAgICAgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgcHJlbG9hZG9iamVjdCBwYXJhbWV0ZXJzIGFsbG93IHRoZSBjYWxsZXIgdG8gbG9hZCBvbmUgb3IgbW9yZVxuICAgICAgICAgKiAgICAgICBiaW5hcnkgUiBvYmplY3RzICguckRhdGEpIGZyb20gdGhlIHJlcG9zaXRvcnkgaW50byB0aGUgd29ya3NwYWNlXG4gICAgICAgICAqICAgICAgIGJlZm9yZSB0aGUgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgYWRvcHQgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIGxvYWQgYSBwcmUtZXhpc3RpbmdcbiAgICAgICAgICogICAgICAgcHJvamVjdCB3b3Jrc3BhY2UsIHByb2plY3Qgd29ya2luZyBkaXJlY3RvcnkgYW5kL29yIHByb2plY3QgcGFja2FnZVxuICAgICAgICAgKiAgICAgICBkZXBlbmRlbmNpZXMgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8c3Ryb25nPlBvc3QtZXhlY3V0aW9uIHBhcmFtZXRlcnM6PC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxvbD5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgcm9iamVjdHMgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHNwZWNpZnkgYSBjb21tYS1zZXBhcmF0ZWRcbiAgICAgICAgICogICAgICAgbGlzdCBvZiBvYmplY3QgbmFtZXMgdGhhdCB3aWxsIGJlIHJldHVybmVkIGFzIFJldm9EZXBsb3lSLWVuY29kZWQgUlxuICAgICAgICAgKiAgICAgICBvYmplY3RzIG9uIHRoZSByZXNwb25zZSBtYXJrdXAgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlZmlsZSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIHdvcmtpbmcgZGlyZWN0b3J5IGZpbGVzIHRvIGJlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlclxuICAgICAgICAgKiAgICAgICB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVvYmplY3QgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHNwZWNpZnkgYSBjb21tYS1zZXBhcmF0ZWRcbiAgICAgICAgICogICAgICAgbGlzdCBvZiB3b3Jrc3BhY2Ugb2JqZWN0cyB0byBiZSBzdG9yZWQgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlXG4gICAgICAgICAqICAgICAgIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3Jld29ya3NwYWNlIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBzdG9yZSB0aGUgZW50aXJlXG4gICAgICAgICAqICAgICAgIHdvcmtzcGFjZSBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVkaXJlY3RvcnkgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHNwZWNpZnkgYSB0YXJnZXRcbiAgICAgICAgICogICAgICAgcmVwb3NpdG9yeSBkaXJlY3RvcnkgZm9yIHN0b3JlZCBmaWxlcyBhbmQgb2JqZWN0cyBhZnRlciB0aGUgZXhlY3V0aW9uXG4gICAgICAgICAqICAgICAgIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVuZXd2ZXJzaW9uIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBjcmVhdGUgbmV3XG4gICAgICAgICAqICAgICAgIHZlcnNpb25zIG9mIGVhY2ggc3RvcmVkIGZpbGUgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvblxuICAgICAgICAgKiAgICAgICBjb21wbGV0ZXMuIEJ5IGRlZmF1bHQsIHN0b3JlZCBmaWxlcyBvdmVyd3JpdGUgYW55IHByZS1leGlzdGluZyBmaWxlXG4gICAgICAgICAqICAgICAgIGJ5IHRoZSBzYW1lIG5hbWUuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3JlcHVibGljIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBhc3NpZ24gcHVibGljIGFjY2Vzc1xuICAgICAgICAgKiAgICAgICB0byBlYWNoIHN0b3JlZCBmaWxlIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBpbmZpbml0eSAsIG5hbiBhbmQgZW5jb2RlRGF0YUZyYW1lUHJpbWl0aXZlQXNWZWN0b3IgcGFyYW1ldGVyc1xuICAgICAgICAgKiAgICAgICBhbGxvdyB0aGUgY2FsbGVyIHRvIGNvbnRyb2wgaG93IFJldm9EZXBsb3lSLWVuY29kZWQgUiBvYmplY3QgZGF0YSBpc1xuICAgICAgICAgKiAgICAgICBlbmNvZGVkIGluIHRoZSByZXNwb25zZSBtYXJra3VwLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgPHN0cm9uZz5cbiAgICAgICAgICogICAgIFNvbWUga2V5IGRhdGEgaW5kaWNhdGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXAgb24gdGhpcyBjYWxsOlxuICAgICAgICAgKiAgPC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqICA8b2w+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgY29uc29sZSAtIGluZGljYXRlcyB0aGUgY29uc29sZSBvdXRwdXQgcmVzdWx0aW5nIGZyb20gdGhlIGNvZGVcbiAgICAgICAgICogICAgICAgZXhlY3V0aW9uXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgcmVzdWx0cyAtIGluZGljYXRlcyB0aGUgbGlzdCBvZiBmaWxlcyBnZW5lcmF0ZWQgYnkgdGhlIFIgZ3JhcGhpY3NcbiAgICAgICAgICogICAgICAgZGV2aWNlXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgYXJ0aWZhY3RzIC0gaW5kaWNhdGVzIHRoZSBsaXN0IG9mIGZpbGVzIGdlbmVyYXRlZCBvciBtb2RpZmllZCBpbiB0aGVcbiAgICAgICAgICogICAgICAgd29ya2luZyBkaXJlY3RvcnlcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBvYmplY3RzIC0gIGluZGljYXRlcyB0aGUgbGlzdCBvZiBSIG9iamVjdHMgcmV0dXJuZWQgZnJvbSB0aGVcbiAgICAgICAgICogICAgICAgd29ya3NwYWNlXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgZmlsZXMgLSBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgZmlsZXMgYW5kIG9iamVjdHMgc3RvcmVkIGluIHRoZVxuICAgICAgICAgKiAgICAgICByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5pbnRlcnJ1cHRlZCAtIGluZGljYXRlcyB0aGUgaW50ZXJydXB0ZWQgc3RhdHVzIG9mIGV4ZWN1dGlvbjwvbGk+XG4gICAgICAgICAqICAgIDxsaT5lcnJvciAtIG9uIGZhaWx1cmUsIGluZGljYXRlcyB0aGUgcmVhc29uIGZvciBmYWlsdXJlPC9saT5cbiAgICAgICAgICogICAgPGxpPmVycm9yQ29kZSAtIG9uIGZhaWx1cmUsIGluZGljYXRlcyB0aGUgZXJyb3IgY29kZSBmb3IgZmFpbHVyZTwvbGk+XG4gICAgICAgICAqIDwvb2w+XG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeVNjcmlwdEV4ZWN1dGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5wcm9qZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgcHJvamVjdCBpZGVudGlmaWVyPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPmNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHQgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5LW1hbmFnZWQgZGlyZWN0b3JpZXMgZm9yXG4gICAgICAgICAqICAgICAgIHNjcmlwdHMsIGRlZmF1bHRzIHRvIHJvb3RcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIGF1dGhvci1wZXItZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1maWxlbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5leHRlcm5hbHNvdXJjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIFVSTHMgb3IgZmlsZSBwYXRocyB0byBleHRlcm5hbCBzY3JpcHRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIFJldm9EZXBsb3lSLWVuY29kZWQgc2NyaXB0IGlucHV0czwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5jc3ZpbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBwcmltaXRpdmUgbmFtZS92YWx1ZSBpbnB1dHM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZGZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZGZpbGVhdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBhdXRob3ItcGVyLXByZWxvYWRmaWxlbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZXZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucywgdmVyc2lvbi1wZXItcHJlbG9hZGZpbGVuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRvYmplY3RuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeSBvYmplY3QgKC5yRGF0YSkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRvYmplY3RhdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBhdXRob3ItcGVyLXByZWxvYWRvYmplY3RuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRvYmplY3R2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsIHZlcnNpb24tcGVyLW9iamVjdC1wcmVsb2Fkb2JqZWN0bmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hZG9wdHdvcmtzcGFjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlkZW50aWZpZXMgcHJvamVjdCBmcm9tIHdoaWNoIHdvcmtzcGFjZSBpcyB0byBiZSBhZG9wdGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFkb3B0ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggZGlyZWN0b3J5IGlzIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHRwYWNrYWdlczwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlkZW50aWZpZXMgcHJvamVjdCBmcm9tIHdoaWNoIHBhY2thZ2UgZGVwZW5kZW5jaWVzIGFyZSB0byBiZSBhZG9wdGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmJsYWNrYm94PC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGV4ZWN1dGlvbiB3aWxsIG9jY3VyIG9uIHRoZSBIVFRQIGJsYWNrYm94XG4gICAgICAgICAqICAgICAgIHByb2plY3QgZm9yIHRoZSBjdXJyZW50IEhUVFAgc2Vzc2lvblxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5yZWN5Y2xlPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgdHJ1ZSwgcmVjeWNsZXMgdGhlIFIgc2Vzc2lvbiBhc3NvY2lhdGVkIHdpdGggdGhlIEhUVFBcbiAgICAgICAgICogICAgICAgYmxhY2tib3ggcHJvamVjdCBvbiB0aGUgY3VycmVudCBIVFRQIHNlc3Npb25cbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnRhZzwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBhIHRhZyB0aGF0IGxhYmVscyB0aGUgZXhlY3V0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmVjaG9vZmY8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Z3JhcGhpY3M8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgcHJlZmVycmVkIFIgZ3JhcGhpY3MgZGV2aWNlIGZvciBleGVjdXRpb246IHBuZyBvciBzdmc8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Z3JhcGhpY3N3aWR0aDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgd2lkdGggZm9yIFIgZ3JhcGhpY3MgZGV2aWNlIGltYWdlczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5ncmFwaGljc2hlaWdodDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgaGVpZ2h0IGZvciBSIGdyYXBoaWNzIGRldmljZSBpbWFnZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cm9iamVjdHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBvYmplY3RzIGZvciByZXRyaWV2YWwgZm9sbG93aW5nIHRoZSBleGVjdXRpb248L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmVmaWxlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygd29ya2luZyBkaXJlY3RvcnkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3Jlb2JqZWN0PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygd29ya3NwYWNlIG9iamVjdCBuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZXdvcmtzcGFjZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGZpbGVuYW1lICguckRhdGEpIHdoZXJlIHdvcmtzcGFjZSBjb250ZW50cyB3aWxsIGJlIHNhdmVkIGluIHRoZSByZXBvc2l0b3J5PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3JlbmV3dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBlbnN1cmVzIGVhY2ggZmlsZSBzdG9yZWQgaW4gcmVwb3NpdG9yeSByZXN1bHRzIGluIG5ldyB2ZXJzaW9uIGJlaW5nIGNyZWF0ZWQgaWYgbmVlZGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3JlcHVibGljPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIHB1Ymxpc2hlcyBlYWNoIGZpbGUgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmluZmluaXR5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyBjdXN0b20gdmFsdWUgZm9yIEluZmluaXR5IGFwcGVhcmluZyBpbiBSIG9iamVjdFxuICAgICAgICAgKiAgICAgICBkYXRhIHJldHVybmVkIG9uIGNhbGwsIG90aGVyd2lzZSBJbmZpbml0eSBpcyByZXByZXNlbnRlZCBieVxuICAgICAgICAgKiAgICAgICA8Y29kZT4weDdmZjAwMDAwMDAwMDAwMDBMPC9jb2RlPlxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmFuPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyBjdXN0b20gdmFsdWUgZm9yIE5hTiBhcHBlYXJpbmcgaW4gUiBvYmplY3QgZGF0YVxuICAgICAgICAgKiAgICAgICByZXR1cm5lZCBvbiBjYWxsLCBvdGhlcndpc2UgTmFOIGlzIHJlcHJlc2VudGVkIGJ5IDxjb2RlPm51bGw8L2NvZGU+XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5lbmNvZGVEYXRhRnJhbWVQcmltaXRpdmVBc1ZlY3RvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZGF0YS5mcmFtZSBwcmltaXRpdmVzIGFyZSBlbmNvZGVkXG4gICAgICAgICAqICAgICAgIHZlY3RvcnMgaW4gUiBvYmplY3QgZGF0YSByZXR1cm5lZCBvbiBjYWxsXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeVNjcmlwdEV4ZWN1dGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L3NjcmlwdC9leGVjdXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGV4ZWN1dGVzIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHRzIG9yIGV4dGVybmFsIHNjcmlwdHMgb24gYW5cbiAgICAgICAgICogQW5vbnltb3VzIFByb2plY3QgYW5kIHJldHVybnMgYSBzaW1wbGUgSFRNTCBwYWdlIHRoYXQgZGlzcGxheXMgdGhlIHJlc3VsdHNcbiAgICAgICAgICogZ2VuZXJhdGVkIG9uIHRoZSBleGVjdXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIE9uIGEgc3VjY2Vzc2Z1bCBleGVjdXRpb24sIHRoZSBIVE1MIHBhZ2Ugd2lsbCBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZGF0YVxuICAgICAgICAgKiB3aGVuIGF2YWlsYWJsZSBvbiB0aGUgcmVzcG9uc2U6XG4gICAgICAgICAqXG4gICAgICAgICAqIDx1bD5cbiAgICAgICAgICogICAgPGxpPlIgY29uc29sZSBvdXRwdXQ8L2xpPlxuICAgICAgICAgKiAgICA8bGk+UiB3b3Jrc3BhY2Ugb2JqZWN0IGRhdGE8L2xpPlxuICAgICAgICAgKiAgICA8bGk+UiBnZW5lcmF0ZWQgcGxvdHM8L2xpPlxuICAgICAgICAgKiAgICA8bGk+TGlua3MgdG8gUiB3b3JraW5nIGRpcmVjdG9yeSBhcnRpZmFjdHM8L2xpPlxuICAgICAgICAgKiAgICA8bGk+TGlua3MgdG8gUmVwb3NpdG9yeSBzdG9yZWQgYXJ0aWZhY3RzPC9saT5cbiAgICAgICAgICogPC91bD5cbiAgICAgICAgICpcbiAgICAgICAgICogT24gYSBmYWlsZWQgZXhlY3V0aW9uLCB0aGUgSFRNTCBwYWdlIHdpbGwgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlXG4gICAgICAgICAqIGluZGljYXRpbmcgdGhlIGNhdXNlIG9mIHRoZSBmYWlsdXJlIGFuZCB3aGVuIGF2YWlsYWJsZSwgUiBjb25zb2xlIG91dHB1dC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIEFQSSBjYWxsIG1ha2VzIGl0IHZlcnkgc2ltcGxlIHRvIGludGVncmF0ZSBvdXRwdXRzIGdlbmVyYXRlZCBieVxuICAgICAgICAgKiBSZXZvRGVwbG95Ui1tYW5hZ2VkIFIgc2NyaXB0cyBpbnRvIGFueSB0aGlyZC1wYXJ0eSBhcHBsaWNhdGlvbi4gSXQgY2FuIGFsc29cbiAgICAgICAgICogYmUgdXNlZCBhcyBhIHZlcnkgc2ltcGxlIHRlc3QgYW5kIGRlYnVnZ2luZyBhaWQgZm9yIFIgc2NyaXB0IGFuZFxuICAgICAgICAgKiBhcHBsaWNhdGlvbiBkZXZlbG9wZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBleGVjdXRlIGEgc2luZ2xlIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHQgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGVcbiAgICAgICAgICogcGFyYW1ldGVyIHZhbHVlcyBmb3IgZmlsZW5hbWUgLCBhdXRob3IgYW5kIG9wdGlvbmFsbHkgdmVyc2lvbiAuIFRvIGV4ZWN1dGVcbiAgICAgICAgICogYSBjaGFpbiBvZiByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0cyB0aGUgY2FsbGVyIG11c3QgcHJvdmlkZSBhXG4gICAgICAgICAqIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZhbHVlcyBvbiB0aGUgZmlsZW5hbWUgLCBhdXRob3IgYW5kIG9wdGlvbmFsbHlcbiAgICAgICAgICogdmVyc2lvbiBwYXJhbWV0ZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBleGVjdXRlIGEgc2luZ2xlIGV4dGVybmFsIHNjcmlwdCB0aGUgY2FsbGVyIG11c3QgcHJvdmlkZSBhIHZhbGlkIFVSTCBvclxuICAgICAgICAgKiBmaWxlIHBhdGggdXNpbmcgdGhlIGV4dGVybmFsc291cmNlIHBhcmFtZXRlci4gVG8gZXhlY3V0ZSBhIGNoYWluIG9mXG4gICAgICAgICAqIGV4dGVybmFsIHNjcmlwdHMgdGhlIGNhbGxlciBtdXN0IHByb3ZpZGUgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2YWx1ZXNcbiAgICAgICAgICogb24gdGhlIGV4dGVybmFsc291cmNlIHBhcmFtZXRlci4gTm90ZSwgdG8gZXhlY3V0ZSBhbiBleHRlcm5hbCBzY3JpcHQgdGhlXG4gICAgICAgICAqIGNhbGxlciBtdXN0IGhhdmUgUE9XRVJfVVNFUiBwcml2aWxlZ2VzIHNvIHRoaXMgZmVhdHVyZSBpcyBub3QgYXZhaWxhYmxlIHRvXG4gICAgICAgICAqIGFub255bW91cyB1c2VycyBvbiB0aGlzIGNhbGwuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGU6IEEgY2hhaW5lZCBleGVjdXRpb24gZXhlY3V0ZXMgZWFjaCBvZiB0aGUgc2NyaXB0cyBpZGVudGlmaWVkIG9uIHRoZVxuICAgICAgICAgKiBjYWxsIGluIGEgc2VxdWVudGlhbCBmYXNoaW9uIG9uIHRoZSBSIHNlc3Npb24sIHdpdGggZXhlY3V0aW9uIG9jY3VyaW5nIGluXG4gICAgICAgICAqIHRoZSBvcmRlciBzcGVjaWZpZWQgb24gdGhlIHBhcmFtZXRlciBsaXN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBQbGVhc2Ugbm90ZSB0aGUgZm9sbG93aW5nIHByZSBhbmQgcG9zdCBleGVjdXRpb24gcGFyYW1ldGVyczpcbiAgICAgICAgICpcbiAgICAgICAgICogPHN0cm9uZz5QcmUtZXhlY3V0aW9uIHBhcmFtZXRlcnM6PC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxvbD5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgaW5wdXRzIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBwYXNzIFJldm9EZXBsb3lSLWVuY29kZWRcbiAgICAgICAgICogICAgICAgUiBvYmplY3QgdmFsdWVzIGFzIGlucHV0cy4gVGhlc2UgaW5wdXRzIGFyZSB0dXJuZWQgaW50byBSIG9iamVjdHNcbiAgICAgICAgICogICAgICAgaW4gdGhlIHdvcmtzcGFjZSBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIGNzdmlucHV0cyBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gcGFzcyBSIG9iamVjdCBwcmltaXRpdmVcbiAgICAgICAgICogICAgICAgdmFsdWVzIGFzIGNvbW1hLXNlcGFyYXRlZCBuYW1lL3ZhbHVlIHBhaXJzLiBUaGVzZSBpbnB1dHMgYXJlIHR1cm5lZFxuICAgICAgICAgKiAgICAgICBpbnRvIFIgb2JqZWN0cyBpbiB0aGUgd29ya3NwYWNlIGJlZm9yZSB0aGUgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgcHJlbG9hZGZpbGUgcGFyYW1ldGVycyBhbGxvd3MgdGhlIGNhbGxlciB0byBsb2FkIG9uZSBvciBtb3JlXG4gICAgICAgICAqICAgICAgIGZpbGVzIGZyb20gdGhlIHJlcG9zaXRvcnkgaW50byB0aGUgd29ya2luZyBkaXJlY3RvcnkgYmVmb3JlIHRoZVxuICAgICAgICAgKiAgICAgICBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBwcmVsb2Fkb2JqZWN0IHBhcmFtZXRlcnMgYWxsb3cgdGhlIGNhbGxlciB0byBsb2FkIG9uZSBvciBtb3JlXG4gICAgICAgICAqICAgICAgIGJpbmFyeSBSIG9iamVjdHMgKC5yRGF0YSkgZnJvbSB0aGUgcmVwb3NpdG9yeSBpbnRvIHRoZSB3b3Jrc3BhY2VcbiAgICAgICAgICogICAgICAgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBhZG9wdCBwYXJhbWV0ZXJzIGFsbG93IHRoZSBjYWxsZXIgdG8gbG9hZCBhIHByZS1leGlzdGluZ1xuICAgICAgICAgKiAgICAgICBwcm9qZWN0IHdvcmtzcGFjZSwgcHJvamVjdCB3b3JraW5nIGRpcmVjdG9yeSBhbmQvb3IgcHJvamVjdCBwYWNrYWdlXG4gICAgICAgICAqICAgICAgIGRlcGVuZGVuY2llcyBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqIDwvb2w+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+UG9zdC1leGVjdXRpb24gcGFyYW1ldGVyczo8L3N0cm9uZz5cbiAgICAgICAgICpcbiAgICAgICAgICogPG9sPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSByb2JqZWN0cyBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIG9iamVjdCBuYW1lcyB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgYXMgUmV2b0RlcGxveVItZW5jb2RlZCBSXG4gICAgICAgICAqICAgICAgIG9iamVjdHMgb24gdGhlIHJlc3BvbnNlIG1hcmt1cCBhZnRlciB0aGUgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVmaWxlIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBzcGVjaWZ5IGEgY29tbWEtc2VwYXJhdGVkXG4gICAgICAgICAqICAgICAgIGxpc3Qgb2Ygd29ya2luZyBkaXJlY3RvcnkgZmlsZXMgdG8gYmUgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyXG4gICAgICAgICAqICAgICAgIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZW9iamVjdCBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIHdvcmtzcGFjZSBvYmplY3RzIHRvIGJlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGVcbiAgICAgICAgICogICAgICAgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmV3b3Jrc3BhY2UgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHN0b3JlIHRoZSBlbnRpcmVcbiAgICAgICAgICogICAgICAgd29ya3NwYWNlIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZWRpcmVjdG9yeSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBhIHRhcmdldFxuICAgICAgICAgKiAgICAgICByZXBvc2l0b3J5IGRpcmVjdG9yeSBmb3Igc3RvcmVkIGZpbGVzIGFuZCBvYmplY3RzIGFmdGVyIHRoZSBleGVjdXRpb25cbiAgICAgICAgICogICAgICAgY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZW5ld3ZlcnNpb24gcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIGNyZWF0ZSBuZXdcbiAgICAgICAgICogICAgICAgdmVyc2lvbnMgb2YgZWFjaCBzdG9yZWQgZmlsZSBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uXG4gICAgICAgICAqICAgICAgIGNvbXBsZXRlcy4gQnkgZGVmYXVsdCwgc3RvcmVkIGZpbGVzIG92ZXJ3cml0ZSBhbnkgcHJlLWV4aXN0aW5nIGZpbGVcbiAgICAgICAgICogICAgICAgYnkgdGhlIHNhbWUgbmFtZS5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVwdWJsaWMgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIGFzc2lnbiBwdWJsaWMgYWNjZXNzXG4gICAgICAgICAqICAgICAgIHRvIGVhY2ggc3RvcmVkIGZpbGUgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICBUaGUgaW5maW5pdHkgLCBuYW4gYW5kIGVuY29kZURhdGFGcmFtZVByaW1pdGl2ZUFzVmVjdG9yIHBhcmFtZXRlcnNcbiAgICAgICAgICogICAgICBhbGxvdyB0aGUgY2FsbGVyIHRvIGNvbnRyb2wgaG93IFJldm9EZXBsb3lSLWVuY29kZWQgUiBvYmplY3QgZGF0YSBpc1xuICAgICAgICAgKiAgICAgIGVuY29kZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmtrdXAuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqIDwvb2w+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+U29tZSBrZXkgZGF0YSBpbmRpY2F0ZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cCBvbiB0aGlzIGNhbGw6PC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxvbD5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBjb25zb2xlIC0gaW5kaWNhdGVzIHRoZSBSIGNvbnNvbGUgb3V0cHV0IHJlc3VsdGluZyBmcm9tIHRoZSBleGVjdXRpb25cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICByZXN1bHRzIC0gaW5kaWNhdGVzIHRoZSBsaXN0IG9mIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgUiBncmFwaGljc1xuICAgICAgICAgKiAgICAgICBkZXZpY2VcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBhcnRpZmFjdHMgLSBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgZmlsZXMgZ2VuZXJhdGVkIG9yIG1vZGlmaWVkIGluIHRoZVxuICAgICAgICAgKiAgICAgICB3b3JraW5nIGRpcmVjdG9yeVxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIG9iamVjdHMgLSAgaW5kaWNhdGVzIHRoZSBsaXN0IG9mIFIgb2JqZWN0cyByZXR1cm5lZCBmcm9tIHRoZVxuICAgICAgICAgKiAgICAgICB3b3Jrc3BhY2VcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBmaWxlcyAtIGluZGljYXRlcyB0aGUgbGlzdCBvZiBmaWxlcyBhbmQgb2JqZWN0cyBzdG9yZWQgaW4gdGhlXG4gICAgICAgICAqICAgICAgIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXNcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBpbnRlcnJ1cHRlZCAtIGluZGljYXRlcyB0aGUgaW50ZXJydXB0ZWQgc3RhdHVzIG9mIGV4ZWN1dGlvblxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIGVycm9yIC0gb24gZmFpbHVyZSwgaW5kaWNhdGVzIHRoZSByZWFzb24gZm9yIGZhaWx1cmVcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBlcnJvckNvZGUgLSBvbiBmYWlsdXJlLCBpbmRpY2F0ZXMgdGhlIGVycm9yIGNvZGUgZm9yIGZhaWx1cmVcbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogPC9vbD5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5U2NyaXB0UmVuZGVyXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+cHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHByb2plY3QgaWRlbnRpZmllcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0XG4gICAgICAgICAqICAgICAgIGZpbGVuYW1lc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnktbWFuYWdlZCBkaXJlY3RvcmllcyBmb3JcbiAgICAgICAgICogICAgICAgc2NyaXB0cywgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIG9uZSBhdXRob3IgcGVyIGZpbGVuYW1lXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD52ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCBvbmUgdmVyc2lvbiBwZXIgZmlsZW5hbWVcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmV4dGVybmFsc291cmNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIFVSTHMgb3IgZmlsZSBwYXRocyB0byBleHRlcm5hbFxuICAgICAgICAgKiAgICAgICBzY3JpcHRzXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5pbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBSZXZvRGVwbG95Ui1lbmNvZGVkIHNjcmlwdCBpbnB1dHM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Y3N2aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcHJpbWl0aXZlIG5hbWUvdmFsdWUgaW5wdXRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnkgZmlsZW5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxlYXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycywgYXV0aG9yLXBlci1wcmVsb2FkZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZGZpbGV2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsIHZlcnNpb24tcGVyLXByZWxvYWRmaWxlbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0bmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnkgb2JqZWN0ICguckRhdGEpIGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgYXV0aG9ycywgYXV0aG9yLXBlci1wcmVsb2Fkb2JqZWN0bmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2Fkb2JqZWN0dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1vYmplY3QtcHJlbG9hZG9iamVjdG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHR3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCB3b3Jrc3BhY2UgaXMgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hZG9wdGRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlkZW50aWZpZXMgcHJvamVjdCBmcm9tIHdoaWNoIGRpcmVjdG9yeSBpcyB0byBiZSBhZG9wdGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFkb3B0cGFja2FnZXM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCBwYWNrYWdlIGRlcGVuZGVuY2llcyBhcmUgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmJsYWNrYm94PC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgZXhlY3V0aW9uIHdpbGwgb2NjdXIgb24gdGhlIEhUVFAgYmxhY2tib3ggcHJvamVjdCBmb3IgdGhlIGN1cnJlbnQgSFRUUCBzZXNzaW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+cmVjeWNsZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgcmVjeWNsZXMgdGhlIFIgc2Vzc2lvbiBhc3NvY2lhdGVkIHdpdGggdGhlIEhUVFAgYmxhY2tib3ggcHJvamVjdCBvbiB0aGUgY3VycmVudCBIVFRQIHNlc3Npb248L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dGFnPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgdGFnIHRoYXQgbGFiZWxzIHRoZSBleGVjdXRpb248L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZWNob29mZjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUgUiBjb21tYW5kcyB3aWxsIG5vdCBhcHBlYXIgaW4gdGhlIGNvbnNvbGUgb3V0cHV0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNvbnNvbGVvZmY8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlIGNvbnNvbGUgb3V0cHV0IGlzIG5vdCByZXR1cm5lZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmdyYXBoaWNzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHByZWZlcnJlZCBSIGdyYXBoaWNzIGRldmljZSBmb3IgZXhlY3V0aW9uOiBwbmcgb3Igc3ZnPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmdyYXBoaWNzd2lkdGg8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgcHJlZmVycmVkIHdpZHRoIGZvciBSIGdyYXBoaWNzIGRldmljZSBpbWFnZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Z3JhcGhpY3NoZWlnaHQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgcHJlZmVycmVkIGhlaWdodCBmb3IgUiBncmFwaGljcyBkZXZpY2UgaW1hZ2VzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJvYmplY3RzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygb2JqZWN0cyBmb3IgcmV0cmlldmFsIGZvbGxvd2luZyB0aGUgZXhlY3V0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3JlZmlsZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHdvcmtpbmcgZGlyZWN0b3J5IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZW9iamVjdDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHdvcmtzcGFjZSBvYmplY3QgbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmV3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBmaWxlbmFtZSAoLnJEYXRhKSB3aGVyZSB3b3Jrc3BhY2UgY29udGVudHMgd2lsbCBiZSBzYXZlZCBpbiB0aGUgcmVwb3NpdG9yeTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZW5ld3ZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZW5zdXJlcyBlYWNoIGZpbGUgc3RvcmVkIGluIHJlcG9zaXRvcnkgcmVzdWx0cyBpbiBuZXcgdmVyc2lvbiBiZWluZyBjcmVhdGVkIGlmIG5lZWRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZXB1YmxpYzwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBwdWJsaXNoZXMgZWFjaCBmaWxlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5pbmZpbml0eTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgY3VzdG9tIHZhbHVlIGZvciBJbmZpbml0eSBhcHBlYXJpbmcgaW4gUiBvYmplY3RcbiAgICAgICAgICogICAgICAgZGF0YSByZXR1cm5lZCBvbiBjYWxsLCBvdGhlcndpc2UgSW5maW5pdHkgaXMgcmVwcmVzZW50ZWQgYnlcbiAgICAgICAgICogICAgICAgMHg3ZmYwMDAwMDAwMDAwMDAwTFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmFuPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyBjdXN0b20gdmFsdWUgZm9yIE5hTiBhcHBlYXJpbmcgaW4gUiBvYmplY3QgZGF0YVxuICAgICAgICAgKiAgICAgICByZXR1cm5lZCBvbiBjYWxsLCBvdGhlcndpc2UgTmFOIGlzIHJlcHJlc2VudGVkIGJ5IG51bGxcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmVuY29kZURhdGFGcmFtZVByaW1pdGl2ZUFzVmVjdG9yPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUsIGRhdGEuZnJhbWUgcHJpbWl0aXZlcyBhcmUgZW5jb2RlZCB2ZWN0b3JzIGluIFJcbiAgICAgICAgICogICAgICAgb2JqZWN0IGRhdGEgcmV0dXJuZWQgb24gY2FsbFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlTY3JpcHRSZW5kZXI6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L3NjcmlwdC9yZW5kZXInLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGludGVycnVwdHMgdGhlIGN1cnJlbnQgZXhlY3V0aW9uIG9uIHRoZSBIVFRQIEJsYWNrYm94IHByb2plY3RcbiAgICAgICAgICogYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IEhUVFAgc2Vzc2lvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5U2NyaXB0SW50ZXJydXB0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5U2NyaXB0SW50ZXJydXB0OiBmdW5jdGlvbihjYWxsYmFjaykgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvc2NyaXB0L2ludGVycnVwdCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gUmVwb3NpdG9yeSBGaWxlIEFQSXNcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgbGlzdHMgcmVwb3NpdG9yeS1tYW5hZ2VkIGZpbGVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlGaWxldExpc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSB3aGVuIHNwZWNpZmllZCwgY2FsbCByZXR1cm5zIGxpc3Qgb2Ygc2NyaXB0IHZlcnNpb25zIGZvclxuICAgICAgICAgKiAgICAgICBmaWxlbmFtZVxuICAgICAgICAgKiAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSB0YXJnZXQgcmVwb3NpdG9yeSBkaXJlY3RvcnksIGRlZmF1bHRzIHRvIHJvb3RcbiAgICAgICAgICogICAgICAgaW5jbHVkZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c2hhcmVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBmaWxlcyB0aGF0IGFyZSByZXN0cmljdGVkIGJ1dFxuICAgICAgICAgKiAgICAgICB2aXNpYmxlIG9yIHNoYXJlZCBieSBvdGhlciB1c2VycyBhcmUgaW5jbHVkZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHVibGlzaGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBzY3JpcHRzIHB1Ymxpc2hlZCBieSBvdGhlciB1c2VycyBhcmVcbiAgICAgICAgICogICAgICAgaW5jbHVkZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Y2F0ZWdvcnlGaWx0ZXI8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgd2hlbiBzcGVjaWZpZWQgbGlzdCBvZiBmaWxlcyBpbiByZXNwb25zZSBtYXJrdXAgaXMgbGltaXRlZFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlGaWxlTGlzdDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZmlsZS9saXN0JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgdXBsb2FkcyBhIGZpbGUgZnJvbSB0aGUgdXNlcidzIGNvbXB1dGVyIHRvIHRoZSByZXBvc2l0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlGaWxlVXBsb2FkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIG5hbWUgb2YgdGhlIGZpbGUgdG8gdXBsb2FkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+Li4uZmlsZSBjb250ZW50Li4uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgZGVzY3JpcHRpb24gdG8gYXNzb2NpYXRlIHdpdGggdGhlIHVwbG9hZGVkIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnRhZ3M8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGFnIHdvcmRzIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSByZXBvc2l0b3J5IGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVzdHJpY3RlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygcm9sZSBuYW1lcywgd2hpY2ggbWFrZXMgdGhlIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIHVzZXJzIHdpdGggdGhlc2Ugcm9sZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgPGR0PnNoYXJlZDwvZHQ+XG4gICAgICAgICAqICAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgZmlsZSB3aWxsIGJlIHNoYXJlZCB3aGljaCBtYWtlcyB0aGUgZmlsZSB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgdXNlcnM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHVibGlzaGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGZpbGUgd2lsbCBiZSBwdWJsaXNoZWQgd2hpY2ggbWFrZXMgdGhlIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIGFuZCBhbm9ueW1vdXMgdXNlcnM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmV3dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSByZXBvc2l0b3J5IHdpbGwgY3JlYXRlIG5ldyB2ZXJzaW9uIHJhdGhlciB0aGFuIG92ZXJ3cml0ZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uZXd2ZXJzaW9ubXNnPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgbmV3dmVyc2lvbiBpcyB0cnVlLCBtZXNzYWdlIHRvIGFzc29jaWF0ZSB3aXRoIG5ldyB2ZXJzaW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgaW5wdXRzIHByb3BlcnR5IG9uIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5vdXRwdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBvdXRwdXRzIHByb3BlcnR5IG9uIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeUZpbGVVcGxvYWQ6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbmZpZy5mb3JtYXQgPSBcInRleHRcIjtcbiAgICAgICAgICAgIHZhciBpb0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjb25maWcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBjb25maWcuZm9ybUlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogY2FsbGJhY2tcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9maWxlL3VwbG9hZCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgdHJhbnNmZXJzIGEgZmlsZSBmcm9tIGEgVVJMIHRvIHRoZSByZXBvc2l0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlGaWxlVHJhbnNmZXJcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgbmFtZSBvZiB0aGUgZmlsZSB0byB1cGxvYWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dXJsPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyBhIHVybCBvZiB0aGUgZmlsZSB0byB1cGxvYWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgZGVzY3JpcHRpb24gdG8gYXNzb2NpYXRlIHdpdGggdGhlIHVwbG9hZGVkIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dGFnczwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0YWcgd29yZHMgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHJlcG9zaXRvcnkgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yZXN0cmljdGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByb2xlIG5hbWVzLCB3aGljaCBtYWtlcyB0aGUgZmlsZSB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgdXNlcnMgd2l0aCB0aGVzZSByb2xlczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICA8ZHQ+c2hhcmVkPC9kdD5cbiAgICAgICAgICogICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBmaWxlIHdpbGwgYmUgc2hhcmVkIHdoaWNoIG1ha2VzIHRoZSBmaWxlIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCB1c2VyczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wdWJsaXNoZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgZmlsZSB3aWxsIGJlIHB1Ymxpc2hlZCB3aGljaCBtYWtlcyB0aGUgZmlsZSB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgYW5kIGFub255bW91cyB1c2VyczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uZXd2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIHJlcG9zaXRvcnkgd2lsbCBjcmVhdGUgbmV3IHZlcnNpb24gcmF0aGVyIHRoYW4gb3ZlcndyaXRlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5ld3ZlcnNpb25tc2c8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiBuZXd2ZXJzaW9uIGlzIHRydWUsIG1lc3NhZ2UgdG8gYXNzb2NpYXRlIHdpdGggbmV3IHZlcnNpb248L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBpbnB1dHMgcHJvcGVydHkgb24gYSByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm91dHB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIG91dHB1dHMgcHJvcGVydHkgb24gYSByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0PC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RmlsZVRyYW5zZmVyOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9maWxlL3RyYW5zZmVyJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCB3cml0ZXMgYSB0ZXh0IGZpbGUgdG8gdGhlIHJlcG9zaXRvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeUZpbGVXcml0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyBuYW1lIG9mIHRoZSBmaWxlIHRvIHVwbG9hZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD50ZXh0PC9kdD5cbiAgICAgICAgICogICAgPGRkPnNwZWNpZmllcyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBmaWxlIHRvIHVwbG9hZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSB0YXJnZXQgcmVwb3NpdG9yeSBkaXJlY3RvcnksIGRlZmF1bHRzIHRvIHJvb3RcbiAgICAgICAgICogICAgICAgaW5jbHVkZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIGEgZGVzY3JpcHRpb24gdG8gYXNzb2NpYXRlIHdpdGggdGhlIHVwbG9hZGVkXG4gICAgICAgICAqICAgICAgIGZpbGVcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnRhZ3M8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRhZyB3b3JkcyB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcmVwb3NpdG9yeSBmaWxlXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yZXN0cmljdGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygcm9sZSBuYW1lcywgd2hpY2ggbWFrZXNcbiAgICAgICAgICogICAgICAgdGhlIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIHVzZXJzIHdpdGggdGhlc2Ugcm9sZXNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNoYXJlPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUsIGlsZSBpcyBzaGFyZWQgYW5kIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCB1c2Vyc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHVibGlzaDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgZmlsZSB3aWxsIGJlIHB1Ymxpc2hlZCB3aGljaCBtYWtlcyB0aGUgZmlsZVxuICAgICAgICAgKiAgICAgICB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgYW5kIGFub255bW91cyB1c2Vyc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmV3dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgcmVwb3NpdG9yeSB3aWxsIGNyZWF0ZSBuZXcgdmVyc2lvbiByYXRoZXJcbiAgICAgICAgICogICAgICAgdGhhbiBvdmVyd3JpdGVcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5ld3ZlcnNpb25tc2c8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgbmV3dmVyc2lvbiBpcyB0cnVlLCBtZXNzYWdlIHRvIGFzc29jaWF0ZSB3aXRoIG5ld1xuICAgICAgICAgKiAgICAgICB2ZXJzaW9uXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5pbnB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBpbnB1dHMgcHJvcGVydHkgb24gYSByZXBvc2l0b3J5LW1hbmFnZWRcbiAgICAgICAgICogICAgICAgc2NyaXB0XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5vdXRwdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgb3V0cHV0cyBwcm9wZXJ0eSBvbiBhIHJlcG9zaXRvcnktbWFuYWdlZFxuICAgICAgICAgKiAgICAgICBzY3JpcHRcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RmlsZVdyaXRlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9maWxlL3dyaXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCB1cGRhdGVzIHRoZSBwcm9wZXJ0aWVzIG9uIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIGZpbGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeUZpbGVVcGRhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgbmFtZSBvZiB0aGUgZmlsZSB0byB1cGxvYWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIGEgZGVzY3JpcHRpb24gdG8gYXNzb2NpYXRlIHdpdGggdGhlIHVwbG9hZGVkIGZpbGU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dGFnczwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0YWcgd29yZHMgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHJlcG9zaXRvcnkgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yZXN0cmljdGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIChvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygcm9sZSBuYW1lcywgd2hpY2ggbWFrZXNcbiAgICAgICAgICogICAgICAgdGhlIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIHVzZXJzIHdpdGggdGhlc2Ugcm9sZXNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIDxkdD5zaGFyZWQ8L2R0PlxuICAgICAgICAgKiAgICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIGZpbGUgd2lsbCBiZSBzaGFyZWQgd2hpY2ggbWFrZXMgdGhlIGZpbGUgdmlzaWJsZSB0byBhdXRoZW50aWNhdGVkIHVzZXJzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnB1Ymxpc2hlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBmaWxlIHdpbGwgYmUgcHVibGlzaGVkIHdoaWNoIG1ha2VzIHRoZSBmaWxlIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCBhbmQgYW5vbnltb3VzIHVzZXJzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgaW5wdXRzIHByb3BlcnR5IG9uIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5vdXRwdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBvdXRwdXRzIHByb3BlcnR5IG9uIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeUZpbGVVcGRhdGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2ZpbGUvdXBkYXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCByZXZlcnRzIHRoZSBjdXJyZW50IHdvcmtpbmcgY29weSBvZiBhIGZpbGUgdG8gYSBzcGVjaWZpYyB2ZXJzaW9uXG4gICAgICAgICAqIGZvdW5kIGluIHRoZSBmaWxlcyB2ZXJzaW9uIGhpc3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeUZpbGVSZXZlcnRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgbmFtZSBvZiB0aGUgZmlsZSB0byB1cGxvYWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHJlcG9zaXRvcnkgZmlsZSB2ZXJzaW9uIHRvIHJldmVydCBpbnRvIHRoZSBjdXJyZW50IHdvcmtpbmcgY29weTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSB0YXJnZXQgcmVwb3NpdG9yeSBkaXJlY3RvcnksIGRlZmF1bHRzIHRvIHJvb3RcbiAgICAgICAgICogICAgICAgaW5jbHVkZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBkZXNjcmlwdGlvbiB0byBhc3NvY2lhdGUgd2l0aCB0aGUgdXBsb2FkZWQgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yZXN0cmljdGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByb2xlIG5hbWVzLCB3aGljaCBtYWtlcyB0aGUgZmlsZSB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgdXNlcnMgd2l0aCB0aGVzZSByb2xlczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICA8ZHQ+c2hhcmVkPC9kdD5cbiAgICAgICAgICogICAgIDxkZD4ob3B0aW9uYWwpIGlmIHRydWUsIHRoZSBmaWxlIHdpbGwgYmUgc2hhcmVkIHdoaWNoIG1ha2VzIHRoZSBmaWxlIHZpc2libGUgdG8gYXV0aGVudGljYXRlZCB1c2VyczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wdWJsaXNoZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiB0cnVlLCB0aGUgZmlsZSB3aWxsIGJlIHB1Ymxpc2hlZCB3aGljaCBtYWtlcyB0aGUgZmlsZSB2aXNpYmxlIHRvIGF1dGhlbnRpY2F0ZWQgYW5kIGFub255bW91cyB1c2VyczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uZXd2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgdHJ1ZSwgdGhlIHJlcG9zaXRvcnkgd2lsbCBjcmVhdGUgbmV3IHZlcnNpb24gcmF0aGVyIHRoYW4gb3ZlcndyaXRlPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5ld3ZlcnNpb25tc2c8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiBuZXd2ZXJzaW9uIGlzIHRydWUsIG1lc3NhZ2UgdG8gYXNzb2NpYXRlIHdpdGggbmV3IHZlcnNpb248L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBpbnB1dHMgcHJvcGVydHkgb24gYSByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm91dHB1dHM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIG91dHB1dHMgcHJvcGVydHkgb24gYSByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0PC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RmlsZVJldmVydDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZmlsZS9yZXZlcnQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGdlbmVyYXRlcyBhIGRpZmYgYmV0d2VlbiB0aGUgY3VycmVudCB3b3JraW5nIGNvcHkgb2YgYSBmaWxlIGFuZFxuICAgICAgICAgKiBhIHNwZWNpZmljIHZlcnNpb24gZm91bmQgaW4gdGhlIGZpbGVzIHZlcnNpb24gaGlzdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RmlsZURpZmZcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHJlcG9zaXRvcnkgZmlsZSBuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIHJlcG9zaXRvcnkgZmlsZSBhdXRob3I8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgc3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgdmVyc2lvbiB0byBkaWZmIGFnYWluc3QgdGhlIGN1cnJlbnRcbiAgICAgICAgICogICAgICAgd29ya2luZyBjb3B5XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSB0YXJnZXQgcmVwb3NpdG9yeSBkaXJlY3RvcnksIGRlZmF1bHRzIHRvIHJvb3RcbiAgICAgICAgICogICAgICAgaW5jbHVkZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlGaWxlRGlmZjogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZmlsZS9kaWZmJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBncmFudHMgb3duZXJzaGlwIHJpZ2h0cyBvbiBhIGZpbGUgdG8gb25lIG9yIG1vcmUgYXV0aGVudGljYXRlZFxuICAgICAgICAgKiB1c2Vycy5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90ZSwgdW5saWtlIG1vc3QgcmVwb3NpdG9yeSBBUElzIHRoYXQgcmVxdWlyZSBib3RoIGZpbGVuYW1lIGFuZCBhdXRob3JcbiAgICAgICAgICogcGFyYW1ldGVycywgdGhlcmUgaXMgbm8gZXhwbGljaXQgYXV0aG9yIHBhcmFtZXRlciBvbiB0aGlzIGNhbGwuIFRoZSBhdXRob3JcbiAgICAgICAgICogaXMgdW5kZXJzdG9vZCB0byBiZSB0aGUgY2FsbGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlGaWxlR3JhbnRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5zcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgZmlsZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5uZXdhdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+IHNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGdyYW50ZWUgdXNlcm5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJldm9rZWF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXZva2VlIHVzZXJuYW1lc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeUZpbGVHcmFudDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZmlsZS9ncmFudCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZG93bmxvYWRzIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIGZpbGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeUZpbGVEb3dubG9hZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgICA8ZHQ+ZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD5zcGVjaWZpZXMgdGhlIHJlcG9zaXRvcnkgZmlsZSBuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+c3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGF1dGhvcjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSB0YXJnZXQgcmVwb3NpdG9yeSBkaXJlY3RvcnksIGRlZmF1bHRzIHRvIHJvb3RcbiAgICAgICAgICogICAgICAgaW5jbHVkZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD52ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHJlcG9zaXRvcnkgZmlsZSB2ZXJzaW9uPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RmlsZURvd25sb2FkOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9maWxlL2Rvd25sb2FkJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBkZWxldGVzIGEgZmlsZSBmcm9tIHRoZSByZXBvc2l0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlGaWxlRGVsZXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPnNwZWNpZmllcyB0aGUgcmVwb3NpdG9yeSBmaWxlIG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RmlsZURlbGV0ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZmlsZS9kZWxldGUnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGZldGNoZXMgdGhlIGxhdGVzdCBtZXRhLWRhdGEgb24gYSBmaWxlIGluIHRoZSByZXBvc2l0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlGaWxlRmV0Y2hcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+c3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgYXV0aG9yXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSB0YXJnZXQgcmVwb3NpdG9yeSBkaXJlY3RvcnksIGRlZmF1bHRzIHRvIHJvb3RcbiAgICAgICAgICogICAgICAgaW5jbHVkZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHJlcG9zaXRvcnkgZmlsZSB2ZXJzaW9uXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeUZpbGVGZXRjaDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZmlsZS9mZXRjaCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgY29waWVzIG9uZSBvciBtb3JlIHJlcG9zaXRvcnktbWFuYWdlZCBmaWxlcyB0byB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICogZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgZGVzdGluYXRpb24gZGlyZWN0b3J5IGFscmVhZHkgY29udGFpbnMgYSBmaWxlbmFtZSBtYXRjaGluZyBhblxuICAgICAgICAgKiBpbmNvbWluZyBmaWxlbmFtZSwgdGhlbiBhIG5ldyB2ZXJzaW9uIG9mIHRoZSBmaWxlIGlzIGF1dG9tYXRpY2FsbHkgY3JlYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RmlsZUNvcHlcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+c3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5kaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSB0YXJnZXQgcmVwb3NpdG9yeSBkaXJlY3RvcnksIGRlZmF1bHRzIHRvIHJvb3RcbiAgICAgICAgICogICAgICAgaW5jbHVkZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVzdGluYXRpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkZXN0aW5hdGlvbiB1c2VyIGRpcmVjdG9yeSBpblxuICAgICAgICAgKiAgICAgICB0aGUgcmVwb3NpdG9yeVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHJlcG9zaXRvcnkgZmlsZSB2ZXJzaW9uXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlcmVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIG5ldyBmaWxlbmFtZXMgZm9yIGNvcGllZCBmaWxlc1xuICAgICAgICAgKiAgICAgICBpZGVudGlmaWVkIG9uIGZpbGVuYW1lIHBhcmFtZXRlclxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlGaWxlQ29weTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZmlsZS9jb3B5JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBtb3ZlcyBvbmUgb3IgbW9yZSByZXBvc2l0b3J5LW1hbmFnZWQgZmlsZXMgdG8gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAqIGRpcmVjdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBhbHJlYWR5IGNvbnRhaW5zIGEgZmlsZW5hbWUgbWF0Y2hpbmcgYW5cbiAgICAgICAgICogaW5jb21pbmcgZmlsZW5hbWUsIHRoZW4gYSBuZXcgdmVyc2lvbiBvZiB0aGUgZmlsZSBpcyBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeUZpbGVNb3ZlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPnNwZWNpZmllcyB0aGUgcmVwb3NpdG9yeSBmaWxlIG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc3RpbmF0aW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgZGVzdGluYXRpb24gdXNlciBkaXJlY3RvcnkgaW5cbiAgICAgICAgICogICAgICAgdGhlIHJlcG9zaXRvcnlcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSByZXBvc2l0b3J5IGZpbGUgdmVyc2lvblxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlGaWxlTW92ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZmlsZS9tb3ZlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBSZXBvc2l0b3J5IERpcmVjdG9yeSBBUElzXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGxpc3RzIHJlcG9zaXRvcnktbWFuYWdlZCBkaXJlY3Rvcmllcy5cbiAgICAgICAgICogQnkgZGVmYXVsdCwgYSBsaXN0IG9mIHRoZSBjYWxsZXIncyB1c2VyIGRpcmVjdG9yaWVzICggcm9vdCBhbmQgY3VzdG9tICkgYXJlXG4gICAgICAgICAqIHJldHVybmVkIGluIHRoZSByZXNwb25zZSBtYXJrdXAuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSB1c2VyZmlsZXMgcGFyYW1ldGVyIGlzIHNwZWNpZmllZCwgdGhlIGZpbGVzIGluIGFsbCBvZiB0aGUgY2FsbGVyJ3NcbiAgICAgICAgICogdXNlciBkaXJlY3RvcmllcyBhcmUgbGlzdGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXAuIE5vdGUsIGRlcGVuZGluZyBvbiB0aGVcbiAgICAgICAgICogbnVtYmVyIG9mIGZpbGVzIG93bmVkIGJ5IHRoZSBjYWxsZXIsIHdoZW4gdGhpcyBwYXJhbWV0ZXIgaXMgZW5hYmxlZCB0aGVcbiAgICAgICAgICogcmVzcG9uc2UgbWFya3VwIHJldHVybmVkIG9uIHRoaXMgY2FsbCBjYW4gYmUgYSB2ZXJib3NlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgZGlyZWN0b3J5IHBhcmFtZXRlciBpcyBzcGVjaWZpZWQgdGhlbiBvbmx5IHRoZSBmaWxlcyBpbiB0aGVcbiAgICAgICAgICogZGlyZWN0b3J5IGluZGljYXRlZCBhcmUgcmV0dXJuZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cC5cbiAgICAgICAgICpcbiAgICAgICAgICogQWRkaXRpb25hbCBwYXJhbWV0ZXJzIGFyZSBwcm92aWRlZCB0byByZXR1cm4gZmlsZXMgaW4gdGhlIGNhbGxlcidzIGFyY2hpdmVkXG4gICAgICAgICAqIGRpcmVjdG9yaWVzIGFuZC9vciBmaWxlcyBpbiB0aGUgUmVzdHJpY3RlZCAsIFNoYXJlZCBhbmQgUHVibGljIHN5c3RlbVxuICAgICAgICAgKiBkaXJlY3Rvcmllcy5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90ZTogVGhlIG1ldGFkYXRhIHByb3BlcnR5IGluIHRoZSByZXNwb25zZSBtYXJrdXAgb24gdGhpcyBjYWxsIGlzIHByb3ZpZGVkXG4gICAgICAgICAqIGFzIGEgY29udmVuaWVuY2UgZm9yIGNsaWVudCBhcHBsaWNhdGlvbiBkZXZlbG9wZXJzLiBJdCBwcm92aWRlcyBhIGNvbXBsZXRlXG4gICAgICAgICAqIGxpc3QgZm8gdGhlIHVzZXIgZGlyZWN0b3JpZXMgYXZhaWxhYmxlIHRvIHRoZSBjdXJyZW50IGNhbGxlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RGlyZWN0b3J5TGlzdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PnVzZXJmaWxlczwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiBzcGVjaWZpZWQsIGZpbGVzIGluIGFsbCB1c2VyIGRpcmVjdG9yaWVzIGFyZSBsaXN0ZWQgaW5cbiAgICAgICAgICogICAgICAgdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFyY2hpdmVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUsIGZpbGVzIGZvdW5kIGluIGFyY2hpdmVkIGRpcmVjdG9yaWVzIGFyZSBpbmNsdWRlZFxuICAgICAgICAgKiAgICAgICBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zaGFyZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgdHJ1ZSwgZmlsZXMgdGhhdCBhcmUgcmVzdHJpY3RlZCBidXQgdmlzaWJsZSBvciBzaGFyZWRcbiAgICAgICAgICogICAgICAgYnkgb3RoZXIgdXNlcnMgYXJlIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnB1Ymxpc2hlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCBmaWxlcyB0aGF0IGFyZSBwdWJsaXNoZWQgYnkgb3RoZXIgdXNlcnMgYXJlXG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RGlyZWN0b3J5TGlzdDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2xpc3QnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGNyZWF0ZXMgYSByZXBvc2l0b3J5LW1hbmFnZWQgY3VzdG9tIGRpcmVjdG9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIG5hbWUgb2YgdGhlIG5ldyBjdXN0b20gZGlyZWN0b3J5IGlzIGFscmVhZHkgaW4gdXNlIGJ5IHRoZSBjYWxsZXIgdGhlXG4gICAgICAgICAqIHJlc3BvbnNlIG1hcmt1cCB3aWxsIGluZGljYXRlIGFuIGFwcHJvcHJpYXRlIGVycm9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlEaXJlY3RvcnlMaXN0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RGlyZWN0b3J5Q3JlYXRlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvY3JlYXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCByZW5hbWVzIGFuIGV4aXN0aW5nIHJlcG9zaXRvcnktbWFuYWdlZCB1c2VyIGRpcmVjdG9yeVxuICAgICAgICAgKiAoIGN1c3RvbSBvciBhcmNoaXZlZCApLiBXaGVuIHJlbmFtaW5nIGEgdXNlciBkaXJlY3RvcnksIGFsbCBmaWxlcyBpbiB0aGVcbiAgICAgICAgICogc291cmNlIGRpcmVjdG9yeSBhcmUgYXV0b21hdGljYWxseSBtb3ZlZCB0byB0aGUgZGVzdGluYXRpb24gZGlyZWN0b3J5LiBJZlxuICAgICAgICAgKiB0aGUgZGVzdGluYXRpb24gZGlyZWN0b3J5IGFscmVhZHkgZXhpc3RzIHRoZSBjYWxsIHdpbGwgYmUgcmVqZWN0ZWQgYW5kIHRoZVxuICAgICAgICAgKiByZXNwb25zZSBtYXJrdXAgd2lsbCBpbmRpY2F0ZSBhbiBhcHByb3ByaWF0ZSBlcnJvci5cbiAgICAgICAgICpcbiAgICAgICAgICogWW91IGNhbiB1c2UgdGhpcyBjYWxsIHRvIGNvbnZlcnQgYW4gYXJjaGl2ZWQgZGlyZWN0b3J5IGJhY2sgaW50byBhIGN1c3RvbVxuICAgICAgICAgKiBkaXJlY3RvcnksIGVzc2VudGlhbGx5IHVuYXJjaGl2aW5nIHRoZSBhcmNoaXZlZCBkaXJlY3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGU6IFlvdSBjYW4gbm90IHJlbmFtZSB0aGUgcm9vdCBkaXJlY3RvcnkuIFRvIG1vdmUgZmlsZXMgZnJvbSB0aGUgcm9vdFxuICAgICAgICAgKiBkaXJlY3RvcnkgdXNlIHRoZSAvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9tb3ZlIGNhbGwuXG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+SW1wb3J0YW50Ojwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGNhbGwgd2lsbCBvbmx5IG1vdmUgZmlsZXMgdGhhdCBhcmUgb3duZWQgYnkgYSBzaW5nbGUgYXV0aG9yIHRvIHRoZVxuICAgICAgICAgKiBkZXN0aW5hdGlvbiBkaXJlY3RvcnkuIElmIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIGZpbGUgaW4gdGhlIHNvdXJjZSBkaXJlY3RvcnlcbiAgICAgICAgICogaGFzIG11bHRpcGxlIGF1dGhvcnMsIGFzIGEgcmVzdWx0IG9mIGNvbGxhYm9yYXRpb24gdXNpbmcgdGhlXG4gICAgICAgICAqIC9yL3JlcG9zaXRvcnkvZmlsZS9ncmFudCBjYWxsLCB0aGUgZmlsZSB3aWxsIG5vdCBiZSBtb3ZlZCB0byB0aGVcbiAgICAgICAgICogZGVzdGluYXRpb24gZGlyZWN0b3J5IGFuZCBhIHdhcm5pbmcgdG8gdGhhdCBhZmZlY3Qgd2lsbCBiZSBpbmRpY2F0ZWQgaW4gdGhlXG4gICAgICAgICAqIHJlc3BvbnNlIG1hcmt1cC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RGlyZWN0b3J5UmVuYW1lXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc3RpbmF0aW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgbmV3IG5hbWUgZm9yIHRoZSBkZXN0aW5hdGlvbiBjdXN0b20gZGlyZWN0b3J5XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeURpcmVjdG9yeVJlbmFtZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykgeyAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvcmVuYW1lJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqIFxuICAgICAgICAgKiBUaGlzIGNhbGwgY29waWVzIG9uZSBvciBtb3JlIHJlcG9zaXRvcnktbWFuYWdlZCBmaWxlcyBmcm9tIGEgc291cmNlIHVzZXJcbiAgICAgICAgICogZGlyZWN0b3J5IHRvIGEgZGVzdGluYXRpb24gdXNlciBkaXJlY3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBmaWxlbmFtZSBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkLCBvbmx5IHRob3NlIGZpbGVzIGluZGljYXRlZCBvbiB0aGF0XG4gICAgICAgICAqIHBhcmFtZXRlciBhcmUgY29waWVkLiBPdGhlcndpc2UsIGFsbCBmaWxlcyBpbiB0aGUgc291cmNlIGRpcmVjdG9yeSBhcmVcbiAgICAgICAgICogY29waWVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBlbnN1cmUgY29weWluZyBmaWxlcyBkb2VzIG5vdCBhY2NpZGVudGFsbHkgb3ZlcndyaXRlIGFueSBleGlzdGluZyBmaWxlc1xuICAgICAgICAgKiBpbiB0aGUgZGVzdGluYXRpb24gZGlyZWN0b3J5LCBhbGwgY29waWVkIGZpbGVzIGFyZSBjcmVhdGVkIGFzIG5ldyB2ZXJzaW9uc1xuICAgICAgICAgKiBpbiB0aGUgZGVzdGluYXRpb24gZGlyZWN0b3J5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlEaXJlY3RvcnlDb3B5XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc3RpbmF0aW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgbmV3IG5hbWUgZm9yIHRoZSBkZXN0aW5hdGlvbiBjdXN0b20gZGlyZWN0b3J5XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBmaWxlbmFtZXMgdG8gYmUgY29waWVkLiBJZiBvbWl0dGVkLFxuICAgICAgICAgKiAgICAgICBhbGwgZmlsZXMgaW4gdGhlIHNvdXJjZSBkaXJlY3RvcnkgYXJlIGNvcGllZFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZmlsZXJlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBuZXcgZmlsZW5hbWVzIGZvciBjb3BpZWQgZmlsZXNcbiAgICAgICAgICogICAgICAgaWRlbnRpZmllZCBvbiBmaWxlbmFtZSBwYXJhbWV0ZXJcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RGlyZWN0b3J5Q29weTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2NvcHknLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIG1vdmVzIG9uZSBvciBtb3JlIHJlcG9zaXRvcnktbWFuYWdlZCBmaWxlcyBmcm9tIGEgc291cmNlIHVzZXJcbiAgICAgICAgICogZGlyZWN0b3J5IHRvIGEgZGVzdGluYXRpb24gdXNlciBkaXJlY3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBmaWxlbmFtZSBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkLCBvbmx5IHRob3NlIGZpbGVzIGluZGljYXRlZCBvbiB0aGF0XG4gICAgICAgICAqIHBhcmFtZXRlciBhcmUgbW92ZWQuIE90aGVyd2lzZSwgYWxsIGZpbGVzIGluIHRoZSBzb3VyY2UgZGlyZWN0b3J5IGFyZSBtb3ZlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gZW5zdXJlIG1vdmluZyBmaWxlcyBkb2VzIG5vdCBhY2NpZGVudGFsbHkgb3ZlcndyaXRlIGFueSBleGlzdGluZyBmaWxlc1xuICAgICAgICAgKiBpbiB0aGUgZGVzdGluYXRpb24gZGlyZWN0b3J5LCBhbGwgbW92ZWQgZmlsZXMgYXJlIGNyZWF0ZWQgYXMgbmV3IHZlcnNpb25zXG4gICAgICAgICAqIGluIHRoZSBkZXN0aW5hdGlvbiBkaXJlY3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIDxzdHJvbmc+SW1wb3J0YW50Ojwvc3Ryb25nPlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGNhbGwgd2lsbCBvbmx5IG1vdmUgZmlsZXMgdGhhdCBhcmUgb3duZWQgYnkgYSBzaW5nbGUgYXV0aG9yIHRvIHRoZVxuICAgICAgICAgKiBkZXN0aW5hdGlvbiBkaXJlY3RvcnkuIElmIGEgcmVwb3NpdG9yeS1tYW5hZ2VkIGZpbGUgaW4gdGhlIHNvdXJjZSBkaXJlY3RvcnlcbiAgICAgICAgICogaGFzIG11bHRpcGxlIGF1dGhvcnMsIGFzIHJlc3VsdCBvZiBjb2xsYWJvcmF0aW9uIHVzaW5nIHRoZVxuICAgICAgICAgKiAvci9yZXBvc2l0b3J5L2ZpbGUvZ3JhbnQgY2FsbCwgdGhlIGZpbGUgd2lsbCBub3QgYmUgbW92ZWQgdG8gdGhlXG4gICAgICAgICAqIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBhbmQgYSB3YXJuaW5nIHRvIHRoYXQgYWZmZWN0IHdpbGwgYmUgaW5kaWNhdGVkIGluIHRoZVxuICAgICAgICAgKiByZXNwb25zZSBtYXJrdXAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeURpcmVjdG9yeU1vdmVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5kaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSB0YXJnZXQgcmVwb3NpdG9yeSBkaXJlY3RvcnksIGRlZmF1bHRzIHRvIHJvb3RcbiAgICAgICAgICogICAgICAgaW5jbHVkZWQgaW4gdGhlIHJlc3BvbnNlIG1hcmt1cFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVzdGluYXRpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBuZXcgbmFtZSBmb3IgdGhlIGRlc3RpbmF0aW9uIGN1c3RvbSBkaXJlY3RvcnlcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGZpbGVuYW1lcyB0byBiZSBjb3BpZWQuIElmIG9taXR0ZWQsXG4gICAgICAgICAqICAgICAgIGFsbCBmaWxlcyBpbiB0aGUgc291cmNlIGRpcmVjdG9yeSBhcmUgY29waWVkXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeURpcmVjdG9yeU1vdmU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9tb3ZlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCB1cGRhdGVzIHJlcG9zaXRvcnktbWFuYWdlZCBmaWxlIGFjY2VzcyBjb250cm9scyBieSBkaXJlY3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBmaWxlbmFtZSBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkLCBvbmx5IHRob3NlIGZpbGVzIGluZGljYXRlZCBvbiB0aGF0XG4gICAgICAgICAqIHBhcmFtZXRlciBhcmUgdXBkYXRlZC4gT3RoZXJ3aXNlLCBhbGwgZmlsZXMgaW4gdGhlIHNvdXJjZSBkaXJlY3RvcnkgYXJlXG4gICAgICAgICAqIHVwZGF0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeURpcmVjdG9yeVVwZGF0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PmRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXBvc2l0b3J5IGRpcmVjdG9yeSwgZGVmYXVsdHMgdG8gcm9vdFxuICAgICAgICAgKiAgICAgICBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5maWxlbmFtZTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBmaWxlbmFtZXMgdG8gYmUgY29waWVkLiBJZiBvbWl0dGVkLFxuICAgICAgICAgKiAgICAgICBhbGwgZmlsZXMgaW4gdGhlIHNvdXJjZSBkaXJlY3RvcnkgYXJlIGNvcGllZFxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVzdHJpY3RlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIG5ldyBuYW1lIGZvciB0aGUgZGVzdGluYXRpb24gY3VzdG9tIGRpcmVjdG9yeVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c2hhcmVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBmaWxlcyBhcmUgc2hhcmVkIGFuZCB2aXNpYmxlIHRvXG4gICAgICAgICAqICAgICAgIGF1dGhlbnRpY2F0ZWQgdXNlcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnB1Ymxpc2hlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZmlsZXMgYXJlIHB1Ymxpc2hlZCBhbmQgdmlzaWJsZSB0b1xuICAgICAgICAgKiAgICAgICBhdXRoZW50aWNhdGVkIGFuZCBhbm9ueW1vdXMgdXNlcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RGlyZWN0b3J5VXBkYXRlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvdXBkYXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBhcmNoaXZlcyBvbmUgb3IgbW9yZSByZXBvc2l0b3J5LW1hbmFnZWQgZmlsZXMgZnJvbSBhIHNvdXJjZSB1c2VyXG4gICAgICAgICAqIGRpcmVjdG9yeSAoIHJvb3Qgb3IgY3VzdG9tICkgdG8gYW4gYXJjaGl2ZSBkaXJlY3RvcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSB2YWx1ZSBvZiB0aGUgYXJjaGl2ZSBwYXJhbWV0ZXIgaW5kaWNhdGVzIGFuIGV4aXN0aW5nIGFyY2hpdmVcbiAgICAgICAgICogZGlyZWN0b3J5IHRoZW4gdGhlIGZpbGVzIGluIHRoZSBzb3VyY2UgZGlyZWN0b3J5IGFyZSBhZGRlZCB0byB0aGUgZXhpc3RpbmdcbiAgICAgICAgICogYXJjaGl2ZS4gT3RoZXJ3aXNlLCBhIG5ldyBhcmNoaXZlIGRpcmVjdG9yeSBpcyBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgb25cbiAgICAgICAgICogYmVoYWxmIG9mIHRoZSBjYWxsZXIuIEFyY2hpdmVkIGRpcmVjdG9yaWVzIGF1dG9tYXRpY2FsbHkgaGF2ZSBhIC5hcmNoaXZlXG4gICAgICAgICAqIHBvc3RmaXggYXBwZW5kZWQgdG8gdGhlaXIgbmFtZSBpZiBpdCBpcyBub3Qgc3VwcGxpZWQgb24gdGhlIGFyY2hpdmVcbiAgICAgICAgICogcGFyYW1ldGVyIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBhbGwgb2YgdGhlIGZpbGVzIGluIHRoZSBzb3VyY2UgZGlyZWN0b3J5IGFyZSBzdWNjZXNzZnVsbHkgYXJjaGl2ZWQsIHRoZVxuICAgICAgICAgKiBzb3VyY2UgZGlyZWN0b3J5IGlzIGF1dG9tYXRpY2FsbHkgZGVsZXRlZCBmcm9tIHRoZSByZXBvc2l0b3J5LiBJZiB0aGVcbiAgICAgICAgICogc291cmNlIGRpcmVjdG9yeSB3YXMgcm9vdCAsIGFuIGVtcHR5IHJvb3QgZGlyZWN0b3J5IGlzIHByZXNlcnZlZC4gSWYgYW55IG9mXG4gICAgICAgICAqIHRoZSBmaWxlcyBpbiB0aGUgc291cmNlIGRpcmVjdG9yeSBhcmUgc2tpcHBlZCBvciBjYW4gbm90IGJlIGFyY2hpdmVkIChzZWVcbiAgICAgICAgICogZm9sbG93aW5nIG5vdGUpLCB0aG9zZSBmaWxlcyBhbmQgdGhlIHNvdXJjZSBkaXJlY3RvcnkgYXJlIHByZXNlcnZlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogPHN0cm9uZz5JbXBvcnRhbnQ6PC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgY2FsbCB3aWxsIG9ubHkgYXJjaGl2ZSBmaWxlcyB0aGF0IGFyZSBvd25lZCBieSBhIHNpbmdsZSBhdXRob3IgdG8gdGhlXG4gICAgICAgICAqIGRlc3RpbmF0aW9uIGRpcmVjdG9yeS4gSWYgYSByZXBvc2l0b3J5LW1hbmFnZWQgZmlsZSBpbiB0aGUgc291cmNlIGRpcmVjdG9yeVxuICAgICAgICAgKiBoYXMgbXVsdGlwbGUgYXV0aG9ycywgYXMgYSByZXN1bHQgb2YgY29sbGFib3JhdGlvbiB1c2luZyB0aGVcbiAgICAgICAgICogL3IvcmVwb3NpdG9yeS9maWxlL2dyYW50IGNhbGwsIHRoZSBmaWxlIHdpbGwgbm90IGJlIGFyY2hpdmVkIHRvIHRoZVxuICAgICAgICAgKiBkZXN0aW5hdGlvbiBkaXJlY3RvcnkgYW5kIGEgd2FybmluZyB0byB0aGF0IGFmZmVjdCB3aWxsIGJlIGluZGljYXRlZCBpbiB0aGVcbiAgICAgICAgICogcmVzcG9uc2UgbWFya3VwLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlcG9zaXRvcnlEaXJlY3RvcnlBcmNoaXZlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGZpbGVuYW1lcyB0byBiZSBjb3BpZWQuIElmIG9taXR0ZWQsXG4gICAgICAgICAqICAgICAgIGFsbCBmaWxlcyBpbiB0aGUgc291cmNlIGRpcmVjdG9yeSBhcmUgY29waWVkXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yZXN0cmljdGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgbmV3IG5hbWUgZm9yIHRoZSBkZXN0aW5hdGlvbiBjdXN0b20gZGlyZWN0b3J5XG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zaGFyZWQ8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIGZpbGVzIGFyZSBzaGFyZWQgYW5kIHZpc2libGUgdG9cbiAgICAgICAgICogICAgICAgYXV0aGVudGljYXRlZCB1c2Vyc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHVibGlzaGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBmaWxlcyBhcmUgcHVibGlzaGVkIGFuZCB2aXNpYmxlIHRvXG4gICAgICAgICAqICAgICAgIGF1dGhlbnRpY2F0ZWQgYW5kIGFub255bW91cyB1c2Vyc1xuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcG9zaXRvcnlEaXJlY3RvcnlBcmNoaXZlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9hcmNoaXZlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCB1cGxvYWRzIGEgc2V0IG9mIGZpbGVzIGluIGEgemlwIGFyY2hpdmUgaW50byBhbiBleGlzdGluZ1xuICAgICAgICAgKiByZXBvc2l0b3J5LW1hbmFnZWQgdXNlciBkaXJlY3RvcnkgKCByb290ICwgY3VzdG9tIG9yIGFyY2hpdmVkICkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeURpcmVjdG9yeVVwbG9hZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0PmZpbGU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIC4uLnppcCBhcmNoaXZlIGZpbGUgY29udGVudC4uLlxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyBhIGRlc2NyaXB0aW9uIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSB1cGxvYWRlZCBmaWxlXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD50YWdzPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0YWcgd29yZHMgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHJlcG9zaXRvcnkgZmlsZVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cmVzdHJpY3RlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIG5ldyBuYW1lIGZvciB0aGUgZGVzdGluYXRpb24gY3VzdG9tIGRpcmVjdG9yeVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c2hhcmVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIDxjb2RlPnRydWU8L2NvZGU+LCBmaWxlcyBhcmUgc2hhcmVkIGFuZCB2aXNpYmxlIHRvXG4gICAgICAgICAqICAgICAgIGF1dGhlbnRpY2F0ZWQgdXNlcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnB1Ymxpc2hlZDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZmlsZXMgYXJlIHB1Ymxpc2hlZCBhbmQgdmlzaWJsZSB0b1xuICAgICAgICAgKiAgICAgICBhdXRoZW50aWNhdGVkIGFuZCBhbm9ueW1vdXMgdXNlcnNcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0Pm5ld3ZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+XG4gICAgICAgICAqICAgICAgIChvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIHRoZSByZXBvc2l0b3J5IHdpbGwgY3JlYXRlIG5ld1xuICAgICAgICAgKiAgICAgICB2ZXJzaW9uIHJhdGhlciB0aGFuIG92ZXJ3cml0ZVxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+bmV3dmVyc2lvbm1zZzwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiBuZXd2ZXJzaW9uIGlzIHRydWUsIG1lc3NhZ2UgdG8gYXNzb2NpYXRlIHdpdGggbmV3XG4gICAgICAgICAqICAgICAgIHZlcnNpb25cbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RGlyZWN0b3J5VXBsb2FkOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgICAgICAgICBjb25maWcuZm9ybWF0ID0gJ3RleHQnO1xuICAgICAgICAgICAgdmFyIGlvQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IGNvbmZpZyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBjb25maWcuZm9ybUlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogY2FsbGJhY2tcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvdXBsb2FkJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBkb3dubG9hZHMgb25lIG9yIG1vcmUgcmVwb3NpdG9yeS1tYW5hZ2VkIGZpbGVzIGZyb20gYSBkaXJlY3RvcnlcbiAgICAgICAgICogaW4gdGhlIHJlcG9zaXRvcnkuIFRoZSByZXNwb25zZSB0eXBlIG9uIHRoaXMgY2FsbCBpcyBhIHppcCBhcmNoaXZlIGZpbGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBmaWxlbmFtZSBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkLCBvbmx5IHRob3NlIGZpbGVzIGluZGljYXRlZCBvbiB0aGF0XG4gICAgICAgICAqIHBhcmFtZXRlciBhcmUgZG93bmxvYWRlZC4gT3RoZXJ3aXNlLCBhbGwgZmlsZXMgaW4gdGhlIHNvdXJjZSBkaXJlY3RvcnkgYXJlXG4gICAgICAgICAqIGRvd25sb2FkZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVwb3NpdG9yeURpcmVjdG9yeURvd25sb2FkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGZpbGVuYW1lcyB0byBiZSBjb3BpZWQuIElmIG9taXR0ZWQsXG4gICAgICAgICAqICAgICAgIGFsbCBmaWxlcyBpbiB0aGUgc291cmNlIGRpcmVjdG9yeSBhcmUgY29waWVkXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwb3NpdG9yeURpcmVjdG9yeURvd25sb2FkOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvZG93bmxvYWQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIGRlbGV0ZXMgYSByZXBvc2l0b3J5LW1hbmFnZWQgdXNlciBkaXJlY3RvcnkgKCByb290ICwgY3VzdG9tIG9yXG4gICAgICAgICAqIGFyY2hpdmVkICkuXG4gICAgICAgICAqXG4gICAgICAgICAqIFdoZW4gZGVsZXRpbmcgYSB1c2VyIGRpcmVjdG9yeSwgYWxsIGZpbGVzIGluIHRoZSBkaXJlY3RvcnkgYXJlXG4gICAgICAgICAqIGF1dG9tYXRpY2FsbHkgZGVsZXRlZCBhbG9uZyB3aXRoIHRoZSBkaXJlY3RvcnkuIElmIHRoZSB0YXJnZXQgZGlyZWN0b3J5IGlzXG4gICAgICAgICAqIHJvb3QsIGFuIGVtcHR5IHJvb3QgZGlyZWN0b3J5IGlzIHByZXNlcnZlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZXBvc2l0b3J5RGlyZWN0b3J5RGVsZXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogICAgICAgIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgICAgICogPGRsPlxuICAgICAgICAgKiAgICA8ZHQ+ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlcG9zaXRvcnkgZGlyZWN0b3J5LCBkZWZhdWx0cyB0byByb290XG4gICAgICAgICAqICAgICAgIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXBvc2l0b3J5RGlyZWN0b3J5RGVsZXRlOiBmdW5jdGlvbihjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbygnL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvZGVsZXRlJywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBKb2IgQVBJc1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgLyoqICBcbiAgICAgICAgICogVGhpcyBjYWxsIGxpc3RzIGpvYnMgZm9yIHRoZSBjdXJyZW50bHkgYXV0aGVudGljYXRlZCB1c2VyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgb3Blbm9ubHkgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHNlZSBvbmx5IHRob3NlIGpvYnMgaW4gYW4gb3BlblxuICAgICAgICAgKiBzdGF0ZS4gVGhlIHNldCBvZiBqb2Igb3BlbiBzdGF0ZXMgYXJlIHNob3duIGhlcmU6XG4gICAgICAgICAqXG4gICAgICAgICAqIDx1bD5cbiAgICAgICAgICogIDxsaT5TY2hlZHVsZWQgOiBqb2IgaXMgc2NoZWR1bGVkIGJ1dCBub3QgeWV0IHF1ZXVlZCBmb3IgcnVubmluZy48L2xpPlxuICAgICAgICAgKiAgPGxpPlF1ZXVlZCA6IGpvYiBpcyBxdWV1ZWQgZm9yIHJ1bm5pbmcuPC9saT5cbiAgICAgICAgICogIDxsaT5SdW5uaW5nIDogam9iIGlzIHJ1bm5pbmcuPC9saT5cbiAgICAgICAgICogPC91bD5cbiAgICAgICAgICpcbiAgICAgICAgICogPGJsb2NrcXVvdGU+XG4gICAgICAgICAqICAgIEltcG9ydGFudCEgQW55IG9wZW4gam9iIGNhbiBiZSBjYW5jZWxsZWQgdXNpbmcgdGhlXG4gICAgICAgICAqICAgIDxhIGhyZWY9XCIjbWV0aG9kX2pvYkNhbmNlbFwiPmpvYkNhbmNlbDwvYT4gY2FsbC5cbiAgICAgICAgICogPC9ibG9ja3F1b3RlPlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGpvYkxpc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5vcGVub25seTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlLCBvbmx5IGpvYnMgaW4gYW4gb3Blbi1zdGF0ZSBhcmUgbGlzdGVkIGluIHRoZVxuICAgICAgICAgKiAgICAgICByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmV4dGVuZGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIElmIHRydWUsIGFkZGl0aW9uYWwgZGF0YSBwcm9wZXJ0aWVzIGRlc2NyaWJpbmcgZWFjaCBqb2JcbiAgICAgICAgICogICAgICAgYXJlIGxpc3RlZCBpbiB0aGUgcmVzcG9uc2UgbWFya3VwXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgam9iTGlzdDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL2pvYi9saXN0JywgY29uZmlnLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY2FsbCBzdWJtaXRzIGEgam9iIGZvciBiYWNrZ3JvdW5kIGV4ZWN1dGlvbiBvbiBiZWhhbGYgb2YgdGhlIHVzZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIHN1Ym1pdCB0aGUgZXhlY3V0aW9uIG9mIGFuIGFyYml0cmFyeSBibG9jayBvZiBSIGNvZGUgdGhlIGNhbGxlciBtdXN0XG4gICAgICAgICAqIHByb3ZpZGUgYSB2YWx1ZSBvbiB0aGUgY29kZSBwYXJhbWV0ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIHN1Ym1pdCB0aGUgZXhlY3V0aW9uIG9mIGEgc2luZ2xlIHJlcG9zaXRvcnktbWFuYWdlZCBzY3JpcHQgdGhlIGNhbGxlclxuICAgICAgICAgKiBtdXN0IHByb3ZpZGUgcGFyYW1ldGVyIHZhbHVlcyBmb3IgcnNjcmlwdG5hbWUgLCByc2NyaXB0YXV0aG9yIGFuZFxuICAgICAgICAgKiBvcHRpb25hbGx5IHJzY3JpcHR2ZXJzaW9uIC4gVG8gc3VibWl0IHRoZSBleGVjdXRpb24gb2YgYSBjaGFpbiBvZlxuICAgICAgICAgKiByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0cyB0aGUgY2FsbGVyIG11c3QgcHJvdmlkZSBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0XG4gICAgICAgICAqIG9mIHZhbHVlcyBvbiB0aGUgcnNjcmlwdG5hbWUsLCBfcnNjcmlwdGF1dGhvciBhbmQgb3B0aW9uYWxseSByc2NyaXB0dmVyc2lvblxuICAgICAgICAgKiBwYXJhbWV0ZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBzdWJtaXQgdGhlIGV4ZWN1dGlvbiBvZiBhIHNpbmdsZSBleHRlcm5hbCBzY3JpcHQgdGhlIGNhbGxlciBtdXN0XG4gICAgICAgICAqIHByb3ZpZGUgYSB2YWxpZCBVUkwgb3IgZmlsZSBwYXRoIHVzaW5nIHRoZSBleHRlcm5hbHNvdXJjZSBwYXJhbWV0ZXIuIFRvXG4gICAgICAgICAqIHN1Ym1pdCB0aGUgZXhlY3V0aW9uIG9mIGEgY2hhaW4gb2YgZXh0ZXJuYWwgc2NyaXB0cyB0aGUgY2FsbGVyIG11c3RcbiAgICAgICAgICogcHJvdmlkZSBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZhbHVlcyBvbiB0aGUgZXh0ZXJuYWxzb3VyY2UgcGFyYW1ldGVyLlxuICAgICAgICAgKiBOb3RlLCB0byBzdWJtaXQgdGhlIGV4ZWN1dGlvbiBvZiBhbiBleHRlcm5hbCBzY3JpcHQgdGhlIGNhbGxlciBtdXN0IGhhdmVcbiAgICAgICAgICogUE9XRVJfVVNFUiBwcml2aWxlZ2VzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOiBBIGNoYWluZWQgZXhlY3V0aW9uIGV4ZWN1dGVzIGVhY2ggb2YgdGhlIHNjcmlwdHMgaWRlbnRpZmllZCBvbiB0aGVcbiAgICAgICAgICogY2FsbCBpbiBhIHNlcXVlbnRpYWwgZmFzaGlvbiBvbiB0aGUgUiBzZXNzaW9uIGZvciB0aGUgam9iLCB3aXRoIGV4ZWN1dGlvblxuICAgICAgICAgKiBvY2N1cmluZyBpbiB0aGUgb3JkZXIgc3BlY2lmaWVkIG9uIHRoZSBwYXJhbWV0ZXIgbGlzdC5cbiAgICAgICAgICpcbiAgICAgICAgICogUGxlYXNlIG5vdCB0aGUgZm9sbG93aW5nIHByZSBhbmQgcG9zdCBleGVjdXRpb24gcGFyYW1ldGVyczpcbiAgICAgICAgICpcbiAgICAgICAgICogPHN0cm9uZz5QcmUtZXhlY3V0aW9uIHBhcmFtZXRlcnM6PC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxvbD5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgaW5wdXRzIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBwYXNzIFJldm9EZXBsb3lSLWVuY29kZWRcbiAgICAgICAgICogICAgICAgUiBvYmplY3QgdmFsdWVzIGFzIGlucHV0cy4gVGhlc2UgaW5wdXRzIGFyZSB0dXJuZWQgaW50byBSIG9iamVjdHNcbiAgICAgICAgICogICAgICAgaW4gdGhlIHdvcmtzcGFjZSBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHByZWxvYWRmaWxlIHBhcmFtZXRlcnMgYWxsb3dzIHRoZSBjYWxsZXIgdG8gbG9hZCBvbmUgb3IgbW9yZVxuICAgICAgICAgKiAgICAgICBmaWxlcyBmcm9tIHRoZSByZXBvc2l0b3J5IGludG8gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IGJlZm9yZSB0aGVcbiAgICAgICAgICogICAgICAgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgcHJlbG9hZG9iamVjdCBwYXJhbWV0ZXJzIGFsbG93IHRoZSBjYWxsZXIgdG8gbG9hZCBvbmUgb3IgbW9yZVxuICAgICAgICAgKiAgICAgICBiaW5hcnkgUiBvYmplY3RzICguckRhdGEpIGZyb20gdGhlIHJlcG9zaXRvcnkgaW50byB0aGUgd29ya3NwYWNlXG4gICAgICAgICAqICAgICAgIGJlZm9yZSB0aGUgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgYWRvcHQgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIGxvYWQgYSBwcmUtZXhpc3RpbmdcbiAgICAgICAgICogICAgICAgcHJvamVjdCB3b3Jrc3BhY2UsIHByb2plY3Qgd29ya2luZyBkaXJlY3RvcnkgYW5kL29yIHByb2plY3QgcGFja2FnZVxuICAgICAgICAgKiAgICAgICBkZXBlbmRlbmNpZXMgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8c3Ryb25nPlBvc3QtZXhlY3V0aW9uIHBhcmFtZXRlcnM6PC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxvbD5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVmaWxlIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciBzcGVjaWZ5IGEgY29tbWEtc2VwYXJhdGVkXG4gICAgICAgICAqICAgICAgIGxpc3Qgb2Ygd29ya2luZyBkaXJlY3RvcnkgZmlsZXMgdG8gYmUgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyXG4gICAgICAgICAqICAgICAgIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZW9iamVjdCBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIHdvcmtzcGFjZSBvYmplY3RzIHRvIGJlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGVcbiAgICAgICAgICogICAgICAgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmV3b3Jrc3BhY2UgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHN0b3JlIHRoZSBlbnRpcmVcbiAgICAgICAgICogICAgICAgd29ya3NwYWNlIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZWRpcmVjdG9yeSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBhIHRhcmdldFxuICAgICAgICAgKiAgICAgICByZXBvc2l0b3J5IGRpcmVjdG9yeSBmb3Igc3RvcmVkIGZpbGVzIGFuZCBvYmplY3RzIGFmdGVyIHRoZSBleGVjdXRpb25cbiAgICAgICAgICogICAgICAgY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZW5ld3ZlcnNpb24gcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIGNyZWF0ZSBuZXdcbiAgICAgICAgICogICAgICAgdmVyc2lvbnMgb2YgZWFjaCBzdG9yZWQgZmlsZSBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uXG4gICAgICAgICAqICAgICAgIGNvbXBsZXRlcy4gQnkgZGVmYXVsdCwgc3RvcmVkIGZpbGVzIG92ZXJ3cml0ZSBhbnkgcHJlLWV4aXN0aW5nIGZpbGVcbiAgICAgICAgICogICAgICAgYnkgdGhlIHNhbWUgbmFtZS5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVwdWJsaWMgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIGFzc2lnbiBwdWJsaWMgYWNjZXNzXG4gICAgICAgICAqICAgICAgIHRvIGVhY2ggc3RvcmVkIGZpbGUgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3Jlbm9wcm9qZWN0IHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBza2lwIHRoZVxuICAgICAgICAgKiAgICAgICBwZXJzaXN0ZW5jZS10by1wcm9qZWN0IHN0ZXAgYWZ0ZXIgdGhlIGV4ZWN1dGlvbi5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogPC9vbD5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBqb2JTdWJtaXRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5uYW1lPC9kdD5cbiAgICAgICAgICogICAgPGRkPmpvYiBuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmRlc2NyPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgam9iIGRlc2NyaXB0aW9uPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNvZGU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBSIGNvZGUgdG8gZXhlY3V0ZSBvbiBqb2I8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5yc2NyaXB0bmFtZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeS1tYW5hZ2VkIHNjcmlwdCBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cnNjcmlwdGRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHJlcG9zaXRvcnktbWFuYWdlZCBkaXJlY3RvcmllcyBmb3Igc2NyaXB0cywgZGVmYXVsdHMgdG8gcm9vdDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnJzY3JpcHRhdXRob3I8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIGF1dGhvci1wZXItcnNjcmlwdG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5yc2NyaXB0dmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsIHZlcnNpb24tcGVyLXJzY3JpcHRuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+ZXh0ZXJuYWxzb3VyY2U8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIFVSTHMgb3IgZmlsZSBwYXRocyB0byBleHRlcm5hbCBzY3JpcHRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBSZXZvRGVwbG95Ui1lbmNvZGVkIHNjcmlwdCBpbnB1dHM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+Y3N2aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcHJpbWl0aXZlIG5hbWUvdmFsdWUgaW5wdXRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+cHJlbG9hZGZpbGVuYW1lPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnByZWxvYWRmaWxlYXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBhdXRob3ItcGVyLXByZWxvYWRmaWxlbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnByZWxvYWRmaWxldmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsIHZlcnNpb24tcGVyLXByZWxvYWRmaWxlbmFtZTwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnByZWxvYWRvYmplY3RuYW1lPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IG9iamVjdCAoLnJEYXRhKSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5wcmVsb2Fkb2JqZWN0YXV0aG9yPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBhdXRob3ItcGVyLXByZWxvYWRvYmplY3RuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+cHJlbG9hZG9iamVjdHZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1vYmplY3QtcHJlbG9hZG9iamVjdG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5hZG9wdHdvcmtzcGFjZTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggd29ya3NwYWNlIGlzIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5hZG9wdGRpcmVjdG9yeTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggZGlyZWN0b3J5IGlzIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5hZG9wdHBhY2thZ2VzPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCBwYWNrYWdlIGRlcGVuZGVuY2llcyBhcmUgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnByaW9yaXR5PC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIHNjaGVkdWxpbmcgcHJpb3JpdHkgZm9yIHRoZSBqb2I6IGxvdyAoZGVmYXVsdCksIG1lZGl1bSBvciBoaWdoPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+dGFnPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSB0YWcgdGhhdCBsYWJlbHMgdGhlIGV4ZWN1dGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PmVjaG9vZmY8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD5cbiAgICAgICAgICogICAgICAgKG9wdGlvbmFsKSBpZiB0cnVlIFIgY29tbWFuZHMgd2lsbCBub3QgYXBwZWFyIGluIHRoZSBjb25zb2xlIG91dHB1dFxuICAgICAgICAgKiAgICAgICBzYXZlZCBvbiB0aGUgcHJvamVjdCBleGVjdXRpb24gaGlzdG9yeSBmb3IgdGhlIGpvYlxuICAgICAgICAgKiAgICA8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5ncmFwaGljczwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHByZWZlcnJlZCBSIGdyYXBoaWNzIGRldmljZSBmb3IgZXhlY3V0aW9uOiBwbmcgb3Igc3ZnPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+Z3JhcGhpY3N3aWR0aDwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHByZWZlcnJlZCB3aWR0aCBmb3IgUiBncmFwaGljcyBkZXZpY2UgaW1hZ2VzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+Z3JhcGhpY3NoZWlnaHQ8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgaGVpZ2h0IGZvciBSIGdyYXBoaWNzIGRldmljZSBpbWFnZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5zdG9yZWZpbGU8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHdvcmtpbmcgZGlyZWN0b3J5IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnN0b3Jlb2JqZWN0PC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB3b3Jrc3BhY2Ugb2JqZWN0IG5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+c3RvcmV3b3Jrc3BhY2U8L2R0PlxuICAgICAgICAgKiAgICAgIDxkZD4ob3B0aW9uYWwpIGZpbGVuYW1lICguckRhdGEpIHdoZXJlIHdvcmtzcGFjZSBjb250ZW50cyB3aWxsIGJlIHNhdmVkIGluIHRoZSByZXBvc2l0b3J5PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICA8ZHQ+c3RvcmVuZXd2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgZW5zdXJlcyBlYWNoIGZpbGUgc3RvcmVkIGluIHJlcG9zaXRvcnkgcmVzdWx0cyBpbiBuZXcgdmVyc2lvbiBiZWluZyBjcmVhdGVkIGlmIG5lZWRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgPGR0PnN0b3JlcHVibGljPC9kdD5cbiAgICAgICAgICogICAgICA8ZGQ+KG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgcHVibGlzaGVzIGVhY2ggZmlsZSBzdG9yZWQgaW4gdGhlIHJlcG9zaXRvcnk8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5zdG9yZW5vcHJvamVjdDwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIG5vIHByb2plY3QgcGVyc2lzdGVuY2UgZm9sbG93aW5nIGpvYiBleGVjdXRpb248L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIGpvYlN1Ym1pdDogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL2pvYi9zdWJtaXQnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjYWxsIHNjaGVkdWxlcyBhIGpvYiBmb3IgYmFja2dyb3VuZCBleGVjdXRpb24gb24gYmVoYWxmIG9mIHRoZSB1c2VyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgc2NoZWRzdGFydCBwYXJhbWV0ZXIgaWRlbnRpZmllcyB0aGUgc3RhcnQgdGltZSBmb3IgdGhlIGpvYi4gVGhpc1xuICAgICAgICAgKiBwYXJhbWV0ZXIgdmFsdWUgaXMgc3BlY2lmaWVkIGFzIFVUQyBpbiBtaWxsaXNlY29uZHMuIFRoZSBzY2hlZHJlcGVhdFxuICAgICAgICAgKiBwYXJhbWV0ZXIgaW5kaWNhdGVzIHRoZSBudW1iZXIgb2YgdGltZXMgdGhlIGpvYiBpcyB0byBiZSByZXBlYXRlZCwgYW5kIGlmXG4gICAgICAgICAqIG9taXR0ZWQgdGhlIGpvYiBpcyBleGVjdXRlZCBqdXN0IG9uY2UuIFRoZSBzY2hlZGludGVydmFsIHBhcmFtZXRlclxuICAgICAgICAgKiBpbmRpY2F0ZXMgdGhlIGludGVydmFsLCBtZWFzdXJlZCBpbiBtaWxsaXNlY29uZHMsIGJldHdlZW4gcmVwZWF0XG4gICAgICAgICAqIGV4ZWN1dGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIHNjaGVkdWxlIHRoZSBleGVjdXRpb24gb2YgYW4gYXJiaXRyYXJ5IGJsb2NrIG9mIFIgY29kZSB0aGUgY2FsbGVyXG4gICAgICAgICAqIG11c3QgcHJvdmlkZSBhIHZhbHVlIG9uIHRoZSBjb2RlIHBhcmFtZXRlci5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gc2NoZWR1bGUgdGhlIGV4ZWN1dGlvbiBvZiBhIHNpbmdsZSByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0IHRoZVxuICAgICAgICAgKiBjYWxsZXIgbXVzdCBwcm92aWRlIHBhcmFtZXRlciB2YWx1ZXMgZm9yIHJzY3JpcHRuYW1lICwgcnNjcmlwdGF1dGhvciBhbmRcbiAgICAgICAgICogb3B0aW9uYWxseSByc2NyaXB0dmVyc2lvbiAuIFRvIHNjaGVkdWxlIHRoZSBleGVjdXRpb24gb2YgYSBjaGFpbiBvZlxuICAgICAgICAgKiByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0cyB0aGUgY2FsbGVyIG11c3QgcHJvdmlkZSBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0XG4gICAgICAgICAqIG9mIHZhbHVlcyBvbiB0aGUgcnNjcmlwdG5hbWUsLCBfcnNjcmlwdGF1dGhvciBhbmQgb3B0aW9uYWxseSByc2NyaXB0dmVyc2lvblxuICAgICAgICAgKiBwYXJhbWV0ZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBzY2hlZHVsZSB0aGUgZXhlY3V0aW9uIG9mIGEgc2luZ2xlIGV4dGVybmFsIHNjcmlwdCB0aGUgY2FsbGVyIG11c3RcbiAgICAgICAgICogcHJvdmlkZSBhIHZhbGlkIFVSTCBvciBmaWxlIHBhdGggdXNpbmcgdGhlIGV4dGVybmFsc291cmNlIHBhcmFtZXRlci4gVG9cbiAgICAgICAgICogc2NoZWR1bGUgdGhlIGV4ZWN1dGlvbiBvZiBhIGNoYWluIG9mIGV4dGVybmFsIHNjcmlwdHMgdGhlIGNhbGxlciBtdXN0XG4gICAgICAgICAqIHByb3ZpZGUgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2YWx1ZXMgb24gdGhlIGV4dGVybmFsc291cmNlIHBhcmFtZXRlci5cbiAgICAgICAgICogTm90ZSwgdG8gc2NoZWR1bGUgdGhlIGV4ZWN1dGlvbiBvZiBhbiBleHRlcm5hbCBzY3JpcHQgdGhlIGNhbGxlciBtdXN0XG4gICAgICAgICAqIGhhdmUgUE9XRVJfVVNFUiBwcml2aWxlZ2VzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOiBBIGNoYWluZWQgZXhlY3V0aW9uIGV4ZWN1dGVzIGVhY2ggb2YgdGhlIHNjcmlwdHMgaWRlbnRpZmllZCBvbiB0aGVcbiAgICAgICAgICogY2FsbCBpbiBhIHNlcXVlbnRpYWwgZmFzaGlvbiBvbiB0aGUgUiBzZXNzaW9uIGZvciB0aGUgam9iLCB3aXRoXG4gICAgICAgICAqIGV4ZWN1dGlvbiBvY2N1cmluZyBpbiB0aGUgb3JkZXIgc3BlY2lmaWVkIG9uIHRoZSBwYXJhbWV0ZXIgbGlzdC5cbiAgICAgICAgICpcbiAgICAgICAgICogUGxlYXNlIG5vdCB0aGUgZm9sbG93aW5nIHByZSBhbmQgcG9zdCBleGVjdXRpb24gcGFyYW1ldGVyczpcbiAgICAgICAgICpcbiAgICAgICAgICogPHN0cm9uZz5QcmUtZXhlY3V0aW9uIHBhcmFtZXRlcnM6PC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxvbD5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgaW5wdXRzIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBwYXNzIFJldm9EZXBsb3lSLWVuY29kZWRcbiAgICAgICAgICogICAgICAgUiBvYmplY3QgdmFsdWVzIGFzIGlucHV0cy4gVGhlc2UgaW5wdXRzIGFyZSB0dXJuZWQgaW50byBSIG9iamVjdHNcbiAgICAgICAgICogICAgICAgaW4gdGhlIHdvcmtzcGFjZSBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBiZWdpbnMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHByZWxvYWRmaWxlIHBhcmFtZXRlcnMgYWxsb3dzIHRoZSBjYWxsZXIgdG8gbG9hZCBvbmUgb3IgbW9yZVxuICAgICAgICAgKiAgICAgICBmaWxlcyBmcm9tIHRoZSByZXBvc2l0b3J5IGludG8gdGhlIHdvcmtpbmcgZGlyZWN0b3J5IGJlZm9yZSB0aGVcbiAgICAgICAgICogICAgICAgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgcHJlbG9hZG9iamVjdCBwYXJhbWV0ZXJzIGFsbG93IHRoZSBjYWxsZXIgdG8gbG9hZCBvbmUgb3IgbW9yZVxuICAgICAgICAgKiAgICAgICBiaW5hcnkgUiBvYmplY3RzICguckRhdGEpIGZyb20gdGhlIHJlcG9zaXRvcnkgaW50byB0aGUgd29ya3NwYWNlXG4gICAgICAgICAqICAgICAgIGJlZm9yZSB0aGUgZXhlY3V0aW9uIGJlZ2lucy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgYWRvcHQgcGFyYW1ldGVycyBhbGxvdyB0aGUgY2FsbGVyIHRvIGxvYWQgYSBwcmUtZXhpc3RpbmdcbiAgICAgICAgICogICAgICAgcHJvamVjdCB3b3Jrc3BhY2UsIHByb2plY3Qgd29ya2luZyBkaXJlY3RvcnkgYW5kL29yIHByb2plY3QgcGFja2FnZVxuICAgICAgICAgKiAgICAgICBkZXBlbmRlbmNpZXMgYmVmb3JlIHRoZSBleGVjdXRpb24gYmVnaW5zLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiA8L29sPlxuICAgICAgICAgKlxuICAgICAgICAgKiA8c3Ryb25nPlBvc3QtZXhlY3V0aW9uIHBhcmFtZXRlcnM6PC9zdHJvbmc+XG4gICAgICAgICAqXG4gICAgICAgICAqIDxvbD5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVmaWxlIHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciBzcGVjaWZ5IGEgY29tbWEtc2VwYXJhdGVkXG4gICAgICAgICAqICAgICAgIGxpc3Qgb2Ygd29ya2luZyBkaXJlY3RvcnkgZmlsZXMgdG8gYmUgc3RvcmVkIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyXG4gICAgICAgICAqICAgICAgIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZW9iamVjdCBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgc3BlY2lmeSBhIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICAgKiAgICAgICBsaXN0IG9mIHdvcmtzcGFjZSBvYmplY3RzIHRvIGJlIHN0b3JlZCBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGVcbiAgICAgICAgICogICAgICAgZXhlY3V0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmV3b3Jrc3BhY2UgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIHN0b3JlIHRoZSBlbnRpcmVcbiAgICAgICAgICogICAgICAgd29ya3NwYWNlIGluIHRoZSByZXBvc2l0b3J5IGFmdGVyIHRoZSBleGVjdXRpb24gY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZWRpcmVjdG9yeSBwYXJhbWV0ZXIgYWxsb3dzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBhIHRhcmdldFxuICAgICAgICAgKiAgICAgICByZXBvc2l0b3J5IGRpcmVjdG9yeSBmb3Igc3RvcmVkIGZpbGVzIGFuZCBvYmplY3RzIGFmdGVyIHRoZSBleGVjdXRpb25cbiAgICAgICAgICogICAgICAgY29tcGxldGVzLlxuICAgICAgICAgKiAgICA8L2xpPlxuICAgICAgICAgKiAgICA8bGk+XG4gICAgICAgICAqICAgICAgIFRoZSBzdG9yZW5ld3ZlcnNpb24gcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIGNyZWF0ZSBuZXdcbiAgICAgICAgICogICAgICAgdmVyc2lvbnMgb2YgZWFjaCBzdG9yZWQgZmlsZSBpbiB0aGUgcmVwb3NpdG9yeSBhZnRlciB0aGUgZXhlY3V0aW9uXG4gICAgICAgICAqICAgICAgIGNvbXBsZXRlcy4gQnkgZGVmYXVsdCwgc3RvcmVkIGZpbGVzIG92ZXJ3cml0ZSBhbnkgcHJlLWV4aXN0aW5nIGZpbGVcbiAgICAgICAgICogICAgICAgYnkgdGhlIHNhbWUgbmFtZS5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogICAgPGxpPlxuICAgICAgICAgKiAgICAgICBUaGUgc3RvcmVwdWJsaWMgcGFyYW1ldGVyIGFsbG93cyB0aGUgY2FsbGVyIHRvIGFzc2lnbiBwdWJsaWMgYWNjZXNzXG4gICAgICAgICAqICAgICAgIHRvIGVhY2ggc3RvcmVkIGZpbGUgaW4gdGhlIHJlcG9zaXRvcnkgYWZ0ZXIgdGhlIGV4ZWN1dGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAqICAgIDwvbGk+XG4gICAgICAgICAqICAgIDxsaT5cbiAgICAgICAgICogICAgICAgVGhlIHN0b3Jlbm9wcm9qZWN0IHBhcmFtZXRlciBhbGxvd3MgdGhlIGNhbGxlciB0byBza2lwIHRoZVxuICAgICAgICAgKiAgICAgICBwZXJzaXN0ZW5jZS10by1wcm9qZWN0IHN0ZXAgYWZ0ZXIgdGhlIGV4ZWN1dGlvbi5cbiAgICAgICAgICogICAgPC9saT5cbiAgICAgICAgICogPC9vbD5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBqb2JTY2hlZHVsZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhlIGNhbGwgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICAgICAqICAgICAgICBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqIDxkbD5cbiAgICAgICAgICogICAgPGR0Pm5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+am9iIG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+ZGVzY3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBqb2IgZGVzY3JpcHRpb248L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c2NoZWRzdGFydDwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyB0aGUgc3RhcnQgdGltZSBmb3Igam9iPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNjaGVkcmVwZWF0PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgdGltZXMgam9iIGlzIHRvIGJlIHJlcGVhdGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnNjaGVkaW50ZXJ2YWw8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgdGhlIGludGVydmFsIChtcykgb24gd2hpY2ggam9iIGlzIHRvIGJlIHJlcGVhdGVkPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNvZGU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBSIGNvZGUgdG8gZXhlY3V0ZSBvbiBqb2I8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cnNjcmlwdG5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5LW1hbmFnZWQgc2NyaXB0IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5yc2NyaXB0ZGlyZWN0b3J5PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgcmVwb3NpdG9yeS1tYW5hZ2VkIGRpcmVjdG9yaWVzIGZvciBzY3JpcHRzLCBkZWZhdWx0cyB0byByb290PC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJzY3JpcHRhdXRob3I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBhdXRob3JzLCBhdXRob3ItcGVyLXJzY3JpcHRuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnJzY3JpcHR2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmVyc2lvbnMsIHZlcnNpb24tcGVyLXJzY3JpcHRuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmV4dGVybmFsc291cmNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgVVJMcyBvciBmaWxlIHBhdGhzIHRvIGV4dGVybmFsIHNjcmlwdHM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+aW5wdXRzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgUmV2b0RlcGxveVItZW5jb2RlZCBzY3JpcHQgaW5wdXRzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmNzdmlucHV0czwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHByaW1pdGl2ZSBuYW1lL3ZhbHVlIGlucHV0czwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZW5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IGZpbGVuYW1lczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5wcmVsb2FkZmlsZWF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIGF1dGhvci1wZXItcHJlbG9hZGZpbGVuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnByZWxvYWRmaWxldmVyc2lvbjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHZlcnNpb25zLCB2ZXJzaW9uLXBlci1wcmVsb2FkZmlsZW5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdG5hbWU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiByZXBvc2l0b3J5IG9iamVjdCAoLnJEYXRhKSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdGF1dGhvcjwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGF1dGhvcnMsIGF1dGhvci1wZXItcHJlbG9hZG9iamVjdG5hbWU8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+cHJlbG9hZG9iamVjdHZlcnNpb248L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB2ZXJzaW9ucywgdmVyc2lvbi1wZXItb2JqZWN0LXByZWxvYWRvYmplY3RuYW1lPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmFkb3B0d29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggd29ya3NwYWNlIGlzIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+YWRvcHRkaXJlY3Rvcnk8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZGVudGlmaWVzIHByb2plY3QgZnJvbSB3aGljaCBkaXJlY3RvcnkgaXMgdG8gYmUgYWRvcHRlZDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5hZG9wdHBhY2thZ2VzPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWRlbnRpZmllcyBwcm9qZWN0IGZyb20gd2hpY2ggcGFja2FnZSBkZXBlbmRlbmNpZXMgYXJlIHRvIGJlIGFkb3B0ZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIDxkdD5wcmlvcml0eTwvZHQ+XG4gICAgICAgICAqICAgICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHRoZSBzY2hlZHVsaW5nIHByaW9yaXR5IGZvciB0aGUgam9iOiBsb3cgKGRlZmF1bHQpLCBtZWRpdW0gb3IgaGlnaDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD50YWc8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBzcGVjaWZpZXMgYSB0YWcgdGhhdCBsYWJlbHMgdGhlIGV4ZWN1dGlvbjwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5lY2hvb2ZmPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUgUiBjb21tYW5kcyB3aWxsIG5vdCBhcHBlYXIgaW4gdGhlIGNvbnNvbGUgb3V0cHV0XG4gICAgICAgICAqICAgICAgIHNhdmVkIG9uIHRoZSBwcm9qZWN0IGV4ZWN1dGlvbiBoaXN0b3J5IGZvciB0aGUgam9iXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5jb25zb2xlb2ZmPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUgY29uc29sZSBvdXRwdXQgaXMgbm90IHNhdmVkIG9uIHRoZSBwcm9qZWN0XG4gICAgICAgICAqICAgICAgIGV4ZWN1dGlvbiBoaXN0b3J5IGZvciB0aGUgam9iXG4gICAgICAgICAqICAgIDwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5ncmFwaGljczwvZHQ+XG4gICAgICAgICAqICAgIDxkZD4ob3B0aW9uYWwpIHNwZWNpZmllcyBwcmVmZXJyZWQgUiBncmFwaGljcyBkZXZpY2UgZm9yIGV4ZWN1dGlvbjogcG5nIG9yIHN2ZzwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5ncmFwaGljc3dpZHRoPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHByZWZlcnJlZCB3aWR0aCBmb3IgUiBncmFwaGljcyBkZXZpY2UgaW1hZ2VzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmdyYXBoaWNzaGVpZ2h0PC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgc3BlY2lmaWVzIHByZWZlcnJlZCBoZWlnaHQgZm9yIFIgZ3JhcGhpY3MgZGV2aWNlIGltYWdlczwvZGQ+XG4gICAgICAgICAqXG4gICAgICAgICAqICAgIDxkdD5zdG9yZWZpbGU8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB3b3JraW5nIGRpcmVjdG9yeSBmaWxlbmFtZXM8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmVvYmplY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB3b3Jrc3BhY2Ugb2JqZWN0IG5hbWVzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PnN0b3Jld29ya3NwYWNlPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgZmlsZW5hbWUgKC5yRGF0YSkgd2hlcmUgd29ya3NwYWNlIGNvbnRlbnRzIHdpbGwgYmUgc2F2ZWQgaW4gdGhlIHJlcG9zaXRvcnk8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmVuZXd2ZXJzaW9uPC9kdD5cbiAgICAgICAgICogICAgPGRkPihvcHRpb25hbCkgaWYgPGNvZGU+dHJ1ZTwvY29kZT4sIGVuc3VyZXMgZWFjaCBmaWxlIHN0b3JlZCBpbiByZXBvc2l0b3J5IHJlc3VsdHMgaW4gbmV3IHZlcnNpb24gYmVpbmcgY3JlYXRlZCBpZiBuZWVkZWQ8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmVwdWJsaWM8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgcHVibGlzaGVzIGVhY2ggZmlsZSBzdG9yZWQgaW4gdGhlIHJlcG9zaXRvcnk8L2RkPlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICA8ZHQ+c3RvcmVub3Byb2plY3Q8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+KG9wdGlvbmFsKSBpZiA8Y29kZT50cnVlPC9jb2RlPiwgbm8gcHJvamVjdCBwZXJzaXN0ZW5jZSBmb2xsb3dpbmcgam9iIGV4ZWN1dGlvbjwvZGQ+XG4gICAgICAgICAqIDwvZGw+XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgaW8gdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgam9iU2NoZWR1bGU6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHsgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL2pvYi9zY2hlZHVsZScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgcXVlcmllcyB0aGUgam9iIHN0YXR1cy4gVGhlIHN0YXR1cyBwcm9wZXJ0eSB3aWxsIGluZGljYXRlIG9uZSBvZlxuICAgICAgICAgKiB0aGUgZm9sbG93aW5nIHZhbHVlczpcbiAgICAgICAgICpcbiAgICAgICAgICogU2NoZWR1bGVkLCBRdWV1ZWQsIFJ1bm5pbmcsIENvbXBsZXRlZCwgQ2FuY2VsbGluZywgQ2FuY2VsbGVkLCBJbnRlcnJ1cHRlZCxcbiAgICAgICAgICogQWJvcnRlZCwgRmFpbGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGpvYlF1ZXJ5XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyB0aGUgY2FsbCBjb25maWd1cmF0aW9uLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgICAgICogc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5qb2I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygam9iIGlkZW50aWZpZXJzPC9kZD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgPGR0PmV4dGVuZGVkPC9kdD5cbiAgICAgICAgICogICAgPGRkPlxuICAgICAgICAgKiAgICAgICAob3B0aW9uYWwpIGlmIHRydWUsIG9ubHkgam9icyBpbiBhbiBleHRlbmRlZC1zdGF0ZSBhcmUgbGlzdGVkIGluIHRoZVxuICAgICAgICAgKiAgICAgICByZXNwb25zZSBtYXJrdXBcbiAgICAgICAgICogICAgPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBqb2JRdWVyeTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL2pvYi9xdWVyeScsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgY2FuY2VscyB0aGUgc3BlY2lmaWVkIGpvYi5cbiAgICAgICAgICpcbiAgICAgICAgICogT25seSBqb2JzIGluIGFuIG9wZW4tc3RhdGUgY2FuIGJlIGNhbmNlbGxlZC4gVGhlIHNldCBvZiBqb2Igb3Blbi1zdGF0ZXMgYXJlXG4gICAgICAgICAqIHNob3duIGhlcmU6XG4gICAgICAgICAqXG4gICAgICAgICAqIDx1bD5cbiAgICAgICAgICogICAgPGxpPlNjaGVkdWxlZCA6IGpvYiBpcyBzY2hlZHVsZWQgYnV0IG5vdCB5ZXQgcXVldWVkIGZvciBydW5uaW5nLjwvbGk+XG4gICAgICAgICAqICAgIDxsaT5RdWV1ZWQgOiBqb2IgaXMgcXVldWVkIGZvciBydW5uaW5nLjwvbGk+XG4gICAgICAgICAqICAgIDxsaT5SdW5uaW5nIDogam9iIGlzIHJ1bm5pbmcuPC9saT5cbiAgICAgICAgICogPC91bD5cbiAgICAgICAgICogQG1ldGhvZCBqb2JDYW5jZWxcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICAgIDxkdD5qb2I8L2R0PlxuICAgICAgICAgKiAgICA8ZGQ+c3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2Ygam9iIGlkZW50aWZpZXJzPC9kZD5cbiAgICAgICAgICogPC9kbD5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBjb25maWd1cmF0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBpbyB0cmFuc2FjdGlvbiBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICBqb2JDYW5jZWw6IGZ1bmN0aW9uKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlvKCcvci9qb2IvbGlzdCcsIGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNhbGwgZGVsZXRlcyB0aGUgc3BlY2lmaWVkIGpvYi5cbiAgICAgICAgICpcbiAgICAgICAgICogT25seSBqb2JzIGluIG9uZSBvZiB0aGUgY29tcGxldGVkLXN0YXRlcyBjYW4gYmUgZGVsZXRlZC4gVGhlIHNldCBvZiBqb2JcbiAgICAgICAgICogY29tcGVsdGVkLXN0YXRlcyBhcmUgc2hvd24gaGVyZTpcbiAgICAgICAgICpcbiAgICAgICAgICogPHVsPlxuICAgICAgICAgKiAgICA8bGk+Q29tcGxldGVkIDogam9iIGV4ZWN1dGlvbiBoYXMgcnVuIHRvIHN1Y2Nlc3NmdWwgY29tcGxldGlvbi48L2xpPlxuICAgICAgICAgKiAgICA8bGk+SW50ZXJydXB0ZWQgOiBqb2IgZXhlY3V0aW9uIGhhcyBiZWVuIGludGVycnVwdGVkLjwvbGk+XG4gICAgICAgICAqICAgIDxsaT5DYW5jZWxsZWQgOiBqb2IgaGFzIGJlZW4gY2FuY2VsbGVkLjwvbGk+XG4gICAgICAgICAqICAgIDxsaT5BYm9ydGVkIDogam9iIGV4ZWN1dGlvbiBoYXMgYmVlbiBhYm9ydGVkLjwvbGk+XG4gICAgICAgICAqICAgIDxsaT5GYWlsZWQgOiBqb2IgZXhlY3V0aW9uIGhhcyByZXN1bHRlZCBpbiBmYWlsdXJlLjwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqXG4gICAgICAgICAqIEpvYnMgaW4gYW4gb3Blbi1zdGF0ZSBtdXN0IGZpcnN0IHJ1biB0byBjb21wbGV0aW9uIG9yIGJlIGNhbmNlbGxlZCBiZWZvcmVcbiAgICAgICAgICogdGhleSBhcmUgZWxpZ2libGUgZm9yIGRlbGV0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiA8YmxvY2txdW90ZT5cbiAgICAgICAgICogICAgSW1wb3J0YW50ISBEZWxldGluZyBqb2JzIHdpbGwgbm90IGRlbGV0ZSB0aGUgcHJvamVjdHMgdGhhdCByZXN1bHRlZCBmcm9tXG4gICAgICAgICAqICAgIHRob3NlIGpvYnMuXG4gICAgICAgICAqIDwvYmxvY2txdW90ZT5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBqb2JEZWxldGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIHRoZSBjYWxsIGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAgICAgKiAgICAgICAgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAgICAgKiA8ZGw+XG4gICAgICAgICAqICA8ZHQ+am9iPC9kdD5cbiAgICAgICAgICogIDxkZD5zcGVjaWZpZXMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBqb2IgaWRlbnRpZmllcnM8L2RkPlxuICAgICAgICAgKiA8L2RsPlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGlvIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIGpvYkRlbGV0ZTogZnVuY3Rpb24oY29uZmlnLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW8oJy9yL2pvYi9kZWxldGUnLCBjb25maWcsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0gLy8gRGVwbG95UlxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlcHJlY2F0ZWQ7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNCBieSBSZXZvbHV0aW9uIEFuYWx5dGljcyBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBCYXNlID0gcmVxdWlyZSgnLi9zZWxmaXNoJykuQmFzZTtcblxuZnVuY3Rpb24gZGVidWcobXNnKSB7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlLmV4dGVuZCh7XG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB0aGlzLnNjb3BlICA9IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZHMgYSBsaXN0ZW5lci4gIE11bHRpcGxlIGNhbiBiZSBhZGRlZCBwZXIgbmFtZS4gIEFsaWFzZWQgYXMgYG9uYC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtFbWl0dGVyfSBgdGhpc2AgZm9yIGNoYWluaW5nICAgICAgXG4gICAqL1xuICBvbjogZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyB0aGlzLmV2ZW50c1tuYW1lXSA9IFtdOyB9ICAgICAgICBcblxuICAgIHRoaXMuZXZlbnRzW25hbWVdLnB1c2goaGFuZGxlcik7XG4gICAgZGVidWcoJ0VtaXR0ZXIub24oXCInICsgbmFtZSArICdcIiknKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBhbGwgbWF0Y2hpbmcgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybiB7RW1pdHRlcn0gYHRoaXNgIGZvciBjaGFpbmluZyAgIFxuICAgKi9cbiAgZW1pdDogZnVuY3Rpb24obmFtZSkge1xuICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyByZXR1cm4gdGhpczsgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50c1tuYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoJ0ZpcmVkIGV2ZW50OiBcIicgKyBuYW1lICsgJ1wiJyk7XG4gICAgICB0aGlzLmV2ZW50c1tuYW1lXVtpXS5hcHBseSh0aGlzLnNjb3BlIHx8IHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpOyAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgbWF0Y2hpbmcgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybiB7RW1pdHRlcn0gYHRoaXNgIGZvciBjaGFpbmluZ1xuICAgKi9cbiAgb2ZmQWxsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICBmb3IgKHZhciBlIGluIHRoaXMuZXZlbnRzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tlXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5hbWUgaW4gdGhpcy5ldmVudHMgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzOyB9XG4gICAgICBkZWxldGUgdGhpcy5ldmVudHNbbmFtZV07ICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGxpc3RlbmVyIGJhc2VkIG9uIGFuIGluZGV4LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgZXZlbnQgXG4gICAqL1xuICBvZmZBdDogZnVuY3Rpb24obmFtZSwgaW5kZXgpIHtcbiAgICB2YXIgYXJyYXkgPSB0aGlzLmV2ZW50c1tuYW1lXSxcbiAgICAgICAgcmVzdCAgPSBhcnJheS5zbGljZShpbmRleCArIDEpO1xuXG4gICAgYXJyYXkubGVuZ3RoID0gaW5kZXg7XG4gICAgYXJyYXkucHVzaC5hcHBseShhcnJheSwgcmVzdCk7XG4gICAgdGhpcy5ldmVudHNbbmFtZV0gPSBhcnJheTtcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGxpc3RlbmVyIGJhc2VkIG9uIHRoZSBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgaGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcbiAgICogQHJldHVybiB7RW1pdHRlcn0gYHRoaXNgIGZvciBjaGFpbmluZ1xuICAgKi9cbiAgb2ZmOiBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKG5hbWUgaW4gdGhpcy5ldmVudHMgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzOyB9XG5cbiAgICAvLyByZW1vdmUgYWxsIGV2ZW50cyBoYW5kbGVycyBieSB0aGlzIG5hbWVcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLm9mZkFsbChuYW1lKTtcbiAgICB9IGVsc2UgeyAvLyByZW1vdmUgYWxsIGV2ZW50cyBoYW5kbGVycyA9PSAnaGFuZGxlcicgYnkgdGhpcyBuYW1lXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW25hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tuYW1lXVtpXSA9PSBoYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5vZmZBdChuYW1lLCBpKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59KTsgIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNCBieSBSZXZvbHV0aW9uIEFuYWx5dGljcyBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKi9cbnZhciBMYW5nID0gcmVxdWlyZSgnLi9sYW5nJyksXG4gICAgUlR5cGVzID0gcmVxdWlyZSgnLi9ydHlwZXMnKSxcbiAgICBSID0gUlR5cGVzLnIsXG4gICAgRGVwbG95UiA9IFJUeXBlcy5kZXBsb3lyO1xuXG5mdW5jdGlvbiBmb3JtYXREYXRlcyhkYXRlcywgdHlwZSkge1xuICAgIHZhciBmb3JtYXRzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1hdHMucHVzaChmb3JtYXREYXRlKGRhdGVzW2ldLCB0eXBlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdHM7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSwgdHlwZSkgeyAgICBcbiAgIHZhciB5ZWFyICAgPSBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgbW9udGggID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLFxuICAgICAgIGRheSAgICA9IGRhdGUuZ2V0RGF0ZSgpLCAgICBcbiAgICAgICBob3VyICAgPSBkYXRlLmdldEhvdXJzKCksXG4gICAgICAgbWluICAgID0gZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICAgc2VjICAgID0gZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICAgem9uZSAgID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpLFxuICAgICAgIGZvcm1hdCA9ICcnO1xuXG4gICAgICAgbW9udGggID0gKG1vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRoKTtcbiAgICAgICBob3VyICAgPSAoaG91ciA8IDEwID8gJzAnICsgaG91ciA6IGhvdXIpO1xuICAgICAgIG1pbiAgICA9IChtaW4gPCAxMCA/ICcwJyArIG1pbiA6IG1pbik7XG4gICAgICAgc2VjICAgID0gKHNlYyA8IDEwID8gJzAnICsgc2VjIDogc2VjKTsgICAgICAgXG4gICAgICAgZm9ybWF0ID0geWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5O1xuXG4gICAgZnVuY3Rpb24gbGVmdFplcm9GaWxsKG51bWJlciwgdGFyZ2V0TGVuZ3RoLCBmb3JjZVNpZ24pIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICcnICsgTWF0aC5hYnMobnVtYmVyKSxcbiAgICAgICAgICAgIHNpZ24gPSBudW1iZXIgPj0gMDtcblxuICAgICAgICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgICAgICAgICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLScpICsgb3V0cHV0O1xuICAgIH1cbiAgIFxuICAgIGlmICh0eXBlID09PSBEZXBsb3lSLlJQT1NJWF9EQVRFIHx8IHR5cGUgPT09IERlcGxveVIuUlBPU0lYX0RBVEVfVkVDVE9SKSB7XG4gICAgICAgIHZhciB0aW1lICA9IGhvdXIgKyAnOicgKyBtaW4gKyAnOicgKyBzZWMsXG4gICAgICAgICAgICBhID0gLXpvbmUsXG4gICAgICAgICAgICBiID0gXCIrXCI7XG5cbiAgICAgICAgaWYgKGEgPCAwKSB7XG4gICAgICAgICAgICBhID0gLWE7XG4gICAgICAgICAgICBiID0gXCItXCI7XG4gICAgICAgIH1cblxuICAgICAgICB6b25lID0gYiArIGxlZnRaZXJvRmlsbCgoYSAvIDYwKSwgMikgKyAnJyArIGxlZnRaZXJvRmlsbChhICUgNjAsIDIpO1xuICAgICAgICBmb3JtYXQgKz0gKCcgJyArIHRpbWUgKyAnICcgKyB6b25lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0O1xufVxuXG5mdW5jdGlvbiBlbmNvZGVFbWJlZGRlZERhdGFmcmFtZShvYmosIHJkZikge1xuICAgIHZhciBkZlZhbHVlID0gb2JqLnZhbHVlO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBkZlZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgZGZPYmogPSBkZlZhbHVlW2luZGV4XTtcbiAgICAgICAgaWYgKGRmT2JqLnR5cGUgPT09IERlcGxveVIuUkRBVEFGUkFNRSkge1xuICAgICAgICAgICAgcmRmID0gZW5jb2RlRW1iZWRkZWREYXRhZnJhbWUoZGZPYmosIHJkZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmb3JtYXQgZGF0ZXNcbiAgICAgICAgICAgIGlmIChSVHlwZXMuaXNEYXRlKGRmT2JqLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKExhbmcuaXNBcnJheShkZk9iai52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGZPYmoudmFsdWUgPSBmb3JtYXREYXRlcyhkZk9iai52YWx1ZSwgZGZPYmoudHlwZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGZPYmoudmFsdWUgPSBmb3JtYXREYXRlKGRmT2JqLnZhbHVlLCBkZk9iai50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRmT2JqLnR5cGUgPSBSVHlwZXMuZGVwbG95clRvUihkZk9iai50eXBlKTtcbiAgICAgICAgICAgIHJkZi52YWx1ZS5wdXNoKGRmT2JqKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiByZGY7XG59O1xuXG5mdW5jdGlvbiBlbmNvZGVEYXRhZnJhbWUob2JqKSB7XG4gICAgdmFyIHJkZiA9IHtcbiAgICAgICAgICAgIHR5cGU6IFIuREFUQUZSQU1FLFxuICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgbmFtZTogb2JqLm5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgZGZWYWx1ZSA9IG9iai52YWx1ZTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBkZlZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgZGZPYmogPSBkZlZhbHVlW2luZGV4XTtcblxuICAgICAgICBpZiAoZGZPYmoudHlwZSA9PT0gRGVwbG95Ui5SREFUQUZSQU1FKSB7XG4gICAgICAgICAgICByZGYgPSBlbmNvZGVFbWJlZGRlZERhdGFmcmFtZShkZk9iaiwgcmRmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZvcm1hdCBkYXRlc1xuICAgICAgICAgICAgaWYgKFJUeXBlcy5pc0RhdGUoZGZPYmoudHlwZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoTGFuZy5pc0FycmF5KGRmT2JqLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBkZk9iai52YWx1ZSA9IGZvcm1hdERhdGVzKGRmT2JqLnZhbHVlLCBkZk9iai50eXBlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZk9iai52YWx1ZSA9IGZvcm1hdERhdGUoZGZPYmoudmFsdWUsIGRmT2JqLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGZPYmoudHlwZSA9IFJUeXBlcy5kZXBsb3lyVG9SKGRmT2JqLnR5cGUpO1xuICAgICAgICAgICAgcmRmLnZhbHVlLnB1c2goZGZPYmopO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIHJkZjtcbn07XG5cbmZ1bmN0aW9uIGVuY29kZUxpc3Qob2JqKSB7XG4gICAgdmFyIHJsaXN0ID0ge1xuICAgICAgICAgICAgdHlwZTogUi5MSVNULFxuICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgbmFtZTogb2JqLm5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgZGZWYWx1ZSA9IG9iai52YWx1ZSxcbiAgICAgICAgcjtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBkZlZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgZGZPYmogPSBkZlZhbHVlW2luZGV4XTtcblxuICAgICAgICBzd2l0Y2ggKGRmT2JqLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SREFUQUZSQU1FOlxuICAgICAgICAgICAgICAgIHIgPSBlbmNvZGVEYXRhZnJhbWUoZGZPYmopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkxJU1Q6XG4gICAgICAgICAgICAgICAgciA9IGVuY29kZUxpc3QoZGZPYmopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUk5VTUVSSUNfTUFUUklYOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJJTlRFR0VSX01BVFJJWDpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SQk9PTEVBTl9NQVRSSVg6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUlNUUklOR19NQVRSSVg6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5NQVRSSVgsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZk9iai52YWx1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SREFURTpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SUE9TSVhfREFURTpcbiAgICAgICAgICAgICAgICByID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkZk9iai5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLkRBVEUsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZGZPYmouZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0RGF0ZShkZk9iai52YWx1ZSwgZGZPYmoudHlwZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkZBQ1RPUjpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5ST1JERVJFRDpcbiAgICAgICAgICAgICAgICByID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkZk9iai5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLkZBQ1RPUixcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJlZDogZGZPYmoub3JkZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBkZk9iai5sYWJlbHMsXG4gICAgICAgICAgICAgICAgICAgIGxldmVsczogZGZPYmoubGV2ZWxzLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGZPYmoudmFsdWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUlNUUklORzpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SQk9PTEVBTjpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5STlVNRVJJQzpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SSU5URUdFUjpcbiAgICAgICAgICAgICAgICByID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkZk9iai5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLlBSSU1JVElWRSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRmT2JqLnZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJOVU1FUklDX1ZFQ1RPUjpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SSU5URUdFUl9WRUNUT1I6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU5fVkVDVE9SOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJTVFJJTkdfVkVDVE9SOlxuICAgICAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRmT2JqLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuVkVDVE9SLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGZPYmoudmFsdWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEVfVkVDVE9SOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJQT1NJWF9EQVRFX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICByID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkZk9iai5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLlZFQ1RPUiwgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0RGF0ZXMoZGZPYmoudmFsdWUsIGRmT2JqLnR5cGUpLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGRmT2JqLmZvcm1hdFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBSRGF0YVR5cGUgZm91bmQgZm9yIFwiJyArIGRmT2JqLnR5cGUgKyAnXCInKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJsaXN0LnZhbHVlLnB1c2gocik7XG4gICAgfVxuICAgIHJldHVybiBybGlzdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLyoqXG4gICAgICogRmxhdHRlbnMgYSBnaXZlbiA8Y29kZT5SZXZvbHV0aW9uLlJEYXRhPC9jb2RlPiB0eXBlIGludG8gYSBKU09OIHN0cmluZ1xuICAgICAqIHJlcHJlc2VudGluZyB0aGVcbiAgICAgKiBleHBlY3RlZCBEZXBsb3lSIGlucHV0IGZvcm1hdC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgcGFyc2VJbnB1dHNcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtBcnJheX0gcmRhdGEgQW4gQXJyYXkgb2YgUkRhdGEgT2JqZWN0cyB0byBiZSBmbGF0dGVuZWQuXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgZmxhdHRlbmQgUkRhdGEgSlNPTiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBEZXBsb3lSXG4gICAgICogICAgICAgICAgICAgICAgICBpbnB1dCBmb3JtYXQuXG4gICAgICovXG4gICAgZW5jb2RlOiBmdW5jdGlvbihyZGF0YSkge1xuICAgICAgICB2YXIgciA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCByZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSByZGF0YVtpbmRleF07XG5cbiAgICAgICAgICAgIHN3aXRjaCAob2JqLnR5cGUpIHsgLy8gLS0gRGVwbG95UiBUeXBlIC0tIC8vXG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEFGUkFNRTpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSBlbmNvZGVEYXRhZnJhbWUob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkxJU1Q6XG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0gZW5jb2RlTGlzdChvYmopO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5STlVNRVJJQ19NQVRSSVg6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJJTlRFR0VSX01BVFJJWDpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU5fTUFUUklYOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HX01BVFJJWDpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLk1BVFJJWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmoudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEU6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJQT1NJWF9EQVRFOlxuICAgICAgICAgICAgICAgICAgICByW29iai5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuREFURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogb2JqLmZvcm1hdCwgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXREYXRlKG9iai52YWx1ZSwgb2JqLnR5cGUpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJGQUNUT1I6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJPUkRFUkVEOiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLkZBQ1RPUixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyZWQ6IG9iai5vcmRlcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBvYmoubGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxzOiBvYmoubGV2ZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9iai52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SQk9PTEVBTjpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUk5VTUVSSUM6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJJTlRFR0VSOlxuICAgICAgICAgICAgICAgICAgICByW29iai5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuUFJJTUlUSVZFLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9iai52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5STlVNRVJJQ19WRUNUT1I6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJJTlRFR0VSX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU5fVkVDVE9SOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLlZFQ1RPUixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmoudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEVfVkVDVE9SOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SUE9TSVhfREFURV9WRUNUT1I6XG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5WRUNUT1IsICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0RGF0ZXMob2JqLnZhbHVlLCBvYmoudHlwZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IG9iai5mb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFJEYXRhVHlwZSBmb3VuZCBmb3IgXCInICsgb2JqLnR5cGUgKyAnXCInKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKEpTT04uc3RyaW5naWZ5KHIpKTtcbiAgICB9XG59OyIsIiB2YXIgb3B0aW9uYWwgPSByZXF1aXJlKCcuL29wdGlvbmFsJyksXG4gICAgIFdTICAgICAgID0gb3B0aW9uYWwoJ3dzJyksXG4gICAgIFF1ZXVlICAgID0gcmVxdWlyZSgnLi9xdWV1ZScpLCAgICAgXG4gICAgIEVtaXR0ZXIgID0gcmVxdWlyZSgnLi9lbWl0dGVyJyksXG4gICAgIEJhc2UgICAgID0gcmVxdWlyZSgnLi9zZWxmaXNoJykuQmFzZSxcbiAgICAgbWVyZ2UgICAgPSByZXF1aXJlKCcuL3V0aWxzJykubWVyZ2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRXZlbnRTdHJlYW1gIHdpdGggdGhlIGdpdmVuIHNldCBvZiBgb3B0aW9uc2AuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG52YXIgRXZlbnRTdHJlYW0gPSBCYXNlLmV4dGVuZChFbWl0dGVyLCB7ICAgXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZShob3N0LCBvcHRpb25zKSB7XG4gICAgRW1pdHRlci5pbml0aWFsaXplLmNhbGwodGhpcywge30pO1xuXG4gICAgdGhpcy5ob3N0ICAgICAgICA9IGhvc3Q7XG4gICAgdGhpcy5vcHRpb25zICAgICA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy5vcHRpb25zLmxvZyA9IHRoaXMub3B0aW9ucy5sb2cgfHwgdGhpcy5MT0cuZXJyb3I7XG4gICAgdGhpcy53cyAgICAgICAgICA9IG51bGw7XG4gICAgdGhpcy5xICAgICAgICAgICA9IG5ldyBRdWV1ZSgpO1xuICAgIHRoaXMuY2hhbm5lbCAgICAgPSB7fTsgICAgIFxuICB9LCAgXG5cbiAgTE9HOiB7IFxuICAgIGluZm86ICdpbmZvJywgXG4gICAgZGVidWc6ICdkZWJ1ZycsIFxuICAgIGVycm9yOiAnZXJyb3InIFxuICB9LFxuICBcbiAgb3BlbjogZnVuY3Rpb24ob3B0aW9ucykgeyAgICBcbiAgICB2YXIgc2VsZiAgID0gdGhpcyxcbiAgICAgICAgdXJpICAgID0gKHRoaXMuaG9zdCB8fCAnJykgKyAnL2RlcGxveXIvci9ldmVudC9zdHJlYW0/JyxcbiAgICAgICAgcGFyYW1zID0gW107XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyA9IG1lcmdlKG9wdGlvbnMsIHRoaXMuY2hhbm5lbCk7ICAgIFxuXG4gICAgdGhpcy5jb29raWVzID0gIXRoaXMuY29va2llcyA/IG9wdGlvbnMuaGVhZGVycy5Db29raWUgOiB0aGlzLmNvb2tpZXM7XG5cbiAgICAvLyAtLSBhcHBlbmQgb3B0aW9uIHBhcmFtZXRlcnMgLS1cbiAgICBpZiAob3B0aW9ucy5wcm9qZWN0KSB7XG4gICAgICBwYXJhbXMucHVzaCgncHJvamVjdD0nICsgb3B0aW9ucy5wcm9qZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuam9iKSB7XG4gICAgICAgIHBhcmFtcy5wdXNoKCdqb2I9JyArIG9wdGlvbnMuam9iKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5tYW5hZ2VtZW50KSB7XG4gICAgICBwYXJhbXMucHVzaCgnbWFuYWdlbWVudEV2ZW50T25seT10cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvcHRpb25zLmh0dHBvbmx5KSB7XG4gICAgICAgIHBhcmFtcy5wdXNoKCdodHRwRXZlbnRPbmx5PXRydWUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcHRpb25zLnJldm9vbmx5KSB7XG4gICAgICAgICAgcGFyYW1zLnB1c2goJ3Jldm9FdmVudE9ubHk9dHJ1ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXJpICs9IHBhcmFtcy5qb2luKCcmJykuc3Vic3RyKDApO1xuICAgIHVyaSA9IHVyaS5yZXBsYWNlKC9eaHR0cC8sJ3dzJyk7XG5cbiAgICB0aGlzLnEueWllbGQodHJ1ZSk7XG4gICAgdGhpcy5xLmFkZChmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIGhlYWRlcnMgPSB0aGlzLmNvb2tpZXMgPyB7ICdDb29raWUnOiB0aGlzLmNvb2tpZXMgfSA6IHt9O1xuICAgICAgdGhpcy5lbWl0KCdlczpjb25uZWN0aW5nJywgeyB1cmk6IHVyaSwgaGVhZGVyczogaGVhZGVycyB9KTtcblxuICAgICAgdmFyIHdzID0gbmV3IFdTKHVyaSwgJ2h0dHAnLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG5cbiAgICAgIHdzLm9ub3BlbiA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIHNlbGYuZW1pdCgnZXM6b3BlbicsIG1lc3NhZ2UpO1xuICAgICAgfTtcblxuICAgICAgdmFyIF9tZXNzYWdlID0gJyc7XG4gICAgICB3cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICB0cnkgeyAgICAgICAgICBcbiAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhLnNwbGl0KCchfCEnKVsxXSkge1xuICAgICAgICAgICAgX21lc3NhZ2UgPSBfbWVzc2FnZSArIG1lc3NhZ2UuZGF0YS5zcGxpdCgnIXwhJylbMV07XG4gICAgICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShfbWVzc2FnZSk7XG4gICAgICAgICAgICBfbWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBtZXNzYWdlLmRlcGxveXIucmVzcG9uc2UuZXZlbnQudHlwZTtcbiAgICAgICAgICAgIHNlbGYuZW1pdCgnZXM6JyArIHR5cGUucmVwbGFjZSgnRXZlbnQnLCAnJyksIG1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge30gXG4gICAgICB9O1xuXG4gICAgICB3cy5vbmVycm9yID0gZnVuY3Rpb24gKGVycikgeyBzZWxmLmVtaXQoJ2VzOmVycm9yJywgZXJyKTsgfTtcbiAgICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAobWVzc2FnZSkgeyBzZWxmLmVtaXQoJ2VzOmRpc2Nvbm5lY3QnLCBtZXNzYWdlKTsgfTtcblxuICAgICAgdGhpcy53cyA9IHdzO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgaWYgKG9wdGlvbnMuZm9yY2UpIHsgdGhpcy5mbHVzaCgpOyB9XG5cbiAgICByZXR1cm4gdGhpczsgICAgXG4gIH0sXG5cbiAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLndzKSB7IHRoaXMud3MuY2xvc2UoKTsgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgZXJyb3I6IGZ1bmN0aW9uKGZuKSB7XG4gICAgdGhpcy5vbignZXM6ZXJyb3InLCBmbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSwgIFxuXG4gIGFsbDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jaGFubmVsID0geyByZXZvb25seTogdHJ1ZSB9OyAgLy8gcmV2b0V2ZW50T25seT10cnVlXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBzZXNzaW9uOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNoYW5uZWwgPSB7IGh0dHBvbmx5OiB0cnVlIH07IC8vaHR0cEV2ZW50T25seT10cnVlXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBwcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgdGhpcy5jaGFubmVsID0geyBwcm9qZWN0OiBwcm9qZWN0IH07IC8vIHByb2plY3Q9MTIzNDVcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGpvYjogZnVuY3Rpb24oam9iKSB7XG4gICAgdGhpcy5jaGFubmVsID0geyBqb2I6IGpvYiB9OyAvL2pvYj0xMjM0NVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgbWFuYWdlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jaGFubmVsID0geyBtYW5hZ2VtZW50OiB0cnVlIH07IC8vbWFuYWdlbWVudEV2ZW50T25seT10cnVlXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBmbHVzaDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5xLnlpZWxkKGZhbHNlKTtcbiAgICB0aGlzLnEuZmx1c2goKTtcbiAgfSxcblxuICBzaGFyZTogZnVuY3Rpb24oY29va2llcykge1xuICAgIHRoaXMuY29va2llcyA9IGNvb2tpZXM7XG4gIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRTdHJlYW07XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE0IGJ5IFJldm9sdXRpb24gQW5hbHl0aWNzIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgYSBEZXBsb3lSIHBvcnQgb2YgeXVpLWxhbmcuanMgYnkgWWFob28hXG4gKlxuICogU29mdHdhcmUgTGljZW5zZSBBZ3JlZW1lbnQgKEJTRCBMaWNlbnNlKVxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2Ugb2YgdGhpcyBzb2Z0d2FyZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciBcbiAqIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIFxuICogYXJlIG1ldDpcbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgXG4gKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBcbiAqIGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCBcbiAqIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIFxuICogd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgWWFob28hIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBZVUkncyBjb250cmlidXRvcnMgbWF5IGJlIFxuICogdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBcbiAqIHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBZYWhvbyEgSW5jLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIFxuICogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBcbiAqIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIFxuICogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIFxuICogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBcbiAqIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFxuICogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIFxuICogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gXG4gKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBcbiAqIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFICBcbiAqIFBPUyBTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIGNvcmUgbGFuZ3VhZ2UgdXRpbGl0ZXMgYW5kIGV4dGVuc2lvbnMgdXNlZCB0aHJvdWdob3V0IERlcGxveVIuXG4gKlxuICogQGNsYXNzIExhbmdcbiAqIEBzdGF0aWNcbiAqL1xudmFyIEwgPSB7fSwgXG5cdFRPU1RSSU5HID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZywgXG5cdFRZUEVTID0ge1x0XG5cdFx0J3VuZGVmaW5lZCcgOiAndW5kZWZpbmVkJyxcblx0XHQnbnVtYmVyJyA6ICdudW1iZXInLFxuXHRcdCdib29sZWFuJyA6ICdib29sZWFuJyxcblx0XHQnc3RyaW5nJyA6ICdzdHJpbmcnLFxuXHRcdCdbb2JqZWN0IEZ1bmN0aW9uXScgOiAnZnVuY3Rpb24nLFxuXHRcdCdbb2JqZWN0IFJlZ0V4cF0nIDogJ3JlZ2V4cCcsXG5cdFx0J1tvYmplY3QgQXJyYXldJyA6ICdhcnJheScsXG5cdFx0J1tvYmplY3QgRGF0ZV0nIDogJ2RhdGUnLFxuXHRcdCdbb2JqZWN0IEVycm9yXScgOiAnZXJyb3InXG5cdH0sIHVuc2FmZU5hdGl2ZXMgPSBmYWxzZTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIG51bGwuXG4gKiBAbWV0aG9kIGlzTnVsbFxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIG51bGwuXG4gKi9cbkwuaXNOdWxsID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gbyA9PT0gbnVsbDtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyB1bmRlZmluZWQuXG4gKiBAbWV0aG9kIGlzVW5kZWZpbmVkXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gbyBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIG8gaXMgdW5kZWZpbmVkLlxuICovXG5MLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gdHlwZW9mIG8gPT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIG9mIHR5cGUgb2JqZWN0XG4gKiBvciBmdW5jdGlvbi4gTm90ZSB0aGF0IGFycmF5cyBhcmUgYWxzbyBvYmplY3RzLCBzb1xuICogPGNvZGU+WS5MYW5nLmlzT2JqZWN0KFtdKSA9PT0gdHJ1ZTwvY29kZT4uXG4gKiBAbWV0aG9kIGlzT2JqZWN0XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gbyBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcGFyYW0gZmFpbGZuIHtib29sZWFufSBmYWlsIGlmIHRoZSBpbnB1dCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGFuIG9iamVjdC5cbiAqIEBzZWUgaXNQbGFpbk9iamVjdFxuICovXG5MLmlzT2JqZWN0ID0gZnVuY3Rpb24obywgZmFpbGZuKSB7XG5cdHZhciB0ID0gdHlwZW9mIG87XG5cdHJldHVybiAobyAmJiAodCA9PT0gJ29iamVjdCcgfHwgKCFmYWlsZm4gJiYgKHQgPT09ICdmdW5jdGlvbicgfHwgTC5pc0Z1bmN0aW9uKG8pKSkpKSB8fCBmYWxzZTtcbn07XG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIHByb3ZpZGVkIGl0ZW0gaXMgYW4gYXJyYXkuXG4gKlxuICogUmV0dXJucyBgZmFsc2VgIGZvciBhcnJheS1saWtlIGNvbGxlY3Rpb25zIHN1Y2ggYXMgdGhlIGZ1bmN0aW9uIGBhcmd1bWVudHNgXG4gKiBjb2xsZWN0aW9uIG9yIGBIVE1MRWxlbWVudGAgY29sbGVjdGlvbnMuXG4gKlxuICogQG1ldGhvZCBpc0FycmF5XG4gKiBAcGFyYW0gbyBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIG8gaXMgYW4gYXJyYXkuXG4gKiBAc3RhdGljXG4gKi9cbkwuaXNBcnJheSA9ICghdW5zYWZlTmF0aXZlcyAmJiBBcnJheS5pc0FycmF5KSB8fFxuZnVuY3Rpb24obykge1xuXHRyZXR1cm4gTC50eXBlKG8pID09PSAnYXJyYXknO1xufTtcblxuTC5pc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbkEobykge1xuXHRyZXR1cm4gKHR5cGVvZihvKSA9PT0gXCJmdW5jdGlvblwiKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyBhIGJvb2xlYW4uXG4gKiBAbWV0aG9kIGlzQm9vbGVhblxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGEgYm9vbGVhbi5cbiAqL1xuTC5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvKSB7XG5cdHJldHVybiB0eXBlb2YgbyA9PT0gJ2Jvb2xlYW4nO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBzdXBwbGllZCBpdGVtIGlzIGEgZGF0ZSBpbnN0YW5jZS5cbiAqIEBtZXRob2QgaXNEYXRlXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gbyBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIG8gaXMgYSBkYXRlLlxuICovXG5MLmlzRGF0ZSA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIEwudHlwZShvKSA9PT0gJ2RhdGUnICYmIG8udG9TdHJpbmcoKSAhPT0gJ0ludmFsaWQgRGF0ZScgJiYgIWlzTmFOKG8pO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIGEgbGVnYWwgbnVtYmVyLlxuICogQG1ldGhvZCBpc051bWJlclxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGEgbnVtYmVyLlxuICovXG5MLmlzTnVtYmVyID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gdHlwZW9mIG8gPT09ICdudW1iZXInICYmIGlzRmluaXRlKG8pO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIGEgc3RyaW5nLlxuICogQG1ldGhvZCBpc1N0cmluZ1xuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGEgc3RyaW5nLlxuICovXG5MLmlzU3RyaW5nID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gdHlwZW9mIG8gPT09ICdzdHJpbmcnO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdHlwZSBvZiB0aGUgaXRlbSBwYXNzZWQgaW4uXG4gKlxuICogQG1ldGhvZCB0eXBlXG4gKiBAcGFyYW0gbyB0aGUgaXRlbSB0byB0ZXN0LlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZGV0ZWN0ZWQgdHlwZS5cbiAqIEBzdGF0aWNcbiAqL1xuTC50eXBlID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gVFlQRVNbIHR5cGVvZiBvXSB8fCBUWVBFU1tUT1NUUklORy5jYWxsKG8pXSB8fCAoIG8gPyAnb2JqZWN0JyA6ICdudWxsJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEw7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNCBieSBSZXZvbHV0aW9uIEFuYWx5dGljcyBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG4gXG52YXIgTG9nZ2VyID0ge30sXG4gICAgbG9nZ2VyTWFwID0ge30sXG4gICAgZ2xvYmFsTG9nZ2VyO1xuXG4vKipcbiAqIFVuaXZlcnNhbCBzdGRvdXR8c3RkZXJyIHByaW50ZXJcbiAqL1xuZnVuY3Rpb24gbG9nKG1lc3NhZ2VzLCBjb250ZXh0KSB7XHRcblx0aWYgKCFjb25zb2xlKSB7IHJldHVybjsgfVxuXG5cdGZ1bmN0aW9uIHNlcChsZXZlbCkge1xuXHRcdHZhciBzZXAgPSAnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09JyArXG5cdFx0ICAgICAgICAgICc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4nLFxuXHRcdCAgICBvZmZzZXQgPSAwO1xuXG5cdFx0aWYgKGxldmVsID09PSBMb2dnZXIuREVCVUcgfHwgbGV2ZWwgPT09IExvZ2dlci5FUlJPUikgb2Zmc2V0ID0gODtcblx0XHRlbHNlIGlmIChsZXZlbCA9PT0gTG9nZ2VyLklORk8gfHwgbGV2ZWwgPT09IExvZ2dlci5XQVJOKSBvZmZzZXQgPSA4O1xuXHRcdGVsc2Ugb2Zmc2V0ID0gNztcblxuXHRcdHJldHVybiB7IHN0YXJ0OiBzZXAuc3Vic3RyaW5nKG9mZnNldCksIGVuZDogc2VwIH07XG5cdH1cblxuXHR2YXIgaGRscixcblx0ICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChtZXNzYWdlcywgMCksXG5cdCAgICBuYW1lID0gY29udGV4dC5uYW1lLFxuXHQgICAgZXJyb3IgPSBjb250ZXh0LmxldmVsID09PSBMb2dnZXIuRVJST1IsXG4gIFx0ICAgIGRlbGltID0gc2VwKGNvbnRleHQubGV2ZWwpO1xuXG4gIFx0aWYgKGNvbnRleHQubGV2ZWwgPT09IExvZ2dlci5XQVJOICYmIGNvbnNvbGUud2Fybikge1xuICBcdFx0aGRsciA9ICd3YXJuJztcbiAgXHR9IGVsc2UgaWYgKGNvbnRleHQubGV2ZWwgPT09IExvZ2dlci5FUlJPUiAmJiBjb25zb2xlLmVycm9yKSB7XG4gIFx0XHRoZGxyID0gJ2Vycm9yJztcbiAgXHR9IGVsc2UgaWYgKGNvbnRleHQubGV2ZWwgPT09IExvZ2dlci5JTkZPICYmIGNvbnNvbGUuaW5mbykge1xuICBcdFx0aGRsciA9ICdpbmZvJztcbiAgXHR9IGVsc2Uge1xuICBcdFx0aGRsciA9ICdsb2cnO1xuICBcdH1cblxuICBcdC8vIC0tIGN1c3RvbSBmb3JtYXQgbG9nZ2luZyBzdGF0ZW1lbnQgZm9yIGRlcGxveXIgcmVxdWVzdC9yZXNwb25zZS9lcnJvciAtLVxuICBcdGFyZ3MudW5zaGlmdCgnWycgKyAoZXJyb3IgPyBMb2dnZXIuRVJST1IubmFtZSA6IG5hbWUpICsgJ10gJyArIGRlbGltLnN0YXJ0KTtcbiAgXHRhcmdzLnB1c2goZGVsaW0uZW5kKTtcblxuICBcdGNvbnNvbGVbaGRscl0oYXJnc1swXSwgW2FyZ3NbMV0gKyAnIC0tLT4gJyArIGFyZ3NbMl1bJ2NhbGwnXV0pO1xuXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7IGNvbnNvbGUubG9nKGFyZ3NbaV0pOyB9ICBcbn1cblxuLyoqXG4gKiBMb2dnaW5nIGNhdGVnb3J5IGJ5IGlkLlxuICovXG5mdW5jdGlvbiBDYXRlZ29yeShpZCwgbGV2ZWwsIGZuKSB7XG5cdHRoaXMuaWQgPSBpZDtcblx0dGhpcy5jb250ZXh0ID0gbGV2ZWwgfHwgTG9nZ2VyLkRFQlVHO1xufVxuXG5DYXRlZ29yeS5wcm90b3R5cGUgPSB7XHRcblx0bG9nOiBmdW5jdGlvbihsZXZlbCwgbXNnQXJncykge1xuXHRcdGlmIChsZXZlbC52YWx1ZSA+PSB0aGlzLmNvbnRleHQudmFsdWUpIHtcdFx0XHRcblx0XHRcdGxvZyhtc2dBcmdzLCB7IFxuXHRcdFx0XHRsZXZlbDogbGV2ZWwsXG5cdFx0XHRcdG5hbWU6IHRoaXMuY29udGV4dC5uYW1lLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy5jb250ZXh0LnZhbHVlXG5cdFx0XHR9KTtcdFx0XG5cdFx0fVxuXHR9LFxuXG5cdGRlYnVnOiBmdW5jdGlvbiAoKSB7XHRcdFxuXHRcdHRoaXMubG9nKExvZ2dlci5ERUJVRywgYXJndW1lbnRzKTtcblx0fSxcblxuXHRlcnJvcjogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubG9nKExvZ2dlci5FUlJPUiwgYXJndW1lbnRzKTtcblx0fSxcblxuXHRpbmZvOiBmdW5jdGlvbiAoKSB7XHRcdFxuXHRcdHRoaXMubG9nKExvZ2dlci5JTkZPLCBhcmd1bWVudHMpO1xuXHR9LFxuXG5cdHdhcm46IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmxvZyhMb2dnZXIuV0FSTiwgYXJndW1lbnRzKTtcblx0fSxcblxuXHRzZXRMZXZlbDogZnVuY3Rpb24obGV2ZWwpIHtcblx0XHRpZiAobGV2ZWwgJiYgJ3ZhbHVlJyBpbiBsZXZlbCkge1xuXHRcdFx0dGhpcy5jb250ZXh0ID0gbGV2ZWw7XG5cdFx0fVxuXHR9XG59O1xuXG5Mb2dnZXIuREVCVUcgPSB7IHZhbHVlOiAxLCBuYW1lOiAnREVCVUcnIH07XG5Mb2dnZXIuSU5GTyAgPSB7IHZhbHVlOiAyLCBuYW1lOiAnSU5GTycgfTtcbkxvZ2dlci5XQVJOICA9IHsgdmFsdWU6IDQsIG5hbWU6ICdXQVJOJyB9O1xuTG9nZ2VyLkVSUk9SID0geyB2YWx1ZTogOCwgbmFtZTogJ0VSUk9SJyB9O1xuTG9nZ2VyLk9GRiAgID0geyB2YWx1ZTogOTksIG5hbWU6ICdPRkYnIH07ICAgXHRcdFxuXG5Mb2dnZXIuc2V0TGV2ZWwgPSBmdW5jdGlvbihuZXdMZXZlbCkge1xuXHRnbG9iYWxMb2dnZXIuc2V0TGV2ZWwobmV3TGV2ZWwpO1xufTtcblxuTG9nZ2VyLmRlYnVnID0gZnVuY3Rpb24gKCkge1xuXHRnbG9iYWxMb2dnZXIuZGVidWcuYXBwbHkoZ2xvYmFsTG9nZ2VyLCBhcmd1bWVudHMpO1xufTtcblxuTG9nZ2VyLmluZm8gPSBmdW5jdGlvbiAoKSB7XG5cdGdsb2JhbExvZ2dlci5pbmZvLmFwcGx5KGdsb2JhbExvZ2dlciwgYXJndW1lbnRzKTtcbn07XG5cbkxvZ2dlci53YXJuID0gZnVuY3Rpb24gKCkge1xuXHRnbG9iYWxMb2dnZXIud2Fybi5hcHBseShnbG9iYWxMb2dnZXIsIGFyZ3VtZW50cyk7XG59O1xuXG5Mb2dnZXIuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdGdsb2JhbExvZ2dlci5lcnJvci5hcHBseShnbG9iYWxMb2dnZXIsIGFyZ3VtZW50cyk7XG59O1xuXG5Mb2dnZXIuZ2V0ID0gZnVuY3Rpb24gKGlkLCBsZXZlbCwgZm4pIHtcdFxuXHRyZXR1cm4gKGxvZ2dlck1hcFtpZF0gfHwgKGZ1bmN0aW9uKCkge1xuXHRcdGxvZ2dlck1hcFtpZF0gPSBuZXcgQ2F0ZWdvcnkoaWQsIGxldmVsLCBmbik7XG5cdFx0cmV0dXJuIGxvZ2dlck1hcFtpZF07XG5cdH0pKCkpO1xufTtcblxuLy8gLS0tIHNldHVwIHRoZSBnbG9iYWwgbG9nZ2VyIC0tLVxuZ2xvYmFsTG9nZ2VyID0gTG9nZ2VyLmdldCgnZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzIFx0PSBMb2dnZXI7XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE0IGJ5IFJldm9sdXRpb24gQW5hbHl0aWNzIEluYy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cbiBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHJlcXVpcmUobW9kdWxlKTtcbiAgfSBjYXRjaCAoZSkge31cbn07IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNCBieSBSZXZvbHV0aW9uIEFuYWx5dGljcyBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbmZ1bmN0aW9uIFF1ZXVlKCkge1xuICB0aGlzLmVtcHR5Q2FsbGJhY2sgPSBudWxsO1xuICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB0aGlzLnlpZWxkZWQgPSBmYWxzZTtcbiAgdGhpcy5yZXNwb25zZSA9IG51bGw7XG4gIHRoaXMucmVzcG9uc2VDaGFpbiA9IFtdOyAgXG59XG5cblF1ZXVlLnByb3RvdHlwZSA9IHtcblxuICBhZGQ6IGZ1bmN0aW9uKGZuLCBjdHgsIGRlZmVyKSB7XG4gICAgLy8gY3VycmVudGx5IG5vdCB3YWl0aW5nIGFuZCB0aGVyZSBpcyBubyBkZWZlciBkZWxheSBqdXN0IG1ha2UgY2FsbFxuICAgIGlmICghdGhpcy55aWVsZGVkICYmICFkZWZlcikgeyAgICAgIFxuICAgICAgZm4uYXBwbHkoY3R4IHx8IHRoaXMsIFt0aGlzLnJlc3BvbnNlXSk7XG4gICAgfSBlbHNlIHsgLy8gYWRkIHRvIHF1ZXVlXG4gICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKHsgZm46IGZuLCBjdHg6IGN0eCB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2tzLmxlbmd0aDtcbiAgfSxcblxuICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsYmFja3MubGVuZ3RoID09PSAwO1xuICB9LFxuXG4gIGVtcHR5OiBmdW5jdGlvbihmbiwgY3R4KSB7XG4gICAgdGhpcy5lbXB0eUNhbGxiYWNrID0geyBmbjogZm4sIGN0eDogY3R4IH07XG4gIH0sXG5cbiAgeWllbGQ6IGZ1bmN0aW9uKHlpZWxkKSB7XG4gICAgdGhpcy55aWVsZGVkID0geWllbGQ7XG4gIH0sXG5cbiAgdGFrZTogZnVuY3Rpb24ocmVzcG9uc2UsIGVycm9yLCBhcmdzKSB7IFxuICAgIHZhciBjYjtcblxuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5yZXNwb25zZUNoYWluLnB1c2gocmVzcG9uc2UpO1xuICAgIH1cblxuXG4gICAgaWYgKCF0aGlzLnlpZWxkZWQgJiYgdGhpcy5jYWxsYmFja3NbMF0pIHtcbiAgICAgIGNiID0gdGhpcy5jYWxsYmFja3Muc2hpZnQoKTtcbiAgICAgIGNiLmZuLmFwcGx5KGNiLmN0eCB8fCB0aGlzLCBbdGhpcy5yZXNwb25zZUNoYWluLCBlcnJvciwgYXJnc10pO1xuXG4gICAgICAvLyBub3RpZnkgdGhhdCB0aGUgcXVldWUgaXMgbm93IGVtcHR5ICAgXG4gICAgICBpZiAodGhpcy5jYWxsYmFja3NbMF0gJiYgdGhpcy5lbXB0eUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZW1wdHlDYWxsYmFjay5mbi5jYWxsKHRoaXMuZW1wdHlDYWxsYmFjay5jdHggfHwgdGhpcyk7ICAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcbiAgZmx1c2g6IGZ1bmN0aW9uKHJlc3BvbnNlLCBlcnJvciwgYXJncykgeyAgICAgICAgXG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLnJlc3BvbnNlQ2hhaW4ucHVzaChyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLy8gcG9wIGFuZCBjYWxsIG5leHQgaW5saW5lXG4gICAgd2hpbGUgKHRoaXMuY2FsbGJhY2tzWzBdKSB7XG4gICAgICBpZiAodGhpcy55aWVsZGVkKSB7IGJyZWFrOyB9XG4gICAgICB2YXIgY2IgPSB0aGlzLmNhbGxiYWNrcy5zaGlmdCgpO1xuICAgICAgY2IuZm4uYXBwbHkoY2IuY3R4IHx8IHRoaXMsIFt0aGlzLnJlc3BvbnNlQ2hhaW4sIGVycm9yLCBhcmdzXSk7XG5cbiAgICAgIC8vIG5vdGlmeSB0aGF0IHRoZSBxdWV1ZSBpcyBub3cgZW1wdHlcbiAgICAgIGlmICh0aGlzLmNhbGxiYWNrc1swXSAmJiB0aGlzLmVtcHR5Q2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5lbXB0eUNhbGxiYWNrLmZuLmNhbGwodGhpcy5lbXB0eUNhbGxiYWNrLmN0eCB8fCB0aGlzKTsgICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWU7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNCBieSBSZXZvbHV0aW9uIEFuYWx5dGljcyBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBCYXNlICAgPSByZXF1aXJlKCcuL3NlbGZpc2gnKS5CYXNlLFxuICAgIFJUeXBlcyA9IHJlcXVpcmUoJy4vcnR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoUlR5cGVzLCB7XG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHsgIFx0XG5cdFx0dGhpcy5uYW1lICA9IG5hbWU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdH0sXG5cblx0bnVtZXJpYzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7XG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUk5VTUVSSUMsXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pO1xuXHR9LFx0XG5cblx0aW50ZWdlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJJTlRFR0VSLFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRsb2dpY2FsOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkJPT0xFQU4sIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRjaGFyYWN0ZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SU1RSSU5HLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXHRcblx0ZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJEQVRFLFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0Zm9ybWF0OiAneXl5eS1NTS1kZCcsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblxuXHRwb3NpeGN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUlBPU0lYX0RBVEUsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0Zm9ybWF0OiAneXl5eS1NTS1kZCBISDptbTpzcyBaJyxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFx0XG5cdFxuXHRudW1lcmljVmVjdG9yOiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJOVU1FUklDX1ZFQ1RPUixcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXHRcblx0aW50ZWdlclZlY3RvcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJJTlRFR0VSX1ZFQ1RPUiwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGxvZ2ljYWxWZWN0b3I6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkJPT0xFQU5fVkVDVE9SLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXHRcblx0Y2hhcmFjdGVyVmVjdG9yOiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJTVFJJTkdfVkVDVE9SLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LCAgXG5cdFxuXHRkYXRlVmVjdG9yOiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJEQVRFX1ZFQ1RPUiwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRmb3JtYXQ6ICd5eXl5LU1NLWRkJyxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFx0XG5cdFxuXHRwb3NpeGN0VmVjdG9yOiBmdW5jdGlvbiAoKSB7IFxuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJQT1NJWF9EQVRFX1ZFQ1RPUiwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRmb3JtYXQ6ICd5eXl5LU1NLWRkIEhIOm1tOnNzIFonLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRsaXN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkxJU1QsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRkYXRhZnJhbWU6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkRBVEFGUkFNRSwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblxuXHRmYWN0b3I6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgb3B0cyA9IHRoaXMub3B0aW9ucztcblxuXHRcdHJldHVybiB0aGlzLmFzc2VydCggeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SRkFDVE9SLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdG9yZGVyZWQ6IGZhbHNlLFxuXHRcdFx0bGV2ZWxzOiBvcHRzLmxldmVscyxcblx0XHRcdGxhYmVsczogb3B0cy5sYWJlbHMsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblxuXHRvcmRlcmVkOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG5cblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoIHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUk9SREVSRUQsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0b3JkZXJlZDogdHJ1ZSxcblx0XHRcdGxldmVsczogb3B0cy5sZXZlbHMsXG5cdFx0XHRsYWJlbHM6IG9wdHMubGFiZWxzLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXHRcdFxuXG5cdG51bWVyaWNNYXRyaXg6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUk5VTUVSSUNfTUFUUklYLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdGludGVnZXJNYXRyaXg6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUklOVEVHRVJfTUFUUklYLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdGxvZ2ljYWxNYXRyaXg6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkJPT0xFQU5fTUFUUklYLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdGNoYXJhY3Rlck1hdHJpeDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJTVFJJTkdfTUFUUklYLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgb3B0cyAgID0gdGhpcy5vcHRpb25zIHx8IHt9LFxuXHRcdCAgICBsZXZlbHMgPSBvcHRzLmxldmVscyA/ICdbIGxldmVscyA9ICcgKyBvcHRzLmxldmVscyArICddJyA6ICcnLFxuXHRcdCAgICBsYWJlbHMgPSBvcHRzLmxhYmVscyA/ICdbIGxhYmVscyA9ICcgKyBvcHRzLmxhYmVscyArICddJyA6ICcnO1xuXG5cdFx0cmV0dXJuICdbIG5hbWUgPSAnICArIHRoaXMubmFtZSArICcgXSAnICtcblx0XHQgICAgICAgJ1sgdmFsdWUgPSAnICsgdGhpcy52YWx1ZSArICcgXSAnICtcblx0XHQgICAgICAgJ1sgdHlwZSA9ICcgICsgdGhpcy50eXBlICsgJyBdICcgK1xuXHRcdCAgICAgICBsZXZlbHMgKyBsYWJlbHM7XHRcdCAgICAgICBcblx0fVxufSk7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNCBieSBSZXZvbHV0aW9uIEFuYWx5dGljcyBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBCYXNlICAgPSByZXF1aXJlKCcuL3NlbGZpc2gnKS5CYXNlLFxuICAgIFJUeXBlcyA9IHJlcXVpcmUoJy4vcnR5cGVzJyksXG4gICAgTGFuZyAgID0gcmVxdWlyZSgnLi9sYW5nJyksXG4gICAgUklucHV0ID0gcmVxdWlyZSgnLi9yaW5wdXQnKTsgXG5cbmZ1bmN0aW9uIGNyZWF0ZSh0eXBlLCBuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuXHR2YXIgcmlucHV0O1xuXG5cdGlmIChMYW5nLmlzT2JqZWN0KG5hbWUpKSB7XG5cdFx0cmlucHV0ID0gbmFtZTtcblx0XHRpZiAoIXJpbnB1dC50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWxBcmd1bWVudEVycm9yOicgKyBcblx0XHRcdFx0J0V4cGVjdGluZyBcIicgKyB0eXBlICsgJ1wiIGJ1dCBmb3VuZCBcIicgKyByaW5wdXQudHlwZSArICdcIicpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0ICAgIHJpbnB1dCA9IFJJbnB1dC5uZXcobmFtZSwgdmFsdWUsIG9wdGlvbnMpW3R5cGVdKCk7XG5cdH0gXG5cblx0cmV0dXJuIHJpbnB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlLmV4dGVuZChSVHlwZXMsIHtcdFxuXHRudW1lcmljOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUk5VTUVSSUMsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdFxuXHRpbnRlZ2VyOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUklOVEVHRVIsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0bG9naWNhbDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJCT09MRUFOLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGNoYXJhY3RlcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJTVFJJTkcsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0ZGF0ZTogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJEQVRFLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblxuXHRwb3NpeGN0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUlBPU0lYX0RBVEUsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFx0XG5cdFxuXHRudW1lcmljVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJOVU1FUklDX1ZFQ1RPUiwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cdFxuXHRpbnRlZ2VyVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUklOVEVHRVJfVkVDVE9SLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGxvZ2ljYWxWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkJPT0xFQU5fVkVDVE9SLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGNoYXJhY3RlclZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SU1RSSU5HX1ZFQ1RPUiwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sICBcblx0XG5cdGRhdGVWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkRBVEVfVkVDVE9SLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcdFxuXHRcblx0cG9zaXhjdFZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SUE9TSVhfREFURV9WRUNUT1IsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0bGlzdDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJMSVNULCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGRhdGFmcmFtZTogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SREFUQUZSQU1FLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcdFxuXG5cdGZhY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBsZXZlbHMsIGxhYmVscykge1xuXHRcdHZhciBvcHRzID0geyBsZXZlbHM6IGxldmVscywgbGFiZWxzOiBsYWJlbHMgfTtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkZBQ1RPUiwgbmFtZSwgdmFsdWUsIG9wdHMpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRvcmRlcmVkOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGxldmVscywgbGFiZWxzKSB7XG5cdFx0dmFyIG9wdHMgPSB7IGxldmVsczogbGV2ZWxzLCBsYWJlbHM6IGxhYmVscyB9O1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5ST1JERVJFRCwgbmFtZSwgdmFsdWUsIG9wdHMpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcdFx0XG5cblx0bnVtZXJpY01hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5STlVNRVJJQ19NQVRSSVgsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXG5cdGludGVnZXJNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUklOVEVHRVJfTUFUUklYLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblxuXHRsb2dpY2FsTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJCT09MRUFOX01BVFJJWCwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cblx0Y2hhcmFjdGVyTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUlNUUklOR19NQVRSSVgsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0pOyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTQgYnkgUmV2b2x1dGlvbiBBbmFseXRpY3MgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlIFxuICogZGV0YWlscy5cbiAqL1xuXG52YXIgQmFzZSA9IHJlcXVpcmUoJy4vc2VsZmlzaCcpLkJhc2UsXG4gICAgTGFuZyA9IHJlcXVpcmUoJy4vbGFuZycpLFxuICAgIG1hcCAgPSB7fTsgLy8gZGVwbG95ci0+VG8tPlIgY2F0YWxvZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2UuZXh0ZW5kKHtcblx0cjoge1xuXHRcdFBSSU1JVElWRTogJ3ByaW1pdGl2ZScsXG5cdFx0REFUQUZSQU1FOiAnZGF0YWZyYW1lJyxcblx0XHRMSVNUOiAnbGlzdCcsXG5cdFx0TUFUUklYOiAnbWF0cml4Jyxcblx0XHREQVRFOiAnZGF0ZScsXG5cdFx0RkFDVE9SOiAnZmFjdG9yJyxcblx0XHRWRUNUT1I6ICd2ZWN0b3InXG5cdH0sXG5cblx0ZGVwbG95cjoge1xuXHRcdFJCT09MRUFOOiAnbG9naWNhbCcsXG5cdFx0Uk5VTUVSSUM6ICdudW1lcmljJyxcblx0XHRSSU5URUdFUjogJ2ludGVnZXInLFxuXHRcdFJTVFJJTkc6ICdjaGFyYWN0ZXInLFxuXHRcdFJEQVRFOiAnZGF0ZScsXG5cdFx0UlBPU0lYX0RBVEU6ICdwb3NpeGN0Jyxcblx0XHRSQk9PTEVBTl9WRUNUT1I6ICdsb2dpY2FsVmVjdG9yJyxcblx0XHRSTlVNRVJJQ19WRUNUT1I6J251bWVyaWNWZWN0b3InLFxuXHRcdFJJTlRFR0VSX1ZFQ1RPUjogJ2ludGVnZXJWZWN0b3InLFx0XG5cdFx0UlNUUklOR19WRUNUT1I6ICdjaGFyYWN0ZXJWZWN0b3InLFxuXHRcdFJEQVRFX1ZFQ1RPUjogJ2RhdGVWZWN0b3InLFxuXHRcdFJQT1NJWF9EQVRFX1ZFQ1RPUjogJ3Bvc2l4Y3RWZWN0b3InLFxuXHRcdFJMSVNUOiAnbGlzdCcsXG5cdFx0UkRBVEFGUkFNRTogJ2RhdGFmcmFtZScsXG5cdFx0UkZBQ1RPUjogJ2ZhY3RvcicsXG5cdFx0Uk9SREVSRUQ6ICdvcmRlcmVkJyxcdFx0XG5cdFx0UkJPT0xFQU5fTUFUUklYOiAnbG9naWNhbE1hdHJpeCcsXG5cdFx0Uk5VTUVSSUNfTUFUUklYOiAnbnVtZXJpY01hdHJpeCcsXG5cdFx0UklOVEVHRVJfTUFUUklYOiAnaW50ZWdlck1hdHJpeCcsXHRcdFxuXHRcdFJTVFJJTkdfTUFUUklYOiAnY2hhcmFjdGVyTWF0cml4J1xuXHR9LFxuXG5cdGlzRGF0ZTogZnVuY3Rpb24odHlwZSkge1xuXHRcdHJldHVybiAodHlwZSA9PT0gdGhpcy5kZXBsb3lyLlJEQVRFIHx8IFxuXHRcdCAgICAgICAgdHlwZSA9PT0gdGhpcy5kZXBsb3lyLlJQT1NJWF9EQVRFIHx8IFxuXHRcdCAgICAgICAgdHlwZSA9PT0gdGhpcy5kZXBsb3lyLlJEQVRFX1ZFQ1RPUiB8fFxuXHRcdCAgICAgICAgdHlwZSA9PT0gdGhpcy5kZXBsb3lyLlJQT1NJWF9EQVRFX1ZFQ1RPUiB8fFxuXHRcdCAgICAgICAgdHlwZSA9PT0gdGhpcy5yLkRBVEUpO1xuXHR9LFxuXG5cdGRlcGxveXJUb1I6IGZ1bmN0aW9uKHR5cGUpIHtcdFxuXHRcdHZhciBkZXBsb3lyID0gdGhpcy5kZXBsb3lyLFxuXHRcdCAgICByICAgICAgID0gdGhpcy5yO1xuXG5cdFx0aWYgKCFtYXBbdHlwZV0pIHsgLy8gYnVpbGQgY2F0YWxvZyBvbmx5IG9uY2VcdFxuXHRcdFx0bWFwW2RlcGxveXIuUkJPT0xFQU5dICAgICAgICAgICA9IHIuUFJJTUlUSVZFO1xuXHRcdFx0bWFwW2RlcGxveXIuUk5VTUVSSUNdICAgICAgICAgICA9IHIuUFJJTUlUSVZFO1xuXHRcdFx0bWFwW2RlcGxveXIuUklOVEVHRVJdICAgICAgICAgICA9IHIuUFJJTUlUSVZFO1xuXHRcdFx0bWFwW2RlcGxveXIuUlNUUklOR10gICAgICAgICAgICA9IHIuUFJJTUlUSVZFO1xuXHRcdFx0bWFwW2RlcGxveXIuUkRBVEVdICAgICAgICAgICAgICA9IHIuREFURTtcblx0XHRcdG1hcFtkZXBsb3lyLlJQT1NJWF9EQVRFXSAgICAgICAgPSByLkRBVEU7XG5cdFx0XHRtYXBbZGVwbG95ci5SQk9PTEVBTl9WRUNUT1JdICAgID0gci5WRUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5STlVNRVJJQ19WRUNUT1JdICAgID0gci5WRUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5SSU5URUdFUl9WRUNUT1JdICAgID0gci5WRUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5SU1RSSU5HX1ZFQ1RPUl0gICAgID0gci5WRUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5SREFURV9WRUNUT1JdICAgICAgID0gci5WRUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5SUE9TSVhfREFURV9WRUNUT1JdID0gci5WRUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5STElTVF0gICAgICAgICAgICAgID0gci5MSVNUO1xuXHRcdFx0bWFwW2RlcGxveXIuUkRBVEFGUkFNRV0gICAgICAgICA9IHIuREFUQUZSQU1FO1xuXHRcdFx0bWFwW2RlcGxveXIuUkZBQ1RPUl0gICAgICAgICAgICA9IHIuRkFDVE9SO1xuXHRcdFx0bWFwW2RlcGxveXIuUk9SREVSRURdICAgICAgICAgICA9IHIuRkFDVE9SO1xuXHRcdFx0bWFwW2RlcGxveXIuUkJPT0xFQU5fTUFUUklYXSAgICA9IHIuTUFUUklYO1xuXHRcdFx0bWFwW2RlcGxveXIuUk5VTUVSSUNfTUFUUklYXSAgICA9IHIuTUFUUklYO1xuXHRcdFx0bWFwW2RlcGxveXIuUklOVEVHRVJfTUFUUklYXSAgICA9IHIuTUFUUklYO1xuXHRcdFx0bWFwW2RlcGxveXIuUlNUUklOR19NQVRSSVhdICAgICA9IHIuTUFUUklYO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXBbdHlwZV07XHRcdFxuXHR9LFxuXG5cdC8qKlxuXHQgKiBBc3NlcnQgdGhhdCB0aGUgYHJpbnB1dGAgdmFsdWUgaXMgdGhlIGNvcnJlY3QgSmF2YVNjcmlwdCBEYXRhIFR5cGUuXG5cdCAqL1xuXHRhc3NlcnQ6IGZ1bmN0aW9uIChyaW5wdXQpIHtcblx0XHR2YXIgZGVwbG95ciA9IHRoaXMuZGVwbG95cixcbiAgICBcdFx0Tk9PUCAgICA9IG51bGwsXG5cdFx0ICAgIHZhbHVlcyAgPSByaW5wdXQudmFsdWUsXG5cdFx0ICAgIGZuO1xuXG5cdFx0dmFsdWVzID0gIUxhbmcuaXNBcnJheSh2YWx1ZXMpID8gW3ZhbHVlc10gOiB2YWx1ZXM7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHZhbHVlID0gdmFsdWVzW2ldO1xuXG5cdFx0XHRzd2l0Y2ggKHJpbnB1dC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgZGVwbG95ci5STlVNRVJJQyA6XG5cdFx0XHRcdGNhc2UgZGVwbG95ci5STlVNRVJJQ19WRUNUT1IgOlxuXHRcdFx0XHRjYXNlIGRlcGxveXIuUk5VTUVSSUNfVkVDVE9SIDpcblx0XHRcdFx0Zm4gPSBMYW5nLmlzTnVtYmVyO1xuXHRcdFx0XHQvLyBzdXBwb3J0IHN0cmluZyBudW1iZXJzXG5cdFx0XHRcdHZhciB2YWwgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblx0XHRcdCAgICB2YWx1ZSA9IGlzTmFOKHZhbCkgPyB2YWx1ZSA6IHZhbDsgXG5cdFx0XHQgICAgYnJlYWs7XG5cblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUklOVEVHRVIgOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SSU5URUdFUl9WRUNUT1IgOlxuXHRcdFx0ICAgIGZuID0gTGFuZy5pc051bWJlcjtcblx0XHRcdCAgICAvLyBzdXBwb3J0IHN0cmluZyBudW1iZXJzXG5cdFx0XHQgICAgdmFyIHZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXHRcdFx0ICAgIHZhbHVlID0gaXNOYU4odmFsKSA/IHZhbHVlIDogdmFsOyBcblx0XHRcdCAgICBicmVhaztcblxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SQk9PTEVBTiA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJCT09MRUFOX1ZFQ1RPUiA6XG5cdFx0XHQgICAgZm4gPSBMYW5nLmlzQm9vbGVhbjtcblx0XHRcdCAgICBicmVhaztcblx0XHRcdCAgICBcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUlNUUklORyA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJTVFJJTkdfVkVDVE9SIDpcdFxuXHRcdFx0ICAgIGZuID0gTGFuZy5pc1N0cmluZztcblx0XHRcdCAgICBicmVhaztcblxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SREFURSA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJQT1NJWF9EQVRFIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkRBVEVfVkVDVE9SIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUlBPU0lYX0RBVEVfVkVDVE9SIDpcblx0XHRcdCAgICBmbiA9IExhbmcuaXNEYXRlO1xuXHRcdFx0ICAgIGJyZWFrO1xuXG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJGQUNUT1IgOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5ST1JERVJFRCA6XHRcdFx0ICAgIFxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SREFUQUZSQU1FIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUklOVEVHRVJfTUFUUklYIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkJPT0xFQU5fTUFUUklYIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUlNUUklOR19NQVRSSVggOlx0ICAgIFxuXHRcdFx0ICAgIGZuID0gTk9PUDtcblx0XHRcdCAgICBicmVha1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZm4gJiYgIWZuKHZhbHVlKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1JJbnB1dEZvcm1hdEVycm9yOiAnICsgJ1wiJyArIHZhbHVlICsgXG5cdFx0XHRcdFx0J1wiIGlzIG5vdCBhIHZhbGlkIFwiJyArIHJpbnB1dC50eXBlICsgJ1wiIHR5cGUuJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJpbnB1dDtcblx0fVxufSk7IiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vR296YWxhL3NlbGZpc2hcbiAqL1xuXG4vKiB2aW06c2V0IHRzPTIgc3c9MiBzdHM9MiBleHBhbmR0YWIgKi9cbi8qanNoaW50IHVuZGVmOiB0cnVlIGVzNTogdHJ1ZSBub2RlOiB0cnVlIGRldmVsOiB0cnVlIGV2aWw6IHRydWVcbiAgICAgICAgIGZvcmluOiB0cnVlIGxhdGVkZWY6IGZhbHNlIHN1cGVybmV3OiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IHRydWUgKi9cblxuISh0eXBlb2YgZGVmaW5lICE9PSBcImZ1bmN0aW9uXCIgPyBmdW5jdGlvbigkKXsgJChudWxsLCB0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogd2luZG93KTsgfSA6IGRlZmluZSkoZnVuY3Rpb24ocmVxdWlyZSwgZXhwb3J0cykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5CYXNlID0gT2JqZWN0LmZyZWV6ZShPYmplY3QuY3JlYXRlKE9iamVjdC5wcm90b3R5cGUsIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSBgdGhpc2Agb2JqZWN0IChBbmFsb2cgb2ZcbiAgICogYG5ldyBPYmplY3QoKWApLlxuICAgKiBAZXhhbXBsZXNcbiAgICpcbiAgICogICAgdmFyIERvZyA9IEJhc2UuZXh0ZW5kKHtcbiAgICogICAgICBiYXJrOiBmdW5jdGlvbiBiYXJrKCkge1xuICAgKiAgICAgICAgcmV0dXJuICdSdWZmISBSdWZmISdcbiAgICogICAgICB9XG4gICAqICAgIH0pO1xuICAgKiAgICB2YXIgZG9nID0gRG9nLm5ldygpO1xuICAgKi9cbiAgJ25ldyc6IHsgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICBvYmplY3QuaW5pdGlhbGl6ZS5hcHBseShvYmplY3QsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfX0sXG4gIC8qKlxuICAgKiBXaGVuIG5ldyBpbnN0YW5jZSBvZiB0aGUgdGhpcyBwcm90b3R5cGUgaXMgY3JlYXRlZCBpdCdzIGBpbml0aWFsaXplYFxuICAgKiBtZXRob2QgaXMgY2FsbGVkIHdpdGggYWxsIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBgbmV3YC4gWW91IGNhblxuICAgKiBvdmVycmlkZSBgaW5pdGlhbGl6ZWAgdG8gc2V0IHVwIGFuIGluc3RhbmNlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZTogeyB2YWx1ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgfX0sXG4gIC8qKlxuICAgKiBNZXJnZXMgYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBwYXNzZWQgb2JqZWN0cyBpbnRvIGB0aGlzYCBpbnN0YW5jZSAoVGhpc1xuICAgKiBtZXRob2QgY2FuIGJlIHVzZWQgb24gaW5zdGFuY2VzIG9ubHkgYXMgcHJvdG90eXBlIG9iamVjdHMgYXJlIGZyb3plbikuXG4gICAqXG4gICAqIElmIHR3byBvciBtb3JlIGFyZ3VtZW50IG9iamVjdHMgaGF2ZSBvd24gcHJvcGVydGllcyB3aXRoIHRoZSBzYW1lIG5hbWUsXG4gICAqIHRoZSBwcm9wZXJ0eSBpcyBvdmVycmlkZGVuLCB3aXRoIHByZWNlZGVuY2UgZnJvbSByaWdodCB0byBsZWZ0LCBpbXBseWluZyxcbiAgICogdGhhdCBwcm9wZXJ0aWVzIG9mIHRoZSBvYmplY3Qgb24gdGhlIGxlZnQgYXJlIG92ZXJyaWRkZW4gYnkgYSBzYW1lIG5hbWVkXG4gICAqIHByb3BlcnR5IG9mIHRoZSBvYmplY3Qgb24gdGhlIHJpZ2h0LlxuICAgKlxuICAgKiBAZXhhbXBsZXNcbiAgICpcbiAgICogICAgdmFyIFBldCA9IERvZy5leHRlbmQoe1xuICAgKiAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUob3B0aW9ucykge1xuICAgKiAgICAgICAgLy8gdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lIC0+IHdvdWxkIGhhdmUgdGhyb3duIChmcm96ZW4gcHJvdG90eXBlKVxuICAgKiAgICAgICAgdGhpcy5tZXJnZShvcHRpb25zKSAvLyB3aWxsIG92ZXJyaWRlIGFsbCBwcm9wZXJ0aWVzLlxuICAgKiAgICAgIH0sXG4gICAqICAgICAgY2FsbDogZnVuY3Rpb24obmFtZSkge1xuICAgKiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSA9PT0gbmFtZSA/IHRoaXMuYmFyaygpIDogJydcbiAgICogICAgICB9LFxuICAgKiAgICAgIG5hbWU6IG51bGxcbiAgICogICAgfSlcbiAgICogICAgdmFyIHBldCA9IFBldC5uZXcoeyBuYW1lOiAnQmVuenknLCBicmVlZDogJ0xhYnJhZG9yJyB9KVxuICAgKiAgICBwZXQuY2FsbCgnQmVuenknKSAgIC8vICdSdWZmISBSdWZmISdcbiAgICovXG4gIG1lcmdlOiB7IHZhbHVlOiBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHt9O1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGRlc2NyaXB0b3JbbmFtZV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3BlcnRpZXMsIG5hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgZGVzY3JpcHRvcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH19LFxuICAvKipcbiAgICogVGFrZXMgYW55IG51bWJlciBvZiBhcmd1bWVudCBvYmplY3RzIGFuZCByZXR1cm5zIGZyb3plbiwgY29tcG9zaXRlIG9iamVjdFxuICAgKiB0aGF0IGluaGVyaXRzIGZyb20gYHRoaXNgIG9iamVjdCBhbmQgY29tYmluZXMgYWxsIG9mIHRoZSBvd24gcHJvcGVydGllcyBvZlxuICAgKiB0aGUgYXJndW1lbnQgb2JqZWN0cy4gKE9iamVjdHMgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbiBhcmUgZnJvemVuIGFzXG4gICAqIHRoZXkgYXJlIGludGVuZGVkIHRvIGJlIHVzZWQgYXMgdHlwZXMpLlxuICAgKlxuICAgKiBJZiB0d28gb3IgbW9yZSBhcmd1bWVudCBvYmplY3RzIGhhdmUgb3duIHByb3BlcnRpZXMgd2l0aCB0aGUgc2FtZSBuYW1lLFxuICAgKiB0aGUgcHJvcGVydHkgaXMgb3ZlcnJpZGRlbiwgd2l0aCBwcmVjZWRlbmNlIGZyb20gcmlnaHQgdG8gbGVmdCwgaW1wbHlpbmcsXG4gICAqIHRoYXQgcHJvcGVydGllcyBvZiB0aGUgb2JqZWN0IG9uIHRoZSBsZWZ0IGFyZSBvdmVycmlkZGVuIGJ5IGEgc2FtZSBuYW1lZFxuICAgKiBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0IG9uIHRoZSByaWdodC5cbiAgICogQGV4YW1wbGVzXG4gICAqXG4gICAqICAgIC8vICMjIE9iamVjdCBjb21wb3NpdGlvbiAjI1xuICAgKlxuICAgKiAgICB2YXIgSEVYID0gQmFzZS5leHRlbmQoe1xuICAgKiAgICAgIGhleDogZnVuY3Rpb24gaGV4KCkge1xuICAgKiAgICAgICAgcmV0dXJuICcjJyArIHRoaXMuY29sb3I7XG4gICAqICAgICAgfVxuICAgKiAgICB9KVxuICAgKlxuICAgKiAgICB2YXIgUkdCID0gQmFzZS5leHRlbmQoe1xuICAgKiAgICAgIHJlZDogZnVuY3Rpb24gcmVkKCkge1xuICAgKiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuY29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XG4gICAqICAgICAgfSxcbiAgICogICAgICBncmVlbjogZnVuY3Rpb24gZ3JlZW4oKSB7XG4gICAqICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5jb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcbiAgICogICAgICB9LFxuICAgKiAgICAgIGJsdWU6IGZ1bmN0aW9uIGJsdWUoKSB7XG4gICAqICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5jb2xvci5zdWJzdHIoNCwgMiksIDE2KTtcbiAgICogICAgICB9XG4gICAqICAgIH0pXG4gICAqXG4gICAqICAgIHZhciBDTVlLID0gQmFzZS5leHRlbmQoUkdCLCB7XG4gICAqICAgICAgYmxhY2s6IGZ1bmN0aW9uIGJsYWNrKCkge1xuICAgKiAgICAgICAgdmFyIGNvbG9yID0gTWF0aC5tYXgoTWF0aC5tYXgodGhpcy5yZWQoKSwgdGhpcy5ncmVlbigpKSwgdGhpcy5ibHVlKCkpO1xuICAgKiAgICAgICAgcmV0dXJuICgxIC0gY29sb3IgLyAyNTUpLnRvRml4ZWQoNCk7XG4gICAqICAgICAgfSxcbiAgICogICAgICBjeWFuOiBmdW5jdGlvbiBjeWFuKCkge1xuICAgKiAgICAgICAgdmFyIEsgPSB0aGlzLmJsYWNrKCk7XG4gICAqICAgICAgICByZXR1cm4gKCgoMSAtIHRoaXMucmVkKCkgLyAyNTUpLnRvRml4ZWQoNCkgLSBLKSAvICgxIC0gSykpLnRvRml4ZWQoNCk7XG4gICAqICAgICAgfSxcbiAgICogICAgICBtYWdlbnRhOiBmdW5jdGlvbiBtYWdlbnRhKCkge1xuICAgKiAgICAgICAgdmFyIEsgPSB0aGlzLmJsYWNrKCk7XG4gICAqICAgICAgICByZXR1cm4gKCgoMSAtIHRoaXMuZ3JlZW4oKSAvIDI1NSkudG9GaXhlZCg0KSAtIEspIC8gKDEgLSBLKSkudG9GaXhlZCg0KTtcbiAgICogICAgICB9LFxuICAgKiAgICAgIHllbGxvdzogZnVuY3Rpb24geWVsbG93KCkge1xuICAgKiAgICAgICAgdmFyIEsgPSB0aGlzLmJsYWNrKCk7XG4gICAqICAgICAgICByZXR1cm4gKCgoMSAtIHRoaXMuYmx1ZSgpIC8gMjU1KS50b0ZpeGVkKDQpIC0gSykgLyAoMSAtIEspKS50b0ZpeGVkKDQpO1xuICAgKiAgICAgIH1cbiAgICogICAgfSlcbiAgICpcbiAgICogICAgdmFyIENvbG9yID0gQmFzZS5leHRlbmQoSEVYLCBSR0IsIENNWUssIHtcbiAgICogICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBDb2xvcihjb2xvcikge1xuICAgKiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgKiAgICAgIH1cbiAgICogICAgfSk7XG4gICAqXG4gICAqICAgIC8vICMjIFByb3RvdHlwYWwgaW5oZXJpdGFuY2UgIyNcbiAgICpcbiAgICogICAgdmFyIFBpeGVsID0gQ29sb3IuZXh0ZW5kKHtcbiAgICogICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBQaXhlbCh4LCB5LCBoZXgpIHtcbiAgICogICAgICAgIENvbG9yLmluaXRpYWxpemUuY2FsbCh0aGlzLCBoZXgpO1xuICAgKiAgICAgICAgdGhpcy54ID0geDtcbiAgICogICAgICAgIHRoaXMueSA9IHk7XG4gICAqICAgICAgfSxcbiAgICogICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAqICAgICAgICByZXR1cm4gdGhpcy54ICsgJzonICsgdGhpcy55ICsgJ0AnICsgdGhpcy5oZXgoKTtcbiAgICogICAgICB9XG4gICAqICAgIH0pO1xuICAgKlxuICAgKiAgICB2YXIgcGl4ZWwgPSBQaXhlbC5uZXcoMTEsIDIzLCAnQ0MzMzk5JylcbiAgICogICAgcGl4ZWwudG9TdHJpbmcoKTsgLy8gMTE6MjNAI0NDMzM5OVxuICAgKlxuICAgKiAgICBwaXhlbC5yZWQoKTsgICAgICAvLyAyMDRcbiAgICogICAgcGl4ZWwuZ3JlZW4oKTsgICAgLy8gNTFcbiAgICogICAgcGl4ZWwuYmx1ZSgpOyAgICAgLy8gMTUzXG4gICAqXG4gICAqICAgIHBpeGVsLmN5YW4oKTsgICAgIC8vIDAuMDAwMFxuICAgKiAgICBwaXhlbC5tYWdlbnRhKCk7ICAvLyAwLjc1MDBcbiAgICogICAgcGl4ZWwueWVsbG93KCk7ICAgLy8gMC4yNTAwXG4gICAqXG4gICAqL1xuICAgZXh0ZW5kOiB7IHZhbHVlOiBmdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUodGhpcy5tZXJnZS5hcHBseShPYmplY3QuY3JlYXRlKHRoaXMpLCBhcmd1bWVudHMpKTtcbiAgfX1cbn0pKTtcblxufSk7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNCBieSBSZXZvbHV0aW9uIEFuYWx5dGljcyBJbmMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIExhbmcgPSByZXF1aXJlKCcuL2xhbmcnKTtcblxudmFyIGdldCA9IGV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24ocywga2V5KSB7XG4gICAgZnVuY3Rpb24gdHJhdmVyc2Uob2JqLCBmbiwgcGFyZW50KSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkodGhpcywgW2ksIG9ialtpXSwgcGFyZW50XSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG9ialtpXSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKG9ialtpXSBpbnN0YW5jZW9mIEFycmF5KSkgeyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICB0cmF2ZXJzZShvYmpbaV0sIGZuLCBpKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwgcHJvcGVydHkpIHtcbiAgICAgICAgdmFyIGFjYyA9IHt9O1xuICAgICAgICB0cmF2ZXJzZShvYmosIGZ1bmN0aW9uKGtleSwgdmFsdWUsIHBhcmVudCkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gcHJvcGVydHkpIHsgIFxuICAgICAgICAgICAgICAgIGFjYyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbXB0eShvYmopIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHsgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgcmV0dXJuIG9iajsgfVxuICAgICAgICByZXR1cm4gIUxhbmcuaXNPYmplY3Qob2JqKSA/IG9iaiA6IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtcHR5KGdldFByb3BlcnR5KHMsIGtleSkpO1xufTtcblxudmFyIGluQXJyYXkgPSBleHBvcnRzLmluQXJyYXkgPSBmdW5jdGlvbihoYXlzdGFjaywgbmVlZGxlLCBrZXkpIHtcbiAgICB2YXIgaSwgbWF4ID0gaGF5c3RhY2subGVuZ3RoO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChoYXlzdGFja1tpXVtrZXldID09PSBuZWVkbGUpIHsgcmV0dXJuIGhheXN0YWNrW2ldOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGF5c3RhY2tbaV0gPT09IG5lZWRsZSkgeyByZXR1cm4gaGF5c3RhY2tbaV07IH1cbiAgICAgICAgfSAgIFxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbih0bywgZnJvbSkgeyAgICAgICAgXG4gICAgaWYgKCF0byB8fCB0eXBlb2YodG8pICE9PSAnb2JqZWN0JykgeyB0byA9IHt9OyB9XG4gICAgaWYgKCFmcm9tIHx8IHR5cGVvZihmcm9tKSAhPT0gJ29iamVjdCcpIHsgZnJvbSA9IHt9OyB9XG5cbiAgICBmb3IgKHZhciBrIGluIGZyb20pIHsgdG9ba10gPSBmcm9tW2tdOyB9XG5cbiAgICByZXR1cm4gdG87XG59O1xuXG5leHBvcnRzLndvcmtzcGFjZSA9IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuICAgIHZhciB3cyA9IGdldChvYmosICd3b3Jrc3BhY2UnKTtcbiAgICByZXR1cm4gKHdzID8gbmFtZSA/IGluQXJyYXkod3Mub2JqZWN0cywgbmFtZSwgJ25hbWUnKSA6IHdzLm9iamVjdHMgfHwgd3Mub2JqZWN0OiBudWxsKTtcbn07XG5cbmV4cG9ydHMuc2lnbmF0dXJlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50c1snMCddLCAwKSxcbiAgICAgICAgbGVuICAgID0gYXJncy5sZW5ndGgsXG4gICAgICAgIGNyZWF0ZSA9IGZhbHNlLFxuICAgICAgICBvcHRzICAgPSB7fSxcbiAgICAgICAgYXBpO1xuXG4gICAgaWYgKGxlbiA9PT0gMSAmJiBMYW5nLmlzT2JqZWN0KGFyZ3NbMF0pKSB7XG4gICAgICAgIG9wdHMgPSBhcmdzWzBdO1xuICAgICAgICBhcGkgID0gb3B0cy5wcm9qZWN0ID8gJy9yL3Byb2plY3QvZXhlY3V0ZS9zY3JpcHQnIDpcbiAgICAgICAgICAgICcvci9yZXBvc2l0b3J5L3NjcmlwdC9leGVjdXRlJztcbiAgICB9IGVsc2UgaWYgKGxlbiA9PT0gMSAmJiBMYW5nLmlzU3RyaW5nKGFyZ3NbMF0pKSB7XG4gICAgICAgIGFyZ3MgPSBhcmdzWzBdLnNwbGl0KCdcXC8nKTtcbiAgICAgICAgYXBpICA9ICcvci9yZXBvc2l0b3J5L3NjcmlwdC9leGVjdXRlJ1xuICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgYXV0aG9yOiBhcmdzWzFdLFxuICAgICAgICAgICAgZGlyZWN0b3J5OiBhcmdzWzJdLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGFyZ3NbM11cbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGxlbiA9PT0gMikge1xuICAgICAgICAvLyBleDogLnNjcmlwdCgnL3Rlc3R1c2VyL3Jvb3QvRGVwbG95UiAtIEhlbGxvIFdvcmxkLlInLCBwcm9qZWN0KVxuICAgICAgICB2YXIgcHJvamVjdCA9IGFyZ3NbMV07XG4gICAgICAgIGFwaSA9IHByb2plY3QgPyAnL3IvcHJvamVjdC9leGVjdXRlL3NjcmlwdCcgOiAnL3IvcmVwb3NpdG9yeS9zY3JpcHQvZXhlY3V0ZSc7XG5cbiAgICAgICAgYXJncyA9IGFyZ3NbMF0uc3BsaXQoJ1xcLycpO1xuICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgcHJvamVjdDogcHJvamVjdCxcbiAgICAgICAgICAgIGF1dGhvcjogYXJnc1sxXSxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogYXJnc1syXSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBhcmdzWzNdXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChsZW4gPiAyKSB7XG4gICAgICAgIC8vIGV4OiAuc2NyaXB0KCdEZXBsb3lSIC0gSGVsbG8gV29ybGQuUicsICd0ZXN0dXNlcicsICdyb290JylcbiAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgIGF1dGhvcjogYXJnc1syXSxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogYXJnc1sxXSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBhcmdzWzBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gaW5kaWNhdGUgYSBuZXcgcHJvamVjdCBzaG91bGQgYmUgY3JlYXRlZFxuICAgIGlmIChvcHRzLnByb2plY3QgJiYgTGFuZy5pc0Jvb2xlYW4ob3B0cy5wcm9qZWN0KSkge1xuICAgICAgZGVsZXRlIG9wdHNbJ3Byb2plY3QnXTtcbiAgICAgIGNyZWF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXBpOiBhcGksXG4gICAgICAgIG9wdHM6IG9wdHMsXG4gICAgICAgIGNyZWF0ZTogY3JlYXRlXG4gICAgfTtcbn07IixudWxsLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRRdWV1ZTtcbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW2ldKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xufVxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICBxdWV1ZS5wdXNoKGZ1bik7XG4gICAgaWYgKCFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4qIGF0dGVtcHQgb2YgYSBzaW1wbGUgZGVmZXIvcHJvbWlzZSBsaWJyYXJ5IGZvciBtb2JpbGUgZGV2ZWxvcG1lbnRcbiogQGF1dGhvciBKb25hdGhhbiBHb3R0aSA8IGpnb3R0aSBhdCBqZ290dGkgZG90IG5ldD5cbiogQHNpbmNlIDIwMTItMTBcbiogQHZlcnNpb24gMC42LjBcbiogQGNoYW5nZWxvZ1xuKiAgICAgICAgICAgLSAyMDEzLTEyLTA3IC0gbGFzdCBwcm9taXNlIDEuMSBzcGVjcyB0ZXN0IHBhc3NpbmdzICh0aHggdG8gd2l6YXJkd2VyZG5hKVxuICogICAgICAgICAgICAgICAgICAgICAgIC0gcmVkdWNlIHByb21pc2VzIGZvb3RwcmludCBieSB1bnNjb3BpbmcgbWV0aG9kcyB0aGF0IGNvdWxkIGJlXG4qICAgICAgICAgICAtIDIwMTMtMTAtMjMgLSBtYWtlIGl0IHdvcmtpZyBhY3Jvc3Mgbm9kZS13ZWJraXQgY29udGV4dHNcbiogICAgICAgICAgIC0gMjAxMy0wNy0wMyAtIGJ1ZyBjb3JyZWN0aW9uIGluIHByb21peGlmeSBtZXRob2QgKHRoeCB0byBhZHJpZW4gZ2licmF0IClcbiogICAgICAgICAgIC0gMjAxMy0wNi0yMiAtIGJ1ZyBjb3JyZWN0aW9uIGluIG5vZGVDYXBzdWxlIG1ldGhvZFxuKiAgICAgICAgICAgLSAyMDEzLTA2LTE3IC0gcmVtb3ZlIHVubmVjZXNzYXJ5IEFycmF5LmluZGV4T2YgbWV0aG9kIGRlcGVuZGVuY3lcbiogICAgICAgICAgIC0gMjAxMy0wNC0xOCAtIGFkZCB0cnkvY2F0Y2ggYmxvY2sgYXJvdW5kIG5vZGVDYXBzdWxlZCBtZXRob2RzXG4qICAgICAgICAgICAtIDIwMTMtMDQtMTMgLSBjaGVjayBwcm9taXNlcy9BKyBjb25mb3JtaXR5XG4qICAgICAgICAgICAgICAgICAgICAgICAgLSBtYWtlIHNvbWUgbWluaWNhdGlvbiBvcHRpbWlzYXRpb25zXG4qICAgICAgICAgICAtIDIwMTMtMDMtMjYgLSBhZGQgcmVzb2x2ZWQsIGZ1bGZpbGxlZCBhbmQgcmVqZWN0ZWQgbWV0aG9kc1xuKiAgICAgICAgICAgLSAyMDEzLTAzLTIxIC0gYnJvd3Nlci9ub2RlIGNvbXBhdGlibGVcbiogICAgICAgICAgICAgICAgICAgICAgICAtIG5ldyBtZXRob2Qgbm9kZUNhcHN1bGVcbiogICAgICAgICAgICAgICAgICAgICAgICAtIHNpbXBsZXIgcHJvbWl4aWZ5IHdpdGggZnVsbCBhcGkgc3VwcG9ydFxuKiAgICAgICAgICAgLSAyMDEzLTAxLTI1IC0gYWRkIHJldGhyb3cgbWV0aG9kXG4qICAgICAgICAgICAgICAgICAgICAgICAgLSBuZXh0VGljayBvcHRpbWlzYXRpb24gLT4gYWRkIHN1cHBvcnQgZm9yIHByb2Nlc3MubmV4dFRpY2sgKyBNZXNzYWdlQ2hhbm5lbCB3aGVyZSBhdmFpbGFibGVcbiogICAgICAgICAgIC0gMjAxMi0xMi0yOCAtIGFkZCBhcHBseSBtZXRob2QgdG8gcHJvbWlzZVxuKiAgICAgICAgICAgLSAyMDEyLTEyLTIwIC0gYWRkIGFsd2F5c0FzeW5jIHBhcmFtZXRlcnMgYW5kIHByb3BlcnR5IGZvciBkZWZhdWx0IHNldHRpbmdcbiovXG4oZnVuY3Rpb24odW5kZWYpe1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgbmV4dFRpY2tcblx0XHQsIGlzRnVuYyA9IGZ1bmN0aW9uKGYpeyByZXR1cm4gKCB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyApOyB9XG5cdFx0LCBpc0FycmF5ID0gZnVuY3Rpb24oYSl7IHJldHVybiBBcnJheS5pc0FycmF5ID8gQXJyYXkuaXNBcnJheShhKSA6IChhIGluc3RhbmNlb2YgQXJyYXkpOyB9XG5cdFx0LCBpc09iak9yRnVuYyA9IGZ1bmN0aW9uKG8peyByZXR1cm4gISEobyAmJiAodHlwZW9mIG8pLm1hdGNoKC9mdW5jdGlvbnxvYmplY3QvKSk7IH1cblx0XHQsIGlzTm90VmFsID0gZnVuY3Rpb24odil7IHJldHVybiAodiA9PT0gZmFsc2UgfHwgdiA9PT0gdW5kZWYgfHwgdiA9PT0gbnVsbCk7IH1cblx0XHQsIHNsaWNlID0gZnVuY3Rpb24oYSwgb2Zmc2V0KXsgcmV0dXJuIFtdLnNsaWNlLmNhbGwoYSwgb2Zmc2V0KTsgfVxuXHRcdCwgdW5kZWZTdHIgPSAndW5kZWZpbmVkJ1xuXHRcdCwgdEVyciA9IHR5cGVvZiBUeXBlRXJyb3IgPT09IHVuZGVmU3RyID8gRXJyb3IgOiBUeXBlRXJyb3Jcblx0O1xuXHRpZiAoICh0eXBlb2YgcHJvY2VzcyAhPT0gdW5kZWZTdHIpICYmIHByb2Nlc3MubmV4dFRpY2sgKSB7XG5cdFx0bmV4dFRpY2sgPSBwcm9jZXNzLm5leHRUaWNrO1xuXHR9IGVsc2UgaWYgKCB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IHVuZGVmU3RyICkge1xuXHRcdHZhciBudGlja0NoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKSwgcXVldWUgPSBbXTtcblx0XHRudGlja0NoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oKXsgcXVldWUubGVuZ3RoICYmIChxdWV1ZS5zaGlmdCgpKSgpOyB9O1xuXHRcdG5leHRUaWNrID0gZnVuY3Rpb24oY2Ipe1xuXHRcdFx0cXVldWUucHVzaChjYik7XG5cdFx0XHRudGlja0NoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRuZXh0VGljayA9IGZ1bmN0aW9uKGNiKXsgc2V0VGltZW91dChjYiwgMCk7IH07XG5cdH1cblx0ZnVuY3Rpb24gcmV0aHJvdyhlKXsgbmV4dFRpY2soZnVuY3Rpb24oKXsgdGhyb3cgZTt9KTsgfVxuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiBkZWZlcnJlZFxuXHQgKiBAcHJvcGVydHkge3Byb21pc2V9IHByb21pc2Vcblx0ICogQG1ldGhvZCByZXNvbHZlXG5cdCAqIEBtZXRob2QgZnVsZmlsbFxuXHQgKiBAbWV0aG9kIHJlamVjdFxuXHQgKi9cblxuXHQvKipcblx0ICogQHR5cGVkZWYge2Z1bmN0aW9ufSBmdWxmaWxsZWRcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBwcm9taXNlIHJlc29sdmVkIHZhbHVlXG5cdCAqIEByZXR1cm5zIHsqfSBuZXh0IHByb21pc2UgcmVzb2x1dGlvbiB2YWx1ZVxuXHQgKi9cblxuXHQvKipcblx0ICogQHR5cGVkZWYge2Z1bmN0aW9ufSBmYWlsZWRcblx0ICogQHBhcmFtIHsqfSByZWFzb24gcHJvbWlzZSByZWplY3Rpb24gcmVhc29uXG5cdCAqIEByZXR1cm5zIHsqfSBuZXh0IHByb21pc2UgcmVzb2x1dGlvbiB2YWx1ZSBvciByZXRocm93IHRoZSByZWFzb25cblx0ICovXG5cblx0Ly8tLSBkZWZpbmluZyB1bmVuY2xvc2VkIHByb21pc2UgbWV0aG9kcyAtLS8vXG5cdC8qKlxuXHQgKiBzYW1lIGFzIHRoZW4gd2l0aG91dCBmYWlsZWQgY2FsbGJhY2tcblx0ICogQHBhcmFtIHtmdWxmaWxsZWR9IGZ1bGZpbGxlZCBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9zdWNjZXNzKGZ1bGZpbGxlZCl7IHJldHVybiB0aGlzLnRoZW4oZnVsZmlsbGVkLCB1bmRlZik7IH1cblxuXHQvKipcblx0ICogc2FtZSBhcyB0aGVuIHdpdGggb25seSBhIGZhaWxlZCBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge2ZhaWxlZH0gZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2Vycm9yKGZhaWxlZCl7IHJldHVybiB0aGlzLnRoZW4odW5kZWYsIGZhaWxlZCk7IH1cblxuXG5cdC8qKlxuXHQgKiBzYW1lIGFzIHRoZW4gYnV0IGZ1bGZpbGxlZCBjYWxsYmFjayB3aWxsIHJlY2VpdmUgbXVsdGlwbGUgcGFyYW1ldGVycyB3aGVuIHByb21pc2UgaXMgZnVsZmlsbGVkIHdpdGggYW4gQXJyYXlcblx0ICogQHBhcmFtIHtmdWxmaWxsZWR9IGZ1bGZpbGxlZCBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge2ZhaWxlZH0gZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2FwcGx5KGZ1bGZpbGxlZCwgZmFpbGVkKXtcblx0XHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdFx0ZnVuY3Rpb24oYSl7XG5cdFx0XHRcdHJldHVybiBpc0Z1bmMoZnVsZmlsbGVkKSA/IGZ1bGZpbGxlZC5hcHBseShudWxsLCBpc0FycmF5KGEpID8gYSA6IFthXSkgOiAoZGVmZXIub25seUZ1bmNzID8gYSA6IGZ1bGZpbGxlZCk7XG5cdFx0XHR9XG5cdFx0XHQsIGZhaWxlZCB8fCB1bmRlZlxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogY2xlYW51cCBtZXRob2Qgd2hpY2ggd2lsbCBiZSBhbHdheXMgZXhlY3V0ZWQgcmVnYXJkbGVzcyBmdWxmaWxsbWVudCBvciByZWplY3Rpb25cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgYSBjYWxsYmFjayBjYWxsZWQgcmVnYXJkbGVzcyBvZiB0aGUgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIG9mIHRoZSBwcm9taXNlIHdoaWNoIHdpbGwgYmUgY2FsbGVkXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIHByb21pc2UgaXMgbm90IHBlbmRpbmcgYW55bW9yZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gdGhlIHNhbWUgcHJvbWlzZSB1bnRvdWNoZWRcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2VfZW5zdXJlKGNiKXtcblx0XHRmdW5jdGlvbiBfY2IoKXsgY2IoKTsgfVxuXHRcdHRoaXMudGhlbihfY2IsIF9jYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogdGFrZSBhIHNpbmdsZSBjYWxsYmFjayB3aGljaCB3YWl0IGZvciBhbiBlcnJvciBhcyBmaXJzdCBwYXJhbWV0ZXIuIG90aGVyIHJlc29sdXRpb24gdmFsdWVzIGFyZSBwYXNzZWQgYXMgd2l0aCB0aGUgYXBwbHkvc3ByZWFkIG1ldGhvZFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBhIGNhbGxiYWNrIGNhbGxlZCByZWdhcmRsZXNzIG9mIHRoZSBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gb2YgdGhlIHByb21pc2Ugd2hpY2ggd2lsbCBiZSBjYWxsZWRcblx0ICogICAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGUgcHJvbWlzZSBpcyBub3QgcGVuZGluZyBhbnltb3JlIHdpdGggZXJyb3IgYXMgZmlyc3QgcGFyYW1ldGVyIGlmIGFueSBhcyBpbiBub2RlIHN0eWxlXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLiBSZXN0IG9mIHBhcmFtZXRlcnMgd2lsbCBiZSBhcHBsaWVkIGFzIHdpdGggdGhlIGFwcGx5IG1ldGhvZC5cblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2Vfbm9kaWZ5KGNiKXtcblx0XHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdFx0ZnVuY3Rpb24oYSl7XG5cdFx0XHRcdHJldHVybiBpc0Z1bmMoY2IpID8gY2IuYXBwbHkobnVsbCwgaXNBcnJheShhKSA/IGEuc3BsaWNlKDAsMCx1bmRlZmluZWQpICYmIGEgOiBbdW5kZWZpbmVkLGFdKSA6IChkZWZlci5vbmx5RnVuY3MgPyBhIDogY2IpO1xuXHRcdFx0fVxuXHRcdFx0LCBmdW5jdGlvbihlKXtcblx0XHRcdFx0cmV0dXJuIGNiKGUpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZhaWxlZF0gd2l0aG91dCBwYXJhbWV0ZXIgd2lsbCBvbmx5IHJldGhyb3cgcHJvbWlzZSByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgb2YgdGhlIHByb21pc2UgbGlicmFyeSBvbiBuZXh0IHRpY2tcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgcGFzc2VkIGEgZmFpbGVkIG1ldGhvZCB0aGVuIHdpbGwgY2FsbCBmYWlsZWQgb24gcmVqZWN0aW9uIGFuZCB0aHJvdyB0aGUgZXJyb3IgYWdhaW4gaWYgZmFpbGVkIGRpZG4ndFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9yZXRocm93KGZhaWxlZCl7XG5cdFx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRcdHVuZGVmXG5cdFx0XHQsIGZhaWxlZCA/IGZ1bmN0aW9uKGUpeyBmYWlsZWQoZSk7IHRocm93IGU7IH0gOiByZXRocm93XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gW2Fsd2F5c0FzeW5jXSBpZiBzZXQgZm9yY2UgdGhlIGFzeW5jIHJlc29sdXRpb24gZm9yIHRoaXMgcHJvbWlzZSBpbmRlcGVuZGFudGx5IG9mIHRoZSBELmFsd2F5c0FzeW5jIG9wdGlvblxuXHQqIEByZXR1cm5zIHtkZWZlcnJlZH0gZGVmZXJlZCBvYmplY3Qgd2l0aCBwcm9wZXJ0eSAncHJvbWlzZScgYW5kIG1ldGhvZHMgcmVqZWN0LGZ1bGZpbGwscmVzb2x2ZSAoZnVsZmlsbCBiZWluZyBhbiBhbGlhcyBmb3IgcmVzb2x2ZSlcblx0Ki9cblx0dmFyIGRlZmVyID0gZnVuY3Rpb24gKGFsd2F5c0FzeW5jKXtcblx0XHR2YXIgYWx3YXlzQXN5bmNGbiA9ICh1bmRlZiAhPT0gYWx3YXlzQXN5bmMgPyBhbHdheXNBc3luYyA6IGRlZmVyLmFsd2F5c0FzeW5jKSA/IG5leHRUaWNrIDogZnVuY3Rpb24oZm4pe2ZuKCk7fVxuXHRcdFx0LCBzdGF0dXMgPSAwIC8vIC0xIGZhaWxlZCB8IDEgZnVsZmlsbGVkXG5cdFx0XHQsIHBlbmRpbmdzID0gW11cblx0XHRcdCwgdmFsdWVcblx0XHRcdC8qKlxuXHRcdFx0ICogQHR5cGVkZWYgcHJvbWlzZVxuXHRcdFx0ICovXG5cdFx0XHQsIF9wcm9taXNlICA9IHtcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEBwYXJhbSB7ZnVsZmlsbGVkfGZ1bmN0aW9ufSBmdWxmaWxsZWQgY2FsbGJhY2tcblx0XHRcdFx0ICogQHBhcmFtIHtmYWlsZWR8ZnVuY3Rpb259IGZhaWxlZCBjYWxsYmFja1xuXHRcdFx0XHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dGhlbjogZnVuY3Rpb24oZnVsZmlsbGVkLCBmYWlsZWQpe1xuXHRcdFx0XHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRcdFx0XHRwZW5kaW5ncy5wdXNoKFtcblx0XHRcdFx0XHRcdGZ1bmN0aW9uKHZhbHVlKXtcblx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdGlmKCBpc05vdFZhbChmdWxmaWxsZWQpKXtcblx0XHRcdFx0XHRcdFx0XHRcdGQucmVzb2x2ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGQucmVzb2x2ZShpc0Z1bmMoZnVsZmlsbGVkKSA/IGZ1bGZpbGxlZCh2YWx1ZSkgOiAoZGVmZXIub25seUZ1bmNzID8gdmFsdWUgOiBmdWxmaWxsZWQpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0XHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRcdFx0XHRpZiAoIGlzTm90VmFsKGZhaWxlZCkgfHwgKCghaXNGdW5jKGZhaWxlZCkpICYmIGRlZmVyLm9ubHlGdW5jcykgKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZC5yZWplY3QoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIGZhaWxlZCApIHtcblx0XHRcdFx0XHRcdFx0XHR0cnl7IGQucmVzb2x2ZShpc0Z1bmMoZmFpbGVkKSA/IGZhaWxlZChlcnIpIDogZmFpbGVkKTsgfWNhdGNoKGUpeyBkLnJlamVjdChlKTt9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRzdGF0dXMgIT09IDAgJiYgYWx3YXlzQXN5bmNGbihleGVjQ2FsbGJhY2tzKTtcblx0XHRcdFx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LCBzdWNjZXNzOiBwcm9taXNlX3N1Y2Nlc3NcblxuXHRcdFx0XHQsIGVycm9yOiBwcm9taXNlX2Vycm9yXG5cdFx0XHRcdCwgb3RoZXJ3aXNlOiBwcm9taXNlX2Vycm9yXG5cblx0XHRcdFx0LCBhcHBseTogcHJvbWlzZV9hcHBseVxuXHRcdFx0XHQsIHNwcmVhZDogcHJvbWlzZV9hcHBseVxuXG5cdFx0XHRcdCwgZW5zdXJlOiBwcm9taXNlX2Vuc3VyZVxuXG5cdFx0XHRcdCwgbm9kaWZ5OiBwcm9taXNlX25vZGlmeVxuXG5cdFx0XHRcdCwgcmV0aHJvdzogcHJvbWlzZV9yZXRocm93XG5cblx0XHRcdFx0LCBpc1BlbmRpbmc6IGZ1bmN0aW9uKCl7IHJldHVybiAhIShzdGF0dXMgPT09IDApOyB9XG5cblx0XHRcdFx0LCBnZXRTdGF0dXM6IGZ1bmN0aW9uKCl7IHJldHVybiBzdGF0dXM7IH1cblx0XHRcdH1cblx0XHQ7XG5cdFx0X3Byb21pc2UudG9Tb3VyY2UgPSBfcHJvbWlzZS50b1N0cmluZyA9IF9wcm9taXNlLnZhbHVlT2YgPSBmdW5jdGlvbigpe3JldHVybiB2YWx1ZSA9PT0gdW5kZWYgPyB0aGlzIDogdmFsdWU7IH07XG5cblxuXHRcdGZ1bmN0aW9uIGV4ZWNDYWxsYmFja3MoKXtcblx0XHRcdGlmICggc3RhdHVzID09PSAwICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgY2JzID0gcGVuZGluZ3MsIGkgPSAwLCBsID0gY2JzLmxlbmd0aCwgY2JJbmRleCA9IH5zdGF0dXMgPyAwIDogMSwgY2I7XG5cdFx0XHRwZW5kaW5ncyA9IFtdO1xuXHRcdFx0Zm9yKCA7IGkgPCBsOyBpKysgKXtcblx0XHRcdFx0KGNiID0gY2JzW2ldW2NiSW5kZXhdKSAmJiBjYih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogZnVsZmlsbCBkZWZlcnJlZCB3aXRoIGdpdmVuIHZhbHVlXG5cdFx0ICogQHBhcmFtIHsqfSB2YWxcblx0XHQgKiBAcmV0dXJucyB7ZGVmZXJyZWR9IHRoaXMgZm9yIG1ldGhvZCBjaGFpbmluZ1xuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIF9yZXNvbHZlKHZhbCl7XG5cdFx0XHR2YXIgZG9uZSA9IGZhbHNlO1xuXHRcdFx0ZnVuY3Rpb24gb25jZShmKXtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdGlmIChkb25lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkb25lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHJldHVybiBmKHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICggc3RhdHVzICkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciB0aGVuID0gaXNPYmpPckZ1bmModmFsKSAmJiB2YWwudGhlbjtcblx0XHRcdFx0aWYgKCBpc0Z1bmModGhlbikgKSB7IC8vIG1hbmFnaW5nIGEgcHJvbWlzZVxuXHRcdFx0XHRcdGlmKCB2YWwgPT09IF9wcm9taXNlICl7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgdEVycihcIlByb21pc2UgY2FuJ3QgcmVzb2x2ZSBpdHNlbGZcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoZW4uY2FsbCh2YWwsIG9uY2UoX3Jlc29sdmUpLCBvbmNlKF9yZWplY3QpKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRvbmNlKF9yZWplY3QpKGUpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdGFsd2F5c0FzeW5jRm4oZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFsdWUgPSB2YWw7XG5cdFx0XHRcdHN0YXR1cyA9IDE7XG5cdFx0XHRcdGV4ZWNDYWxsYmFja3MoKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogcmVqZWN0IGRlZmVycmVkIHdpdGggZ2l2ZW4gcmVhc29uXG5cdFx0ICogQHBhcmFtIHsqfSBFcnJcblx0XHQgKiBAcmV0dXJucyB7ZGVmZXJyZWR9IHRoaXMgZm9yIG1ldGhvZCBjaGFpbmluZ1xuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIF9yZWplY3QoRXJyKXtcblx0XHRcdHN0YXR1cyB8fCBhbHdheXNBc3luY0ZuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRyeXsgdGhyb3coRXJyKTsgfWNhdGNoKGUpeyB2YWx1ZSA9IGU7IH1cblx0XHRcdFx0c3RhdHVzID0gLTE7XG5cdFx0XHRcdGV4ZWNDYWxsYmFja3MoKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHJldHVybiAvKipAdHlwZSBkZWZlcnJlZCAqLyB7XG5cdFx0XHRwcm9taXNlOl9wcm9taXNlXG5cdFx0XHQscmVzb2x2ZTpfcmVzb2x2ZVxuXHRcdFx0LGZ1bGZpbGw6X3Jlc29sdmUgLy8gYWxpYXNcblx0XHRcdCxyZWplY3Q6X3JlamVjdFxuXHRcdH07XG5cdH07XG5cblx0ZGVmZXIuZGVmZXJyZWQgPSBkZWZlci5kZWZlciA9IGRlZmVyO1xuXHRkZWZlci5uZXh0VGljayA9IG5leHRUaWNrO1xuXHRkZWZlci5hbHdheXNBc3luYyA9IHRydWU7IC8vIHNldHRpbmcgdGhpcyB3aWxsIGNoYW5nZSBkZWZhdWx0IGJlaGF2aW91ci4gdXNlIGl0IG9ubHkgaWYgbmVjZXNzYXJ5IGFzIGFzeW5jaHJvbmljaXR5IHdpbGwgZm9yY2Ugc29tZSBkZWxheSBiZXR3ZWVuIHlvdXIgcHJvbWlzZSByZXNvbHV0aW9ucyBhbmQgaXMgbm90IGFsd2F5cyB3aGF0IHlvdSB3YW50LlxuXHQvKipcblx0KiBzZXR0aW5nIG9ubHlGdW5jcyB0byBmYWxzZSB3aWxsIGJyZWFrIHByb21pc2VzL0ErIGNvbmZvcm1pdHkgYnkgYWxsb3dpbmcgeW91IHRvIHBhc3Mgbm9uIHVuZGVmaW5lZC9udWxsIHZhbHVlcyBpbnN0ZWFkIG9mIGNhbGxiYWNrc1xuXHQqIGluc3RlYWQgb2YganVzdCBpZ25vcmluZyBhbnkgbm9uIGZ1bmN0aW9uIHBhcmFtZXRlcnMgdG8gdGhlbixzdWNjZXNzLGVycm9yLi4uIGl0IHdpbGwgYWNjZXB0IG5vbiBudWxsfHVuZGVmaW5lZCB2YWx1ZXMuXG5cdCogdGhpcyB3aWxsIGFsbG93IHlvdSBzaG9ydGN1dHMgbGlrZSBwcm9taXNlLnRoZW4oJ3ZhbCcsJ2hhbmRsZWQgZXJyb3InJylcblx0KiB0byBiZSBlcXVpdmFsZW50IG9mIHByb21pc2UudGhlbihmdW5jdGlvbigpeyByZXR1cm4gJ3ZhbCc7fSxmdW5jdGlvbigpeyByZXR1cm4gJ2hhbmRsZWQgZXJyb3InfSlcblx0Ki9cblx0ZGVmZXIub25seUZ1bmNzID0gdHJ1ZTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgZnVsZmlsbGVkIHByb21pc2Ugb2YgZ2l2ZW4gdmFsdWUgKGFsd2F5cyBhc3luYyByZXNvbHV0aW9uKVxuXHQgKiBAcGFyYW0geyp9IHZhbHVlXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIucmVzb2x2ZWQgPSBkZWZlci5mdWxmaWxsZWQgPSBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiBkZWZlcih0cnVlKS5yZXNvbHZlKHZhbHVlKS5wcm9taXNlOyB9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSByZWplY3RlZCBwcm9taXNlIHdpdGggZ2l2ZW4gcmVhc29uIG9mIHJlamVjdGlvbiAoYWx3YXlzIGFzeW5jIHJlamVjdGlvbilcblx0ICogQHBhcmFtIHsqfSByZWFzb25cblx0ICogQHJldHVybnMge3Byb21pc2V9XG5cdCAqL1xuXHRkZWZlci5yZWplY3RlZCA9IGZ1bmN0aW9uKHJlYXNvbil7IHJldHVybiBkZWZlcih0cnVlKS5yZWplY3QocmVhc29uKS5wcm9taXNlOyB9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSBwcm9taXNlIHdpdGggbm8gcmVzb2x1dGlvbiB2YWx1ZSB3aGljaCB3aWxsIGJlIHJlc29sdmVkIGluIHRpbWUgbXMgKHVzaW5nIHNldFRpbWVvdXQpXG5cdCAqIEBwYXJhbSB7aW50fSBbdGltZV0gaW4gbXMgZGVmYXVsdCB0byAwXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIud2FpdCA9IGZ1bmN0aW9uKHRpbWUpe1xuXHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRzZXRUaW1lb3V0KGQucmVzb2x2ZSwgdGltZSB8fCAwKTtcblx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlIG9mIGZ1bmN0aW9uIGNhbGwgd2hpY2ggd2lsbCBiZSBmdWxmaWxsZWQgaW4gZGVsYXkgbXMgb3IgcmVqZWN0ZWQgaWYgZ2l2ZW4gZm4gdGhyb3cgYW4gZXJyb3Jcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cblx0ICogQHBhcmFtIHtpbnR9IFtkZWxheV0gaW4gbXMgZGVmYXVsdCB0byAwXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIuZGVsYXkgPSBmdW5jdGlvbihmbiwgZGVsYXkpe1xuXHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHRyeXsgZC5yZXNvbHZlKGZuLmFwcGx5KG51bGwpKTsgfWNhdGNoKGUpeyBkLnJlamVjdChlKTsgfSB9LCBkZWxheSB8fCAwKTtcblx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBpZiBnaXZlbiB2YWx1ZSBpcyBub3QgYSBwcm9taXNlIHJldHVybiBhIGZ1bGZpbGxlZCBwcm9taXNlIHJlc29sdmVkIHRvIGdpdmVuIHZhbHVlXG5cdCAqIEBwYXJhbSB7Kn0gcHJvbWlzZSBhIHZhbHVlIG9yIGEgcHJvbWlzZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLnByb21pc2lmeSA9IGZ1bmN0aW9uKHByb21pc2Upe1xuXHRcdGlmICggcHJvbWlzZSAmJiBpc0Z1bmMocHJvbWlzZS50aGVuKSApIHsgcmV0dXJuIHByb21pc2U7fVxuXHRcdHJldHVybiBkZWZlci5yZXNvbHZlZChwcm9taXNlKTtcblx0fTtcblxuXHRmdW5jdGlvbiBtdWx0aVByb21pc2VSZXNvbHZlcihjYWxsZXJBcmd1bWVudHMsIHJldHVyblByb21pc2VzKXtcblx0XHR2YXIgcHJvbWlzZXMgPSBzbGljZShjYWxsZXJBcmd1bWVudHMpO1xuXHRcdGlmICggcHJvbWlzZXMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkocHJvbWlzZXNbMF0pICkge1xuXHRcdFx0aWYoISBwcm9taXNlc1swXS5sZW5ndGggKXtcblx0XHRcdFx0cmV0dXJuIGRlZmVyLmZ1bGZpbGxlZChbXSk7XG5cdFx0XHR9XG5cdFx0XHRwcm9taXNlcyA9IHByb21pc2VzWzBdO1xuXHRcdH1cblx0XHR2YXIgYXJncyA9IFtdXG5cdFx0XHQsIGQgPSBkZWZlcigpXG5cdFx0XHQsIGMgPSBwcm9taXNlcy5sZW5ndGhcblx0XHQ7XG5cdFx0aWYgKCAhYyApIHtcblx0XHRcdGQucmVzb2x2ZShhcmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHJlc29sdmVyID0gZnVuY3Rpb24oaSl7XG5cdFx0XHRcdHByb21pc2VzW2ldID0gZGVmZXIucHJvbWlzaWZ5KHByb21pc2VzW2ldKTtcblx0XHRcdFx0cHJvbWlzZXNbaV0udGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbih2KXtcblx0XHRcdFx0XHRcdGlmICghIChpIGluIGFyZ3MpICkgeyAvL0B0b2RvIGNoZWNrIHRoaXMgaXMgc3RpbGwgcmVxdWlyZWQgYXMgcHJvbWlzZXMgY2FuJ3QgYmUgcmVzb2x2ZSBtb3JlIHRoYW4gb25jZVxuXHRcdFx0XHRcdFx0XHRhcmdzW2ldID0gcmV0dXJuUHJvbWlzZXMgPyBwcm9taXNlc1tpXSA6IHY7XG5cdFx0XHRcdFx0XHRcdCgtLWMpIHx8IGQucmVzb2x2ZShhcmdzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LCBmdW5jdGlvbihlKXtcblx0XHRcdFx0XHRcdGlmKCEgKGkgaW4gYXJncykgKXtcblx0XHRcdFx0XHRcdFx0aWYoICEgcmV0dXJuUHJvbWlzZXMgKXtcblx0XHRcdFx0XHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRhcmdzW2ldID0gcHJvbWlzZXNbaV07XG5cdFx0XHRcdFx0XHRcdFx0KC0tYykgfHwgZC5yZXNvbHZlKGFyZ3MpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fTtcblx0XHRcdGZvciggdmFyIGkgPSAwLCBsID0gYzsgaSA8IGw7IGkrKyApe1xuXHRcdFx0XHRyZXNvbHZlcihpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiByZXR1cm4gYSBwcm9taXNlIGZvciBhbGwgZ2l2ZW4gcHJvbWlzZXMgLyB2YWx1ZXMuXG5cdCAqIHRoZSByZXR1cm5lZCBwcm9taXNlcyB3aWxsIGJlIGZ1bGZpbGxlZCB3aXRoIGEgbGlzdCBvZiByZXNvbHZlZCB2YWx1ZS5cblx0ICogaWYgYW55IGdpdmVuIHByb21pc2UgaXMgcmVqZWN0ZWQgdGhlbiBvbiB0aGUgZmlyc3QgcmVqZWN0aW9uIHRoZSByZXR1cm5lZCBwcm9taXNlZCB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWUgcmVhc29uXG5cdCAqIEBwYXJhbSB7YXJyYXl8Li4uKn0gW3Byb21pc2VdIGNhbiBiZSBhIHNpbmdsZSBhcnJheSBvZiBwcm9taXNlL3ZhbHVlcyBhcyBmaXJzdCBwYXJhbWV0ZXIgb3IgYSBsaXN0IG9mIGRpcmVjdCBwYXJhbWV0ZXJzIHByb21pc2UvdmFsdWVcblx0ICogQHJldHVybnMge3Byb21pc2V9IG9mIGEgbGlzdCBvZiBnaXZlbiBwcm9taXNlIHJlc29sdXRpb24gdmFsdWVcblx0ICovXG5cdGRlZmVyLmFsbCA9IGZ1bmN0aW9uKCl7IHJldHVybiBtdWx0aVByb21pc2VSZXNvbHZlcihhcmd1bWVudHMsZmFsc2UpOyB9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm4gYW4gYWx3YXlzIGZ1bGZpbGxlZCBwcm9taXNlIG9mIGFycmF5PHByb21pc2U+IGxpc3Qgb2YgcHJvbWlzZXMvdmFsdWVzIHJlZ2FyZGxlc3MgdGhleSByZXNvbHZlIGZ1bGZpbGxlZCBvciByZWplY3RlZFxuXHQgKiBAcGFyYW0ge2FycmF5fC4uLip9IFtwcm9taXNlXSBjYW4gYmUgYSBzaW5nbGUgYXJyYXkgb2YgcHJvbWlzZS92YWx1ZXMgYXMgZmlyc3QgcGFyYW1ldGVyIG9yIGEgbGlzdCBvZiBkaXJlY3QgcGFyYW1ldGVycyBwcm9taXNlL3ZhbHVlXG5cdCAqICAgICAgICAgICAgICAgICAgICAgKG5vbiBwcm9taXNlIHZhbHVlcyB3aWxsIGJlIHByb21pc2lmaWVkKVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gb2YgdGhlIGxpc3Qgb2YgZ2l2ZW4gcHJvbWlzZXNcblx0ICovXG5cdGRlZmVyLnJlc29sdmVBbGwgPSBmdW5jdGlvbigpeyByZXR1cm4gbXVsdGlQcm9taXNlUmVzb2x2ZXIoYXJndW1lbnRzLHRydWUpOyB9O1xuXG5cdC8qKlxuXHQgKiB0cmFuc2Zvcm0gYSB0eXBpY2FsIG5vZGVqcyBhc3luYyBtZXRob2QgYXdhaXRpbmcgYSBjYWxsYmFjayBhcyBsYXN0IHBhcmFtZXRlciwgcmVjZWl2aW5nIGVycm9yIGFzIGZpcnN0IHBhcmFtZXRlciB0byBhIGZ1bmN0aW9uIHRoYXRcblx0ICogd2lsbCByZXR1cm4gYSBwcm9taXNlIGluc3RlYWQuIHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aXRoIG5vcm1hbCBjYWxsYmFjayB2YWx1ZSBtaW51cyB0aGUgZmlyc3QgZXJyb3IgcGFyYW1ldGVyIG9uXG5cdCAqIGZ1bGZpbGwgYW5kIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGF0IGVycm9yIGFzIHJlYXNvbiBpbiBjYXNlIG9mIGVycm9yLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gW3N1YmplY3RdIG9wdGlvbmFsIHN1YmplY3Qgb2YgdGhlIG1ldGhvZCB0byBlbmNhcHN1bGF0ZVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiB0aGUgZnVuY3Rpb24gdG8gZW5jYXBzdWxhdGUgaWYgdGhlIG5vcm1hbCBjYWxsYmFjayBzaG91bGQgcmVjZWl2ZSBtb3JlIHRoYW4gYSBzaW5nbGUgcGFyYW1ldGVyIChtaW51cyB0aGUgZXJyb3IpXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aXRoIHRoZSBsaXN0IG9yIHBhcmFtZXRlcnMgYXMgZnVsZmlsbG1lbnQgdmFsdWUuIElmIG9ubHkgb25lIHBhcmFtZXRlciBpcyBzZW50IHRvIHRoZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayB0aGVuIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgcmVzb2x1dGlvbiB2YWx1ZS5cblx0ICogQHJldHVybnMge0Z1bmN0aW9ufVxuXHQgKi9cblx0ZGVmZXIubm9kZUNhcHN1bGUgPSBmdW5jdGlvbihzdWJqZWN0LCBmbil7XG5cdFx0aWYgKCAhZm4gKSB7XG5cdFx0XHRmbiA9IHN1YmplY3Q7XG5cdFx0XHRzdWJqZWN0ID0gdm9pZCgwKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgZCA9IGRlZmVyKCksIGFyZ3MgPSBzbGljZShhcmd1bWVudHMpO1xuXHRcdFx0YXJncy5wdXNoKGZ1bmN0aW9uKGVyciwgcmVzKXtcblx0XHRcdFx0ZXJyID8gZC5yZWplY3QoZXJyKSA6IGQucmVzb2x2ZShhcmd1bWVudHMubGVuZ3RoID4gMiA/IHNsaWNlKGFyZ3VtZW50cywgMSkgOiByZXMpO1xuXHRcdFx0fSk7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGZuLmFwcGx5KHN1YmplY3QsIGFyZ3MpO1xuXHRcdFx0fWNhdGNoKGUpe1xuXHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkLnByb21pc2U7XG5cdFx0fTtcblx0fTtcblxuXHR0eXBlb2Ygd2luZG93ICE9PSB1bmRlZlN0ciAmJiAod2luZG93LkQgPSBkZWZlcik7XG5cdHR5cGVvZiBtb2R1bGUgIT09IHVuZGVmU3RyICYmIG1vZHVsZS5leHBvcnRzICYmIChtb2R1bGUuZXhwb3J0cyA9IGRlZmVyKTtcblxufSkoKTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2VtaXR0ZXInKTtcbnZhciByZWR1Y2UgPSByZXF1aXJlKCdyZWR1Y2UnKTtcblxuLyoqXG4gKiBSb290IHJlZmVyZW5jZSBmb3IgaWZyYW1lcy5cbiAqL1xuXG52YXIgcm9vdCA9ICd1bmRlZmluZWQnID09IHR5cGVvZiB3aW5kb3dcbiAgPyB0aGlzXG4gIDogd2luZG93O1xuXG4vKipcbiAqIE5vb3AuXG4gKi9cblxuZnVuY3Rpb24gbm9vcCgpe307XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBob3N0IG9iamVjdCxcbiAqIHdlIGRvbid0IHdhbnQgdG8gc2VyaWFsaXplIHRoZXNlIDopXG4gKlxuICogVE9ETzogZnV0dXJlIHByb29mLCBtb3ZlIHRvIGNvbXBvZW50IGxhbmRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNIb3N0KG9iaikge1xuICB2YXIgc3RyID0ge30udG9TdHJpbmcuY2FsbChvYmopO1xuXG4gIHN3aXRjaCAoc3RyKSB7XG4gICAgY2FzZSAnW29iamVjdCBGaWxlXSc6XG4gICAgY2FzZSAnW29iamVjdCBCbG9iXSc6XG4gICAgY2FzZSAnW29iamVjdCBGb3JtRGF0YV0nOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZSBYSFIuXG4gKi9cblxuZnVuY3Rpb24gZ2V0WEhSKCkge1xuICBpZiAocm9vdC5YTUxIdHRwUmVxdWVzdFxuICAgICYmICgnZmlsZTonICE9IHJvb3QubG9jYXRpb24ucHJvdG9jb2wgfHwgIXJvb3QuQWN0aXZlWE9iamVjdCkpIHtcbiAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0O1xuICB9IGVsc2Uge1xuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuNi4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjMuMCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgYWRkZWQgdG8gc3VwcG9ydCBJRS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHRyaW0gPSAnJy50cmltXG4gID8gZnVuY3Rpb24ocykgeyByZXR1cm4gcy50cmltKCk7IH1cbiAgOiBmdW5jdGlvbihzKSB7IHJldHVybiBzLnJlcGxhY2UoLyheXFxzKnxcXHMqJCkvZywgJycpOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgZ2l2ZW4gYG9iamAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG9iaikge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG51bGwgIT0gb2JqW2tleV0pIHtcbiAgICAgIHBhaXJzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSlcbiAgICAgICAgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0ID0gc2VyaWFsaXplO1xuXG4gLyoqXG4gICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbmZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnJicpO1xuICB2YXIgcGFydHM7XG4gIHZhciBwYWlyO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYWlycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICBwYXJ0cyA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICBvYmpbZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBFeHBvc2UgcGFyc2VyLlxuICovXG5cbnJlcXVlc3QucGFyc2VTdHJpbmcgPSBwYXJzZVN0cmluZztcblxuLyoqXG4gKiBEZWZhdWx0IE1JTUUgdHlwZSBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICovXG5cbnJlcXVlc3QudHlwZXMgPSB7XG4gIGh0bWw6ICd0ZXh0L2h0bWwnLFxuICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsXG4gIHhtbDogJ2FwcGxpY2F0aW9uL3htbCcsXG4gIHVybGVuY29kZWQ6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybS1kYXRhJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbi8qKlxuICogRGVmYXVsdCBzZXJpYWxpemF0aW9uIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC5zZXJpYWxpemVbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24ob2JqKXtcbiAqICAgICAgIHJldHVybiAnZ2VuZXJhdGVkIHhtbCBoZXJlJztcbiAqICAgICB9O1xuICpcbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemUgPSB7XG4gICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnN0cmluZ2lmeVxuIH07XG5cbiAvKipcbiAgKiBEZWZhdWx0IHBhcnNlcnMuXG4gICpcbiAgKiAgICAgc3VwZXJhZ2VudC5wYXJzZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihzdHIpe1xuICAqICAgICAgIHJldHVybiB7IG9iamVjdCBwYXJzZWQgZnJvbSBzdHIgfTtcbiAgKiAgICAgfTtcbiAgKlxuICAqL1xuXG5yZXF1ZXN0LnBhcnNlID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogcGFyc2VTdHJpbmcsXG4gICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5wYXJzZVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaGVhZGVyIGBzdHJgIGludG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtYXBwZWQgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHN0cikge1xuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoL1xccj9cXG4vKTtcbiAgdmFyIGZpZWxkcyA9IHt9O1xuICB2YXIgaW5kZXg7XG4gIHZhciBsaW5lO1xuICB2YXIgZmllbGQ7XG4gIHZhciB2YWw7XG5cbiAgbGluZXMucG9wKCk7IC8vIHRyYWlsaW5nIENSTEZcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsaW5lID0gbGluZXNbaV07XG4gICAgaW5kZXggPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBmaWVsZCA9IGxpbmUuc2xpY2UoMCwgaW5kZXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdHJpbShsaW5lLnNsaWNlKGluZGV4ICsgMSkpO1xuICAgIGZpZWxkc1tmaWVsZF0gPSB2YWw7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgbWltZSB0eXBlIGZvciB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHlwZShzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnNoaWZ0KCk7XG59O1xuXG4vKipcbiAqIFJldHVybiBoZWFkZXIgZmllbGQgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJhbXMoc3RyKXtcbiAgcmV0dXJuIHJlZHVjZShzdHIuc3BsaXQoLyAqOyAqLyksIGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqPSAqLylcbiAgICAgICwga2V5ID0gcGFydHMuc2hpZnQoKVxuICAgICAgLCB2YWwgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgaWYgKGtleSAmJiB2YWwpIG9ialtrZXldID0gdmFsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIGB4aHJgLlxuICpcbiAqICAtIHNldCBmbGFncyAoLm9rLCAuZXJyb3IsIGV0YylcbiAqICAtIHBhcnNlIGhlYWRlclxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICBBbGlhc2luZyBgc3VwZXJhZ2VudGAgYXMgYHJlcXVlc3RgIGlzIG5pY2U6XG4gKlxuICogICAgICByZXF1ZXN0ID0gc3VwZXJhZ2VudDtcbiAqXG4gKiAgV2UgY2FuIHVzZSB0aGUgcHJvbWlzZS1saWtlIEFQSSwgb3IgcGFzcyBjYWxsYmFja3M6XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnLycpLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICogICAgICByZXF1ZXN0LmdldCgnLycsIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIFNlbmRpbmcgZGF0YSBjYW4gYmUgY2hhaW5lZDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAuc2VuZCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5wb3N0KClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBPciBmdXJ0aGVyIHJlZHVjZWQgdG8gYSBzaW5nbGUgY2FsbCBmb3Igc2ltcGxlIGNhc2VzOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIEBwYXJhbSB7WE1MSFRUUFJlcXVlc3R9IHhoclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5yZXEgPSByZXE7XG4gIHRoaXMueGhyID0gdGhpcy5yZXEueGhyO1xuICB0aGlzLnRleHQgPSB0aGlzLnJlcS5tZXRob2QgIT0nSEVBRCcgXG4gICAgID8gdGhpcy54aHIucmVzcG9uc2VUZXh0IFxuICAgICA6IG51bGw7XG4gIHRoaXMuc2V0U3RhdHVzUHJvcGVydGllcyh0aGlzLnhoci5zdGF0dXMpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVycyA9IHBhcnNlSGVhZGVyKHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuICB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyk7XG4gIHRoaXMuc2V0SGVhZGVyUHJvcGVydGllcyh0aGlzLmhlYWRlcik7XG4gIHRoaXMuYm9keSA9IHRoaXMucmVxLm1ldGhvZCAhPSAnSEVBRCdcbiAgICA/IHRoaXMucGFyc2VCb2R5KHRoaXMudGV4dClcbiAgICA6IG51bGw7XG59XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuaGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIHJlbGF0ZWQgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gYC50eXBlYCB0aGUgY29udGVudCB0eXBlIHdpdGhvdXQgcGFyYW1zXG4gKlxuICogQSByZXNwb25zZSBvZiBcIkNvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiXG4gKiB3aWxsIHByb3ZpZGUgeW91IHdpdGggYSBgLnR5cGVgIG9mIFwidGV4dC9wbGFpblwiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5zZXRIZWFkZXJQcm9wZXJ0aWVzID0gZnVuY3Rpb24oaGVhZGVyKXtcbiAgLy8gY29udGVudC10eXBlXG4gIHZhciBjdCA9IHRoaXMuaGVhZGVyWydjb250ZW50LXR5cGUnXSB8fCAnJztcbiAgdGhpcy50eXBlID0gdHlwZShjdCk7XG5cbiAgLy8gcGFyYW1zXG4gIHZhciBvYmogPSBwYXJhbXMoY3QpO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB0aGlzW2tleV0gPSBvYmpba2V5XTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGJvZHkgYHN0cmAuXG4gKlxuICogVXNlZCBmb3IgYXV0by1wYXJzaW5nIG9mIGJvZGllcy4gUGFyc2Vyc1xuICogYXJlIGRlZmluZWQgb24gdGhlIGBzdXBlcmFnZW50LnBhcnNlYCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUucGFyc2VCb2R5ID0gZnVuY3Rpb24oc3RyKXtcbiAgdmFyIHBhcnNlID0gcmVxdWVzdC5wYXJzZVt0aGlzLnR5cGVdO1xuICByZXR1cm4gcGFyc2UgJiYgc3RyICYmIHN0ci5sZW5ndGhcbiAgICA/IHBhcnNlKHN0cilcbiAgICA6IG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBmbGFncyBzdWNoIGFzIGAub2tgIGJhc2VkIG9uIGBzdGF0dXNgLlxuICpcbiAqIEZvciBleGFtcGxlIGEgMnh4IHJlc3BvbnNlIHdpbGwgZ2l2ZSB5b3UgYSBgLm9rYCBvZiBfX3RydWVfX1xuICogd2hlcmVhcyA1eHggd2lsbCBiZSBfX2ZhbHNlX18gYW5kIGAuZXJyb3JgIHdpbGwgYmUgX190cnVlX18uIFRoZVxuICogYC5jbGllbnRFcnJvcmAgYW5kIGAuc2VydmVyRXJyb3JgIGFyZSBhbHNvIGF2YWlsYWJsZSB0byBiZSBtb3JlXG4gKiBzcGVjaWZpYywgYW5kIGAuc3RhdHVzVHlwZWAgaXMgdGhlIGNsYXNzIG9mIGVycm9yIHJhbmdpbmcgZnJvbSAxLi41XG4gKiBzb21ldGltZXMgdXNlZnVsIGZvciBtYXBwaW5nIHJlc3BvbmQgY29sb3JzIGV0Yy5cbiAqXG4gKiBcInN1Z2FyXCIgcHJvcGVydGllcyBhcmUgYWxzbyBkZWZpbmVkIGZvciBjb21tb24gY2FzZXMuIEN1cnJlbnRseSBwcm92aWRpbmc6XG4gKlxuICogICAtIC5ub0NvbnRlbnRcbiAqICAgLSAuYmFkUmVxdWVzdFxuICogICAtIC51bmF1dGhvcml6ZWRcbiAqICAgLSAubm90QWNjZXB0YWJsZVxuICogICAtIC5ub3RGb3VuZFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5zZXRTdGF0dXNQcm9wZXJ0aWVzID0gZnVuY3Rpb24oc3RhdHVzKXtcbiAgdmFyIHR5cGUgPSBzdGF0dXMgLyAxMDAgfCAwO1xuXG4gIC8vIHN0YXR1cyAvIGNsYXNzXG4gIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB0aGlzLnN0YXR1c1R5cGUgPSB0eXBlO1xuXG4gIC8vIGJhc2ljc1xuICB0aGlzLmluZm8gPSAxID09IHR5cGU7XG4gIHRoaXMub2sgPSAyID09IHR5cGU7XG4gIHRoaXMuY2xpZW50RXJyb3IgPSA0ID09IHR5cGU7XG4gIHRoaXMuc2VydmVyRXJyb3IgPSA1ID09IHR5cGU7XG4gIHRoaXMuZXJyb3IgPSAoNCA9PSB0eXBlIHx8IDUgPT0gdHlwZSlcbiAgICA/IHRoaXMudG9FcnJvcigpXG4gICAgOiBmYWxzZTtcblxuICAvLyBzdWdhclxuICB0aGlzLmFjY2VwdGVkID0gMjAyID09IHN0YXR1cztcbiAgdGhpcy5ub0NvbnRlbnQgPSAyMDQgPT0gc3RhdHVzIHx8IDEyMjMgPT0gc3RhdHVzO1xuICB0aGlzLmJhZFJlcXVlc3QgPSA0MDAgPT0gc3RhdHVzO1xuICB0aGlzLnVuYXV0aG9yaXplZCA9IDQwMSA9PSBzdGF0dXM7XG4gIHRoaXMubm90QWNjZXB0YWJsZSA9IDQwNiA9PSBzdGF0dXM7XG4gIHRoaXMubm90Rm91bmQgPSA0MDQgPT0gc3RhdHVzO1xuICB0aGlzLmZvcmJpZGRlbiA9IDQwMyA9PSBzdGF0dXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBgRXJyb3JgIHJlcHJlc2VudGF0aXZlIG9mIHRoaXMgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybiB7RXJyb3J9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS50b0Vycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIHJlcSA9IHRoaXMucmVxO1xuICB2YXIgbWV0aG9kID0gcmVxLm1ldGhvZDtcbiAgdmFyIHVybCA9IHJlcS51cmw7XG5cbiAgdmFyIG1zZyA9ICdjYW5ub3QgJyArIG1ldGhvZCArICcgJyArIHVybCArICcgKCcgKyB0aGlzLnN0YXR1cyArICcpJztcbiAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICBlcnIuc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gIGVyci5tZXRob2QgPSBtZXRob2Q7XG4gIGVyci51cmwgPSB1cmw7XG5cbiAgcmV0dXJuIGVycjtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBSZXNwb25zZWAuXG4gKi9cblxucmVxdWVzdC5SZXNwb25zZSA9IFJlc3BvbnNlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlcXVlc3RgIHdpdGggdGhlIGdpdmVuIGBtZXRob2RgIGFuZCBgdXJsYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBFbWl0dGVyLmNhbGwodGhpcyk7XG4gIHRoaXMuX3F1ZXJ5ID0gdGhpcy5fcXVlcnkgfHwgW107XG4gIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICB0aGlzLnVybCA9IHVybDtcbiAgdGhpcy5oZWFkZXIgPSB7fTtcbiAgdGhpcy5faGVhZGVyID0ge307XG4gIHRoaXMub24oJ2VuZCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGVyciA9IG51bGw7XG4gICAgdmFyIHJlcyA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgcmVzID0gbmV3IFJlc3BvbnNlKHNlbGYpOyBcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGVyciA9IG5ldyBFcnJvcignUGFyc2VyIGlzIHVuYWJsZSB0byBwYXJzZSB0aGUgcmVzcG9uc2UnKTtcbiAgICAgIGVyci5wYXJzZSA9IHRydWU7XG4gICAgICBlcnIub3JpZ2luYWwgPSBlO1xuICAgIH1cblxuICAgIHNlbGYuY2FsbGJhY2soZXJyLCByZXMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNaXhpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogQWxsb3cgZm9yIGV4dGVuc2lvblxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGZuKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBTZXQgdGltZW91dCB0byBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbihtcyl7XG4gIHRoaXMuX3RpbWVvdXQgPSBtcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsZWFyIHByZXZpb3VzIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuX3RpbWVvdXQgPSAwO1xuICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWJvcnQgdGhlIHJlcXVlc3QsIGFuZCBjbGVhciBwb3RlbnRpYWwgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCl7XG4gIGlmICh0aGlzLmFib3J0ZWQpIHJldHVybjtcbiAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcbiAgdGhpcy54aHIuYWJvcnQoKTtcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgdGhpcy5lbWl0KCdhYm9ydCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciBgZmllbGRgIHRvIGB2YWxgLCBvciBtdWx0aXBsZSBmaWVsZHMgd2l0aCBvbmUgb2JqZWN0LlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5zZXQoJ1gtQVBJLUtleScsICdmb29iYXInKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1BUEktS2V5JzogJ2Zvb2JhcicgfSlcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGZpZWxkXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oZmllbGQsIHZhbCl7XG4gIGlmIChpc09iamVjdChmaWVsZCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZmllbGQpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGhlYWRlciBgZmllbGRgLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAudW5zZXQoJ1VzZXItQWdlbnQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgaGVhZGVyIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5nZXRIZWFkZXIgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBDb250ZW50LVR5cGUgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCd4bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ2FwcGxpY2F0aW9uL3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQ29udGVudC1UeXBlJywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBY2NlcHQgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMuanNvbiA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFjY2VwdFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFjY2VwdCA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQWNjZXB0JywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBdXRob3JpemF0aW9uIGZpZWxkIHZhbHVlIHdpdGggYHVzZXJgIGFuZCBgcGFzc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXV0aCA9IGZ1bmN0aW9uKHVzZXIsIHBhc3Mpe1xuICB2YXIgc3RyID0gYnRvYSh1c2VyICsgJzonICsgcGFzcyk7XG4gIHRoaXMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBzdHIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuKiBBZGQgcXVlcnktc3RyaW5nIGB2YWxgLlxuKlxuKiBFeGFtcGxlczpcbipcbiogICByZXF1ZXN0LmdldCgnL3Nob2VzJylcbiogICAgIC5xdWVyeSgnc2l6ZT0xMCcpXG4qICAgICAucXVlcnkoeyBjb2xvcjogJ2JsdWUnIH0pXG4qXG4qIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdmFsXG4qIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuKiBAYXBpIHB1YmxpY1xuKi9cblxuUmVxdWVzdC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbih2YWwpe1xuICBpZiAoJ3N0cmluZycgIT0gdHlwZW9mIHZhbCkgdmFsID0gc2VyaWFsaXplKHZhbCk7XG4gIGlmICh2YWwpIHRoaXMuX3F1ZXJ5LnB1c2godmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFdyaXRlIHRoZSBmaWVsZCBgbmFtZWAgYW5kIGB2YWxgIGZvciBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICogcmVxdWVzdCBib2RpZXMuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoJ2ZvbycsICdiYXInKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ3xCbG9ifEZpbGV9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24obmFtZSwgdmFsKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgdGhpcy5fZm9ybURhdGEuYXBwZW5kKG5hbWUsIHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBRdWV1ZSB0aGUgZ2l2ZW4gYGZpbGVgIGFzIGFuIGF0dGFjaG1lbnQgdG8gdGhlIHNwZWNpZmllZCBgZmllbGRgLFxuICogd2l0aCBvcHRpb25hbCBgZmlsZW5hbWVgLlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAqICAgLmF0dGFjaChuZXcgQmxvYihbJzxhIGlkPVwiYVwiPjxiIGlkPVwiYlwiPmhleSE8L2I+PC9hPiddLCB7IHR5cGU6IFwidGV4dC9odG1sXCJ9KSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEBwYXJhbSB7QmxvYnxGaWxlfSBmaWxlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbihmaWVsZCwgZmlsZSwgZmlsZW5hbWUpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB0aGlzLl9mb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQoZmllbGQsIGZpbGUsIGZpbGVuYW1lKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmQgYGRhdGFgLCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIHF1ZXJ5c3RyaW5nXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbXVsdGlwbGUgZGF0YSBcIndyaXRlc1wiXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5zZW5kKHsgc2VhcmNoOiAncXVlcnknIH0pXG4gKiAgICAgICAgIC5zZW5kKHsgcmFuZ2U6ICcxLi41JyB9KVxuICogICAgICAgICAuc2VuZCh7IG9yZGVyOiAnZGVzYycgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdqc29uJylcbiAqICAgICAgICAgLnNlbmQoJ3tcIm5hbWVcIjpcInRqXCJ9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICogICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAgKiAgICAgICAgLnNlbmQoJ25hbWU9dG9iaScpXG4gICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gICogICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBkYXRhXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpe1xuICB2YXIgb2JqID0gaXNPYmplY3QoZGF0YSk7XG4gIHZhciB0eXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuXG4gIC8vIG1lcmdlXG4gIGlmIChvYmogJiYgaXNPYmplY3QodGhpcy5fZGF0YSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgIH1cbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgIGlmICghdHlwZSkgdGhpcy50eXBlKCdmb3JtJyk7XG4gICAgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgPT0gdHlwZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGFcbiAgICAgICAgPyB0aGlzLl9kYXRhICsgJyYnICsgZGF0YVxuICAgICAgICA6IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSAodGhpcy5fZGF0YSB8fCAnJykgKyBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGlmICghb2JqKSByZXR1cm4gdGhpcztcbiAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2pzb24nKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEludm9rZSB0aGUgY2FsbGJhY2sgd2l0aCBgZXJyYCBhbmQgYHJlc2BcbiAqIGFuZCBoYW5kbGUgYXJpdHkgY2hlY2suXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNhbGxiYWNrID0gZnVuY3Rpb24oZXJyLCByZXMpe1xuICB2YXIgZm4gPSB0aGlzLl9jYWxsYmFjaztcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgaWYgKDIgPT0gZm4ubGVuZ3RoKSByZXR1cm4gZm4oZXJyLCByZXMpO1xuICBpZiAoZXJyKSByZXR1cm4gdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIGZuKHJlcyk7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHgtZG9tYWluIGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyb3NzRG9tYWluRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCdPcmlnaW4gaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJyk7XG4gIGVyci5jcm9zc0RvbWFpbiA9IHRydWU7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggdGltZW91dCBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50aW1lb3V0RXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3RpbWVvdXQgb2YgJyArIHRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnKTtcbiAgZXJyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0cmFuc21pc3Npb24gb2YgY29va2llcyB3aXRoIHgtZG9tYWluIHJlcXVlc3RzLlxuICpcbiAqIE5vdGUgdGhhdCBmb3IgdGhpcyB0byB3b3JrIHRoZSBvcmlnaW4gbXVzdCBub3QgYmVcbiAqIHVzaW5nIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIgd2l0aCBhIHdpbGRjYXJkLFxuICogYW5kIGFsc28gbXVzdCBzZXQgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiXG4gKiB0byBcInRydWVcIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuX3dpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbml0aWF0ZSByZXF1ZXN0LCBpbnZva2luZyBjYWxsYmFjayBgZm4ocmVzKWBcbiAqIHdpdGggYW4gaW5zdGFuY2VvZiBgUmVzcG9uc2VgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB4aHIgPSB0aGlzLnhociA9IGdldFhIUigpO1xuICB2YXIgcXVlcnkgPSB0aGlzLl9xdWVyeS5qb2luKCcmJyk7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGRhdGEgPSB0aGlzLl9mb3JtRGF0YSB8fCB0aGlzLl9kYXRhO1xuXG4gIC8vIHN0b3JlIGNhbGxiYWNrXG4gIHRoaXMuX2NhbGxiYWNrID0gZm4gfHwgbm9vcDtcblxuICAvLyBzdGF0ZSBjaGFuZ2VcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKDQgIT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICBpZiAoMCA9PSB4aHIuc3RhdHVzKSB7XG4gICAgICBpZiAoc2VsZi5hYm9ydGVkKSByZXR1cm4gc2VsZi50aW1lb3V0RXJyb3IoKTtcbiAgICAgIHJldHVybiBzZWxmLmNyb3NzRG9tYWluRXJyb3IoKTtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdlbmQnKTtcbiAgfTtcblxuICAvLyBwcm9ncmVzc1xuICBpZiAoeGhyLnVwbG9hZCkge1xuICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wZXJjZW50ID0gZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwO1xuICAgICAgc2VsZi5lbWl0KCdwcm9ncmVzcycsIGUpO1xuICAgIH07XG4gIH1cblxuICAvLyB0aW1lb3V0XG4gIGlmICh0aW1lb3V0ICYmICF0aGlzLl90aW1lcikge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgc2VsZi5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgLy8gcXVlcnlzdHJpbmdcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgcXVlcnkgPSByZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdChxdWVyeSk7XG4gICAgdGhpcy51cmwgKz0gfnRoaXMudXJsLmluZGV4T2YoJz8nKVxuICAgICAgPyAnJicgKyBxdWVyeVxuICAgICAgOiAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcblxuICAvLyBDT1JTXG4gIGlmICh0aGlzLl93aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gIC8vIGJvZHlcbiAgaWYgKCdHRVQnICE9IHRoaXMubWV0aG9kICYmICdIRUFEJyAhPSB0aGlzLm1ldGhvZCAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgZGF0YSAmJiAhaXNIb3N0KGRhdGEpKSB7XG4gICAgLy8gc2VyaWFsaXplIHN0dWZmXG4gICAgdmFyIHNlcmlhbGl6ZSA9IHJlcXVlc3Quc2VyaWFsaXplW3RoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKV07XG4gICAgaWYgKHNlcmlhbGl6ZSkgZGF0YSA9IHNlcmlhbGl6ZShkYXRhKTtcbiAgfVxuXG4gIC8vIHNldCBoZWFkZXIgZmllbGRzXG4gIGZvciAodmFyIGZpZWxkIGluIHRoaXMuaGVhZGVyKSB7XG4gICAgaWYgKG51bGwgPT0gdGhpcy5oZWFkZXJbZmllbGRdKSBjb250aW51ZTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihmaWVsZCwgdGhpcy5oZWFkZXJbZmllbGRdKTtcbiAgfVxuXG4gIC8vIHNlbmQgc3R1ZmZcbiAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgdGhpcyk7XG4gIHhoci5zZW5kKGRhdGEpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRXhwb3NlIGBSZXF1ZXN0YC5cbiAqL1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuXG4vKipcbiAqIElzc3VlIGEgcmVxdWVzdDpcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICByZXF1ZXN0KCdHRVQnLCAnL3VzZXJzJykuZW5kKGNhbGxiYWNrKVxuICogICAgcmVxdWVzdCgnL3VzZXJzJykuZW5kKGNhbGxiYWNrKVxuICogICAgcmVxdWVzdCgnL3VzZXJzJywgY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHVybCBvciBjYWxsYmFja1xuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcmVxdWVzdChtZXRob2QsIHVybCkge1xuICAvLyBjYWxsYmFja1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgdXJsKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KCdHRVQnLCBtZXRob2QpLmVuZCh1cmwpO1xuICB9XG5cbiAgLy8gdXJsIGZpcnN0XG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QoJ0dFVCcsIG1ldGhvZCk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlcXVlc3QobWV0aG9kLCB1cmwpO1xufVxuXG4vKipcbiAqIEdFVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5nZXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0dFVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnF1ZXJ5KGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBIRUFEIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmhlYWQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0hFQUQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBERUxFVEUgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZGVsID0gZnVuY3Rpb24odXJsLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdERUxFVEUnLCB1cmwpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQQVRDSCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IGRhdGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBhdGNoID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQQVRDSCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBPU1QgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wb3N0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQT1NUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUFVUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucHV0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQVVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYHJlcXVlc3RgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWVzdDtcbiIsIlxuLyoqXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufTtcblxuLyoqXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICh0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSlcbiAgICAucHVzaChmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIGZ1bmN0aW9uIG9uKCkge1xuICAgIHNlbGYub2ZmKGV2ZW50LCBvbik7XG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIG9uLmZuID0gZm47XG4gIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgLy8gYWxsXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxuICB2YXIgY2I7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG5cbiAgaWYgKGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xufTtcbiIsIlxuLyoqXG4gKiBSZWR1Y2UgYGFycmAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7TWl4ZWR9IGluaXRpYWxcbiAqXG4gKiBUT0RPOiBjb21iYXRpYmxlIGVycm9yIGhhbmRsaW5nP1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBmbiwgaW5pdGlhbCl7ICBcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgY3VyciA9IGFyZ3VtZW50cy5sZW5ndGggPT0gM1xuICAgID8gaW5pdGlhbFxuICAgIDogYXJyW2lkeCsrXTtcblxuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgY3VyciA9IGZuLmNhbGwobnVsbCwgY3VyciwgYXJyW2lkeF0sICsraWR4LCBhcnIpO1xuICB9XG4gIFxuICByZXR1cm4gY3Vycjtcbn07IiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJkZXBsb3lyXCIsXG4gIFwidmVyc2lvblwiOiBcIjcuNC4wXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTaW1wbGlmaWVkIEphdmFTY3JpcHQgY2xpZW50IGxpYnJhcnkgZm9yIG1ha2luZyByZXF1ZXN0cyB0byBEZXBsb3lSLlwiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImRlcGxveXJcIixcbiAgICBcImRlcGxveXIuaW9cIixcbiAgICBcImFqYXhcIixcbiAgICBcIlJcIixcbiAgICBcImFwaVwiLFxuICAgIFwic2ltcGxlXCJcbiAgXSxcbiAgXCJhdXRob3JcIjogXCJEZXBsb3lSIC0gUmV2b2x1dGlvbiBBbmFseXRpY3MgSW5jLlwiLFxuICBcImNvbnRyaWJ1dG9yc1wiOiBbXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2VhbiBXZWxsc1wiXG4gICAgfVxuICBdLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0Oi8vZ2l0aHViLmNvbS9kZXBsb3lyL2pzLWNsaWVudC1saWJyYXJ5LmdpdFwiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwOi8vZGVwbG95ci5yZXZvbHV0aW9uYW5hbHl0aWNzLmNvbS9kb2N1bWVudHMvZGV2L2NsaWVudC1qc2RvY1wiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwic3RhcnRcIjogXCJndWxwIHN0YXJ0XCIsXG4gICAgXCJidWlsZFwiOiBcImd1bHBcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJicm93c2VyaWZ5XCI6IFwiXjkuMC4zXCIsXG4gICAgXCJndWxwXCI6IFwiXjMuOC4xMVwiLFxuICAgIFwiZ3VscC1jb25uZWN0XCI6IFwiXjIuMi4wXCIsXG4gICAgXCJndWxwLWhlYWRlclwiOiBcIl4xLjIuMlwiLFxuICAgIFwiZ3VscC1qc2hpbnRcIjogXCJeMS45LjJcIixcbiAgICBcImd1bHAtbGl2ZXJlbG9hZFwiOiBcIl4zLjguMFwiLFxuICAgIFwiZ3VscC1wbHVtYmVyXCI6IFwiXjAuNi42XCIsXG4gICAgXCJndWxwLXVnbGlmeWpzXCI6IFwiXjAuNi4wXCIsXG4gICAgXCJndWxwLXV0aWxcIjogXCJeMy4wLjRcIixcbiAgICBcInRhcGVcIjogXCJeMy41LjBcIixcbiAgICBcInZpbnlsLXNvdXJjZS1zdHJlYW1cIjogXCJeMS4wLjBcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJkLmpzXCI6IFwiXjAuNi4wXCIsXG4gICAgXCJzdXBlcmFnZW50XCI6IFwiXjAuMjEuMFwiLFxuICAgIFwid3NcIjogXCJeMC40LjMyXCJcbiAgfSxcbiAgXCJtYWluXCI6IFwiZGVwbG95ci5qc1wiLFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIj49IDAuMTAuMFwiXG4gIH0sXG4gIFwibGljZW5zZVwiOiBcIkFwYWNoZSAyLjAgTGljZW5zZVwiXG59XG4iXX0=
