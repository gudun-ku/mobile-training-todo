module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "Couchbase Lite",
    "description": "Documentation for the Couchbase Lite REST API. This page is generated from the Couchbase Lite Swagger spec, the exact same information is also available at [developer.couchbase.com/mobile/swagger/couchbase-lite](http://developer.couchbase.com/mobile/swagger/couchbase-lite/).\n",
    "version": "1.3"
  },
  "host": "localhost:5984",
  "schemes": [
    "http",
    "https"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "parameters": {
    "access": {
      "name": "access",
      "in": "query",
      "description": "Indicates whether to include in the response a list of what access this document grants (i.e. which users it allows to access which channels.) This option may only be used from the admin port.",
      "type": "boolean",
      "default": false
    },
    "active_only": {
      "name": "active_only",
      "in": "query",
      "description": "Default is false. When true, the changes response doesn't include either deleted documents, or notification for documents that the user no longer has access to.",
      "type": "boolean",
      "default": false
    },
    "attachment": {
      "in": "path",
      "name": "attachment",
      "description": "Attachment name",
      "type": "string",
      "required": true
    },
    "attachments": {
      "in": "query",
      "name": "attachments",
      "description": "Default is false. Include attachment bodies in response.",
      "type": "boolean",
      "default": false
    },
    "atts_since": {
      "name": "atts_since",
      "in": "query",
      "description": "Include attachments only since specified revisions. Does not include attachments for specified revisions.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "required": false
    },
    "body": {
      "name": "body",
      "in": "body",
      "description": "The request body",
      "schema": {
        "type": "object"
      }
    },
    "bulkget": {
      "in": "body",
      "name": "BulkGetBody",
      "description": "List of documents being requested. Each array element is an object that must contain an id property giving the document ID. It may contain a rev property if a specific revision is desired. It may contain an atts_since property (as in a single-document GET) to limit which attachments are sent.",
      "schema": {
        "type": "object",
        "properties": {
          "docs": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    },
    "channels": {
      "in": "query",
      "name": "channels",
      "description": "Indicates whether to include in the response a channels property containing an array of channels this document is assigned to. (Channels not accessible by the user making the request will not be listed.)",
      "type": "boolean",
      "default": false
    },
    "channels_list": {
      "in": "query",
      "name": "channels",
      "description": "A comma-separated list of channel names. The response will be filtered to only documents in these channels. (This parameter must be used with the sync_gateway/bychannel filter parameter; see below.)",
      "type": "string",
      "required": false
    },
    "db": {
      "name": "db",
      "in": "path",
      "description": "Database name",
      "type": "string",
      "required": true
    },
    "ddoc": {
      "name": "ddoc",
      "in": "path",
      "description": "Design document name",
      "type": "string",
      "required": true
    },
    "descending": {
      "name": "descending",
      "in": "query",
      "description": "Default is false. Return documents in descending order.",
      "type": "boolean",
      "required": false
    },
    "doc": {
      "name": "doc",
      "in": "path",
      "description": "Document ID",
      "type": "string",
      "required": true
    },
    "doc_ids": {
      "in": "query",
      "name": "doc_ids",
      "description": "A list of document IDs as a valid JSON array. The response will be filtered to only documents with these IDs. (This parameter must be used with the _doc_ids filter parameter; see below.)",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "endkey": {
      "name": "endkey",
      "in": "query",
      "description": "If this parameter is provided, stop returning records when the specified key is reached.",
      "type": "string",
      "required": false
    },
    "feed": {
      "in": "query",
      "name": "feed",
      "description": "Default is 'normal'. Specifies type of change feed. Valid values are normal, continuous, longpoll, websocket.",
      "type": "string",
      "default": "normal"
    },
    "heartbeat": {
      "in": "query",
      "name": "heartbeat",
      "description": "Default is 0. Interval in milliseconds at which an empty line (CRLF) is written to the response. This helps prevent gateways from deciding the socket is idle and closing it. Only applicable to longpoll or continuous feeds. Overrides any timeout to keep the feed alive indefinitely. Setting to 0 results in no heartbeat.",
      "type": "integer",
      "default": 0
    },
    "include_docs": {
      "in": "query",
      "name": "include_docs",
      "description": "Default is false. Indicates whether to include the associated document with each result. If there are conflicts, only the winning revision is returned.",
      "type": "boolean",
      "default": false
    },
    "keys": {
      "in": "query",
      "name": "keys",
      "description": "Specify a list of document IDs.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "required": false
    },
    "limit": {
      "in": "query",
      "name": "limit",
      "description": "Limits the number of result rows to the specified value. Using a value of 0 has the same effect as the value 1.",
      "type": "integer"
    },
    "local_doc": {
      "in": "path",
      "name": "local_doc",
      "description": "Local document IDs begin with _local/.",
      "type": "string",
      "required": true
    },
    "new_edits": {
      "name": "new_edits",
      "in": "query",
      "description": "Default is true. Setting this to false indicates that the request body is an already-existing revision that should be directly inserted into the database, instead of a modification to apply to the current document. (This mode is used by the replicato.)",
      "type": "boolean",
      "default": true
    },
    "open_revs": {
      "name": "open_revs",
      "in": "query",
      "description": "Option to fetch specified revisions of the document. The value can be `all` to fetch all leaf revisions or an array of revision numbers (i.e. open_revs=[\"rev1\", \"rev2\"]). If this option is specified the response will be in multipart format. Use the `Accept: application/json` request header to get the result as a JSON object.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "required": false
    },
    "rev": {
      "name": "rev",
      "in": "query",
      "description": "Revision identifier of the parent revision the new one should replace. (Not used when creating a new document.)",
      "type": "string",
      "required": false
    },
    "revs": {
      "in": "query",
      "name": "revs",
      "description": "Default is false. Indicates whether to include a _revisions property for each document in the response, which contains a revision history of the document.",
      "type": "boolean",
      "default": false
    },
    "role": {
      "in": "body",
      "name": "role",
      "description": "The message body is a JSON document that contains the following objects.",
      "schema": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Name of the role that will be created"
          },
          "admin_channels": {
            "type": "array",
            "description": "Array of channel names to give the role access to",
            "items": {
              "type": "string"
            }
          }
        }
      }
    },
    "sessionid": {
      "name": "sessionid",
      "in": "path",
      "description": "Session id",
      "type": "string",
      "required": true
    },
    "startkey": {
      "name": "startkey",
      "in": "query",
      "description": "Returns records starting with the specified key.",
      "type": "string",
      "required": false
    },
    "since": {
      "in": "query",
      "name": "since",
      "description": "Starts the results from the change immediately after the given sequence ID. Sequence IDs should be considered opaque; they come from the last_seq property of a prior response.",
      "type": "integer",
      "required": false
    },
    "style": {
      "in": "query",
      "name": "style",
      "description": "Default is 'main_only'. Number of revisions to return in the changes array. main_only returns the current winning revision, all_docs returns all leaf revisions including conflicts and deleted former conflicts.",
      "type": "string",
      "default": "main_only"
    },
    "timeout": {
      "in": "query",
      "name": "timeout",
      "description": "Default is 300000. Maximum period in milliseconds to wait for a change before the response is sent, even if there are no results. Only applicable for longpoll or continuous feeds. Setting to 0 results in no timeout.",
      "type": "integer",
      "default": 300000
    },
    "update_seq": {
      "in": "query",
      "name": "update_seq",
      "description": "Default is false. Indicates whether to include the update_seq (document sequence ID) property in the response.",
      "type": "boolean",
      "default": false
    },
    "user": {
      "in": "body",
      "name": "body",
      "description": "Request body",
      "schema": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Name of the user that will be created"
          },
          "password": {
            "type": "string",
            "description": "Password of the user that will be created. Required, unless the allow_empty_password Sync Gateway per-database configuration value is set to true, in which case the password can be omitted."
          },
          "admin_channels": {
            "type": "array",
            "description": "Array of channel names to give the user access to",
            "items": {
              "type": "string",
              "description": "Channel name"
            }
          },
          "admin_roles": {
            "type": "array",
            "description": "Array of role names to assign to this user",
            "items": {
              "type": "string",
              "description": "Role name"
            }
          },
          "email": {
            "type": "string",
            "description": "Email of the user that will be created."
          },
          "disabled": {
            "type": "boolean",
            "description": "Boolean property to disable this user. The user will not be able to login if this property is set to true."
          }
        }
      }
    },
    "view": {
      "name": "view",
      "in": "path",
      "description": "View name",
      "type": "string",
      "required": true
    },
    "bulkdocs": {
      "in": "body",
      "name": "body",
      "description": "The request body",
      "schema": {
        "properties": {
          "all_or_nothing": {
            "description": "Indicates whether to use all-or-nothing semantics for the database commit mode",
            "type": "boolean",
            "default": false
          },
          "docs": {
            "description": "List containing new or updated documents. Each object in the array can contain the following properties _id, _rev, _deleted, and values for new and updated documents.",
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "new_edits": {
            "description": "Indicates whether to assign new revision identifiers to new edits.",
            "type": "boolean",
            "default": true
          }
        }
      }
    },
    "changes_body": {
      "in": "body",
      "name": "ChangesBody",
      "description": "The request body",
      "schema": {
        "properties": {
          "include_docs": {
            "description": "Default is false. Indicates whether to include the associated document with each result. If there are conflicts, only the winning revision is returned.",
            "type": "boolean",
            "default": false
          },
          "style": {
            "description": "Default is 'main_only'. Number of revisions to return in the changes array. The only possible value is all_docs and it returns all leaf revisions including conflicts and deleted former conflicts.",
            "type": "string",
            "default": "main_only"
          },
          "descending": {
            "description": "Default is false. Return documents in descending order.",
            "type": "boolean",
            "default": false
          },
          "limit": {
            "description": "Limits the number of result rows to the specified value. Using a value of 0 has the same effect as the value 1.",
            "type": "integer"
          },
          "since": {
            "description": "Starts the results from the change immediately after the given sequence ID. Sequence IDs should be considered opaque; they come from the last_seq property of a prior response.",
            "type": "integer"
          },
          "filter": {
            "description": "Indicates that the returned documents should be filtered. The valid values are sync_gateway/bychannel and _doc_ids.",
            "type": "string"
          },
          "feed": {
            "description": "Default is 'normal'. Specifies type of change feed. Valid values are normal, continuous, longpoll, websocket.",
            "type": "string",
            "default": "normal"
          },
          "heartbeat": {
            "description": "Default is 0. Interval in milliseconds at which an empty line (CRLF) is written to the response. This helps prevent gateways from deciding the socket is idle and closing it. Only applicable to longpoll or continuous feeds. Overrides any timeout to keep the feed alive indefinitely. Setting to 0 results in no heartbeat.",
            "type": "integer",
            "default": 0
          }
        }
      }
    },
    "conflicts": {
      "in": "query",
      "name": "conflicts",
      "description": "Default is false. Include conflict information in the response. This parameter is ignored if the include_docs parameter is false.",
      "type": "boolean",
      "default": false
    },
    "end_key": {
      "in": "query",
      "name": "end_key",
      "description": "Alias for the endkey parameter.",
      "type": "string",
      "required": false
    },
    "endkey_docid": {
      "in": "query",
      "name": "endkey_docid",
      "description": "If this parameter is provided, stop returning records when the specified document identifier is reached.",
      "type": "string",
      "required": false
    },
    "end_key_doc_id": {
      "in": "query",
      "name": "end_key_doc_id",
      "description": "Alias for the endkey_docid parameter.",
      "type": "string",
      "required": false
    },
    "filter": {
      "in": "query",
      "name": "filter",
      "description": "Reference a filter function from a design document to selectively get updates.",
      "type": "string",
      "required": false
    },
    "inclusive_end": {
      "in": "query",
      "name": "inclusive_end",
      "description": "Indicates whether the specified end key should be included in the result.",
      "type": "boolean",
      "default": true
    },
    "key": {
      "in": "query",
      "name": "key",
      "description": "If this parameter is provided, return only document that match the specified key.",
      "type": "string",
      "required": false
    },
    "replication": {
      "in": "body",
      "name": "body",
      "description": "The request message body is a JSON document that contains the following objects.",
      "schema": {
        "type": "object",
        "properties": {
          "allNew": {
            "type": "boolean",
            "description": "iOS/Mac only. Tells a push replicator that all the revisions being pushed are new ones that don't yet exist on the server. This improves performance by skipping the revs_diff request."
          },
          "attachments": {
            "type": "boolean",
            "description": "iOS/Mac only (experimental). Can be set to false to disable downloading attachments in a pull replication."
          },
          "cancel": {
            "type": "boolean",
            "description": "Indicates that a running replication task should be cancelled, the running task is identified by passing the original source and target values."
          },
          "connection_timeout": {
            "type": "integer",
            "description": "Specifies the timeout to use on HTTP requests"
          },
          "continuous": {
            "type": "boolean",
            "description": "Default is false. Specifies whether the replication should be in continuous mode.",
            "default": false
          },
          "create_target": {
            "type": "boolean",
            "description": "Default is false. Indicates whether to create the target database.",
            "default": false
          },
          "doc_ids": {
            "type": "array",
            "description": "Array of document IDs to be synchronized",
            "items": {
              "type": "string",
              "description": "Document ID"
            }
          },
          "filter": {
            "type": "string",
            "description": "Indicates that the documents should be filtered using the specified filter function name. A common value used when replicating from Sync Gateway is sync_gateway/bychannel to limit the pull replication to a set of channels."
          },
          "heartbeat": {
            "type": "integer",
            "description": "Specifies the heartbeat value to be used in the _changes feed request."
          },
          "pinnedCert": {
            "type": "string",
            "description": "iOS/Mac only. Forces an SSL connection to accept only a specific certificate (instead of any valid certificate for that hostname.) This increases security for regular server-based replication, and if you're using P2P it's the only way to make a trustworthy connection. The parameter body can be either the raw certificate data or a SHA-1 digest of it, in base64."
          },
          "poll": {
            "type": "integer",
            "description": "Makes a continuous pull replication poll the _changes feed, at the given interval in ms, instead of keeping a connection open."
          },
          "purgePushed": {
            "type": "boolean",
            "description": "iOS/Mac only. Tells a push replicator to purge every document after it successfully pushes it to the server.",
            "default": false
          },
          "network": {
            "type": "string",
            "description": "Can be used to restrict the replicator to using only WiFi/Ethernet or only cellular networking. Valid values are \"WiFi\" and \"Cell\""
          },
          "query_params": {
            "type": "object",
            "description": "A set of key/value pairs to use in the querystring of the replication. For example, the channels field can be used to pull from a set of channels (in this particular case, the filter key must be set for the channels field to work as expected)."
          },
          "remoteUUID": {
            "type": "string",
            "description": "iOS/Mac only. Tells the replicator to use the given string as the identifier of the remote server, instead of the URL, when constructing the unique identifier of this replication. This is necessary if the server doesn't have a stable URL, i.e. with P2P."
          },
          "reset": {
            "type": "boolean",
            "description": "Forces the checkpoint to be reset, i.e. start over from the beginning."
          },
          "source": {
            "type": "object",
            "description": "Identifies the database to copy the revisions from. Can be a string containing a local database name or a remote database URL, or an object whose url property contains the database name or URL. Also an object can contain headers property that contain custom header values such as a cookie.",
            "properties": {
              "url": {
                "description": "The URL of the remote database.",
                "type": "string"
              },
              "headers": {
                "description": "Headers to use in the replication requests.",
                "type": "object",
                "properties": {
                  "Cookie": {
                    "description": "A Sync Gateway session cookie",
                    "type": "string"
                  }
                }
              }
            }
          },
          "target": {
            "type": "string",
            "description": "Identifies the target database to copy revisions to. Same format and interpretation as source."
          },
          "websocket": {
            "type": "string",
            "description": "iOS/Mac only. Can be set to false to disable the use of WebSockets for the _changes feed request",
            "default": true
          }
        }
      }
    },
    "skip": {
      "in": "query",
      "name": "skip",
      "description": "If this parameter is provided, skip the specified number of documents before starting to return results.",
      "type": "integer",
      "default": 0
    },
    "stale": {
      "in": "query",
      "name": "stale",
      "description": "Allow the results from a stale view to be used, without triggering a rebuild of all views within the encompassing design document. Valid values are 'ok' and 'update_after'.",
      "type": "string",
      "required": false
    },
    "start_key": {
      "in": "query",
      "name": "start_key",
      "description": "Alias for startkey.",
      "type": "string",
      "required": false
    },
    "startkey_docid": {
      "in": "query",
      "name": "startkey_docid",
      "description": "If this parameter is provided, return documents starting with the specified document identifier.",
      "type": "string",
      "required": false
    }
  },
  "paths": {
    "/{db}/{doc}/{attachment}": {
      "parameters": [
        {
          "$ref": "#/parameters/db"
        },
        {
          "$ref": "#/parameters/doc"
        },
        {
          "$ref": "#/parameters/attachment"
        }
      ],
      "get": {
        "tags": [
          "attachment"
        ],
        "summary": "Get attachment",
        "description": "This request retrieves a file attachment associated with the document. The raw data of the associated attachment is returned (just as if you were accessing a static file). The Content-Type response header is the same content type set when the document attachment was added to the database.\n",
        "parameters": [
          {
            "$ref": "#/parameters/rev"
          }
        ],
        "responses": {
          "200": {
            "description": "The message body contains the attachment, in the format specified in the Content-Type header."
          },
          "304": {
            "description": "Not Modified, the attachment wasn't modified if ETag equals the If-None-Match header"
          },
          "404": {
            "description": "Not Found, the specified database, document or attachment was not found."
          }
        }
      },
      "put": {
        "tags": [
          "attachment"
        ],
        "summary": "Add or update document",
        "description": "This request adds or updates the supplied request content as an attachment to the specified document. The attachment name must be a URL-encoded string (the file name). You must also supply either the rev query parameter or the If-Match HTTP header for validation, and the Content-Type headers (to set the attachment content type).\n\n  When uploading an attachment using an existing attachment name, the corresponding stored content of the database will be updated. Because you must supply the revision information to add an attachment to the document, this serves as validation to update the existing attachment.\n\n  Uploading an attachment updates the corresponding document revision. Revisions are tracked for the parent document, not individual attachments.\n",
        "responses": {
          "200": {
            "description": "Operation completed successfully",
            "schema": {
              "$ref": "#/definitions/Success"
            }
          },
          "409": {
            "description": "Conflict, the document revision wasn't specified or it's not the latest."
          }
        }
      }
    },
    "/{db}/_bulk_docs": {
      "parameters": [
        {
          "$ref": "#/parameters/db"
        }
      ],
      "post": {
        "tags": [
          "database"
        ],
        "summary": "Bulk docs",
        "description": "This request enables you to add, update, or delete multiple documents to a database in a single request. To add new documents, you can either specify the ID (_id) or let the software create an ID. To update existing documents, you must provide the document ID, revision identifier (_rev), and new document values. To delete existing documents you must provide the document ID, revision identifier, and the deletion flag (_deleted).\n",
        "parameters": [
          {
            "$ref": "#/parameters/bulkdocs"
          }
        ],
        "responses": {
          "201": {
            "description": "Documents have been created or updated",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Success"
              }
            }
          }
        }
      }
    },
    "/": {
      "get": {
        "tags": [
          "server"
        ],
        "summary": "summary",
        "description": "description",
        "responses": {
          "200": {
            "description": "hello"
          }
        }
      }
    },
    "/_active_tasks": {
      "get": {
        "tags": [
          "server"
        ],
        "summary": "List of running tasks",
        "description": "This request retrieves a list of all tasks running on the server.",
        "responses": {
          "200": {
            "description": "200 OK â€“ Request completed successfully",
            "schema": {
              "$ref": "#/definitions/ActiveTasks"
            }
          }
        }
      }
    },
    "/_all_dbs": {
      "get": {
        "tags": [
          "server"
        ],
        "summary": "Get database names",
        "description": "This request retrieves the list of databases on the server.",
        "responses": {
          "200": {
            "description": "Request completed successfully",
            "schema": {
              "type": "array",
              "description": "List of databases",
              "items": {
                "type": "string",
                "description": "Database name"
              }
            }
          }
        }
      }
    },
    "/_replicate": {
      "post": {
        "tags": [
          "server"
        ],
        "summary": "Starts or cancels a database replication operation",
        "description": "This request starts or cancels a database replication operation.\n\nYou can cancel continuous replications by adding the cancel field to the JSON request object and setting the value to true. Note that the structure of the request must be identical to the original for the cancellation request to be honoured. For example, if you requested continuous replication, the cancellation request must also contain the continuous field.\n",
        "parameters": [
          {
            "$ref": "#/parameters/replication"
          }
        ],
        "responses": {
          "200": {
            "description": "200 OK",
            "schema": {
              "type": "object",
              "properties": {
                "ok": {
                  "type": "boolean",
                  "description": "Indicates whether the replication operation was successful"
                },
                "session_id": {
                  "type": "string",
                  "description": "Session identifier"
                }
              }
            }
          },
          "404": {
            "description": "The replication with the specified parameters does not exist. If you're trying to cancel a running replication but encounter this response it means that the parameters do not match the ones in the request that started the replication. Or that such a replication is not running. Use the /_active_tasks endpoint to retrieve the list of replications in progress.\n"
          }
        }
      }
    },
    "/_session": {
      "get": {
        "tags": [
          "server"
        ],
        "summary": "Retrieve session information",
        "description": "This request retrieves session information. Even though Couchbase Lite doesnâ€™t support user logins, it implements a generic response to the _session API for compatibility with apps that might call it.",
        "responses": {
          "200": {
            "description": "200 OK"
          }
        }
      }
    },
    "/_uuids": {
      "get": {
        "tags": [
          "server"
        ],
        "summary": "List of database identifiers",
        "description": "This request retrieves a list of the database identifiers.",
        "responses": {
          "200": {
            "description": "List of UUIDs",
            "schema": {
              "type": "object",
              "properties": {
                "uuids": {
                  "type": "string"
                }
              }
            }
          }
        }
      }
    },
    "/{db}/": {
      "parameters": [
        {
          "$ref": "#/parameters/db"
        }
      ],
      "get": {
        "tags": [
          "database"
        ],
        "summary": "Database info",
        "description": "This request retrieves information about the database.\n",
        "responses": {
          "200": {
            "description": "Request completed successfully.",
            "schema": {
              "type": "object",
              "properties": {
                "db_name": {
                  "type": "string",
                  "description": "Name of the database"
                },
                "db_uuid": {
                  "type": "integer",
                  "description": "Database identifier"
                },
                "disk_format_version": {
                  "type": "integer",
                  "description": "Database schema version"
                },
                "disk_size": {
                  "type": "integer",
                  "description": "Total amount of data stored on the disk (in bytes)"
                },
                "instance_start_time": {
                  "type": "string",
                  "description": "Date and time the database was opened (in microseconds since 1 January 1970)"
                },
                "update_seq": {
                  "type": "string",
                  "description": "Number of updates to the database"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized. Login required."
          },
          "404": {
            "description": "Not Found. Requested database not found."
          }
        }
      },
      "put": {
        "tags": [
          "database"
        ],
        "summary": "Create database",
        "description": "This request creates a database.",
        "responses": {
          "201": {
            "description": "The database was created successfully."
          }
        }
      },
      "post": {
        "tags": [
          "document"
        ],
        "operationId": "post",
        "summary": "Create document",
        "description": "This request creates a new document in the specified database. You can either specify the document ID by including the _id in the request message body (the value must be a string), or let the software generate an ID.\n",
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "The document body",
            "schema": {
              "type": "object"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "The document was written successfully",
            "schema": {
              "$ref": "#/definitions/Success"
            }
          }
        }
      },
      "delete": {
        "tags": [
          "database"
        ],
        "summary": "Delete database",
        "description": "Delete database",
        "responses": {
          "200": {
            "description": "Success",
            "schema": {
              "$ref": "#/definitions/Success"
            }
          }
        }
      }
    },
    "/{db}/_all_docs": {
      "parameters": [
        {
          "$ref": "#/parameters/db"
        }
      ],
      "get": {
        "tags": [
          "query"
        ],
        "summary": "All docs",
        "description": "This request returns a built-in view of all the documents in the database.\n",
        "parameters": [
          {
            "$ref": "#/parameters/conflicts"
          },
          {
            "$ref": "#/parameters/descending"
          },
          {
            "$ref": "#/parameters/endkey"
          },
          {
            "$ref": "#/parameters/end_key"
          },
          {
            "$ref": "#/parameters/endkey_docid"
          },
          {
            "$ref": "#/parameters/end_key_doc_id"
          },
          {
            "$ref": "#/parameters/include_docs"
          },
          {
            "$ref": "#/parameters/inclusive_end"
          },
          {
            "$ref": "#/parameters/key"
          },
          {
            "$ref": "#/parameters/limit"
          },
          {
            "$ref": "#/parameters/skip"
          },
          {
            "$ref": "#/parameters/stale"
          },
          {
            "$ref": "#/parameters/startkey"
          },
          {
            "$ref": "#/parameters/start_key"
          },
          {
            "$ref": "#/parameters/startkey_docid"
          },
          {
            "$ref": "#/parameters/update_seq"
          }
        ],
        "responses": {
          "200": {
            "description": "Request completed successfully",
            "schema": {
              "type": "object",
              "properties": {
                "offset": {
                  "type": "string",
                  "description": "Starting index of the returned rows."
                },
                "rows": {
                  "type": "array",
                  "description": "Array of row objects.",
                  "items": {
                    "$ref": "#/definitions/QueryRow"
                  }
                },
                "total_rows": {
                  "type": "integer",
                  "description": "Number of documents in the database. This number is not the number of rows returned."
                },
                "update_seq": {
                  "type": "integer",
                  "description": "Sequence identifier of the underlying database that the view reflects."
                }
              }
            }
          }
        }
      }
    },
    "/{db}/_changes": {
      "parameters": [
        {
          "$ref": "#/parameters/db"
        }
      ],
      "get": {
        "tags": [
          "query"
        ],
        "parameters": [
          {
            "$ref": "#/parameters/include_docs"
          },
          {
            "$ref": "#/parameters/style"
          },
          {
            "$ref": "#/parameters/descending"
          },
          {
            "$ref": "#/parameters/limit"
          },
          {
            "$ref": "#/parameters/since"
          },
          {
            "$ref": "#/parameters/filter"
          },
          {
            "$ref": "#/parameters/feed"
          },
          {
            "$ref": "#/parameters/heartbeat"
          }
        ],
        "summary": "Changes",
        "description": "This request retrieves a sorted list of changes made to documents in the database, in time order of application. Each document appears at most once, ordered by its most recent change, regardless of how many times it's been changed.\nThis request can be used to listen for update and modifications to the database for post processing or synchronization. A continuously connected changes feed is a reasonable approach for generating a real-time log for most applications.\n",
        "responses": {
          "200": {
            "description": "Request completed successfully",
            "schema": {
              "type": "object",
              "properties": {
                "last_seq": {
                  "type": "integer",
                  "description": "Last change sequence number"
                },
                "results": {
                  "type": "array",
                  "description": "List of changes to the database. See the following table for a list of fields in this object.",
                  "items": {
                    "$ref": "#/definitions/ChangesFeedRow"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "database"
        ],
        "parameters": [
          {
            "$ref": "#/parameters/changes_body"
          }
        ],
        "summary": "Changes",
        "description": "Same as the GET /_changes request except the parameters are in the JSON body.\n",
        "responses": {
          "200": {
            "description": "Request completed successfully",
            "schema": {
              "$ref": "#/definitions/ChangesFeedRow"
            }
          }
        }
      }
    },
    "/{db}/{doc}": {
      "parameters": [
        {
          "$ref": "#/parameters/db"
        },
        {
          "$ref": "#/parameters/doc"
        }
      ],
      "get": {
        "tags": [
          "document"
        ],
        "operationId": "get",
        "parameters": [
          {
            "$ref": "#/parameters/attachments"
          },
          {
            "$ref": "#/parameters/atts_since"
          },
          {
            "$ref": "#/parameters/open_revs"
          },
          {
            "$ref": "#/parameters/revs"
          }
        ],
        "summary": "Get document",
        "description": "This request retrieves a document from a database.",
        "responses": {
          "200": {
            "description": "The message body contains the following objects in a JSON document.",
            "schema": {
              "$ref": "#/definitions/Success"
            }
          }
        }
      },
      "put": {
        "tags": [
          "document"
        ],
        "operationId": "put",
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Request body",
            "schema": {
              "$ref": "#/definitions/Document"
            }
          },
          {
            "$ref": "#/parameters/new_edits"
          },
          {
            "$ref": "#/parameters/rev"
          }
        ],
        "summary": "Create or update document",
        "description": "This request creates a new document or creates a new revision of an existing document. It enables you to specify the identifier for a new document rather than letting the software create an identifier. If you want to create a new document and let the software create an identifier, use the POST /db request.\nIf the document specified by doc does not exist, a new document is created and assigned the identifier specified in doc. If the document already exists, the document is updated with the JSON document in the message body and given a new revision.\n",
        "responses": {
          "200": {
            "description": "The response is a JSON document that contains the following objects",
            "schema": {
              "$ref": "#/definitions/Success"
            }
          }
        }
      },
      "delete": {
        "tags": [
          "document"
        ],
        "operationId": "delete",
        "parameters": [
          {
            "$ref": "#/parameters/rev"
          }
        ],
        "summary": "Delete document",
        "description": "This request deletes a document from the database. When a document is deleted, the revision number is updated so the database can track the deletion in synchronized copies.\n",
        "responses": {
          "200": {
            "description": "Document successfully removed",
            "schema": {
              "$ref": "#/definitions/Success"
            }
          }
        }
      }
    },
    "/{db}/_design/{ddoc}": {
      "parameters": [
        {
          "$ref": "#/parameters/db"
        },
        {
          "$ref": "#/parameters/ddoc"
        }
      ],
      "get": {
        "tags": [
          "query"
        ],
        "summary": "Get Views of a design document",
        "description": "Query a design document.\n",
        "responses": {
          "200": {
            "description": "Views for design document",
            "schema": {
              "type": "object",
              "properties": {
                "my_view_name": {
                  "$ref": "#/definitions/View"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "query"
        ],
        "summary": "Update views of a design document",
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "The request body",
            "required": false,
            "schema": {
              "$ref": "#/definitions/View"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Successful operation",
            "schema": {
              "$ref": "#/definitions/Success"
            }
          }
        }
      },
      "delete": {
        "tags": [
          "query"
        ],
        "summary": "Delete design document",
        "description": "Delete a design document.\n",
        "responses": {
          "200": {
            "description": "The status",
            "schema": {
              "type": "object",
              "items": {
                "$ref": "#/definitions/Design"
              }
            }
          },
          "default": {
            "description": "Unexpected error",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      }
    },
    "/{db}/_design/{ddoc}/_view/{view}": {
      "parameters": [
        {
          "$ref": "#/parameters/db"
        },
        {
          "$ref": "#/parameters/ddoc"
        },
        {
          "$ref": "#/parameters/view"
        }
      ],
      "get": {
        "tags": [
          "query"
        ],
        "summary": "Query a view",
        "description": "Query the view on a the design document ddoc\n",
        "parameters": [
          {
            "in": "query",
            "name": "conflicts",
            "description": "Include conflict information in the response. This parameter is ignored if the include_docs parameter is false.",
            "type": "boolean"
          },
          {
            "in": "query",
            "name": "descending",
            "description": "Return documents in descending order.",
            "type": "boolean"
          },
          {
            "in": "query",
            "name": "endkey",
            "description": "If this parameter is provided, stop returning records when the specified key is reached.",
            "type": "string"
          },
          {
            "in": "query",
            "name": "end_key",
            "description": "Alias for the endkey parameter.",
            "type": "string"
          },
          {
            "in": "query",
            "name": "endkey_docid",
            "description": "If this parameter is provided, stop returning records when the specified document identifier is reached.",
            "type": "string"
          },
          {
            "in": "query",
            "name": "end_key_doc_id",
            "description": "Alias for the endkey_docid parameter.",
            "type": "string"
          },
          {
            "in": "query",
            "name": "group_level",
            "description": "The group level of the query",
            "type": "integer"
          },
          {
            "in": "query",
            "name": "include_docs",
            "description": "Indicates whether to include the full content of the documents in the response.",
            "type": "boolean"
          },
          {
            "in": "query",
            "name": "inclusive_end",
            "description": "Indicates whether the specified end key should be included in the result.",
            "type": "boolean"
          },
          {
            "in": "query",
            "name": "key",
            "description": "If this parameter is provided, return only document that match the specified key.",
            "type": "string"
          },
          {
            "in": "query",
            "name": "limit",
            "description": "If this parameter is provided, return only the specified number of documents.",
            "type": "integer"
          },
          {
            "in": "query",
            "name": "prefix_match_level",
            "description": "The level",
            "type": "integer"
          },
          {
            "in": "query",
            "name": "skip",
            "description": "If this parameter is provided, skip the specified number of documents before starting to return results.",
            "type": "integer"
          },
          {
            "in": "query",
            "name": "stale",
            "description": "Allow the results from a stale view to be used, without triggering a rebuild of all views within the encompassing design document. Valid values are ok and update_after.",
            "type": "string"
          },
          {
            "in": "query",
            "name": "startkey",
            "description": "If this parameter is provided, return documents starting with the specified key.",
            "type": "string"
          },
          {
            "in": "query",
            "name": "start_key",
            "description": "Alias for startkey param.",
            "type": "string"
          },
          {
            "in": "query",
            "name": "startkey_docid",
            "description": "If this parameter is provided, return documents starting with the specified document identifier.",
            "type": "string"
          },
          {
            "in": "query",
            "name": "update_seq",
            "description": "Indicates whether to include the update_seq property in the response.",
            "type": "boolean"
          }
        ],
        "responses": {
          "200": {
            "description": "Query results",
            "schema": {
              "type": "object",
              "properties": {
                "offset": {
                  "type": "string",
                  "description": "Starting index of the returned rows."
                },
                "row": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/QueryRow"
                  }
                },
                "total_rows": {
                  "type": "integer",
                  "description": "Number of documents in the database. This number is not the number of rows returned."
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "query"
        ],
        "summary": "Query a view",
        "description": "Executes the specified view function from the specified design document. Unlike GET /{db}/{design-doc-id}/_view/{view} for accessing views, the POST method supports the specification of explicit keys to be retrieved from the view results. The remainder of the POST view functionality is identical to the GET /{db}/{design-doc-id}/_view/{view} API.\n",
        "parameters": [
          {
            "in": "body",
            "name": "keys",
            "description": "List of identifiers of the documents to retrieve",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200 OK"
          }
        }
      }
    },
    "/{db}/_purge": {
      "parameters": [
        {
          "$ref": "#/parameters/db"
        }
      ],
      "post": {
        "tags": [
          "document"
        ],
        "summary": "Purge document",
        "description": "When an application deletes a document a tombstone revision is created, over time the number of tombstones can become significant. Tombstones allow document deletions to be propagated to other clients via replication. For some applications the replication of a tombstone may not be useful after a period of time. The purge command provides a way to remove the tombstones from a Sync Gateway database, recovering storage space and reducing the amount of data replicated to clients.\n",
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "The message body is a JSON document that contains the following objects.",
            "schema": {
              "$ref": "#/definitions/PurgeBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK â€“ The purge operation was successful",
            "schema": {
              "type": "object",
              "description": "Response object",
              "properties": {
                "a_doc_id": {
                  "type": "array",
                  "description": "Contains one property for each document ID successfully purged, the property key is the \"docID\" and the property value is a list containing the single entry \"*\".",
                  "items": {
                    "type": "string",
                    "description": "Revision ID that was purged"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "definitions": {
    "DocMetadata": {
      "type": "object",
      "properties": {
        "_sync": {
          "type": "object",
          "properties": {
            "rev": {
              "type": "string",
              "description": "Revision number of the current revision"
            },
            "sequence": {
              "type": "integer",
              "description": "Sequence number of this document"
            },
            "recent_sequences": {
              "type": "array",
              "items": {
                "type": "integer",
                "description": "Previous sequence numbers"
              }
            },
            "parents": {
              "type": "array",
              "items": {
                "type": "integer",
                "description": "N/A"
              }
            },
            "history": {
              "type": "object",
              "properties": {
                "revs": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "description": "N/A"
                  }
                },
                "parents": {
                  "type": "array",
                  "items": {
                    "type": "integer",
                    "description": "N/A"
                  }
                },
                "channels": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "description": "N/A"
                  }
                },
                "time_saved": {
                  "type": "string",
                  "description": "Timestamp of the last operation?"
                }
              }
            }
          }
        }
      }
    },
    "Error": {
      "type": "object",
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32"
        },
        "message": {
          "type": "string"
        },
        "fields": {
          "type": "string"
        }
      }
    },
    "ExpVars": {
      "type": "object",
      "properties": {
        "cmdline": {
          "type": "object",
          "description": "Built-in variables from the Go runtime, lists the command-line arguments"
        },
        "memstats": {
          "type": "object",
          "description": "Dumps a large amount of information about the memory heap and garbage collector"
        },
        "cb": {
          "type": "object",
          "description": "Variables reported by the Couchbase SDK (go_couchbase package)"
        },
        "mc": {
          "type": "object",
          "description": "Variables reported by the low-level memcached API (gomemcached package)"
        },
        "syncGateway_changeCache": {
          "type": "object",
          "properties": {
            "maxPending": {
              "type": "object",
              "description": "Max number of sequences waiting on a missing earlier sequence number"
            },
            "lag-tap-0000ms": {
              "type": "object",
              "description": "Histogram of delay from doc save till it shows up in Tap feed"
            },
            "lag-queue-0000ms": {
              "type": "object",
              "description": "Histogram of delay from Tap feed till doc is posted to changes feed"
            },
            "lag-total-0000ms": {
              "type": "object",
              "description": "Histogram of total delay from doc save till posted to changes feed"
            },
            "outOfOrder": {
              "type": "object",
              "description": "Number of out-of-order sequences posted"
            },
            "view_queries": {
              "type": "object",
              "description": "Number of queries to channels view"
            }
          }
        },
        "syncGateway_db": {
          "type": "object",
          "properties": {
            "channelChangesFeeds": {
              "type": "object",
              "description": "Number of calls to db.changesFeed, i.e. generating a changes feed for a single channel."
            },
            "channelLogAdds": {
              "type": "object",
              "description": "Number of entries added to channel logs"
            },
            "channelLogAppends": {
              "type": "object",
              "description": "Number of times entries were written to channel logs using an APPEND operation"
            },
            "channelLogCacheHits": {
              "type": "object",
              "description": "Number of requests for channel-logs that were fulfilled from the in-memory cache"
            },
            "channelLogRewrites": {
              "type": "object",
              "description": "Number of times entries were written to channel logs using a SET operation (rewriting the entire log)"
            },
            "channelLogRewriteCollisions": {
              "type": "object",
              "description": "Number of collisions while attempting to rewrite channel logs using SET"
            },
            "document_gets": {
              "type": "object",
              "description": "Number of times a document was read from the database"
            },
            "revisionCache_adds": {
              "type": "object",
              "description": "Number of revisions added to the revision cache"
            },
            "revisionCache_hits": {
              "type": "object",
              "description": "Number of times a revision-cache lookup succeeded"
            },
            "revisionCache_misses": {
              "type": "object",
              "description": "Number of times a revision-cache lookup failed"
            },
            "revs_added": {
              "type": "object",
              "description": "Number of revisions added to the database (including deletions)"
            },
            "sequence_gets": {
              "type": "object",
              "description": "Number of times the database's lastSequence was read"
            },
            "sequence_reserves": {
              "type": "object",
              "description": "Number of times the database's lastSequence was incremented"
            }
          }
        }
      }
    },
    "LogTags": {
      "type": "object",
      "properties": {
        "Access": {
          "type": "boolean",
          "description": "access() calls made by the sync function"
        },
        "Attach": {
          "type": "boolean",
          "description": "Attachment processing"
        },
        "Auth": {
          "type": "boolean",
          "description": "Authentication"
        },
        "Bucket": {
          "type": "boolean",
          "description": "Sync Gateway interactions with the bucket (verbose logging)."
        },
        "Cache": {
          "type": "boolean",
          "description": "Interactions with Sync Gateway's in-memory channel cache (Cache+ for verbose logging)"
        },
        "Changes": {
          "type": "boolean",
          "description": "Processing of _changes requests (Changes+ for verbose logging)"
        },
        "CRUD": {
          "type": "boolean",
          "description": "Updates made by Sync Gateway to documents (CRUD+ for verbose logging)"
        },
        "DCP": {
          "type": "boolean",
          "description": "DCP-feed processing (verbose logging)"
        },
        "Events": {
          "type": "boolean",
          "description": "Event processing (webhooks) (Events+ for verbose logging)"
        },
        "Feed": {
          "type": "boolean",
          "description": "Server-feed processing (Feed+ for verbose logging)"
        },
        "HTTP": {
          "type": "boolean",
          "description": "All requests made to the Sync Gateway REST APIs (Sync and Admin). Note that the log keyword HTTP is always enabled, which means that HTTP requests and error responses are always logged (in a non-verbose manner). HTTP+ provides more verbose HTTP logging."
        }
      }
    },
    "PurgeBody": {
      "type": "object",
      "description": "Document ID",
      "properties": {
        "a_doc_id": {
          "type": "array",
          "description": "List containing the revision numbers to purge for the given docID. Passing \"*\" as an item in the array will remove all the revisions for that document.",
          "items": {
            "type": "string",
            "description": "Revision ID to delete or \"*\" to delete all the revisions of the document."
          }
        }
      }
    },
    "Success": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "Design document identifier"
        },
        "rev": {
          "type": "string",
          "description": "Revision identifier"
        },
        "ok": {
          "type": "boolean",
          "description": "Indicates whether the operation was successful"
        }
      }
    },
    "User": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Name of the user that will be created"
        },
        "password": {
          "type": "string",
          "description": "Password of the user that will be created. Required, unless the allow_empty_password Sync Gateway per-database configuration value is set to true, in which case the password can be omitted."
        },
        "admin_channels": {
          "type": "array",
          "description": "Array of channel names to give the user access to",
          "items": {
            "type": "string",
            "description": "Channel name"
          }
        },
        "admin_roles": {
          "type": "array",
          "description": "Array of role names to assign to this user",
          "items": {
            "type": "string",
            "description": "Role name"
          }
        },
        "email": {
          "type": "string",
          "description": "Email of the user that will be created."
        },
        "disabled": {
          "type": "boolean",
          "description": "Boolean property to disable this user. The user will not be able to login if this property is set to true."
        }
      }
    },
    "ChangesFeedRow": {
      "type": "object",
      "properties": {
        "changes": {
          "type": "array",
          "description": "List of the documentâ€™s leafs. Each leaf object contains one field, rev.",
          "items": {
            "type": "string"
          }
        },
        "id": {
          "type": "string",
          "description": "Document identifier"
        },
        "seq": {
          "type": "integer",
          "description": "Update sequence number"
        }
      }
    },
    "InvalidJSON": {
      "description": "The request provided invalid JSON data"
    },
    "View": {
      "type": "object",
      "properties": {
        "_rev": {
          "type": "string",
          "description": "Revision identifier of the parent revision the new one should replace. (Not used when creating a new document.)"
        },
        "views": {
          "type": "object",
          "description": "List of views to save on this design document.",
          "properties": {
            "my_view_name": {
              "type": "object",
              "description": "The view's map/reduce functions.",
              "properties": {
                "map": {
                  "type": "string",
                  "description": "Inline JavaScript definition for the map function"
                },
                "reduce": {
                  "type": "string",
                  "description": "Inline JavaScript definition for the reduce function"
                }
              }
            }
          }
        }
      }
    },
    "QueryRow": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "The ID of the document"
        },
        "key": {
          "type": "object",
          "description": "The key in the output row"
        },
        "value": {
          "type": "object",
          "description": "The value in the output row"
        }
      }
    },
    "Design": {
      "type": "object",
      "properties": {
        "offset": {
          "type": "integer",
          "format": "int32",
          "description": "Position in pagination."
        },
        "limit": {
          "type": "integer",
          "format": "int32",
          "description": "Number of items to retrieve (100 max)."
        },
        "count": {
          "type": "integer",
          "format": "int32",
          "description": "Total number of items available."
        }
      }
    },
    "ActiveTasks": {
      "type": "object",
      "properties": {
        "continuous": {
          "type": "boolean",
          "description": "Indicates whether the task is for a continuous replication"
        },
        "error": {
          "type": "string",
          "description": "Error information"
        },
        "progress": {
          "type": "integer",
          "description": "Percentage of task completed"
        },
        "source": {
          "type": "string",
          "description": "Name of source database"
        },
        "status": {
          "type": "string",
          "description": "Task status"
        },
        "target": {
          "type": "string",
          "description": "Name of target database"
        },
        "task": {
          "type": "string",
          "description": "Session identifier"
        },
        "type": {
          "type": "string",
          "description": "Type of task. The type is always Replication."
        },
        "x_active_requests": {
          "type": "array",
          "description": "Active requests",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "Document": {
      "type": "object",
      "properties": {
        "_id": {
          "type": "string",
          "description": "The document ID."
        },
        "_rev": {
          "type": "string",
          "description": "Revision identifier of the parent revision the new one should replace. (Not used when creating a new document.)"
        },
        "_attachments": {
          "type": "object",
          "description": "List of attachments.",
          "properties": {
            "my_attachment_name": {
              "type": "object",
              "description": "Attachment body",
              "properties": {
                "content-type": {
                  "type": "string",
                  "description": "Content type of the attachment (i.e. image/png, text/plain)."
                },
                "data": {
                  "type": "string",
                  "description": "Base64 encoded attachment."
                }
              }
            }
          }
        }
      }
    }
  }
}
