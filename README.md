# Oxford Dictionary API

There aren't much Dictionary's API out there so I created one.

## Getting Started

To use, pass the query string with parameter `define` equal to the word you want to get the meaning of.

Eg. `/?define=hello`, will give you the Oxford dictionary definition of **hello**:

```json
[
  {
    "word": "hello",
    "phonetic": [
      "həˈləʊ",
      "hɛˈləʊ"
    ],
    "meaning": {
      "exclamation": [
        {
          "definition": "used as a greeting or to begin a telephone conversation.",
          "example": "hello there, Katie!"
        }
      ],
      "noun": [
        {
          "definition": "an utterance of ‘hello’; a greeting.",
          "example": "she was getting polite nods and hellos from people"
        }
      ],
      "verb": [
        {
          "definition": "say or shout ‘hello’.",
          "example": "I pressed the phone button and helloed"
        }
      ]
    }
  }
]
```


Optionally you can also send another parameter `lang` equal to code of the language in which the word appear.
*For language other than English, this API scrapes from Google (as oxford doesn't provide dictionary of languages other than English)*

Eg. `/?define=prarabdh&lang=hi`, will give you definition of **Prarabdh** as present in French Dictionary.

```json
{
  "word": "प्रारब्ध",
  "meaning": {
      "विशेषण": [
          {
              "definition": "आरंभ किया हुआ।"
          }
      ],
      "पुल्लिंग": [
          {
              "definition": "भाग्य, तकदीर।"
          },
          {
              "definition": "पूर्व जन्म के कार्य।"
          }
      ]
  }
}
```


List of languages supported can be found [here](https://safe-gorge-56838.herokuapp.com//languageCode.txt) for your reference.

### Paths

| Location | Endpoint |
| :-- | :-- |
| Root path | `https://safe-gorge-56838.herokuapp.com/`|


### HTTP request and query methods

| Method | Endpoint | Query | Description | Examples |
| :-- | :-- | :-- | :-- | :-- |
| `GET` | `/` | `?define=<YOUR_WORD>` | Retrieves the Oxford Dictionary definition of the given word that has been entered instead of `<YOUR_WORD>`. | [`?define=hello`](https://safe-gorge-56838.herokuapp.com//?define=hello) |
| `GET` | `/` | `/?define=<YOUR_WORD>&lang=<LANGUAGE>` | Retrieves the Google Dictionary definition (as Oxford provides support only of English language) of the given word that has been entered instead of `<YOUR_WORD>` in the [provided language](https://safe-gorge-56838.herokuapp.com//languageCode.txt) `<LANGUAGE>`. | [`/?define=prarabdh&lang=hi`](https://safe-gorge-56838.herokuapp.com//?define=prarabdh&lang=hi) |

## Future plans  

You can see existing and add new feature proposals on the projects GitHub page.
Pull requests are welcome!

## Support  

If you need any assistance or find any bugs, feel free to contact me directly via [email](mailto:himansh.jain1997@gmail.com) or [create a new issue](https://github.com/bugsnotfound/oxfordDictionaryAPI/issues) on the GitHub page.
