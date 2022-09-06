define({ "api": [
  {
    "type": "post",
    "url": "/article",
    "title": "Create New Article",
    "group": "Article",
    "name": "Create_new_Article",
    "description": "<p>creates a new article which automatically inherits the current date</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Article added successfully\",\n    \"data\": {\n        \"title\": \"how to mint an NFT\",\n        \"subtitle\": \"how to mint on Opensea\",\n        \"body\": \"Minting an nft has never been so easy since the integration of NFTs\",\n        \"image\": \"https://picsum.com/200/300\",\n        \"categories\": [\n            \"Art\",\n            \"Music\"\n        ],\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"_id\": \"6265b54a05b780d5d5e1949b\",\n        \"created_at\": \"2022-04-24T20:38:34.988Z\",\n        \"updated_at\": \"2022-04-24T20:38:34.988Z\"\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/articles/ArticleRoute.js",
    "groupTitle": "Article",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/article"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/article/:id",
    "title": "Delete Article",
    "group": "Article",
    "name": "Delete_Article",
    "description": "<p>Deletes a single Article</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Article Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Article deleted successfully\",\n    \"data\": {\n        \"title\": \"how to mint an NFT\",\n        \"subtitle\": \"how to mint on Opensea\",\n        \"body\": \"Minting an nft has never been so easy since the integration of NFTs\",\n        \"image\": \"https://picsum.com/200/300\",\n        \"categories\": [\n            \"Art\",\n            \"Music\"\n        ],\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"_id\": \"6265b54a05b780d5d5e1949b\",\n        \"created_at\": \"2022-04-24T20:38:34.988Z\",\n        \"updated_at\": \"2022-04-24T20:38:34.988Z\"\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/articles/ArticleRoute.js",
    "groupTitle": "Article",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/article/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/article/:id",
    "title": "Get Article",
    "group": "Article",
    "name": "Get_Article",
    "description": "<p>Get a single Article with full populated information</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Article Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Article fetched successfully\",\n    \"data\": {\n        \"title\": \"how to mint an NFT\",\n        \"subtitle\": \"how to mint on Opensea\",\n        \"body\": \"Minting an nft has never been so easy since the integration of NFTs\",\n        \"image\": \"https://picsum.com/200/300\",\n        \"categories\": [\n            \"Art\",\n            \"Music\"\n        ],\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"_id\": \"6265b54a05b780d5d5e1949b\",\n        \"created_at\": \"2022-04-24T20:38:34.988Z\",\n        \"updated_at\": \"2022-04-24T20:38:34.988Z\"\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/articles/ArticleRoute.js",
    "groupTitle": "Article",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/article/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/article",
    "title": "All Article Collection Data",
    "group": "Article",
    "name": "Get_Article(s)",
    "description": "<p>Gets all article</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Article(s) fetched successfully\",\n    \"data\": [{\n        \"title\": \"how to mint an NFT\",\n        \"subtitle\": \"how to mint on Opensea\",\n        \"body\": \"Minting an nft has never been so easy since the integration of NFTs\",\n        \"image\": \"https://picsum.com/200/300\",\n        \"categories\": [\n            \"Art\",\n            \"Music\"\n        ],\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"_id\": \"6265b54a05b780d5d5e1949b\",\n        \"created_at\": \"2022-04-24T20:38:34.988Z\",\n        \"updated_at\": \"2022-04-24T20:38:34.988Z\"\n    }],\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/articles/ArticleRoute.js",
    "groupTitle": "Article",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/article"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/article/:id",
    "title": "Update Article",
    "group": "Article",
    "name": "Updates_existing_Article",
    "description": "<p>Updates Article</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Article updated successfully\",\n    \"data\": {\n        \"title\": \"how to mint an NFT\",\n        \"subtitle\": \"how to mint on Opensea\",\n        \"body\": \"Minting an nft has never been so easy since the integration of NFTs\",\n        \"image\": \"https://picsum.com/200/300\",\n        \"categories\": [\n            \"Art\",\n            \"Music\"\n        ],\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"_id\": \"6265b54a05b780d5d5e1949b\",\n        \"created_at\": \"2022-04-24T20:38:34.988Z\",\n        \"updated_at\": \"2022-04-24T20:38:34.988Z\"\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/articles/ArticleRoute.js",
    "groupTitle": "Article",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/article/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/contact",
    "title": "Create New Contact",
    "group": "Contact",
    "name": "Create_new_Contact",
    "description": "<p>creates a new contact which automatically inherits the current date</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Contact created successfully!\",\n    \"data\": {\n        \"_id\": \"6265bb548b35f553d43e7789\",\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"subject\": \"Another Value\",\n        \"message\": \"Another Message\",\n        \"attachments\": [\n            \"http://example.com\"\n        ],\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"created_at\": \"2022-04-24T21:04:20.253Z\",\n        \"updated_at\": \"2022-04-24T21:04:20.253Z\",\n        \"__v\": 0\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/contacts/ContactRoute.js",
    "groupTitle": "Contact",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/contact"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/contact/:id",
    "title": "Delete Contact",
    "group": "Contact",
    "name": "Delete_Contact",
    "description": "<p>Deletes a single Contact</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Contact Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Contact deleted successfully!\",\n    \"data\": {\n        \"_id\": \"6265bb548b35f553d43e7789\",\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"subject\": \"Another Value\",\n        \"message\": \"Another Message\",\n        \"attachments\": [\n            \"http://example.com\"\n        ],\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"created_at\": \"2022-04-24T21:04:20.253Z\",\n        \"updated_at\": \"2022-04-24T21:04:20.253Z\",\n        \"__v\": 0\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/contacts/ContactRoute.js",
    "groupTitle": "Contact",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/contact/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/contact/:id",
    "title": "Get Contact",
    "group": "Contact",
    "name": "Get_Contact",
    "description": "<p>Get a single Contact with full populated information</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Contact Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Contact fetched successfully!\",\n    \"data\": {\n        \"_id\": \"6265bb548b35f553d43e7789\",\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"subject\": \"Another Value\",\n        \"message\": \"Another Message\",\n        \"attachments\": [\n            \"http://example.com\"\n        ],\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"created_at\": \"2022-04-24T21:04:20.253Z\",\n        \"updated_at\": \"2022-04-24T21:04:20.253Z\",\n        \"__v\": 0\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/contacts/ContactRoute.js",
    "groupTitle": "Contact",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/contact/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/contact",
    "title": "All Contact Collection Data",
    "group": "Contact",
    "name": "Get_Contact(s)",
    "description": "<p>Gets all contact</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Contact(s) fetched successfully!\",\n    \"data\": [\n        {\n            \"_id\": \"6265bb228b35f553d43e7785\",\n            \"eth_address\": \"Value\",\n            \"subject\": \"Another Value\",\n            \"message\": \"Another Message\",\n            \"attachments\": [\n                \"http://example.com\"\n            ],\n            \"created_at\": \"2022-04-24T21:03:30.805Z\",\n            \"updated_at\": \"2022-04-24T21:03:30.805Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"6265bb548b35f553d43e7789\",\n            \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n            \"subject\": \"Another Value\",\n            \"message\": \"Another Message\",\n            \"attachments\": [\n                \"http://example.com\"\n            ],\n            \"created_by\": \"6265b1532c3c1372beb80304\",\n            \"created_at\": \"2022-04-24T21:04:20.253Z\",\n            \"updated_at\": \"2022-04-24T21:04:20.253Z\",\n            \"__v\": 0\n        }\n    ],\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/contacts/ContactRoute.js",
    "groupTitle": "Contact",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/contact"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/contact/:id",
    "title": "Update Contact",
    "group": "Contact",
    "name": "Updates_existing_Contact",
    "description": "<p>Updates Contact</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Contact updated successfully!\",\n    \"data\": {\n        \"_id\": \"6265bb548b35f553d43e7789\",\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"subject\": \"Another Value\",\n        \"message\": \"Another Message\",\n        \"attachments\": [\n            \"http://example.com\"\n        ],\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"created_at\": \"2022-04-24T21:04:20.253Z\",\n        \"updated_at\": \"2022-04-24T21:04:20.253Z\",\n        \"__v\": 0\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/contacts/ContactRoute.js",
    "groupTitle": "Contact",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/contact/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/invoice",
    "title": "Create New Invoice",
    "group": "Invoice",
    "name": "Create_new_Invoice",
    "description": "<p>creates a new invoice which automatically inherits the current date</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/invoices/InvoiceRoute.js",
    "groupTitle": "Invoice",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/invoice"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/invoice/:id",
    "title": "Delete Invoice",
    "group": "Invoice",
    "name": "Delete_Invoice",
    "description": "<p>Deletes a single Invoice</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Invoice Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/invoices/InvoiceRoute.js",
    "groupTitle": "Invoice",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/invoice/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/invoice/:id",
    "title": "Get Invoice",
    "group": "Invoice",
    "name": "Get_Invoice",
    "description": "<p>Get a single Invoice with full populated information</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Invoice Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/invoices/InvoiceRoute.js",
    "groupTitle": "Invoice",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/invoice/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/invoice",
    "title": "All Invoice Collection Data",
    "group": "Invoice",
    "name": "Get_Invoice(s)",
    "description": "<p>Gets all invoice</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/invoices/InvoiceRoute.js",
    "groupTitle": "Invoice",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/invoice"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/invoice/:id",
    "title": "Update Invoice",
    "group": "Invoice",
    "name": "Updates_existing_Invoice",
    "description": "<p>Updates Invoice</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/invoices/InvoiceRoute.js",
    "groupTitle": "Invoice",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/invoice/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order",
    "title": "Create New Order",
    "group": "Order",
    "name": "Create_new_Order",
    "description": "<p>creates a new order which automatically inherits the current date</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Order created successfully!\",\n    \"data\": {\n        \"_id\": \"6265caa2043a0b652f374ddc\",\n        \"prints\": [\n            {\n                \"name\": \"Bored Ape 2010\",\n                \"size\": \"4x4\",\n                \"image\": \"https://picsum.photos/200/300\",\n                \"quatity\": 3,\n                \"price\": 10,\n                \"type\":\"Magnet\",\n                \"_id\": \"6265caa2043a0b652f374ddd\"\n            },\n            {\n                \"name\": \"Bored Ape 2011\",\n                \"size\": \"8x8\",\n                \"image\": \"https://picsum.photos/200/300\",\n                \"quatity\": 3,\n                \"price\": 10,\n                \"type\":\"Magnet\",\n                \"_id\": \"6265caa2043a0b652f374dde\"\n            }\n        ],\n        \"amount\": 0,\n        \"currency\": \"USD\",\n        \"paid\": false,\n        \"status\": \"Not-Paid\",\n        \"delivery_details\": {\n            \"name\": \"The Lazy\",\n            \"country\": \"United Kingdom\",\n            \"state\": \"London\",\n            \"city\": \"London\",\n            \"address\": \"Flat 1, Top Crake estate,\"\n        },\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"created_at\": \"2022-04-24T22:09:38.030Z\",\n        \"updated_at\": \"2022-04-24T22:09:38.030Z\",\n        \"__v\": 0\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/orders/OrderRoute.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/order"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/order/:id",
    "title": "Delete Order",
    "group": "Order",
    "name": "Delete_Order",
    "description": "<p>Deletes a single Order</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Order Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Order deleted successfully!\",\n    \"data\": {\n        \"_id\": \"6265caa2043a0b652f374ddc\",\n        \"prints\": [\n            {\n                \"name\": \"Bored Ape 2010\",\n                \"size\": \"4x4\",\n                \"image\": \"https://picsum.photos/200/300\",\n                \"quatity\": 3,\n                \"price\": 10,\n                \"type\":\"Magnet\",\n                \"_id\": \"6265caa2043a0b652f374ddd\"\n            },\n            {\n                \"name\": \"Bored Ape 2011\",\n                \"size\": \"8x8\",\n                \"image\": \"https://picsum.photos/200/300\",\n                \"quatity\": 3,\n                \"price\": 10,\n                \"type\":\"Magnet\",\n                \"_id\": \"6265caa2043a0b652f374dde\"\n            }\n        ],\n        \"amount\": 0,\n        \"currency\": \"USD\",\n        \"paid\": false,\n        \"status\": \"Not-Paid\",\n        \"delivery_details\": {\n            \"name\": \"The Lazy\",\n            \"country\": \"United Kingdom\",\n            \"state\": \"London\",\n            \"city\": \"London\",\n            \"address\": \"Flat 1, Top Crake estate,\"\n        },\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"created_at\": \"2022-04-24T22:09:38.030Z\",\n        \"updated_at\": \"2022-04-24T22:09:38.030Z\",\n        \"__v\": 0\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/orders/OrderRoute.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/order/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/order/:id",
    "title": "Get Order",
    "group": "Order",
    "name": "Get_Order",
    "description": "<p>Get a single Order with full populated information</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Order Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Order fetched successfully!\",\n    \"data\": {\n        \"_id\": \"6265caa2043a0b652f374ddc\",\n        \"prints\": [\n            {\n                \"name\": \"Bored Ape 2010\",\n                \"size\": \"4x4\",\n                \"image\": \"https://picsum.photos/200/300\",\n                \"quatity\": 3,\n                \"price\": 10,\n                \"type\":\"Magnet\",\n                \"_id\": \"6265caa2043a0b652f374ddd\"\n            },\n            {\n                \"name\": \"Bored Ape 2011\",\n                \"size\": \"8x8\",\n                \"image\": \"https://picsum.photos/200/300\",\n                \"quatity\": 3,\n                \"price\": 10,\n                \"type\":\"Magnet\",\n                \"_id\": \"6265caa2043a0b652f374dde\"\n            }\n        ],\n        \"amount\": 0,\n        \"currency\": \"USD\",\n        \"paid\": false,\n        \"status\": \"Not-Paid\",\n        \"delivery_details\": {\n            \"name\": \"The Lazy\",\n            \"country\": \"United Kingdom\",\n            \"state\": \"London\",\n            \"city\": \"London\",\n            \"address\": \"Flat 1, Top Crake estate,\"\n        },\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"created_at\": \"2022-04-24T22:09:38.030Z\",\n        \"updated_at\": \"2022-04-24T22:09:38.030Z\",\n        \"__v\": 0\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/orders/OrderRoute.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/order/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/order",
    "title": "All Order Collection Data",
    "group": "Order",
    "name": "Get_Order(s)",
    "description": "<p>Gets all order</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Order(s) fetched successfully!\",\n    \"data\": [{\n        \"_id\": \"6265caa2043a0b652f374ddc\",\n        \"prints\": [\n            {\n                \"name\": \"Bored Ape 2010\",\n                \"size\": \"4x4\",\n                \"image\": \"https://picsum.photos/200/300\",\n                \"quatity\": 3,\n                \"price\": 10,\n                \"type\":\"Magnet\",\n                \"_id\": \"6265caa2043a0b652f374ddd\"\n            },\n            {\n                \"name\": \"Bored Ape 2011\",\n                \"size\": \"8x8\",\n                \"image\": \"https://picsum.photos/200/300\",\n                \"quatity\": 3,\n                \"price\": 10,\n                \"type\":\"Magnet\",\n                \"_id\": \"6265caa2043a0b652f374dde\"\n            }\n        ],\n        \"amount\": 0,\n        \"currency\": \"USD\",\n        \"paid\": false,\n        \"status\": \"Not-Paid\",\n        \"delivery_details\": {\n            \"name\": \"The Lazy\",\n            \"country\": \"United Kingdom\",\n            \"state\": \"London\",\n            \"city\": \"London\",\n            \"address\": \"Flat 1, Top Crake estate,\"\n        },\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"created_at\": \"2022-04-24T22:09:38.030Z\",\n        \"updated_at\": \"2022-04-24T22:09:38.030Z\",\n        \"__v\": 0\n    }],\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/orders/OrderRoute.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/order"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/order/:id",
    "title": "Update Order",
    "group": "Order",
    "name": "Updates_existing_Order",
    "description": "<p>Updates Order</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Order updated successfully!\",\n    \"data\": {\n        \"_id\": \"6265caa2043a0b652f374ddc\",\n        \"prints\": [\n            {\n                \"name\": \"Bored Ape 2010\",\n                \"size\": \"4x4\",\n                \"image\": \"https://picsum.photos/200/300\",\n                \"quatity\": 3,\n                \"price\": 10,\n                \"type\":\"Magnet\",\n                \"_id\": \"6265caa2043a0b652f374ddd\"\n            },\n            {\n                \"name\": \"Bored Ape 2011\",\n                \"size\": \"8x8\",\n                \"image\": \"https://picsum.photos/200/300\",\n                \"quatity\": 3,\n                \"price\": 10,\n                \"type\":\"Magnet\",\n                \"_id\": \"6265caa2043a0b652f374dde\"\n            }\n        ],\n        \"amount\": 0,\n        \"currency\": \"USD\",\n        \"paid\": false,\n        \"status\": \"Not-Paid\",\n        \"delivery_details\": {\n            \"name\": \"The Lazy\",\n            \"country\": \"United Kingdom\",\n            \"state\": \"London\",\n            \"city\": \"London\",\n            \"address\": \"Flat 1, Top Crake estate,\"\n        },\n        \"created_by\": \"6265b1532c3c1372beb80304\",\n        \"created_at\": \"2022-04-24T22:09:38.030Z\",\n        \"updated_at\": \"2022-04-24T22:09:38.030Z\",\n        \"__v\": 0\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/orders/OrderRoute.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/order/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/payment",
    "title": "Create New Payment",
    "group": "Payment",
    "name": "Create_new_Payment",
    "description": "<p>creates a new payment which automatically inherits the current date</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/payments/PaymentRoute.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/payment"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/payment/:id",
    "title": "Delete Payment",
    "group": "Payment",
    "name": "Delete_Payment",
    "description": "<p>Deletes a single Payment</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Payment Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/payments/PaymentRoute.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/payment/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/payment/:id",
    "title": "Get Payment",
    "group": "Payment",
    "name": "Get_Payment",
    "description": "<p>Get a single Payment with full populated information</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Payment Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/payments/PaymentRoute.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/payment/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/payment",
    "title": "All Payment Collection Data",
    "group": "Payment",
    "name": "Get_Payment(s)",
    "description": "<p>Gets all payment</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/payments/PaymentRoute.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/payment"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/payment/:id",
    "title": "Update Payment",
    "group": "Payment",
    "name": "Updates_existing_Payment",
    "description": "<p>Updates Payment</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/payments/PaymentRoute.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/payment/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/refer",
    "title": "Create New Refer",
    "group": "Refer",
    "name": "Create_new_Refer",
    "description": "<p>creates a new refer which automatically inherits the current date</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/refers/ReferRoute.js",
    "groupTitle": "Refer",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/refer"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/refer/:id",
    "title": "Delete Refer",
    "group": "Refer",
    "name": "Delete_Refer",
    "description": "<p>Deletes a single Refer</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Refer Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/refers/ReferRoute.js",
    "groupTitle": "Refer",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/refer/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/refer/:id",
    "title": "Get Refer",
    "group": "Refer",
    "name": "Get_Refer",
    "description": "<p>Get a single Refer with full populated information</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Refer Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/refers/ReferRoute.js",
    "groupTitle": "Refer",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/refer/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/refer",
    "title": "All Refer Collection Data",
    "group": "Refer",
    "name": "Get_Refer(s)",
    "description": "<p>Gets all refer</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/refers/ReferRoute.js",
    "groupTitle": "Refer",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/refer"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/refer/:id",
    "title": "Update Refer",
    "group": "Refer",
    "name": "Updates_existing_Refer",
    "description": "<p>Updates Refer</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/refers/ReferRoute.js",
    "groupTitle": "Refer",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/refer/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/review",
    "title": "Create New Review",
    "group": "Review",
    "name": "Create_new_Review",
    "description": "<p>creates a new review which automatically inherits the current date</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/reviews/ReviewRoute.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/review"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/review/:id",
    "title": "Delete Review",
    "group": "Review",
    "name": "Delete_Review",
    "description": "<p>Deletes a single Review</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Review Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/reviews/ReviewRoute.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/review/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/review/:id",
    "title": "Get Review",
    "group": "Review",
    "name": "Get_Review",
    "description": "<p>Get a single Review with full populated information</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>Review Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/reviews/ReviewRoute.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/review/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/review",
    "title": "All Review Collection Data",
    "group": "Review",
    "name": "Get_Review(s)",
    "description": "<p>Gets all review</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/reviews/ReviewRoute.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/review"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/review/:id",
    "title": "Update Review",
    "group": "Review",
    "name": "Updates_existing_Review",
    "description": "<p>Updates Review</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/reviews/ReviewRoute.js",
    "groupTitle": "Review",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/review/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/stripepayment",
    "title": "Create New StripePayment",
    "group": "StripePayment",
    "name": "Create_new_StripePayment",
    "description": "<p>creates a new stripepayment which automatically inherits the current date</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/stripepayments/StripePaymentRoute.js",
    "groupTitle": "StripePayment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/stripepayment"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/stripepayment/:id",
    "title": "Delete StripePayment",
    "group": "StripePayment",
    "name": "Delete_StripePayment",
    "description": "<p>Deletes a single StripePayment</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>StripePayment Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/stripepayments/StripePaymentRoute.js",
    "groupTitle": "StripePayment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/stripepayment/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/stripepayment/:id",
    "title": "Get StripePayment",
    "group": "StripePayment",
    "name": "Get_StripePayment",
    "description": "<p>Get a single StripePayment with full populated information</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>StripePayment Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/stripepayments/StripePaymentRoute.js",
    "groupTitle": "StripePayment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/stripepayment/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/stripepayment",
    "title": "All StripePayment Collection Data",
    "group": "StripePayment",
    "name": "Get_StripePayment(s)",
    "description": "<p>Gets all stripepayment</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/stripepayments/StripePaymentRoute.js",
    "groupTitle": "StripePayment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/stripepayment"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/stripepayment/:id",
    "title": "Update StripePayment",
    "group": "StripePayment",
    "name": "Updates_existing_StripePayment",
    "description": "<p>Updates StripePayment</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/stripepayments/StripePaymentRoute.js",
    "groupTitle": "StripePayment",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/stripepayment/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create New User",
    "group": "User",
    "name": "Create_new_User",
    "description": "<p>creates a new user which automatically inherits the current date</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"User added successfully\",\n    \"data\": {\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"username\": \"test122\",\n        \"email\": \"francis.igbiriki@gmail.com\",\n        \"discord\": \"test123\",\n        \"twitter\": \"test123\",\n        \"type\": \"customer\",\n        \"_id\": \"6265a7c9c9e6c53edadfc19c\",\n        \"created_at\": \"2022-04-24T19:40:57.641Z\",\n        \"updated_at\": \"2022-04-24T19:40:57.641Z\"\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/users/UserRoute.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/user"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete User",
    "group": "User",
    "name": "Delete_User",
    "description": "<p>Deletes a single User</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>User Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"User deleted successfully\",\n    \"data\": {\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"username\": \"test122\",\n        \"email\": \"francis.igbiriki@gmail.com\",\n        \"discord\": \"test123\",\n        \"twitter\": \"test123\",\n        \"type\": \"customer\",\n        \"_id\": \"6265a7c9c9e6c53edadfc19c\",\n        \"created_at\": \"2022-04-24T19:40:57.641Z\",\n        \"updated_at\": \"2022-04-24T19:40:57.641Z\"\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/users/UserRoute.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User",
    "group": "User",
    "name": "Get_User",
    "description": "<p>Get a single User with full populated information</p>",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>User Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"User fetched successfully\",\n    \"data\": {\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"username\": \"test122\",\n        \"email\": \"francis.igbiriki@gmail.com\",\n        \"discord\": \"test123\",\n        \"twitter\": \"test123\",\n        \"type\": \"customer\",\n        \"_id\": \"6265a7c9c9e6c53edadfc19c\",\n        \"created_at\": \"2022-04-24T19:40:57.641Z\",\n        \"updated_at\": \"2022-04-24T19:40:57.641Z\"\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/users/UserRoute.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user",
    "title": "All User Collection Data",
    "group": "User",
    "name": "Get_User(s)",
    "description": "<p>Gets all user</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"Users fetched successfully\",\n    \"data\": [{\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"username\": \"test122\",\n        \"email\": \"francis.igbiriki@gmail.com\",\n        \"discord\": \"test123\",\n        \"twitter\": \"test123\",\n        \"type\": \"customer\",\n        \"_id\": \"6265a7c9c9e6c53edadfc19c\",\n        \"created_at\": \"2022-04-24T19:40:57.641Z\",\n        \"updated_at\": \"2022-04-24T19:40:57.641Z\"\n    }],\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/users/UserRoute.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/user"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/user/:id",
    "title": "Update User",
    "group": "User",
    "name": "Updates_existing_User",
    "description": "<p>Updates User</p>",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"User updated successfully\",\n    \"data\": {\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"username\": \"test122\",\n        \"email\": \"francis.igbiriki@gmail.com\",\n        \"discord\": \"test123\",\n        \"twitter\": \"test123\",\n        \"type\": \"customer\",\n        \"_id\": \"6265a7c9c9e6c53edadfc19c\",\n        \"created_at\": \"2022-04-24T19:40:57.641Z\",\n        \"updated_at\": \"2022-04-24T19:40:57.641Z\"\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/users/UserRoute.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/user/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/WaitList",
    "title": "Creates WaitList",
    "group": "WAITLIST",
    "name": "Create_WaitList",
    "description": "<p>Saves WaitList to the db</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>Email of the user</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discord",
            "description": "<ul> <li>Discord username</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eth_address",
            "description": "<ul> <li>Ethereum address</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "twitter",
            "description": "<ul> <li>Twitter username</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": " {\n  \"success\": true,\n  \"status_code\": 200,\n  \"message\": \"WaitList created successfully!\",\n   \"data\": {\n        \"email\": \"francis.igbiriki@gmail.com\",\n        \"discord\": \"igmrrf\",\n        \"twitter\": \"igmrrf\",\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"_id\": \"6244f22a7be2d161b405f864\",\n        \"created_at\": \"2022-03-31T00:13:30.062Z\",\n        \"updated_at\": \"2022-03-31T00:13:30.062Z\"\n    },\n  \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/waitlist/WaitListRoute.js",
    "groupTitle": "WAITLIST",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/WaitList"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/WaitList/:id",
    "title": "Deletes WaitList in db",
    "group": "WAITLIST",
    "name": "Delete_WaitList",
    "description": "<p>Deletes WaitList stored in db</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>WaitList Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"success\": true,\n  \"status_code\": 200,\n  \"message\": \"WaitList deleted successfully!\",\n   \"data\": {\n        \"email\": \"francis.igbiriki@gmail.com\",\n        \"twitter\": \"igmrrf\",\n        \"discord\": \"igmrrf\",\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"_id\": \"6244f22a7be2d161b405f864\",\n        \"created_at\": \"2022-03-31T00:13:30.062Z\",\n        \"updated_at\": \"2022-03-31T00:13:30.062Z\"\n    },\n  \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/waitlist/WaitListRoute.js",
    "groupTitle": "WAITLIST",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/WaitList/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/WaitList/:id",
    "title": "Gets one WaitList from db",
    "group": "WAITLIST",
    "name": "Get_A_WaitList",
    "description": "<p>Gets one WaitList from db</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "Id",
            "description": "<ul> <li>WaitList Id</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"success\": true,\n  \"status_code\": 200,\n  \"message\": \"WaitList fetched successfully!\",\n  \"data\": {\n        \"email\": \"francis.igbiriki@gmail.com\",\n        \"twitter\": \"igmrrf\",\n        \"discord\": \"igmrrf\",\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"_id\": \"6244f22a7be2d161b405f864\",\n        \"created_at\": \"2022-03-31T00:13:30.062Z\",\n        \"updated_at\": \"2022-03-31T00:13:30.062Z\"\n    },\n  \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/waitlist/WaitListRoute.js",
    "groupTitle": "WAITLIST",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/WaitList/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/WaitList",
    "title": "Gets all WaitLists in db",
    "group": "WAITLIST",
    "name": "Get_All_WaitLists",
    "description": "<p>Gets all WaitLists</p>",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n    \"success\": true,\n    \"status_code\": 200,\n    \"message\": \"WaitList was successfully processed!\",\n    \"data\": {\n        \"email\": \"francis.igbiriki@gmail.com\",\n        \"twitter\": \"igmrrf\",\n        \"discord\": \"igmrrf\",\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"_id\": \"6244f22a7be2d161b405f864\",\n        \"created_at\": \"2022-03-31T00:13:30.062Z\",\n        \"updated_at\": \"2022-03-31T00:13:30.062Z\"\n    },\n    \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/waitlist/WaitListRoute.js",
    "groupTitle": "WAITLIST",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/WaitList"
      }
    ]
  },
  {
    "type": "put",
    "url": "/WaitList/:id",
    "title": "Updates WaitList",
    "group": "WAITLIST",
    "name": "Update_WaitList",
    "description": "<p>Updates WaitList in db</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>Email of the user</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discord",
            "description": "<ul> <li>Discord username</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eth_address",
            "description": "<ul> <li>Ethereum address</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "twitter-",
            "description": "<p>Twitter username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": " {\n  \"success\": true,\n  \"status_code\": 200,\n  \"message\": \"WaitList updated successfully!\",\n   \"data\": {\n        \"email\": \"francis.igbiriki@gmail.com\",\n        \"twitter\": \"igmrrf\",\n        \"discord\": \"igmrrf\",\n        \"eth_address\": \"0xCBD6832Ebc203e49E2B771897067fce3c58575ac\",\n        \"_id\": \"6244f22a7be2d161b405f864\",\n        \"created_at\": \"2022-03-31T00:13:30.062Z\",\n        \"updated_at\": \"2022-03-31T00:13:30.062Z\"\n    },\n  \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/containers/waitlist/WaitListRoute.js",
    "groupTitle": "WAITLIST",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:30123/v1/WaitList/:id"
      }
    ]
  }
] });
