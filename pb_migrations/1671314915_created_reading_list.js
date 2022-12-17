migrate((db) => {
  const collection = new Collection({
    "id": "5uogr9pfoh3m5jk",
    "created": "2022-12-17 22:08:35.246Z",
    "updated": "2022-12-17 22:08:35.246Z",
    "name": "reading_list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xwuabmc5",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5uogr9pfoh3m5jk");

  return dao.deleteCollection(collection);
})
