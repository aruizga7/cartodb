
  /**
   *  Get oauth url from the service requested
   *
   *  - It needs a datasource name or it won't work.
   *
   *  new cdb.admin.Service({ datasource_name: 'dropbox' })
   */


  cdb.admin.ServiceOauth = cdb.core.Model.extend({

    _DATASOURCE_NAME: 'dropbox',

    initialize: function(attrs, opts) {
      if (opts.datasource_name) {
        this._DATASOURCE_NAME = opts.datasource_name;
      }
    },

    urlRoot: function() {
      return '/api/v1/imports/service/' + this._DATASOURCE_NAME + '/auth_url'
    },

    parse: function(r) {
      return r
    }

  });