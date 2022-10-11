dmx.config({
  "index": {
    "repeat1": {
      "meta": [
        {
          "name": "haber_id",
          "type": "number"
        },
        {
          "name": "kul_id",
          "type": "number"
        },
        {
          "name": "baslik",
          "type": "text"
        },
        {
          "name": "aciklama",
          "type": "text"
        },
        {
          "name": "resim_link",
          "type": "text"
        },
        {
          "name": "haber_link",
          "type": "text"
        },
        {
          "name": "olusturulma_tarihi",
          "type": "date"
        }
      ],
      "outputType": "array"
    },
    "repeat2": {
      "meta": [
        {
          "type": "object",
          "name": "source",
          "sub": [
            {
              "type": "text",
              "name": "id"
            },
            {
              "type": "text",
              "name": "name"
            }
          ]
        },
        {
          "type": "text",
          "name": "author"
        },
        {
          "type": "text",
          "name": "title"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "type": "text",
          "name": "url"
        },
        {
          "type": "text",
          "name": "urlToImage"
        },
        {
          "type": "text",
          "name": "publishedAt"
        },
        {
          "type": "text",
          "name": "content"
        }
      ],
      "outputType": "array"
    }
  }
});
