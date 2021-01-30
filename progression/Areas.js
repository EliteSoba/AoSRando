const Locks = require('./Locks');

/**
 * Returns a fresh list of areas so that modification isn't as committal.
 */
function getFreshAreas() {
  return [
    {
      "area": "Castle Corridor",
      "rooms": [
        {
          "_area": 0,
          "_room": 0,
          "address": 139521948,
          "mapX": 128,
          "mapY": 9,
          "mapWidth": 2,
          "mapHeight": 3,
          "doorList": 139521932,
          "doors": [
            {
              "_door": 0,
              "address": 139521932,
              "destination": 139522396,
              "xPos": 2,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139521948,
              "complement": 139522348,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": -3,
              "destination": 139521948,
              "xPos": 0,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139521948,
              "complement": -3,
              "isFakeDoor": true,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139528664,
              "xPos": 384,
              "yPos": 184,
              "type": 4,
              "subtype": 4,
              "varA": 71,
              "varB": 38
            }
          ],
          "isBeginningRoom": true
        },
        {
          "_area": 0,
          "_room": 1,
          "address": 139522076,
          "mapX": 2,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139522060,
          "doors": [
            {
              "_door": 0,
              "address": 139522060,
              "destination": 139522228,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 768,
              "direction": 6,
              "sourceRoom": 139522076,
              "complement": 139522196
            }
          ],
          "items": [],
          "isWarpRoom": true
        },
        {
          "_area": 0,
          "_room": 2,
          "address": 139522228,
          "mapX": 131,
          "mapY": 8,
          "mapWidth": 2,
          "mapHeight": 4,
          "doorList": 139522196,
          "doors": [
            {
              "_door": 0,
              "address": 139522196,
              "destination": 139522076,
              "xPos": 255,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139522228,
              "complement": 139522060,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139522212,
              "destination": 139522396,
              "xPos": 0,
              "yPos": 4,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139522228,
              "complement": 139522364,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139528940,
              "xPos": 256,
              "yPos": 472,
              "type": 4,
              "subtype": 3,
              "varA": 33,
              "varB": 16
            },
            {
              "_item": 1,
              "address": 139528952,
              "xPos": 456,
              "yPos": 584,
              "type": 4,
              "subtype": 3,
              "varA": 46,
              "varB": 50
            }
          ]
        },
        {
          "_area": 0,
          "_room": 3,
          "address": 139522396,
          "mapX": 130,
          "mapY": 10,
          "mapWidth": 5,
          "mapHeight": 1,
          "doorList": 139522348,
          "doors": [
            {
              "_door": 0,
              "address": 139522348,
              "destination": 139521948,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139522396,
              "complement": 139521932,
              "isWoodenDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139522364,
              "destination": 139522228,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 768,
              "direction": 8,
              "sourceRoom": 139522396,
              "complement": 139522212
            },
            {
              "_door": 2,
              "address": 139522380,
              "destination": 139522708,
              "xPos": 5,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139522396,
              "complement": 139522644,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 4,
          "address": 139522532,
          "mapX": 6,
          "mapY": 11,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139522500,
          "doors": [
            {
              "_door": 0,
              "address": 139522500,
              "destination": 139568516,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139522532,
              "complement": 139568484
            },
            {
              "_door": 1,
              "address": 139522516,
              "destination": 139522708,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139522532,
              "complement": 139522676
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 0,
          "_room": 5,
          "address": 139522708,
          "mapX": 135,
          "mapY": 10,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139522644,
          "doors": [
            {
              "_door": 0,
              "address": 139522644,
              "destination": 139522396,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1040,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139522708,
              "complement": 139522380
            },
            {
              "_door": 1,
              "address": 139522660,
              "destination": 139522860,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139522708,
              "complement": 139522828
            },
            {
              "_door": 2,
              "address": 139522676,
              "destination": 139522532,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139522708,
              "complement": 139522516,
              "isWoodenDoor": true
            },
            {
              "_door": 3,
              "address": 139522692,
              "destination": 139527428,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139522708,
              "complement": 139527412
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139529204,
              "xPos": 208,
              "yPos": 248,
              "type": 4,
              "subtype": 3,
              "varA": 17,
              "varB": 3
            },
            {
              "_item": 1,
              "address": 139529228,
              "xPos": 256,
              "yPos": 88,
              "type": 4,
              "subtype": 4,
              "varA": 64,
              "varB": 25
            },
            {
              "_item": 2,
              "address": 139529240,
              "xPos": 256,
              "yPos": 376,
              "type": 4,
              "subtype": 8,
              "varA": 1,
              "varB": 1
            }
          ]
        },
        {
          "_area": 0,
          "_room": 6,
          "address": 139522860,
          "mapX": 137,
          "mapY": 10,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139522828,
          "doors": [
            {
              "_door": 0,
              "address": 139522828,
              "destination": 139522708,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139522860,
              "complement": 139522660
            },
            {
              "_door": 1,
              "address": 139522844,
              "destination": 139523316,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 1280,
              "direction": 6,
              "sourceRoom": 139522860,
              "complement": 139523284
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 7,
          "address": 139522996,
          "mapX": 140,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139522964,
          "doors": [
            {
              "_door": 0,
              "address": 139522964,
              "destination": 139544672,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139522996,
              "complement": 139544656
            },
            {
              "_door": 1,
              "address": 139522980,
              "destination": 139523148,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139522996,
              "complement": 139523116
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 0,
          "_room": 8,
          "address": 139523148,
          "mapX": 141,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139523116,
          "doors": [
            {
              "_door": 0,
              "address": 139523116,
              "destination": 139522996,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139523148,
              "complement": 139522980,
              "isWoodenDoor": true
            },
            {
              "_door": 1,
              "address": 139523132,
              "destination": 139523316,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139523148,
              "complement": 139523268
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 9,
          "address": 139523316,
          "mapX": 12,
          "mapY": 8,
          "mapWidth": 2,
          "mapHeight": 6,
          "doorList": 139523268,
          "doors": [
            {
              "_door": 0,
              "address": 139523268,
              "destination": 139523148,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139523316,
              "complement": 139523132
            },
            {
              "_door": 1,
              "address": 139523284,
              "destination": 139522860,
              "xPos": 255,
              "yPos": 5,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139523316,
              "complement": 139522844,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.LONG]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.LONG]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139523300,
              "destination": 139523468,
              "xPos": 2,
              "yPos": 5,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139523316,
              "complement": 139523436,
              "isBossDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.LONG]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.LONG]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139529684,
              "xPos": 48,
              "yPos": 1096,
              "type": 4,
              "subtype": 3,
              "varA": 18,
              "varB": 45
            }
          ]
        },
        {
          "_area": 0,
          "_room": 10,
          "address": 139523468,
          "mapX": 142,
          "mapY": 10,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139523436,
          "doors": [
            {
              "_door": 0,
              "address": 139523436,
              "destination": 139523316,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 1280,
              "direction": 4,
              "sourceRoom": 139523468,
              "complement": 139523300
            },
            {
              "_door": 1,
              "address": 139523452,
              "destination": 139527308,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139523468,
              "complement": 139527244
            }
          ],
          "items": [],
          "isBossRoom": true
        },
        {
          "_area": 0,
          "_room": 11,
          "address": 139523596,
          "mapX": 15,
          "mapY": 11,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139523580,
          "doors": [
            {
              "_door": 0,
              "address": 139523580,
              "destination": 139527308,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139523596,
              "complement": 139527276
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139529936,
              "xPos": 48,
              "yPos": 144,
              "type": 4,
              "subtype": 2,
              "varA": 95,
              "varB": 5
            }
          ]
        },
        {
          "_area": 0,
          "_room": 12,
          "address": 139523804,
          "mapX": 16,
          "mapY": 8,
          "mapWidth": 1,
          "mapHeight": 5,
          "doorList": 139523772,
          "doors": [
            {
              "_door": 0,
              "address": 139523772,
              "destination": 139523956,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139523804,
              "complement": 139523924
            },
            {
              "_door": 1,
              "address": 139523788,
              "destination": 139527308,
              "xPos": 0,
              "yPos": 5,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139523804,
              "complement": 139527228,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 13,
          "address": 139523956,
          "mapX": 17,
          "mapY": 8,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139523924,
          "doors": [
            {
              "_door": 0,
              "address": 139523924,
              "destination": 139523804,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139523956,
              "complement": 139523772
            },
            {
              "_door": 1,
              "address": 139523940,
              "destination": 139524260,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139523956,
              "complement": 139524228
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139530080,
              "xPos": 128,
              "yPos": 176,
              "type": 4,
              "subtype": 2,
              "varA": 90,
              "varB": 0
            }
          ]
        },
        {
          "_area": 0,
          "_room": 14,
          "address": 139524076,
          "mapX": 145,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139524060,
          "doors": [
            {
              "_door": 0,
              "address": 139524060,
              "destination": 139527308,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139524076,
              "complement": 139527260
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 0,
          "_room": 15,
          "address": 139524260,
          "mapX": 146,
          "mapY": 7,
          "mapWidth": 3,
          "mapHeight": 2,
          "doorList": 139524196,
          "doors": [
            {
              "_door": 0,
              "address": 139524196,
              "destination": 139526972,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139524260,
              "complement": 139526956,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLOAT]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139524212,
              "destination": 139527580,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139524260,
              "complement": 139527548,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.LONG]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLOAT]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139524228,
              "destination": 139523956,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139524260,
              "complement": 139523940,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.LONG]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLOAT]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139524244,
              "destination": 139524708,
              "xPos": 3,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139524260,
              "complement": 139524676,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.LONG]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLOAT]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139530152,
              "xPos": 48,
              "yPos": 296,
              "type": 4,
              "subtype": 2,
              "varA": 92,
              "varB": 0
            },
            {
              "_item": 1,
              "address": 139530296,
              "xPos": 720,
              "yPos": 296,
              "type": 4,
              "subtype": 4,
              "varA": 50,
              "varB": 9
            }
          ]
        },
        {
          "_area": 0,
          "_room": 16,
          "address": 139524420,
          "mapX": 17,
          "mapY": 11,
          "mapWidth": 5,
          "mapHeight": 1,
          "doorList": 139524372,
          "doors": [
            {
              "_door": 0,
              "address": 139524372,
              "destination": 139527308,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139524420,
              "complement": 139527292,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [[Locks.FLIGHT], [Locks.MALPHAS, Locks.UNDINE]]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139524388,
              "destination": 139524564,
              "xPos": 3,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139524420,
              "complement": 139524548,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139524404,
              "destination": 139526292,
              "xPos": 5,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139524420,
              "complement": 139526260,
              "isWoodenDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 1,
                    "locks": [[Locks.FLIGHT, Locks.SKULA], [Locks.MALPHAS, Locks.UNDINE, Locks.SKULA]]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139530560,
              "xPos": 1136,
              "yPos": 104,
              "type": 4,
              "subtype": 6,
              "varA": 2,
              "varB": 1
            }
          ]
        },
        {
          "_area": 0,
          "_room": 17,
          "address": 139524564,
          "mapX": 20,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139524532,
          "doors": [
            {
              "_door": 0,
              "address": 139524532,
              "destination": 139524852,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139524564,
              "complement": 139524820
            },
            {
              "_door": 1,
              "address": 139524548,
              "destination": 139524420,
              "xPos": 0,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139524564,
              "complement": 139524388,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS] // Black Panther unlocks, but eh
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 18,
          "address": 139524708,
          "mapX": 21,
          "mapY": 8,
          "mapWidth": 7,
          "mapHeight": 1,
          "doorList": 139524676,
          "doors": [
            {
              "_door": 0,
              "address": 139524676,
              "destination": 139524260,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139524708,
              "complement": 139524244
            },
            {
              "_door": 1,
              "address": 139524692,
              "destination": 139525020,
              "xPos": 7,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 6,
              "sourceRoom": 139524708,
              "complement": 139524988
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 19,
          "address": 139524852,
          "mapX": 21,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139524820,
          "doors": [
            {
              "_door": 0,
              "address": 139524820,
              "destination": 139524564,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139524852,
              "complement": 139524532
            },
            {
              "_door": 1,
              "address": 139524836,
              "destination": 139526156,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139524852,
              "complement": 139526124,
              "isWoodenDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 20,
          "address": 139525020,
          "mapX": 28,
          "mapY": 7,
          "mapWidth": 2,
          "mapHeight": 3,
          "doorList": 139524972,
          "doors": [
            {
              "_door": 0,
              "address": 139524972,
              "destination": 139525172,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139525020,
              "complement": 139525156
            },
            {
              "_door": 1,
              "address": 139524988,
              "destination": 139524708,
              "xPos": 255,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1552,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139525020,
              "complement": 139524692,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139525004,
              "destination": 139525316,
              "xPos": 2,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139525020,
              "complement": 139525284,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 21,
          "address": 139525172,
          "mapX": 157,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139525140,
          "doors": [
            {
              "_door": 0,
              "address": 139525140,
              "destination": 139526428,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139525172,
              "complement": 139526412,
              "isWoodenDoor": true
            },
            {
              "_door": 1,
              "address": 139525156,
              "destination": 139525020,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139525172,
              "complement": 139524972
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 22,
          "address": 139525316,
          "mapX": 30,
          "mapY": 8,
          "mapWidth": 5,
          "mapHeight": 1,
          "doorList": 139525284,
          "doors": [
            {
              "_door": 0,
              "address": 139525284,
              "destination": 139525020,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139525316,
              "complement": 139525004
            },
            {
              "_door": 1,
              "address": 139525300,
              "destination": 139525484,
              "xPos": 5,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139525316,
              "complement": 139525452
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 23,
          "address": 139525484,
          "mapX": 163,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139525436,
          "doors": [
            {
              "_door": 0,
              "address": 139525436,
              "destination": 139526564,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139525484,
              "complement": 139526532,
              "isWoodenDoor": true
            },
            {
              "_door": 1,
              "address": 139525452,
              "destination": 139525316,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1040,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139525484,
              "complement": 139525300,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139525468,
              "destination": 139525628,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139525484,
              "complement": 139525596,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 24,
          "address": 139525628,
          "mapX": 36,
          "mapY": 8,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139525596,
          "doors": [
            {
              "_door": 0,
              "address": 139525596,
              "destination": 139525484,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139525628,
              "complement": 139525468
            },
            {
              "_door": 1,
              "address": 139525612,
              "destination": 139525868,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139525628,
              "complement": 139525804
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 25,
          "address": 139525868,
          "mapX": 39,
          "mapY": 8,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139525804,
          "doors": [
            {
              "_door": 0,
              "address": 139525804,
              "destination": 139525628,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139525868,
              "complement": 139525612,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.BAT]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139525820,
              "destination": 139526684,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139525868,
              "complement": 139526668,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.BAT]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139525836,
              "destination": 139528452,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139525868,
              "complement": 139528404,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.BAT]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139525852,
              "destination": 139526020,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139525868,
              "complement": 139525988,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.BAT]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139531460,
              "xPos": 32,
              "yPos": 88,
              "type": 4,
              "subtype": 3,
              "varA": 39,
              "varB": 32
            }
          ]
        },
        {
          "_area": 0,
          "_room": 26,
          "address": 139526020,
          "mapX": 168,
          "mapY": 8,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139525988,
          "doors": [
            {
              "_door": 0,
              "address": 139525988,
              "destination": 139525868,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139526020,
              "complement": 139525852
            },
            {
              "_door": 1,
              "address": 139526004,
              "destination": 139526820,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139526020,
              "complement": 139526788,
              "isWoodenDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 27,
          "address": 139526156,
          "mapX": 22,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139526124,
          "doors": [
            {
              "_door": 0,
              "address": 139526124,
              "destination": 139524852,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139526156,
              "complement": 139524836
            },
            {
              "_door": 1,
              "address": 139526140,
              "destination": 139555712,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139526156,
              "complement": 139555680
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 0,
          "_room": 28,
          "address": 139526292,
          "mapX": 22,
          "mapY": 11,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139526260,
          "doors": [
            {
              "_door": 0,
              "address": 139526260,
              "destination": 139524420,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1040,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139526292,
              "complement": 139524404
            },
            {
              "_door": 1,
              "address": 139526276,
              "destination": 139571452,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139526292,
              "complement": 139571404
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 0,
          "_room": 29,
          "address": 139526428,
          "mapX": 156,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139526396,
          "doors": [
            {
              "_door": 0,
              "address": 139526396,
              "destination": 139592032,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139526428,
              "complement": 139592016
            },
            {
              "_door": 1,
              "address": 139526412,
              "destination": 139525172,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139526428,
              "complement": 139525140
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 0,
          "_room": 30,
          "address": 139526564,
          "mapX": 164,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139526532,
          "doors": [
            {
              "_door": 0,
              "address": 139526532,
              "destination": 139525484,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139526564,
              "complement": 139525436
            },
            {
              "_door": 1,
              "address": 139526548,
              "destination": 139565080,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139526564,
              "complement": 139565048
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 0,
          "_room": 31,
          "address": 139526684,
          "mapX": 40,
          "mapY": 8,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139526668,
          "doors": [
            {
              "_door": 0,
              "address": 139526668,
              "destination": 139525868,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139526684,
              "complement": 139525820
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 0,
          "_room": 32,
          "address": 139526820,
          "mapX": 170,
          "mapY": 8,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139526788,
          "doors": [
            {
              "_door": 0,
              "address": 139526788,
              "destination": 139526020,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139526820,
              "complement": 139526004
            },
            {
              "_door": 1,
              "address": 139526804,
              "destination": 139533396,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139526820,
              "complement": 139533332
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 0,
          "_room": 33,
          "address": 139526972,
          "mapX": 18,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139526940,
          "doors": [
            {
              "_door": 0,
              "address": 139526940,
              "destination": 139527108,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139526972,
              "complement": 139527076,
              "isWoodenDoor": true
            },
            {
              "_door": 1,
              "address": 139526956,
              "destination": 139524260,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 16,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139526972,
              "complement": 139524196
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 34,
          "address": 139527108,
          "mapX": 19,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139527076,
          "doors": [
            {
              "_door": 0,
              "address": 139527076,
              "destination": 139526972,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139527108,
              "complement": 139526940
            },
            {
              "_door": 1,
              "address": 139527092,
              "destination": 139552016,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139527108,
              "complement": 139552000
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 0,
          "_room": 35,
          "address": 139527308,
          "mapX": 144,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139527228,
          "doors": [
            {
              "_door": 0,
              "address": 139527228,
              "destination": 139523804,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 1024,
              "direction": 8,
              "sourceRoom": 139527308,
              "complement": 139523788
            },
            {
              "_door": 1,
              "address": 139527244,
              "destination": 139523468,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139527308,
              "complement": 139523452,
              "isBossDoor": true
            },
            {
              "_door": 2,
              "address": 139527260,
              "destination": 139524076,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139527308,
              "complement": 139524060
            },
            {
              "_door": 3,
              "address": 139527276,
              "destination": 139523596,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139527308,
              "complement": 139523580,
              "isBreakableDoor": true
            },
            {
              "_door": 4,
              "address": 139527292,
              "destination": 139524420,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139527308,
              "complement": 139524372
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139531616,
              "xPos": 208,
              "yPos": 152,
              "type": 4,
              "subtype": 2,
              "varA": 81,
              "varB": 29
            }
          ]
        },
        {
          "_area": 0,
          "_room": 36,
          "address": 139527428,
          "mapX": 9,
          "mapY": 11,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139527412,
          "doors": [
            {
              "_door": 0,
              "address": 139527412,
              "destination": 139522708,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139527428,
              "complement": 139522692
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 0,
          "_room": 37,
          "address": 139527580,
          "mapX": 149,
          "mapY": 7,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139527548,
          "doors": [
            {
              "_door": 0,
              "address": 139527548,
              "destination": 139524260,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139527580,
              "complement": 139524212
            },
            {
              "_door": 1,
              "address": 139527564,
              "destination": 139527748,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139527580,
              "complement": 139527716
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 38,
          "address": 139527748,
          "mapX": 24,
          "mapY": 7,
          "mapWidth": 3,
          "mapHeight": 2,
          "doorList": 139527700,
          "doors": [
            {
              "_door": 0,
              "address": 139527700,
              "destination": 139527884,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139527748,
              "complement": 139527868,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139527716,
              "destination": 139527580,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139527748,
              "complement": 139527564,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL] // Not requiring Any% jump
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139527732,
              "destination": 139528020,
              "xPos": 3,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139527748,
              "complement": 139528004,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL] // Not requiring Any% jump
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139531796,
              "xPos": 80,
              "yPos": 152,
              "type": 4,
              "subtype": 4,
              "varA": 62,
              "varB": 21
            },
            {
              "_item": 1,
              "address": 139531832,
              "xPos": 176,
              "yPos": 136,
              "type": 4,
              "subtype": 2,
              "varA": 93,
              "varB": 0
            }
          ]
        },
        {
          "_area": 0,
          "_room": 39,
          "address": 139527884,
          "mapX": 27,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139527868,
          "doors": [
            {
              "_door": 0,
              "address": 139527868,
              "destination": 139527748,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139527884,
              "complement": 139527700,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SMALL] // Can't assume Catoblepas will be there in case of enemy rando
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139532048,
              "xPos": 176,
              "yPos": 104,
              "type": 4,
              "subtype": 4,
              "varA": 51,
              "varB": 10
            }
          ]
        },
        {
          "_area": 0,
          "_room": 40,
          "address": 139528020,
          "mapX": 155,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139528004,
          "doors": [
            {
              "_door": 0,
              "address": 139528004,
              "destination": 139527748,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139528020,
              "complement": 139527732
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139532084,
              "xPos": 176,
              "yPos": 136,
              "type": 4,
              "subtype": 4,
              "varA": 68,
              "varB": 30
            }
          ]
        },
        {
          "_area": 0,
          "_room": 41,
          "address": 139528148,
          "mapX": 33,
          "mapY": 9,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139528132,
          "doors": [
            {
              "_door": 0,
              "address": 139528132,
              "destination": 139528292,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139528148,
              "complement": 139528260
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139532132,
              "xPos": 48,
              "yPos": 152,
              "type": 4,
              "subtype": 1,
              "varA": 157,
              "varB": 4
            }
          ]
        },
        {
          "_area": 0,
          "_room": 42,
          "address": 139528292,
          "mapX": 34,
          "mapY": 9,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139528260,
          "doors": [
            {
              "_door": 0,
              "address": 139528260,
              "destination": 139528148,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139528292,
              "complement": 139528132
            },
            {
              "_door": 1,
              "address": 139528276,
              "destination": 139528452,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139528292,
              "complement": 139528420
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 43,
          "address": 139528452,
          "mapX": 165,
          "mapY": 8,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139528404,
          "doors": [
            {
              "_door": 0,
              "address": 139528404,
              "destination": 139525868,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139528452,
              "complement": 139525836
            },
            {
              "_door": 1,
              "address": 139528420,
              "destination": 139528292,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139528452,
              "complement": 139528276
            },
            {
              "_door": 2,
              "address": 139528436,
              "destination": 139528580,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139528452,
              "complement": 139528564
            }
          ],
          "items": []
        },
        {
          "_area": 0,
          "_room": 44,
          "address": 139528580,
          "mapX": 39,
          "mapY": 9,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139528564,
          "doors": [
            {
              "_door": 0,
              "address": 139528564,
              "destination": 139528452,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139528580,
              "complement": 139528436
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139532408,
              "xPos": 192,
              "yPos": 152,
              "type": 4,
              "subtype": 2,
              "varA": 94,
              "varB": 0
            }
          ]
        }
      ]
    },
    {
      "area": "Chapel",
      "rooms": [
        {
          "_area": 1,
          "_room": 0,
          "address": 139532588,
          "mapX": 169,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139532540,
          "doors": [
            {
              "_door": 0,
              "address": 139532540,
              "destination": 139535276,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139532588,
              "complement": 139535260
            },
            {
              "_door": 1,
              "address": 139532556,
              "destination": 139532988,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139532588,
              "complement": 139532956,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.LONG], [Locks.PANTHER]] // Won't require the Gravekeeper+Malphas one
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139532572,
              "destination": 139534980,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139532588,
              "complement": 139534948,
              "isWoodenDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.LONG], [Locks.PANTHER]] // Won't require the Gravekeeper+Malphas one
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 1,
          "_room": 1,
          "address": 139532772,
          "mapX": 170,
          "mapY": 9,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139532756,
          "doors": [
            {
              "_door": 0,
              "address": 139532756,
              "destination": 139533588,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139532772,
              "complement": 139533540
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139535624,
              "xPos": 48,
              "yPos": 120,
              "type": 4,
              "subtype": 2,
              "varA": 131,
              "varB": 8
            }
          ]
        },
        {
          "_area": 1,
          "_room": 2,
          "address": 139532988,
          "mapX": 170,
          "mapY": 10,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139532956,
          "doors": [
            {
              "_door": 0,
              "address": 139532956,
              "destination": 139532588,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139532988,
              "complement": 139532556
            },
            {
              "_door": 1,
              "address": 139532972,
              "destination": 139533772,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 768,
              "direction": 6,
              "sourceRoom": 139532988,
              "complement": 139533740,
              "isBossDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 1,
          "_room": 3,
          "address": 139533188,
          "mapX": 171,
          "mapY": 6,
          "mapWidth": 4,
          "mapHeight": 4,
          "doorList": 139533156,
          "doors": [
            {
              "_door": 0,
              "address": 139533156,
              "destination": 139533396,
              "xPos": 1,
              "yPos": 4,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139533188,
              "complement": 139533348,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "item": 3,
                    "locks": [Locks.MALPHAS] // Nontrivial, but reasonable
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139533172,
              "destination": 139533396,
              "xPos": 2,
              "yPos": 4,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 512,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139533188,
              "complement": 139533364,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "item": 3,
                    "locks": [Locks.MALPHAS] // Nontrivial, but reasonable
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139535816,
              "xPos": 128,
              "yPos": 152,
              "type": 4,
              "subtype": 2,
              "varA": 105,
              "varB": 6
            },
            {
              "_item": 1,
              "address": 139535828,
              "xPos": 128,
              "yPos": 856,
              "type": 4,
              "subtype": 1,
              "varA": 141,
              "varB": 3
            },
            {
              "_item": 2,
              "address": 139535876,
              "xPos": 312,
              "yPos": 632,
              "type": 4,
              "subtype": 3,
              "varA": 37,
              "varB": 27
            },
            {
              "_item": 3,
              "address": 139535888,
              "xPos": 320,
              "yPos": 152,
              "type": 4,
              "subtype": 2,
              "varA": 100,
              "varB": 1
            },
            {
              "_item": 4,
              "address": 139535972,
              "xPos": 784,
              "yPos": 152,
              "type": 4,
              "subtype": 2,
              "varA": 96,
              "varB": 5
            }
          ]
        },
        {
          "_area": 1,
          "_room": 4,
          "address": 139533396,
          "mapX": 171,
          "mapY": 8,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139533332,
          "doors": [
            {
              "_door": 0,
              "address": 139533332,
              "destination": 139526820,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139533396,
              "complement": 139526804
            },
            {
              "_door": 1,
              "address": 139533348,
              "destination": 139533188,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 256,
              "destYPos": 768,
              "direction": 8,
              "sourceRoom": 139533396,
              "complement": 139533156
            },
            {
              "_door": 2,
              "address": 139533364,
              "destination": 139533188,
              "xPos": 2,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 512,
              "destYPos": 768,
              "direction": 8,
              "sourceRoom": 139533396,
              "complement": 139533172
            },
            {
              "_door": 3,
              "address": 139533380,
              "destination": 139534132,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139533396,
              "complement": 139534068
            }
          ],
          "items": []
        },
        {
          "_area": 1,
          "_room": 5,
          "address": 139533588,
          "mapX": 43,
          "mapY": 9,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139533524,
          "doors": [
            {
              "_door": 0,
              "address": 139533524,
              "destination": 139534844,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139533588,
              "complement": 139534828,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139533540,
              "destination": 139532772,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139533588,
              "complement": 139532756,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLOAT, Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139533556,
              "destination": 139535492,
              "xPos": 255,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139533588,
              "complement": 139535476,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLOAT, Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139533572,
              "destination": 139533772,
              "xPos": 2,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 6,
              "sourceRoom": 139533588,
              "complement": 139533708,
              "isBossDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLOAT, Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139536152,
              "xPos": 400,
              "yPos": 184,
              "type": 4,
              "subtype": 1,
              "varA": 143,
              "varB": 3
            }
          ]
        },
        {
          "_area": 1,
          "_room": 6,
          "address": 139533772,
          "mapX": 45,
          "mapY": 9,
          "mapWidth": 2,
          "mapHeight": 4,
          "doorList": 139533708,
          "doors": [
            {
              "_door": 0,
              "address": 139533708,
              "destination": 139533588,
              "xPos": 255,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139533772,
              "complement": 139533572,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [[Locks.FLIGHT], [Locks.PANTHER, Locks.MALPHAS]]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139533724,
              "destination": 139534308,
              "xPos": 2,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139533772,
              "complement": 139534292,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.LONG], [Locks.MALPHAS]]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [[Locks.FLIGHT], [Locks.PANTHER, Locks.MALPHAS]]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139533740,
              "destination": 139532988,
              "xPos": 255,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139533772,
              "complement": 139532972,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.LONG], [Locks.MALPHAS]]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [[Locks.FLIGHT], [Locks.PANTHER, Locks.MALPHAS]]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139533756,
              "destination": 139534524,
              "xPos": 2,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139533772,
              "complement": 139534492,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.LONG], [Locks.MALPHAS]]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [[Locks.FLIGHT], [Locks.PANTHER, Locks.MALPHAS]]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139536284,
              "xPos": 448,
              "yPos": 120,
              "type": 4,
              "subtype": 3,
              "varA": 42,
              "varB": 37
            }
          ],
          "isBossRoom": true
        },
        {
          "_area": 1,
          "_room": 7,
          "address": 139533924,
          "mapX": 175,
          "mapY": 7,
          "mapWidth": 3,
          "mapHeight": 2,
          "doorList": 139533908,
          "doors": [
            {
              "_door": 0,
              "address": 139533908,
              "destination": 139534132,
              "xPos": 1,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139533924,
              "complement": 139534084
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139536620,
              "xPos": 616,
              "yPos": 216,
              "type": 4,
              "subtype": 3,
              "varA": 20,
              "varB": 40
            }
          ]
        },
        {
          "_area": 1,
          "_room": 8,
          "address": 139534132,
          "mapX": 175,
          "mapY": 8,
          "mapWidth": 3,
          "mapHeight": 3,
          "doorList": 139534068,
          "doors": [
            {
              "_door": 0,
              "address": 139534068,
              "destination": 139533396,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139534132,
              "complement": 139533380,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139534084,
              "destination": 139533924,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 256,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139534132,
              "complement": 139533908,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139534100,
              "destination": 139534308,
              "xPos": 0,
              "yPos": 3,
              "destXOffset": 65520,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139534132,
              "complement": 139534276,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.INACCESSIBLE]
                  },
                ],
                "items": [
                  {
                    "item": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139534116,
              "destination": 139534716,
              "xPos": 2,
              "yPos": 3,
              "destXOffset": 65520,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139534132,
              "complement": 139534668,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139536692,
              "xPos": 208,
              "yPos": 664,
              "type": 4,
              "subtype": 1,
              "varA": 140,
              "varB": 5
            },
            {
              "_item": 1,
              "address": 139536836,
              "xPos": 672,
              "yPos": 152,
              "type": 4,
              "subtype": 1,
              "varA": 142,
              "varB": 3
            }
          ]
        },
        {
          "_area": 1,
          "_room": 9,
          "address": 139534308,
          "mapX": 47,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139534276,
          "doors": [
            {
              "_door": 0,
              "address": 139534276,
              "destination": 139534132,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 16,
              "destYPos": 512,
              "direction": 8,
              "sourceRoom": 139534308,
              "complement": 139534100,
              "isBreakableDoor": true
            },
            {
              "_door": 1,
              "address": 139534292,
              "destination": 139533772,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139534308,
              "complement": 139533724
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139536896,
              "xPos": 200,
              "yPos": 120,
              "type": 4,
              "subtype": 4,
              "varA": 58,
              "varB": 17
            }
          ]
        },
        {
          "_area": 1,
          "_room": 10,
          "address": 139534524,
          "mapX": 175,
          "mapY": 10,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139534492,
          "doors": [
            {
              "_door": 0,
              "address": 139534492,
              "destination": 139533772,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 768,
              "direction": 4,
              "sourceRoom": 139534524,
              "complement": 139533756,
              "isBossDoor": true
            },
            {
              "_door": 1,
              "address": 139534508,
              "destination": 139534716,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139534524,
              "complement": 139534700
            }
          ],
          "items": []
        },
        {
          "_area": 1,
          "_room": 11,
          "address": 139534716,
          "mapX": 49,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139534668,
          "doors": [
            {
              "_door": 0,
              "address": 139534668,
              "destination": 139534132,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 528,
              "destYPos": 512,
              "direction": 8,
              "sourceRoom": 139534716,
              "complement": 139534116
            },
            {
              "_door": 1,
              "address": 139534684,
              "destination": 139535100,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139534716,
              "complement": 139535084
            },
            {
              "_door": 2,
              "address": 139534700,
              "destination": 139534524,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139534716,
              "complement": 139534508
            }
          ],
          "items": []
        },
        {
          "_area": 1,
          "_room": 12,
          "address": 139534844,
          "mapX": 42,
          "mapY": 9,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139534828,
          "doors": [
            {
              "_door": 0,
              "address": 139534828,
              "destination": 139533588,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139534844,
              "complement": 139533524
            }
          ],
          "items": [],
          "isWarpRoom": true
        },
        {
          "_area": 1,
          "_room": 13,
          "address": 139534980,
          "mapX": 42,
          "mapY": 11,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139534948,
          "doors": [
            {
              "_door": 0,
              "address": 139534948,
              "destination": 139532588,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139534980,
              "complement": 139532572
            },
            {
              "_door": 1,
              "address": 139534964,
              "destination": 139538308,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139534980,
              "complement": 139538260
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 1,
          "_room": 14,
          "address": 139535100,
          "mapX": 48,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139535084,
          "doors": [
            {
              "_door": 0,
              "address": 139535084,
              "destination": 139534716,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139535100,
              "complement": 139534684
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 1,
          "_room": 15,
          "address": 139535276,
          "mapX": 40,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139535244,
          "doors": [
            {
              "_door": 0,
              "address": 139535244,
              "destination": 139535492,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139535276,
              "complement": 139535460
            },
            {
              "_door": 1,
              "address": 139535260,
              "destination": 139532588,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139535276,
              "complement": 139532540,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 1,
          "_room": 16,
          "address": 139535492,
          "mapX": 41,
          "mapY": 10,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139535460,
          "doors": [
            {
              "_door": 0,
              "address": 139535460,
              "destination": 139535276,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139535492,
              "complement": 139535244
            },
            {
              "_door": 1,
              "address": 139535476,
              "destination": 139533588,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 6,
              "sourceRoom": 139535492,
              "complement": 139533556
            }
          ],
          "items": []
        }
      ]
    },
    {
      "area": "Study",
      "rooms": [
        {
          "_area": 2,
          "_room": 0,
          "address": 139537380,
          "mapX": 39,
          "mapY": 12,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139537364,
          "doors": [
            {
              "_door": 0,
              "address": 139537364,
              "destination": 139537548,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139537380,
              "complement": 139537500
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139540592,
              "xPos": 24,
              "yPos": 120,
              "type": 4,
              "subtype": 2,
              "varA": 133,
              "varB": 20
            },
            {
              "_item": 1,
              "address": 139540604,
              "xPos": 128,
              "yPos": 184,
              "type": 5,
              "subtype": 3,
              "varA": 47,
              "varB": 51,
              "isHardMode": true
            }
          ]
        },
        {
          "_area": 2,
          "_room": 1,
          "address": 139537548,
          "mapX": 40,
          "mapY": 12,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139537500,
          "doors": [
            {
              "_door": 0,
              "address": 139537500,
              "destination": 139537380,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139537548,
              "complement": 139537364,
              "isBreakableDoor": true
            },
            {
              "_door": 1,
              "address": 139537516,
              "destination": 139539476,
              "xPos": 0,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139537548,
              "complement": 139539412
            },
            {
              "_door": 2,
              "address": 139537532,
              "destination": 139537852,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139537548,
              "complement": 139537820
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139540724,
              "xPos": 448,
              "yPos": 127,
              "type": 4,
              "subtype": 1,
              "varA": 144,
              "varB": 3
            }
          ]
        },
        {
          "_area": 2,
          "_room": 2,
          "address": 139537700,
          "mapX": 42,
          "mapY": 12,
          "mapWidth": 5,
          "mapHeight": 1,
          "doorList": 139537668,
          "doors": [
            {
              "_door": 0,
              "address": 139537668,
              "destination": 139538308,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139537700,
              "complement": 139538292
            },
            {
              "_door": 1,
              "address": 139537684,
              "destination": 139538900,
              "xPos": 5,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139537700,
              "complement": 139538852
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139540748,
              "xPos": 128,
              "yPos": 184,
              "type": 4,
              "subtype": 2,
              "varA": 132,
              "varB": 9
            }
          ]
        },
        {
          "_area": 2,
          "_room": 3,
          "address": 139537852,
          "mapX": 170,
          "mapY": 12,
          "mapWidth": 5,
          "mapHeight": 1,
          "doorList": 139537820,
          "doors": [
            {
              "_door": 0,
              "address": 139537820,
              "destination": 139537548,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139537852,
              "complement": 139537532
            },
            {
              "_door": 1,
              "address": 139537836,
              "destination": 139538900,
              "xPos": 5,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139537852,
              "complement": 139538884
            }
          ],
          "items": []
        },
        {
          "_area": 2,
          "_room": 4,
          "address": 139538004,
          "mapX": 42,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139537972,
          "doors": [
            {
              "_door": 0,
              "address": 139537972,
              "destination": 139539476,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139538004,
              "complement": 139539444
            },
            {
              "_door": 1,
              "address": 139537988,
              "destination": 139538460,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139538004,
              "complement": 139538428
            }
          ],
          "items": []
        },
        {
          "_area": 2,
          "_room": 5,
          "address": 139538140,
          "mapX": 170,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139538124,
          "doors": [
            {
              "_door": 0,
              "address": 139538124,
              "destination": 139539628,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139538140,
              "complement": 139539596
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139541228,
              "xPos": 24,
              "yPos": 112,
              "type": 4,
              "subtype": 8,
              "varA": 3,
              "varB": 3
            }
          ]
        },
        {
          "_area": 2,
          "_room": 6,
          "address": 139538308,
          "mapX": 43,
          "mapY": 11,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139538260,
          "doors": [
            {
              "_door": 0,
              "address": 139538260,
              "destination": 139534980,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139538308,
              "complement": 139534964,
              "isWoodenDoor": true
            },
            {
              "_door": 1,
              "address": 139538276,
              "destination": 139540252,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139538308,
              "complement": 139540220
            },
            {
              "_door": 2,
              "address": 139538292,
              "destination": 139537700,
              "xPos": 0,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139538308,
              "complement": 139537668
            }
          ],
          "items": []
        },
        {
          "_area": 2,
          "_room": 7,
          "address": 139538460,
          "mapX": 43,
          "mapY": 13,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139538428,
          "doors": [
            {
              "_door": 0,
              "address": 139538428,
              "destination": 139538004,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139538460,
              "complement": 139537988
            },
            {
              "_door": 1,
              "address": 139538444,
              "destination": 139539812,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139538460,
              "complement": 139539748
            }
          ],
          "items": []
        },
        {
          "_area": 2,
          "_room": 8,
          "address": 139538596,
          "mapX": 47,
          "mapY": 11,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139538580,
          "doors": [
            {
              "_door": 0,
              "address": 139538580,
              "destination": 139540420,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139538596,
              "complement": 139540388
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139541468,
              "xPos": 120,
              "yPos": 184,
              "type": 4,
              "subtype": 3,
              "varA": 41,
              "varB": 34
            }
          ]
        },
        {
          "_area": 2,
          "_room": 9,
          "address": 139538732,
          "mapX": 175,
          "mapY": 11,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139538716,
          "doors": [
            {
              "_door": 0,
              "address": 139538716,
              "destination": 139538900,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139538732,
              "complement": 139538868
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139541492,
              "xPos": 48,
              "yPos": 127,
              "type": 4,
              "subtype": 4,
              "varA": 67,
              "varB": 29
            }
          ]
        },
        {
          "_area": 2,
          "_room": 10,
          "address": 139538900,
          "mapX": 47,
          "mapY": 12,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139538852,
          "doors": [
            {
              "_door": 0,
              "address": 139538852,
              "destination": 139537700,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1040,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139538900,
              "complement": 139537684,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139538868,
              "destination": 139538732,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139538900,
              "complement": 139538716,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139538884,
              "destination": 139537852,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1040,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139538900,
              "complement": 139537836,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139541588,
              "xPos": 416,
              "yPos": 280,
              "type": 4,
              "subtype": 3,
              "varA": 19,
              "varB": 18
            }
          ]
        },
        {
          "_area": 2,
          "_room": 11,
          "address": 139539036,
          "mapX": 47,
          "mapY": 13,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139539020,
          "doors": [
            {
              "_door": 0,
              "address": 139539020,
              "destination": 139540100,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139539036,
              "complement": 139540084
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139541612,
              "xPos": 48,
              "yPos": 232,
              "type": 4,
              "subtype": 3,
              "varA": 22,
              "varB": 5
            }
          ]
        },
        {
          "_area": 2,
          "_room": 12,
          "address": 139539156,
          "mapX": 39,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139539140,
          "doors": [
            {
              "_door": 0,
              "address": 139539140,
              "destination": 139539476,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139539156,
              "complement": 139539428
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 2,
          "_room": 13,
          "address": 139539292,
          "mapX": 167,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139539260,
          "doors": [
            {
              "_door": 0,
              "address": 139539260,
              "destination": 139597072,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139539292,
              "complement": 139597040
            },
            {
              "_door": 1,
              "address": 139539276,
              "destination": 139539476,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139539292,
              "complement": 139539460
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 2,
          "_room": 14,
          "address": 139539476,
          "mapX": 40,
          "mapY": 13,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139539412,
          "doors": [
            {
              "_door": 0,
              "address": 139539412,
              "destination": 139537548,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139539476,
              "complement": 139537516,
              "access": {
                "doors": [
                  {
                    "door": 3,
                    "locks": [Locks.SLIDE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139539428,
              "destination": 139539156,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139539476,
              "complement": 139539140,
              "access": {
                "doors": [
                  {
                    "door": 3,
                    "locks": [Locks.SLIDE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139539444,
              "destination": 139538004,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139539476,
              "complement": 139537972,
              "access": {
                "doors": [
                  {
                    "door": 3,
                    "locks": [Locks.SLIDE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139539460,
              "destination": 139539292,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139539476,
              "complement": 139539276,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SLIDE]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.SLIDE]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139541768,
              "xPos": 184,
              "yPos": 440,
              "type": 4,
              "subtype": 2,
              "varA": 78,
              "varB": 26
            }
          ]
        },
        {
          "_area": 2,
          "_room": 15,
          "address": 139539628,
          "mapX": 171,
          "mapY": 13,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139539596,
          "doors": [
            {
              "_door": 0,
              "address": 139539596,
              "destination": 139538140,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139539628,
              "complement": 139538124
            },
            {
              "_door": 1,
              "address": 139539612,
              "destination": 139539812,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139539628,
              "complement": 139539780
            }
          ],
          "items": [],
          "isBossRoom": true
        },
        {
          "_area": 2,
          "_room": 16,
          "address": 139539812,
          "mapX": 45,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139539748,
          "doors": [
            {
              "_door": 0,
              "address": 139539748,
              "destination": 139538460,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139539812,
              "complement": 139538444
            },
            {
              "_door": 1,
              "address": 139539764,
              "destination": 139539948,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139539812,
              "complement": 139539932
            },
            {
              "_door": 2,
              "address": 139539780,
              "destination": 139539628,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139539812,
              "complement": 139539612,
              "isBossDoor": true
            },
            {
              "_door": 3,
              "address": 139539796,
              "destination": 139540100,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139539812,
              "complement": 139540068
            }
          ],
          "items": []
        },
        {
          "_area": 2,
          "_room": 17,
          "address": 139539948,
          "mapX": 46,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139539932,
          "doors": [
            {
              "_door": 0,
              "address": 139539932,
              "destination": 139539812,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139539948,
              "complement": 139539764
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139542008,
              "xPos": 128,
              "yPos": 191,
              "type": 4,
              "subtype": 1,
              "varA": 145,
              "varB": 3
            }
          ]
        },
        {
          "_area": 2,
          "_room": 18,
          "address": 139540100,
          "mapX": 174,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139540068,
          "doors": [
            {
              "_door": 0,
              "address": 139540068,
              "destination": 139539812,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139540100,
              "complement": 139539796,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.GRAVEKEEPER]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139540084,
              "destination": 139539036,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139540100,
              "complement": 139539020
            }
          ],
          "items": []
        },
        {
          "_area": 2,
          "_room": 19,
          "address": 139540252,
          "mapX": 44,
          "mapY": 11,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139540220,
          "doors": [
            {
              "_door": 0,
              "address": 139540220,
              "destination": 139538308,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139540252,
              "complement": 139538276
            },
            {
              "_door": 1,
              "address": 139540236,
              "destination": 139540420,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139540252,
              "complement": 139540372
            }
          ],
          "items": []
        },
        {
          "_area": 2,
          "_room": 20,
          "address": 139540420,
          "mapX": 46,
          "mapY": 11,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139540372,
          "doors": [
            {
              "_door": 0,
              "address": 139540372,
              "destination": 139540252,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139540420,
              "complement": 139540236,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139540388,
              "destination": 139538596,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139540420,
              "complement": 139538580
            },
            {
              "_door": 2,
              "address": 139540404,
              "destination": 139540556,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139540420,
              "complement": 139540540,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 2,
          "_room": 21,
          "address": 139540556,
          "mapX": 172,
          "mapY": 11,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139540540,
          "doors": [
            {
              "_door": 0,
              "address": 139540540,
              "destination": 139540420,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139540556,
              "complement": 139540404
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139542200,
              "xPos": 48,
              "yPos": 152,
              "type": 4,
              "subtype": 3,
              "varA": 23,
              "varB": 4
            }
          ]
        }
      ]
    },
    {
      "area": "Dance Hall",
      "rooms": [
        {
          "_area": 3,
          "_room": 0,
          "address": 139542424,
          "mapX": 3,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139542392,
          "doors": [
            {
              "_door": 0,
              "address": 139542392,
              "destination": 139542720,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139542424,
              "complement": 139542688
            },
            {
              "_door": 1,
              "address": 139542408,
              "destination": 139545096,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139542424,
              "complement": 139545080,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 1,
          "address": 139542560,
          "mapX": 132,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139542544,
          "doors": [
            {
              "_door": 0,
              "address": 139542544,
              "destination": 139543208,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139542560,
              "complement": 139543176
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139546968,
              "xPos": 120,
              "yPos": 184,
              "type": 4,
              "subtype": 4,
              "varA": 57,
              "varB": 16
            }
          ]
        },
        {
          "_area": 3,
          "_room": 2,
          "address": 139542720,
          "mapX": 4,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139542688,
          "doors": [
            {
              "_door": 0,
              "address": 139542688,
              "destination": 139542424,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139542720,
              "complement": 139542392
            },
            {
              "_door": 1,
              "address": 139542704,
              "destination": 139546152,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139542720,
              "complement": 139546104
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 3,
          "address": 139542880,
          "mapX": 133,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139542864,
          "doors": [
            {
              "_door": 0,
              "address": 139542864,
              "destination": 139543608,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139542880,
              "complement": 139543560
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139547040,
              "xPos": 48,
              "yPos": 184,
              "type": 4,
              "subtype": 1,
              "varA": 146,
              "varB": 3
            }
          ]
        },
        {
          "_area": 3,
          "_room": 4,
          "address": 139543040,
          "mapX": 5,
          "mapY": 6,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139543008,
          "doors": [
            {
              "_door": 0,
              "address": 139543008,
              "destination": 139543208,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 65520,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139543040,
              "complement": 139543160,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139543024,
              "destination": 139543608,
              "xPos": 2,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 256,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139543040,
              "complement": 139543592
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 5,
          "address": 139543208,
          "mapX": 133,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139543160,
          "doors": [
            {
              "_door": 0,
              "address": 139543160,
              "destination": 139543040,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 16,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139543208,
              "complement": 139543008
            },
            {
              "_door": 1,
              "address": 139543176,
              "destination": 139542560,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139543208,
              "complement": 139542544,
              "isBreakableDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139543192,
              "destination": 139545264,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139543208,
              "complement": 139545232,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 6,
          "address": 139543408,
          "mapX": 6,
          "mapY": 7,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139543328,
          "doors": [
            {
              "_door": 0,
              "address": 139543328,
              "destination": 139546152,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139543408,
              "complement": 139546120,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 4,
                    "locks": [Locks.MALPHAS]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139543344,
              "destination": 139546360,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139543408,
              "complement": 139546296,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLOAT]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139543360,
              "destination": 139546152,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139543408,
              "complement": 139546136,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139543376,
              "destination": 139543760,
              "xPos": 0,
              "yPos": 2,
              "destXOffset": 65520,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139543408,
              "complement": 139543712,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139543392,
              "destination": 139546360,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139543408,
              "complement": 139546328,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139547304,
              "xPos": 40,
              "yPos": 344,
              "type": 4,
              "subtype": 3,
              "varA": 21,
              "varB": 42
            }
          ]
        },
        {
          "_area": 3,
          "_room": 7,
          "address": 139543608,
          "mapX": 6,
          "mapY": 5,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139543560,
          "doors": [
            {
              "_door": 0,
              "address": 139543560,
              "destination": 139542880,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139543608,
              "complement": 139542864,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT] // Can't assume enemies will be vanilla
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139543576,
              "destination": 139544352,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139543608,
              "complement": 139544336,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT] // Can't assume enemies will be vanilla
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139543592,
              "destination": 139543040,
              "xPos": 1,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 512,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139543608,
              "complement": 139543024,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT] // Can't assume enemies will be vanilla
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139547628,
              "xPos": 224,
              "yPos": 104,
              "type": 4,
              "subtype": 2,
              "varA": 115,
              "varB": 7
            }
          ]
        },
        {
          "_area": 3,
          "_room": 8,
          "address": 139543760,
          "mapX": 6,
          "mapY": 8,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139543712,
          "doors": [
            {
              "_door": 0,
              "address": 139543712,
              "destination": 139543408,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 16,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139543760,
              "complement": 139543376,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139543728,
              "destination": 139544192,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139543760,
              "complement": 139544160,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139543744,
              "destination": 139543912,
              "xPos": 0,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 16,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139543760,
              "complement": 139543880,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139547808,
              "xPos": 199,
              "yPos": 447,
              "type": 4,
              "subtype": 2,
              "varA": 101,
              "varB": 1
            }
          ]
        },
        {
          "_area": 3,
          "_room": 9,
          "address": 139543912,
          "mapX": 6,
          "mapY": 9,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139543880,
          "doors": [
            {
              "_door": 0,
              "address": 139543880,
              "destination": 139543760,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139543912,
              "complement": 139543744
            },
            {
              "_door": 1,
              "address": 139543896,
              "destination": 139544824,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139543912,
              "complement": 139544776,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 10,
          "address": 139544048,
          "mapX": 134,
          "mapY": 9,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139544032,
          "doors": [
            {
              "_door": 0,
              "address": 139544032,
              "destination": 139545416,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139544048,
              "complement": 139545384
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139547976,
              "xPos": 120,
              "yPos": 176,
              "type": 4,
              "subtype": 8,
              "varA": 4,
              "varB": 2
            }
          ]
        },
        {
          "_area": 3,
          "_room": 11,
          "address": 139544192,
          "mapX": 7,
          "mapY": 8,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139544160,
          "doors": [
            {
              "_door": 0,
              "address": 139544160,
              "destination": 139543760,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139544192,
              "complement": 139543728
            },
            {
              "_door": 1,
              "address": 139544176,
              "destination": 139546520,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139544192,
              "complement": 139546488
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 12,
          "address": 139544352,
          "mapX": 136,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139544336,
          "doors": [
            {
              "_door": 0,
              "address": 139544336,
              "destination": 139543608,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139544352,
              "complement": 139543576
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139548108,
              "xPos": 192,
              "yPos": 184,
              "type": 4,
              "subtype": 1,
              "varA": 147,
              "varB": 3
            }
          ]
        },
        {
          "_area": 3,
          "_room": 13,
          "address": 139544528,
          "mapX": 9,
          "mapY": 7,
          "mapWidth": 5,
          "mapHeight": 1,
          "doorList": 139544480,
          "doors": [
            {
              "_door": 0,
              "address": 139544480,
              "destination": 139546360,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139544528,
              "complement": 139546312,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT] // Won't require Kicker Skeleton for progression
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139544496,
              "destination": 139544968,
              "xPos": 4,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139544528,
              "complement": 139544952,
              "isBreakableDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139544512,
              "destination": 139545968,
              "xPos": 5,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139544528,
              "complement": 139545936,
              "isWoodenDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 14,
          "address": 139544672,
          "mapX": 137,
          "mapY": 7,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139544640,
          "doors": [
            {
              "_door": 0,
              "address": 139544640,
              "destination": 139546360,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139544672,
              "complement": 139546344
            },
            {
              "_door": 1,
              "address": 139544656,
              "destination": 139522996,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139544672,
              "complement": 139522964,
              "isWoodenDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 15,
          "address": 139544824,
          "mapX": 9,
          "mapY": 9,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139544776,
          "doors": [
            {
              "_door": 0,
              "address": 139544776,
              "destination": 139543912,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139544824,
              "complement": 139543896
            },
            {
              "_door": 1,
              "address": 139544792,
              "destination": 139545416,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139544824,
              "complement": 139545400,
              "isBossDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139544808,
              "destination": 139545832,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139544824,
              "complement": 139545816,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 16,
          "address": 139544968,
          "mapX": 140,
          "mapY": 6,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139544952,
          "doors": [
            {
              "_door": 0,
              "address": 139544952,
              "destination": 139544528,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1024,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139544968,
              "complement": 139544496
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139548540,
              "xPos": 48,
              "yPos": 184,
              "type": 4,
              "subtype": 4,
              "varA": 74,
              "varB": 42
            },
            {
              "_item": 1,
              "address": 139548552,
              "xPos": 80,
              "yPos": 191,
              "type": 01,
              "subtype": 60,
              "varA": 1,
              "varB": 0,
              "isMimic": true // TODO: remember to deal with mimics, i guess?
            }
          ]
        },
        {
          "_area": 3,
          "_room": 17,
          "address": 139545096,
          "mapX": 132,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139545080,
          "doors": [
            {
              "_door": 0,
              "address": 139545080,
              "destination": 139542424,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139545096,
              "complement": 139542408
            }
          ],
          "items": [],
          "isWarpRoom": true
        },
        {
          "_area": 3,
          "_room": 18,
          "address": 139545264,
          "mapX": 134,
          "mapY": 6,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139545232,
          "doors": [
            {
              "_door": 0,
              "address": 139545232,
              "destination": 139543208,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139545264,
              "complement": 139543192
            },
            {
              "_door": 1,
              "address": 139545248,
              "destination": 139545592,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139545264,
              "complement": 139545544
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 19,
          "address": 139545416,
          "mapX": 135,
          "mapY": 9,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139545384,
          "doors": [
            {
              "_door": 0,
              "address": 139545384,
              "destination": 139544048,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139545416,
              "complement": 139544032
            },
            {
              "_door": 1,
              "address": 139545400,
              "destination": 139544824,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139545416,
              "complement": 139544792
            }
          ],
          "items": [],
          "isBossRoom": true
        },
        {
          "_area": 3,
          "_room": 20,
          "address": 139545592,
          "mapX": 136,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139545544,
          "doors": [
            {
              "_door": 0,
              "address": 139545544,
              "destination": 139545264,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139545592,
              "complement": 139545248
            },
            {
              "_door": 1,
              "address": 139545560,
              "destination": 139545712,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139545592,
              "complement": 139545696
            },
            {
              "_door": 2,
              "address": 139545576,
              "destination": 139546360,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139545592,
              "complement": 139546280
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 21,
          "address": 139545712,
          "mapX": 137,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139545696,
          "doors": [
            {
              "_door": 0,
              "address": 139545696,
              "destination": 139545592,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139545712,
              "complement": 139545560
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 3,
          "_room": 22,
          "address": 139545832,
          "mapX": 138,
          "mapY": 9,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139545816,
          "doors": [
            {
              "_door": 0,
              "address": 139545816,
              "destination": 139544824,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139545832,
              "complement": 139544808
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 3,
          "_room": 23,
          "address": 139545968,
          "mapX": 14,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139545936,
          "doors": [
            {
              "_door": 0,
              "address": 139545936,
              "destination": 139544528,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1040,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139545968,
              "complement": 139544512
            },
            {
              "_door": 1,
              "address": 139545952,
              "destination": 139549904,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139545968,
              "complement": 139549888
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 3,
          "_room": 24,
          "address": 139546152,
          "mapX": 5,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139546104,
          "doors": [
            {
              "_door": 0,
              "address": 139546104,
              "destination": 139542720,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139546152,
              "complement": 139542704
            },
            {
              "_door": 1,
              "address": 139546120,
              "destination": 139543408,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139546152,
              "complement": 139543328
            },
            {
              "_door": 2,
              "address": 139546136,
              "destination": 139543408,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139546152,
              "complement": 139543360,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 25,
          "address": 139546360,
          "mapX": 8,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139546280,
          "doors": [
            {
              "_door": 0,
              "address": 139546280,
              "destination": 139545592,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139546360,
              "complement": 139545576
            },
            {
              "_door": 1,
              "address": 139546296,
              "destination": 139543408,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139546360,
              "complement": 139543344
            },
            {
              "_door": 2,
              "address": 139546312,
              "destination": 139544528,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139546360,
              "complement": 139544480
            },
            {
              "_door": 3,
              "address": 139546328,
              "destination": 139543408,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139546360,
              "complement": 139543392,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139546344,
              "destination": 139544672,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139546360,
              "complement": 139544640,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 26,
          "address": 139546520,
          "mapX": 9,
          "mapY": 8,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139546488,
          "doors": [
            {
              "_door": 0,
              "address": 139546488,
              "destination": 139544192,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139546520,
              "complement": 139544176
            },
            {
              "_door": 1,
              "address": 139546504,
              "destination": 139546680,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139546520,
              "complement": 139546648
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 27,
          "address": 139546680,
          "mapX": 11,
          "mapY": 8,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139546648,
          "doors": [
            {
              "_door": 0,
              "address": 139546648,
              "destination": 139546520,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139546680,
              "complement": 139546504
            },
            {
              "_door": 1,
              "address": 139546664,
              "destination": 139546824,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139546680,
              "complement": 139546808,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 3,
          "_room": 28,
          "address": 139546824,
          "mapX": 135,
          "mapY": 8,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139546808,
          "doors": [
            {
              "_door": 0,
              "address": 139546808,
              "destination": 139546680,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139546824,
              "complement": 139546664
            }
          ],
          "items": [] // TODO: This has a candle that rando changes
        }
      ]
    },
    {
      "area": "Inner Quarters",
      "rooms": [
        {
          "_area": 4,
          "_room": 0,
          "address": 139549424,
          "mapX": 140,
          "mapY": 4,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139549408,
          "doors": [
            {
              "_door": 0, // TODO: Vanilla requires Malphas to get high enough for the ledge. Need to figure that out
              "address": 139549408,
              "destination": 139549584,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139549424,
              "complement": 139549552
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139552804,
              "xPos": 256,
              "yPos": 184,
              "type": 4,
              "subtype": 3,
              "varA": 34,
              "varB": 23
            },
            {
              "_item": 1,
              "address": 139552816,
              "xPos": 358,
              "yPos": 159,
              "type": 4,
              "subtype": 2,
              "varA": 79,
              "varB": 27
            }
          ]
        },
        {
          "_area": 4,
          "_room": 1,
          "address": 139549584,
          "mapX": 12,
          "mapY": 5,
          "mapWidth": 2,
          "mapHeight": 3,
          "doorList": 139549552,
          "doors": [
            {
              "_door": 0,
              "address": 139549552,
              "destination": 139549424,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139549584,
              "complement": 139549408,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139549568,
              "destination": 139549744,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139549584,
              "complement": 139549712,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 4,
          "_room": 2,
          "address": 139549744,
          "mapX": 142,
          "mapY": 5,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139549712,
          "doors": [
            {
              "_door": 0,
              "address": 139549712,
              "destination": 139549584,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139549744,
              "complement": 139549568,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.GALAMOTH] // TODO: Chronomage send address is hardcoded and should be updated
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139549728,
              "destination": 139550128,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139549744,
              "complement": 139550064,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.GALAMOTH]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 4,
          "_room": 3,
          "address": 139549904,
          "mapX": 143,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139549872,
          "doors": [
            {
              "_door": 0,
              "address": 139549872,
              "destination": 139550128,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 768,
              "direction": 6,
              "sourceRoom": 139549904,
              "complement": 139550096,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139549888,
              "destination": 139545968,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139549904,
              "complement": 139545952,
              "isWoodenDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139553128,
              "xPos": 64,
              "yPos": 88,
              "type": 4,
              "subtype": 2,
              "varA": 106,
              "varB": 6
            }
          ]
        },
        {
          "_area": 4,
          "_room": 4,
          "address": 139550128,
          "mapX": 16,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 4,
          "doorList": 139550032,
          "doors": [
            {
              "_door": 0,
              "address": 139550032,
              "destination": 139552616,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139550128,
              "complement": 139552600
            },
            {
              "_door": 1,
              "address": 139550048,
              "destination": 139550448,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139550128,
              "complement": 139550416
            },
            {
              "_door": 2,
              "address": 139550064,
              "destination": 139549744,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139550128,
              "complement": 139549728,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139550080,
              "destination": 139550600,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139550128,
              "complement": 139550584,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139550096,
              "destination": 139549904,
              "xPos": 255,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139550128,
              "complement": 139549872,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.SMALL]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SMALL]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 5,
              "address": 139550112,
              "destination": 139550296,
              "xPos": 0,
              "yPos": 4,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139550128,
              "complement": 139550264,
              "isBreakableDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.SMALL]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SMALL]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": [],
          "isChronomageDestination": true
        },
        {
          "_area": 4,
          "_room": 5,
          "address": 139550296,
          "mapX": 16,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139550264,
          "doors": [
            {
              "_door": 0,
              "address": 139550264,
              "destination": 139550128,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 768,
              "direction": 8,
              "sourceRoom": 139550296,
              "complement": 139550112
            },
            {
              "_door": 1,
              "address": 139550280,
              "destination": 139550936,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139550296,
              "complement": 139550920,
              "isBreakableDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS] // Need Malphas to actually get through hole
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139553464,
              "xPos": 48,
              "yPos": 152,
              "type": 4,
              "subtype": 2,
              "varA": 102,
              "varB": 1
            }
          ]
        },
        {
          "_area": 4,
          "_room": 6,
          "address": 139550448,
          "mapX": 17,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139550416,
          "doors": [
            {
              "_door": 0,
              "address": 139550416,
              "destination": 139550128,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139550448,
              "complement": 139550048
            },
            {
              "_door": 1,
              "address": 139550432,
              "destination": 139551232,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139550448,
              "complement": 139551200,
              "isBossDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 4,
          "_room": 7,
          "address": 139550600,
          "mapX": 145,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139550584,
          "doors": [
            {
              "_door": 0,
              "address": 139550584,
              "destination": 139550128,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139550600,
              "complement": 139550080
            }
          ],
          "items": []
        },
        {
          "_area": 4,
          "_room": 8,
          "address": 139550784,
          "mapX": 145,
          "mapY": 6,
          "mapWidth": 6,
          "mapHeight": 1,
          "doorList": 139550720,
          "doors": [
            {
              "_door": 0,
              "address": 139550720,
              "destination": 139552016,
              "xPos": 3,
              "yPos": 1,
              "destXOffset": 65520,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139550784,
              "complement": 139551984,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS] // Need Malphas to actually get through hole
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139550736,
              "destination": 139552192,
              "xPos": 5,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 8,
              "sourceRoom": 139550784,
              "complement": 139552176
            },
            {
              "_door": 2,
              "address": 139550752,
              "destination": 139552496,
              "xPos": 6,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139550784,
              "complement": 139552464,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS] // Need Malphas to actually get through hole
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139550768,
              "destination": 139552328,
              "xPos": 5,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139550784,
              "complement": 139552312,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS] // Need Malphas to actually get through hole
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 4,
          "_room": 9,
          "address": 139550936,
          "mapX": 17,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139550920,
          "doors": [
            {
              "_door": 0,
              "address": 139550920,
              "destination": 139550296,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139550936,
              "complement": 139550280
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139553944,
              "xPos": 192,
              "yPos": 191,
              "type": 4,
              "subtype": 4,
              "varA": 52,
              "varB": 4
            }
          ]
        },
        {
          "_area": 4,
          "_room": 10,
          "address": 139551080,
          "mapX": 146,
          "mapY": 2,
          "mapWidth": 3,
          "mapHeight": 5,
          "doorList": 139551064,
          "doors": [
            {
              "_door": 0,
              "address": 139551064,
              "destination": 139551712,
              "xPos": 2,
              "yPos": 5,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139551080,
              "complement": 139551648,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139554052,
              "xPos": 112,
              "yPos": 184,
              "type": 4,
              "subtype": 3,
              "varA": 26,
              "varB": 9
            },
            {
              "_item": 1,
              "address": 139554064,
              "xPos": 656,
              "yPos": 184,
              "type": 4,
              "subtype": 7,
              "varA": 6,
              "varB": 1
            }
          ]
        },
        {
          "_area": 4,
          "_room": 11,
          "address": 139551232,
          "mapX": 18,
          "mapY": 5,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139551200,
          "doors": [
            {
              "_door": 0,
              "address": 139551200,
              "destination": 139550448,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139551232,
              "complement": 139550432
            },
            {
              "_door": 1,
              "address": 139551216,
              "destination": 139551712,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139551232,
              "complement": 139551664
            }
          ],
          "items": [],
          "isBossRoom": true
        },
        {
          "_area": 4,
          "_room": 12,
          "address": 139551368,
          "mapX": 146,
          "mapY": 5,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139551352,
          "doors": [
            {
              "_door": 0,
              "address": 139551352,
              "destination": 139551712,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139551368,
              "complement": 139551696
            }
          ],
          "items": []
        },
        {
          "_area": 4,
          "_room": 13,
          "address": 139551520,
          "mapX": 18,
          "mapY": 6,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139551488,
          "doors": [
            {
              "_door": 0,
              "address": 139551488,
              "destination": 139552744,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139551520,
              "complement": 139552728
            },
            {
              "_door": 1,
              "address": 139551504,
              "destination": 139552192,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 6,
              "sourceRoom": 139551520,
              "complement": 139552160
            }
          ],
          "items": []
        },
        {
          "_area": 4,
          "_room": 14,
          "address": 139551712,
          "mapX": 20,
          "mapY": 5,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139551648,
          "doors": [
            {
              "_door": 0,
              "address": 139551648,
              "destination": 139551080,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 512,
              "destYPos": 1024,
              "direction": 8,
              "sourceRoom": 139551712,
              "complement": 139551064,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [[Locks.MALPHAS, Locks.UNDINE], [Locks.MALPHAS, Locks.PANTHER], [Locks.FLIGHT]]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139551664,
              "destination": 139551232,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139551712,
              "complement": 139551216,
              "isBossDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [[Locks.MALPHAS, Locks.UNDINE], [Locks.MALPHAS, Locks.PANTHER], [Locks.FLIGHT]]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139551680,
              "destination": 139552192,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139551712,
              "complement": 139552144,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139551696,
              "destination": 139551368,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139551712,
              "complement": 139551352,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [[Locks.MALPHAS, Locks.UNDINE], [Locks.MALPHAS, Locks.PANTHER], [Locks.FLIGHT]]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 4,
          "_room": 15,
          "address": 139551848,
          "mapX": 153,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139551816,
          "doors": [
            {
              "_door": 0,
              "address": 139551816,
              "destination": 139552496,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139551848,
              "complement": 139552480
            },
            {
              "_door": 1,
              "address": 139551832,
              "destination": 139592032,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139551848,
              "complement": 139591984
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 4,
          "_room": 16,
          "address": 139552016,
          "mapX": 20,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139551984,
          "doors": [
            {
              "_door": 0,
              "address": 139551984,
              "destination": 139550784,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139552016,
              "complement": 139550720
            },
            {
              "_door": 1,
              "address": 139552000,
              "destination": 139527108,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139552016,
              "complement": 139527092,
              "isWoodenDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS] // Need Malphas to actually get through hole
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 4,
          "_room": 17,
          "address": 139552192,
          "mapX": 22,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 3,
          "doorList": 139552144,
          "doors": [
            {
              "_door": 0,
              "address": 139552144,
              "destination": 139551712,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139552192,
              "complement": 139551680
            },
            {
              "_door": 1,
              "address": 139552160,
              "destination": 139551520,
              "xPos": 255,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139552192,
              "complement": 139551504,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139552176,
              "destination": 139550784,
              "xPos": 0,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1296,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139552192,
              "complement": 139550736,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 4,
          "_room": 18,
          "address": 139552328,
          "mapX": 21,
          "mapY": 7,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139552312,
          "doors": [
            {
              "_door": 0, // Note: Need Malphas to get back out, but circumvented with Magical Ticket
              "address": 139552312,
              "destination": 139550784,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 1280,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139552328,
              "complement": 139550768
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139555144,
              "xPos": 384,
              "yPos": 184,
              "type": 4,
              "subtype": 2,
              "varA": 97,
              "varB": 5
            }
          ]
        },
        {
          "_area": 4,
          "_room": 19,
          "address": 139552496,
          "mapX": 151,
          "mapY": 6,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139552464,
          "doors": [
            {
              "_door": 0,
              "address": 139552464,
              "destination": 139550784,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1296,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139552496,
              "complement": 139550752
            },
            {
              "_door": 1,
              "address": 139552480,
              "destination": 139551848,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139552496,
              "complement": 139551816,
              "isWoodenDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 4,
          "_room": 20,
          "address": 139552616,
          "mapX": 15,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139552600,
          "doors": [
            {
              "_door": 0,
              "address": 139552600,
              "destination": 139550128,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139552616,
              "complement": 139550032
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 4,
          "_room": 21,
          "address": 139552744,
          "mapX": 17,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139552728,
          "doors": [
            {
              "_door": 0,
              "address": 139552728,
              "destination": 139551520,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139552744,
              "complement": 139551488
            }
          ],
          "items": [],
          "isWarpRoom": true
        }
      ]
    },
    {
      "area": "Floating Garden",
      "rooms": [
        {
          "_area": 5,
          "_room": 0,
          "address": 139555512,
          "mapX": 151,
          "mapY": 8,
          "mapWidth": 3,
          "mapHeight": 2,
          "doorList": 139555432,
          "doors": [
            {
              "_door": 0,
              "address": 139555432,
              "destination": 139557600,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139555512,
              "complement": 139557584,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 4,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139555448,
              "destination": 139555912,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139555512,
              "complement": 139555832,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139555464,
              "destination": 139555712,
              "xPos": 0,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139555512,
              "complement": 139555632,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 4,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139555480,
              "destination": 139555712,
              "xPos": 1,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139555512,
              "complement": 139555648,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139555496,
              "destination": 139555912,
              "xPos": 3,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139555512,
              "complement": 139555864,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 5,
          "_room": 1,
          "address": 139555712,
          "mapX": 151,
          "mapY": 9,
          "mapWidth": 3,
          "mapHeight": 2,
          "doorList": 139555632,
          "doors": [
            {
              "_door": 0,
              "address": 139555632,
              "destination": 139555512,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139555712,
              "complement": 139555464,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139555648,
              "destination": 139555512,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 256,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139555712,
              "complement": 139555480
            },
            {
              "_door": 2,
              "address": 139555664,
              "destination": 139556112,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139555712,
              "complement": 139556048
            },
            {
              "_door": 3,
              "address": 139555680,
              "destination": 139526156,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139555712,
              "complement": 139526140,
              "isWoodenDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139555696,
              "destination": 139556112,
              "xPos": 3,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139555712,
              "complement": 139556080,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 5,
          "_room": 2,
          "address": 139555912,
          "mapX": 154,
          "mapY": 8,
          "mapWidth": 3,
          "mapHeight": 2,
          "doorList": 139555832,
          "doors": [
            {
              "_door": 0,
              "address": 139555832,
              "destination": 139555512,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139555912,
              "complement": 139555448,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139555848,
              "destination": 139556904,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139555912,
              "complement": 139556872,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139555864,
              "destination": 139555512,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139555912,
              "complement": 139555496,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 4,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139555880,
              "destination": 139556112,
              "xPos": 0,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139555912,
              "complement": 139556032,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 4,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139555896,
              "destination": 139556112,
              "xPos": 1,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139555912,
              "complement": 139556064,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 5,
          "_room": 3,
          "address": 139556112,
          "mapX": 154,
          "mapY": 9,
          "mapWidth": 3,
          "mapHeight": 2,
          "doorList": 139556032,
          "doors": [
            {
              "_door": 0,
              "address": 139556032,
              "destination": 139555912,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139556112,
              "complement": 139555880,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 4,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139556048,
              "destination": 139555712,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139556112,
              "complement": 139555664,
              "access": { // Needs Malphas to get to ledge past door 0
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 4,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139556064,
              "destination": 139555912,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 256,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139556112,
              "complement": 139555896,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139556080,
              "destination": 139555712,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139556112,
              "complement": 139555696,
              "access": {
                "doors": [ // Needs Malphas to get to ledge past door 2
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139556096,
              "destination": 139557448,
              "xPos": 3,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139556112,
              "complement": 139557432,
              "access": {
                "doors": [ // Needs Malphas to get to ledge past door 2
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139558284,
              "xPos": 184,
              "yPos": 216,
              "type": 4,
              "subtype": 2,
              "varA": 82,
              "varB": 31
            }
          ]
        },
        {
          "_area": 5,
          "_room": 4,
          "address": 139556264,
          "mapX": 5,
          "mapY": 2,
          "mapWidth": 4,
          "mapHeight": 4,
          "doorList": 139556232,
          "doors": [
            {
              "_door": 0,
              "address": 139556232,
              "destination": 139556904,
              "xPos": 255,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139556264,
              "complement": 139556888,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139556248,
              "destination": 139556448,
              "xPos": 4,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139556264,
              "complement": 139556384,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139558440,
              "xPos": 192,
              "yPos": 328,
              "type": 4,
              "subtype": 1,
              "varA": 155,
              "varB": 5
            },
            {
              "_item": 1,
              "address": 139558680,
              "xPos": 832,
              "yPos": 328,
              "type": 4,
              "subtype": 1,
              "varA": 156,
              "varB": 5
            }
          ]
        },
        {
          "_area": 5,
          "_room": 5,
          "address": 139556448,
          "mapX": 19,
          "mapY": 0,
          "mapWidth": 3,
          "mapHeight": 2,
          "doorList": 139556384,
          "doors": [
            {
              "_door": 0,
              "address": 139556384,
              "destination": 139556264,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 784,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139556448,
              "complement": 139556248
            },
            {
              "_door": 1,
              "address": 139556400,
              "destination": 139557056,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139556448,
              "complement": 139557024
            },
            {
              "_door": 2,
              "address": 139556416,
              "destination": 139557328,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 224,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139556448,
              "complement": 139557312
            },
            {
              "_door": 3,
              "address": 139556432,
              "destination": 139556752,
              "xPos": 2,
              "yPos": 2,
              "destXOffset": 65520,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139556448,
              "complement": 139556720
            }
          ],
          "items": []
        },
        {
          "_area": 5,
          "_room": 6,
          "address": 139556600,
          "mapX": 19,
          "mapY": 1,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139556568,
          "doors": [
            {
              "_door": 0,
              "address": 139556568,
              "destination": 139557744,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139556600,
              "complement": 139557728
            },
            {
              "_door": 1,
              "address": 139556584,
              "destination": 139556752,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139556600,
              "complement": 139556736
            }
          ],
          "items": [],
          "isBossRoom": true
        },
        {
          "_area": 5,
          "_room": 7,
          "address": 139556752,
          "mapX": 21,
          "mapY": 1,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139556720,
          "doors": [ // Need Malphas to get to ledge past door 0
            {
              "_door": 0,
              "address": 139556720,
              "destination": 139556448,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 528,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139556752,
              "complement": 139556432
            },
            {
              "_door": 1,
              "address": 139556736,
              "destination": 139556600,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139556752,
              "complement": 139556584,
              "isBossDoor": true,
              "isJuliusDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 5,
          "_room": 8,
          "address": 139556904,
          "mapX": 161,
          "mapY": 0,
          "mapWidth": 3,
          "mapHeight": 3,
          "doorList": 139556872,
          "doors": [
            {
              "_door": 0,
              "address": 139556872,
              "destination": 139555912,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139556904,
              "complement": 139555848
            },
            {
              "_door": 1,
              "address": 139556888,
              "destination": 139556264,
              "xPos": 3,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 6,
              "sourceRoom": 139556904,
              "complement": 139556232
            }
          ],
          "items": []
        },
        {
          "_area": 5,
          "_room": 9,
          "address": 139557056,
          "mapX": 174,
          "mapY": 4,
          "mapWidth": 3,
          "mapHeight": 3,
          "doorList": 139557024,
          "doors": [
            {
              "_door": 0,
              "address": 139557024,
              "destination": 139557208,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139557056,
              "complement": 139557192,
              "complement2": 139556400, // this door has two different partners. TODO: consider splitting this field to entranceComplement and exitComplement?
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139557040,
              "destination": 139557600,
              "xPos": 3,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139557056,
              "complement": 139557568,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139559280,
              "xPos": 392,
              "yPos": 152,
              "type": 4,
              "subtype": 1,
              "varA": 152,
              "varB": 4
            }
          ]
        },
        {
          "_area": 5,
          "_room": 10,
          "address": 139557208,
          "mapX": 41,
          "mapY": 3,
          "mapWidth": 3,
          "mapHeight": 3,
          "doorList": 139557176,
          "doors": [
            {
              "_door": 0,
              "address": 139557176,
              "destination": 139565216,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139557208,
              "complement": 139565200,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139557192,
              "destination": 139556448,
              "xPos": 3,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139557208,
              "complement": 139556384,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139559472,
              "xPos": 392,
              "yPos": 152,
              "type": 4,
              "subtype": 1,
              "varA": 153,
              "varB": 4
            }
          ]
        },
        {
          "_area": 5,
          "_room": 11,
          "address": 139557328,
          "mapX": 147,
          "mapY": 0,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139557312,
          "doors": [
            {
              "_door": 0,
              "address": 139557312,
              "destination": 139556448,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 256,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139557328,
              "complement": 139556416
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 5,
          "_room": 12,
          "address": 139557448,
          "mapX": 29,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139557432,
          "doors": [
            {
              "_door": 0,
              "address": 139557432,
              "destination": 139556112,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139557448,
              "complement": 139556096
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 5,
          "_room": 13,
          "address": 139557600,
          "mapX": 12,
          "mapY": 1,
          "mapWidth": 3,
          "mapHeight": 3,
          "doorList": 139557568,
          "doors": [
            {
              "_door": 0,
              "address": 139557568,
              "destination": 139557056,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139557600,
              "complement": 139557040,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139557584,
              "destination": 139555512,
              "xPos": 3,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139557600,
              "complement": 139555432,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139559676,
              "xPos": 392,
              "yPos": 152,
              "type": 4,
              "subtype": 1,
              "varA": 154,
              "varB": 4
            }
          ]
        },
        {
          "_area": 5,
          "_room": 14,
          "address": 139557744,
          "mapX": 154,
          "mapY": 0,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139557728,
          "doors": [
            {
              "_door": 0,
              "address": 139557728,
              "destination": 139556600,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139557744,
              "complement": 139556568
            },
            {
              "_door": 1,
              "address": -1,
              "destination": 139604492,
              "xPos": 0,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 5,
              "sourceRoom": 139557744,
              "complement": -2,
              "isFakeDoor": true
            }
          ],
          "items": [],
          "isChaoticRealmConnector": true
        }
      ]
    },
    {
      "area": "Clock Tower",
      "rooms": [
        {
          "_area": 6,
          "_room": 0,
          "address": 139559936,
          "mapX": 161,
          "mapY": 3,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139559904,
          "doors": [
            {
              "_door": 0,
              "address": 139559904,
              "destination": 139594504,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139559936,
              "complement": 139594488,
              "isWoodenDoor": true
            },
            {
              "_door": 1,
              "address": 139559920,
              "destination": 139563056,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139559936,
              "complement": 139563024
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 1,
          "address": 139560080,
          "mapX": 33,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139560064,
          "doors": [
            {
              "_door": 0,
              "address": 139560064,
              "destination": 139560720,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139560080,
              "complement": 139560656
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 2,
          "address": 139560224,
          "mapX": 161,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139560192,
          "doors": [
            {
              "_door": 0,
              "address": 139560192,
              "destination": 139560720,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139560224,
              "complement": 139560688,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [[Locks.SMALL, Locks.SLIDE], [Locks.BAT]]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139560208,
              "destination": 139560864,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139560224,
              "complement": 139560832,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [[Locks.MALPHAS, Locks.SLIDE], [Locks.BAT]]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 3,
          "address": 139560368,
          "mapX": 161,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139560352,
          "doors": [
            {
              "_door": 0,
              "address": 139560352,
              "destination": 139560864,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139560368,
              "complement": 139560848
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139565516,
              "xPos": 72,
              "yPos": 184,
              "type": 4,
              "subtype": 4,
              "varA": 53,
              "varB": 6
            }
          ]
        },
        {
          "_area": 6,
          "_room": 4,
          "address": 139560536,
          "mapX": 34,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139560488,
          "doors": [
            {
              "_door": 0,
              "address": 139560488,
              "destination": 139563984,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139560536,
              "complement": 139563952
            },
            {
              "_door": 1,
              "address": 139560504,
              "destination": 139564128,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139560536,
              "complement": 139564112,
              "isBreakableDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139560520,
              "destination": 139564296,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139560536,
              "complement": 139564264,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1, // Won't require damage boosting through spikes
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 5,
          "address": 139560720,
          "mapX": 34,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139560656,
          "doors": [
            {
              "_door": 0,
              "address": 139560656,
              "destination": 139560080,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139560720,
              "complement": 139560064
            },
            {
              "_door": 1,
              "address": 139560672,
              "destination": 139561200,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139560720,
              "complement": 139561152
            },
            {
              "_door": 2,
              "address": 139560688,
              "destination": 139560224,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139560720,
              "complement": 139560192,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139560704,
              "destination": 139561352,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139560720,
              "complement": 139561336,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 6,
          "address": 139560864,
          "mapX": 34,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139560832,
          "doors": [
            {
              "_door": 0,
              "address": 139560832,
              "destination": 139560224,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139560864,
              "complement": 139560208
            },
            {
              "_door": 1,
              "address": 139560848,
              "destination": 139560368,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139560864,
              "complement": 139560352,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS] // You can ledge snap and get through with just Panther but it's the same as early Garden, which isn't required
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 7,
          "address": 139561016,
          "mapX": 163,
          "mapY": 2,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139560984,
          "doors": [
            {
              "_door": 0,
              "address": 139560984,
              "destination": 139562552,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139561016,
              "complement": 139562536
            },
            {
              "_door": 1,
              "address": 139561000,
              "destination": 139562872,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139561016,
              "complement": 139562824
            }
          ],
          "items": [],
          "isBossRoom": true
        },
        {
          "_area": 6,
          "_room": 8,
          "address": 139561200,
          "mapX": 35,
          "mapY": 6,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139561152,
          "doors": [
            {
              "_door": 0,
              "address": 139561152,
              "destination": 139560720,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139561200,
              "complement": 139560672,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SKULA] // Unequip Skula to go up
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139561168,
              "destination": 139564480,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139561200,
              "complement": 139564464,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139561184,
              "destination": 139562008,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139561200,
              "complement": 139561960,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.SKULA] // Unequip Skula to go up
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 9,
          "address": 139561352,
          "mapX": 163,
          "mapY": 6,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139561336,
          "doors": [
            {
              "_door": 0,
              "address": 139561336,
              "destination": 139560720,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139561352,
              "complement": 139560704
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139566248,
              "xPos": 720,
              "yPos": 120,
              "type": 4,
              "subtype": 3,
              "varA": 31,
              "varB": 14
            }
          ]
        },
        {
          "_area": 6,
          "_room": 10,
          "address": 139561520,
          "mapX": 38,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139561472,
          "doors": [
            {
              "_door": 0,
              "address": 139561472,
              "destination": 139562160,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139561520,
              "complement": 139562144
            },
            {
              "_door": 1,
              "address": 139561488,
              "destination": 139565080,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139561520,
              "complement": 139565064,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139561504,
              "destination": 139562408,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139561520,
              "complement": 139562392,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 11,
          "address": 139561672,
          "mapX": 166,
          "mapY": 3,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139561640,
          "doors": [
            {
              "_door": 0,
              "address": 139561640,
              "destination": 139563360,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139561672,
              "complement": 139563328
            },
            {
              "_door": 1,
              "address": 139561656,
              "destination": 139565216,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139561672,
              "complement": 139565184,
              "isWoodenDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 12,
          "address": 139561840,
          "mapX": 38,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139561792,
          "doors": [
            {
              "_door": 0,
              "address": 139561792,
              "destination": 139563816,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139561840,
              "complement": 139563800
            },
            {
              "_door": 1,
              "address": 139561808,
              "destination": 139564648,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139561840,
              "complement": 139564632,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139561824,
              "destination": 139562280,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139561840,
              "complement": 139562264,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 13,
          "address": 139562008,
          "mapX": 38,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139561960,
          "doors": [
            {
              "_door": 0,
              "address": 139561960,
              "destination": 139561200,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139562008,
              "complement": 139561184
            },
            {
              "_door": 1,
              "address": 139561976,
              "destination": 139564912,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139562008,
              "complement": 139564896
            },
            {
              "_door": 2,
              "address": 139561992,
              "destination": 139562160,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139562008,
              "complement": 139562128,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 14,
          "address": 139562160,
          "mapX": 167,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139562128,
          "doors": [
            {
              "_door": 0,
              "address": 139562128,
              "destination": 139562008,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139562160,
              "complement": 139561992
            },
            {
              "_door": 1,
              "address": 139562144,
              "destination": 139561520,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139562160,
              "complement": 139561472,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 15,
          "address": 139562280,
          "mapX": 167,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139562264,
          "doors": [
            {
              "_door": 0,
              "address": 139562264,
              "destination": 139561840,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139562280,
              "complement": 139561824
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 6,
          "_room": 16,
          "address": 139562408,
          "mapX": 167,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139562392,
          "doors": [
            {
              "_door": 0,
              "address": 139562392,
              "destination": 139561520,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139562408,
              "complement": 139561504
            }
          ],
          "items": [],
          "isWarpRoom": true
        },
        {
          "_area": 6,
          "_room": 17,
          "address": 139562552,
          "mapX": 162,
          "mapY": 2,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139562536,
          "doors": [
            {
              "_door": 0,
              "address": 139562536,
              "destination": 139561016,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139562552,
              "complement": 139560984
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139566968,
              "xPos": 120,
              "yPos": 176,
              "type": 4,
              "subtype": 7,
              "varA": 7,
              "varB": 2
            }
          ]
        },
        {
          "_area": 6,
          "_room": 18,
          "address": 139562704,
          "mapX": 35,
          "mapY": 3,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139562672,
          "doors": [
            {
              "_door": 0,
              "address": 139562672,
              "destination": 139563056,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 65520,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139562704,
              "complement": 139563008
            },
            {
              "_door": 1,
              "address": 139562688,
              "destination": 139562872,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139562704,
              "complement": 139562856
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 19,
          "address": 139562872,
          "mapX": 165,
          "mapY": 2,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139562824,
          "doors": [
            {
              "_door": 0,
              "address": 139562824,
              "destination": 139561016,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139562872,
              "complement": 139561000,
              "isBossDoor": true,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.BAT]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139562840,
              "destination": 139564768,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139562872,
              "complement": 139564752,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLOAT]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.BAT]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139562856,
              "destination": 139562704,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139562872,
              "complement": 139562688,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.BAT]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139567088,
              "xPos": 200,
              "yPos": 79,
              "type": 5,
              "subtype": 3,
              "varA": 43,
              "varB": 39,
              "isHardMode": true
            }
          ]
        },
        {
          "_area": 6,
          "_room": 20,
          "address": 139563056,
          "mapX": 163,
          "mapY": 3,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139563008,
          "doors": [
            {
              "_door": 0,
              "address": 139563008,
              "destination": 139562704,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 16,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139563056,
              "complement": 139562672
            },
            {
              "_door": 1,
              "address": 139563024,
              "destination": 139559936,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139563056,
              "complement": 139559920
            },
            {
              "_door": 2,
              "address": 139563040,
              "destination": 139563208,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139563056,
              "complement": 139563176
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 21,
          "address": 139563208,
          "mapX": 164,
          "mapY": 3,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139563176,
          "doors": [
            {
              "_door": 0,
              "address": 139563176,
              "destination": 139563056,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139563208,
              "complement": 139563040
            },
            {
              "_door": 1,
              "address": 139563192,
              "destination": 139563512,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139563208,
              "complement": 139563480,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139567352,
              "xPos": 208,
              "yPos": 440,
              "type": 4,
              "subtype": 1,
              "varA": 151,
              "varB": 6
            }
          ]
        },
        {
          "_area": 6,
          "_room": 22,
          "address": 139563360,
          "mapX": 165,
          "mapY": 3,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139563328,
          "doors": [
            {
              "_door": 0,
              "address": 139563328,
              "destination": 139561672,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139563360,
              "complement": 139561640
            },
            {
              "_door": 1,
              "address": 139563344,
              "destination": 139563816,
              "xPos": 0,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139563360,
              "complement": 139563784,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 23,
          "address": 139563512,
          "mapX": 35,
          "mapY": 4,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139563480,
          "doors": [
            {
              "_door": 0,
              "address": 139563480,
              "destination": 139563208,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139563512,
              "complement": 139563192,
              "access": {
                "items": [
                  {
                    "items": 0,
                    "locks": [Locks.BAT]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139563496,
              "destination": 139563664,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139563512,
              "complement": 139563632,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.BAT]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139567580,
              "xPos": 208,
              "yPos": 312,
              "type": 5,
              "subtype": 4,
              "varA": 60,
              "varB": 19,
              "isHardMode": true
            }
          ]
        },
        {
          "_area": 6,
          "_room": 24,
          "address": 139563664,
          "mapX": 164,
          "mapY": 4,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139563632,
          "doors": [
            {
              "_door": 0,
              "address": 139563632,
              "destination": 139563512,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139563664,
              "complement": 139563496
            },
            {
              "_door": 1,
              "address": 139563648,
              "destination": 139563984,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139563664,
              "complement": 139563968,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 25,
          "address": 139563816,
          "mapX": 165,
          "mapY": 4,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139563784,
          "doors": [
            {
              "_door": 0,
              "address": 139563784,
              "destination": 139563360,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139563816,
              "complement": 139563344
            },
            {
              "_door": 1,
              "address": 139563800,
              "destination": 139561840,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139563816,
              "complement": 139561792,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 26,
          "address": 139563984,
          "mapX": 35,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139563952,
          "doors": [
            {
              "_door": 0,
              "address": 139563952,
              "destination": 139560536,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139563984,
              "complement": 139560488
            },
            {
              "_door": 1,
              "address": 139563968,
              "destination": 139563664,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139563984,
              "complement": 139563648
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 27,
          "address": 139564128,
          "mapX": 161,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139564112,
          "doors": [
            {
              "_door": 0,
              "address": 139564112,
              "destination": 139560536,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139564128,
              "complement": 139560504
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139568072,
              "xPos": 120,
              "yPos": 120,
              "type": 4,
              "subtype": 3,
              "varA": 30,
              "varB": 10
            }
          ]
        },
        {
          "_area": 6,
          "_room": 28,
          "address": 139564296,
          "mapX": 163,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139564264,
          "doors": [
            {
              "_door": 0,
              "address": 139564264,
              "destination": 139560536,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139564296,
              "complement": 139560520
            },
            {
              "_door": 1,
              "address": 139564280,
              "destination": 139564480,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139564296,
              "complement": 139564432
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 29,
          "address": 139564480,
          "mapX": 164,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139564432,
          "doors": [
            {
              "_door": 0,
              "address": 139564432,
              "destination": 139564296,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139564480,
              "complement": 139564280,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.SKULA] // Technically not necessary, but just to be safe
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139564448,
              "destination": 139564648,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139564480,
              "complement": 139564616,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.SKULA] // Technically not necessary, but just to be safe
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139564464,
              "destination": 139561200,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139564480,
              "complement": 139561168
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 30,
          "address": 139564648,
          "mapX": 165,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139564616,
          "doors": [
            {
              "_door": 0,
              "address": 139564616,
              "destination": 139564480,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139564648,
              "complement": 139564448
            },
            {
              "_door": 1,
              "address": 139564632,
              "destination": 139561840,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139564648,
              "complement": 139561808
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 31,
          "address": 139564768,
          "mapX": 166,
          "mapY": 2,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139564752,
          "doors": [
            {
              "_door": 0,
              "address": 139564752,
              "destination": 139562872,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139564768,
              "complement": 139562840
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 6,
          "_room": 32,
          "address": 139564912,
          "mapX": 39,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139564896,
          "doors": [
            {
              "_door": 0,
              "address": 139564896,
              "destination": 139562008,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139564912,
              "complement": 139561976
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 33,
          "address": 139565080,
          "mapX": 165,
          "mapY": 7,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139565048,
          "doors": [
            {
              "_door": 0,
              "address": 139565048,
              "destination": 139526564,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139565080,
              "complement": 139526548,
              "isWoodenDoor": true
            },
            {
              "_door": 1,
              "address": 139565064,
              "destination": 139561520,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139565080,
              "complement": 139561488
            }
          ],
          "items": []
        },
        {
          "_area": 6,
          "_room": 34,
          "address": 139565216,
          "mapX": 168,
          "mapY": 3,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139565184,
          "doors": [
            {
              "_door": 0,
              "address": 139565184,
              "destination": 139561672,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139565216,
              "complement": 139561656
            },
            {
              "_door": 1,
              "address": 139565200,
              "destination": 139557208,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139565216,
              "complement": 139557176
            }
          ],
          "items": [],
          "isTransitionRoom": true
        }
      ]
    },
    {
      "area": "Underground Reservoir",
      "rooms": [
        {
          "_area": 7,
          "_room": 0,
          "address": 139568516,
          "mapX": 5,
          "mapY": 11,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139568484,
          "doors": [
            {
              "_door": 0,
              "address": 139568484,
              "destination": 139522532,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139568516,
              "complement": 139522500,
              "isWoodenDoor": true
            },
            {
              "_door": 1,
              "address": 139568500,
              "destination": 139568676,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139568516,
              "complement": 139568628
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139578352,
              "xPos": 64,
              "yPos": 440,
              "type": 4,
              "subtype": 4,
              "varA": 66,
              "varB": 28
            }
          ]
        },
        {
          "_area": 7,
          "_room": 1,
          "address": 139568676,
          "mapX": 134,
          "mapY": 11,
          "mapWidth": 10,
          "mapHeight": 1,
          "doorList": 139568628,
          "doors": [
            {
              "_door": 0,
              "address": 139568628,
              "destination": 139568516,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139568676,
              "complement": 139568500,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [[Locks.UNDINE, Locks.MALPHAS], [Locks.FLIGHT]]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA] // Malphas + Kicker works too but eh
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139568644,
              "destination": 139568804,
              "xPos": 7,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139568676,
              "complement": 139568788,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.SKULA] // Malphas + Kicker works too but eh
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139568660,
              "destination": 139569292,
              "xPos": 9,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139568676,
              "complement": 139569244,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [[Locks.UNDINE, Locks.MALPHAS], [Locks.FLIGHT]]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139578676,
              "xPos": 2384,
              "yPos": 120,
              "type": 4,
              "subtype": 2,
              "varA": 130,
              "varB": 4
            }
          ]
        },
        {
          "_area": 7,
          "_room": 2,
          "address": 139568804,
          "mapX": 12,
          "mapY": 11,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139568788,
          "doors": [
            {
              "_door": 0,
              "address": 139568788,
              "destination": 139568676,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1792,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139568804,
              "complement": 139568644
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139578712,
              "xPos": 48,
              "yPos": 152,
              "type": 4,
              "subtype": 4,
              "varA": 59,
              "varB": 18
            }
          ]
        },
        {
          "_area": 7,
          "_room": 3,
          "address": 139568932,
          "mapX": 142,
          "mapY": 12,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139568916,
          "doors": [
            {
              "_door": 0,
              "address": 139568916,
              "destination": 139569292,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139568932,
              "complement": 139569276,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139578880,
              "xPos": 112,
              "yPos": 88,
              "type": 4,
              "subtype": 3,
              "varA": 27,
              "varB": 11
            }
          ]
        },
        {
          "_area": 7,
          "_room": 4,
          "address": 139569132,
          "mapX": 142,
          "mapY": 15,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139569084,
          "doors": [
            {
              "_door": 0,
              "address": 139569084,
              "destination": 139575388,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139569132,
              "complement": 139575372,
              "isWoodenDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139569100,
              "destination": 139569644,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139569132,
              "complement": 139569612,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139569116,
              "destination": 139569812,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139569132,
              "complement": 139569796
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 5,
          "address": 139569292,
          "mapX": 15,
          "mapY": 12,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139569244,
          "doors": [
            {
              "_door": 0,
              "address": 139569244,
              "destination": 139568676,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 2304,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139569292,
              "complement": 139568660,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139569260,
              "destination": 139570444,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139569292,
              "complement": 139570348,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139569276,
              "destination": 139568932,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139569292,
              "complement": 139568916,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 6,
          "address": 139569460,
          "mapX": 16,
          "mapY": 14,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139569444,
          "doors": [
            {
              "_door": 0,
              "address": 139569444,
              "destination": 139570444,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 1024,
              "direction": 6,
              "sourceRoom": 139569460,
              "complement": 139570396
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 7,
          "address": 139569644,
          "mapX": 143,
          "mapY": 15,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139569612,
          "doors": [
            {
              "_door": 0,
              "address": 139569612,
              "destination": 139569132,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139569644,
              "complement": 139569100
            },
            {
              "_door": 1,
              "address": 139569628,
              "destination": 139570196,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139569644,
              "complement": 139570132
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 8,
          "address": 139569812,
          "mapX": 15,
          "mapY": 16,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139569796,
          "doors": [
            {
              "_door": 0,
              "address": 139569796,
              "destination": 139569132,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139569812,
              "complement": 139569116
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139579408,
              "xPos": 208,
              "yPos": 88,
              "type": 4,
              "subtype": 2,
              "varA": 107,
              "varB": 6
            }
          ]
        },
        {
          "_area": 7,
          "_room": 9,
          "address": 139569980,
          "mapX": 15,
          "mapY": 17,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139569964,
          "doors": [
            {
              "_door": 0,
              "address": 139569964,
              "destination": 139570196,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 768,
              "direction": 6,
              "sourceRoom": 139569980,
              "complement": 139570164
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139579468,
              "xPos": 48,
              "yPos": 120,
              "type": 4,
              "subtype": 2,
              "varA": 134,
              "varB": 18
            }
          ]
        },
        {
          "_area": 7,
          "_room": 10,
          "address": 139570196,
          "mapX": 144,
          "mapY": 15,
          "mapWidth": 1,
          "mapHeight": 4,
          "doorList": 139570132,
          "doors": [
            {
              "_door": 0,
              "address": 139570132,
              "destination": 139569644,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139570196,
              "complement": 139569628
            },
            {
              "_door": 1,
              "address": 139570148,
              "destination": 139570644,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139570196,
              "complement": 139570612
            },
            {
              "_door": 2,
              "address": 139570164,
              "destination": 139569980,
              "xPos": 255,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139570196,
              "complement": 139569964,
              "isBreakableDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139570180,
              "destination": 139570820,
              "xPos": 1,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139570196,
              "complement": 139570788,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 11,
          "address": 139570444,
          "mapX": 17,
          "mapY": 12,
          "mapWidth": 1,
          "mapHeight": 7,
          "doorList": 139570348,
          "doors": [
            {
              "_door": 0,
              "address": 139570348,
              "destination": 139569292,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139570444,
              "complement": 139569260
            },
            {
              "_door": 1,
              "address": 139570364,
              "destination": 139570964,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139570444,
              "complement": 139570932
            },
            {
              "_door": 2,
              "address": 139570380,
              "destination": 139575508,
              "xPos": 1,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139570444,
              "complement": 139575492,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139570396,
              "destination": 139569460,
              "xPos": 255,
              "yPos": 4,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139570444,
              "complement": 139569444,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139570412,
              "destination": 139576892,
              "xPos": 1,
              "yPos": 6,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139570444,
              "complement": 139576860,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 5,
              "address": 139570428,
              "destination": 139570644,
              "xPos": 0,
              "yPos": 7,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 16,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139570444,
              "complement": 139570596,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 12,
          "address": 139570644,
          "mapX": 145,
          "mapY": 15,
          "mapWidth": 8,
          "mapHeight": 1,
          "doorList": 139570596,
          "doors": [
            {
              "_door": 0,
              "address": 139570596,
              "destination": 139570444,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 1536,
              "direction": 8,
              "sourceRoom": 139570644,
              "complement": 139570428,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139570612,
              "destination": 139570196,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139570644,
              "complement": 139570148,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139570628,
              "destination": 139571860,
              "xPos": 8,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 6,
              "sourceRoom": 139570644,
              "complement": 139571828,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139579876,
              "xPos": 496,
              "yPos": 72,
              "type": 4,
              "subtype": 2,
              "varA": 118,
              "varB": 7
            }
          ]
        },
        {
          "_area": 7,
          "_room": 13,
          "address": 139570820,
          "mapX": 17,
          "mapY": 17,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139570788,
          "doors": [
            {
              "_door": 0,
              "address": 139570788,
              "destination": 139570196,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 768,
              "direction": 4,
              "sourceRoom": 139570820,
              "complement": 139570180
            },
            {
              "_door": 1,
              "address": 139570804,
              "destination": 139571292,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139570820,
              "complement": 139571260
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 14,
          "address": 139570964,
          "mapX": 18,
          "mapY": 12,
          "mapWidth": 5,
          "mapHeight": 2,
          "doorList": 139570932,
          "doors": [
            {
              "_door": 0,
              "address": 139570932,
              "destination": 139570444,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139570964,
              "complement": 139570364,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SKULA]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139570948,
              "destination": 139571612,
              "xPos": 5,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139570964,
              "complement": 139571564,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SKULA, Locks.MALPHAS]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139580200,
              "xPos": 480,
              "yPos": 440,
              "type": 4,
              "subtype": 2,
              "varA": 111,
              "varB": 2
            }
          ]
        },
        {
          "_area": 7,
          "_room": 15,
          "address": 139571132,
          "mapX": 160,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139571116,
          "doors": [
            {
              "_door": 0,
              "address": 139571116,
              "destination": 139574540,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139571132,
              "complement": 139574492
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139580416,
              "xPos": 192,
              "yPos": 152,
              "type": 4,
              "subtype": 2,
              "varA": 110,
              "varB": 2
            }
          ]
        },
        {
          "_area": 7,
          "_room": 16,
          "address": 139571292,
          "mapX": 19,
          "mapY": 17,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139571260,
          "doors": [
            {
              "_door": 0,
              "address": 139571260,
              "destination": 139570820,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139571292,
              "complement": 139570804
            },
            {
              "_door": 1,
              "address": 139571276,
              "destination": 139574892,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139571292,
              "complement": 139574860
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 17,
          "address": 139571452,
          "mapX": 23,
          "mapY": 11,
          "mapWidth": 5,
          "mapHeight": 3,
          "doorList": 139571404,
          "doors": [
            {
              "_door": 0,
              "address": 139571404,
              "destination": 139526292,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139571452,
              "complement": 139526276,
              "isWoodenDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.LONG]
                  },
                  {
                    "door": 2,
                    "locks": [[Locks.SKULA, Locks.UNDINE, Locks.SMALL], [Locks.SKULA, Locks.FLIGHT]] // Panther can surprisingly do the job here
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.LONG]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139571420,
              "destination": 139572516,
              "xPos": 5,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139571452,
              "complement": 139572484,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.LONG]
                  },
                  {
                    "door": 2,
                    "locks": [[Locks.SKULA, Locks.UNDINE, Locks.FLOAT], [Locks.SKULA, Locks.FLIGHT]] // Armor works here because no initial wall from door 0
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.LONG]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139571436,
              "destination": 139571612,
              "xPos": 1,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139571452,
              "complement": 139571580,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.LONG]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.LONG]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139580776,
              "xPos": 672,
              "yPos": 120,
              "type": 4,
              "subtype": 3,
              "varA": 25,
              "varB": 8
            }
          ]
        },
        {
          "_area": 7,
          "_room": 18,
          "address": 139571612,
          "mapX": 151,
          "mapY": 12,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139571564,
          "doors": [
            {
              "_door": 0,
              "address": 139571564,
              "destination": 139570964,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 1040,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139571612,
              "complement": 139570948,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139571580,
              "destination": 139571452,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 256,
              "destYPos": 512,
              "direction": 8,
              "sourceRoom": 139571612,
              "complement": 139571436,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139571596,
              "destination": 139575916,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139571612,
              "complement": 139575884,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 19,
          "address": 139571860,
          "mapX": 153,
          "mapY": 14,
          "mapWidth": 2,
          "mapHeight": 3,
          "doorList": 139571780,
          "doors": [
            {
              "_door": 0,
              "address": 139571780,
              "destination": 139575636,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139571860,
              "complement": 139575620,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [[Locks.FLOAT], [Locks.UNDINE]]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS] // Blind platform jumps from suspend is too cruel
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139571796,
              "destination": 139572044,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139571860,
              "complement": 139572012,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.FLOAT, Locks.UNDINE], [Locks.FLIGHT]] // Not gonna force backdash jump
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS] // Blind platform jumps from suspend is too cruel
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139571812,
              "destination": 139576708,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139571860,
              "complement": 139576692,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.MALPHAS, Locks.UNDINE], [Locks.FLIGHT]] // Not gonna force backdash jump
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139571828,
              "destination": 139570644,
              "xPos": 255,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1808,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139571860,
              "complement": 139570628,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.MALPHAS, Locks.UNDINE], [Locks.FLIGHT]] // Not gonna force backdash jump
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139571844,
              "destination": 139572212,
              "xPos": 2,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139571860,
              "complement": 139572196,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.MALPHAS, Locks.UNDINE], [Locks.FLIGHT]] // Not gonna force backdash jump
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 20,
          "address": 139572044,
          "mapX": 155,
          "mapY": 14,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139572012,
          "doors": [
            {
              "_door": 0,
              "address": 139572012,
              "destination": 139571860,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139572044,
              "complement": 139571796
            },
            {
              "_door": 1,
              "address": 139572028,
              "destination": 139574540,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 1024,
              "direction": 6,
              "sourceRoom": 139572044,
              "complement": 139574508
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 21,
          "address": 139572212,
          "mapX": 155,
          "mapY": 15,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139572196,
          "doors": [
            {
              "_door": 0,
              "address": 139572196,
              "destination": 139571860,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139572212,
              "complement": 139571844
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139581436,
              "xPos": 688,
              "yPos": 152,
              "type": 4,
              "subtype": 4,
              "varA": 61,
              "varB": 22
            }
          ]
        },
        {
          "_area": 7,
          "_room": 22,
          "address": 139572372,
          "mapX": 33,
          "mapY": 17,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139572356,
          "doors": [
            {
              "_door": 0,
              "address": 139572356,
              "destination": 139578220,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139572372,
              "complement": 139578204
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139581472,
              "xPos": 192,
              "yPos": 136,
              "type": 4,
              "subtype": 8,
              "varA": 9,
              "varB": 6
            }
          ]
        },
        {
          "_area": 7,
          "_room": 23,
          "address": 139572516,
          "mapX": 28,
          "mapY": 11,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139572484,
          "doors": [
            {
              "_door": 0,
              "address": 139572484,
              "destination": 139571452,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 1040,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139572516,
              "complement": 139571420
            },
            {
              "_door": 1,
              "address": 139572500,
              "destination": 139572876,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139572516,
              "complement": 139572828
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 24,
          "address": 139572700,
          "mapX": 157,
          "mapY": 12,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139572684,
          "doors": [
            {
              "_door": 0,
              "address": 139572684,
              "destination": 139574540,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139572700,
              "complement": 139574444
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139581664,
              "xPos": 48,
              "yPos": 120,
              "type": 4,
              "subtype": 3,
              "varA": 45,
              "varB": 49
            }
          ]
        },
        {
          "_area": 7,
          "_room": 25,
          "address": 139572876,
          "mapX": 158,
          "mapY": 10,
          "mapWidth": 2,
          "mapHeight": 4,
          "doorList": 139572828,
          "doors": [
            {
              "_door": 0,
              "address": 139572828,
              "destination": 139572516,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139572876,
              "complement": 139572500,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [ // Item 0 needs Malphas/Suspend to get back out though lmao
                  {
                    "item": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139572844,
              "destination": 139573076,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139572876,
              "complement": 139573044,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [ // Item 0 needs Malphas/Suspend to get back out though lmao
                  {
                    "item": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139572860,
              "destination": 139574540,
              "xPos": 1,
              "yPos": 4,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139572876,
              "complement": 139574460,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            }
          ],
          "items": [ // TODO: This has a candle that rando changes
            {
              "_item": 0,
              "address": 139581820,
              "xPos": 240,
              "yPos": 728,
              "type": 4,
              "subtype": 1,
              "varA": 148,
              "varB": 5
            },
            {
              "_item": 1,
              "address": 139581844,
              "xPos": 256,
              "yPos": 952,
              "type": 4,
              "subtype": 3,
              "varA": 48,
              "varB": 55
            }
          ]
        },
        {
          "_area": 7,
          "_room": 26,
          "address": 139573076,
          "mapX": 32,
          "mapY": 11,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139573044,
          "doors": [
            {
              "_door": 0,
              "address": 139573044,
              "destination": 139572876,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139573076,
              "complement": 139572844
            },
            {
              "_door": 1,
              "address": 139573060,
              "destination": 139573708,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139573076,
              "complement": 139573628
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 27,
          "address": 139573276,
          "mapX": 160,
          "mapY": 14,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139573244,
          "doors": [
            {
              "_door": 0,
              "address": 139573244,
              "destination": 139574540,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 1024,
              "direction": 4,
              "sourceRoom": 139573276,
              "complement": 139574524
            },
            {
              "_door": 1,
              "address": 139573260,
              "destination": 139597968,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139573276,
              "complement": 139597936,
              "isWoodenDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 28,
          "address": 139573460,
          "mapX": 34,
          "mapY": 10,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139573444,
          "doors": [
            {
              "_door": 0,
              "address": 139573444,
              "destination": 139573708,
              "xPos": 0,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139573460,
              "complement": 139573644
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139582072,
              "xPos": 160,
              "yPos": 216,
              "type": 4,
              "subtype": 2,
              "varA": 80,
              "varB": 28
            }
          ]
        },
        {
          "_area": 7,
          "_room": 29,
          "address": 139573708,
          "mapX": 33,
          "mapY": 11,
          "mapWidth": 3,
          "mapHeight": 3,
          "doorList": 139573628,
          "doors": [
            {
              "_door": 0,
              "address": 139573628,
              "destination": 139573076,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139573708,
              "complement": 139573060,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [[Locks.UNDINE, Locks.SMALL], [Locks.LONG]]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 4,
                    "locks": [Locks.SKULA]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SKULA, Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139573644,
              "destination": 139573460,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139573708,
              "complement": 139573444,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.SMALL], [Locks.UNDINE]]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 4,
                    "locks": [Locks.SKULA]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SKULA, Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139573660,
              "destination": 139574092,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139573708,
              "complement": 139574076,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.SKULA, Locks.SMALL], [Locks.SKULA, Locks.UNDINE]]
                  },
                  {
                    "door": 1,
                    "locks": [[Locks.UNDINE, Locks.SMALL, Locks.SKULA], [Locks.LONG, Locks.SKULA]]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 4,
                    "locks": [Locks.SKULA]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SKULA, Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139573676,
              "destination": 139577212,
              "xPos": 0,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139573708,
              "complement": 139577196,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.SMALL], [Locks.UNDINE]]
                  },
                  {
                    "door": 1,
                    "locks": [[Locks.UNDINE, Locks.SMALL], [Locks.LONG]]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 4,
                    "locks": [Locks.SKULA]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139573692,
              "destination": 139573908,
              "xPos": 2,
              "yPos": 3,
              "destXOffset": 65520,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139573708,
              "complement": 139573876,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [[Locks.SMALL], [Locks.UNDINE]]
                  },
                  {
                    "door": 1,
                    "locks": [[Locks.UNDINE, Locks.SMALL], [Locks.LONG]]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA] // Can be done with nothing but would require killing the fish heads or tanking a hit
                  },
                  {
                    "door": 3,
                    "locks": [Locks.SKULA]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SKULA, Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139582156,
              "xPos": 48,
              "yPos": 216,
              "type": 4,
              "subtype": 1,
              "varA": 149,
              "varB": 6
            }
          ]
        },
        {
          "_area": 7,
          "_room": 30,
          "address": 139573908,
          "mapX": 163,
          "mapY": 12,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139573876,
          "doors": [
            {
              "_door": 0,
              "address": 139573876,
              "destination": 139573708,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 528,
              "destYPos": 512,
              "direction": 8,
              "sourceRoom": 139573908,
              "complement": 139573692,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139573892,
              "destination": 139574276,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139573908,
              "complement": 139574260,
              "isBreakableDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 31,
          "address": 139574092,
          "mapX": 36,
          "mapY": 11,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139574076,
          "doors": [
            {
              "_door": 0,
              "address": 139574076,
              "destination": 139573708,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139574092,
              "complement": 139573660,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139582504,
              "xPos": 400,
              "yPos": 88,
              "type": 4,
              "subtype": 4,
              "varA": 73,
              "varB": 41
            }
          ]
        },
        {
          "_area": 7,
          "_room": 32,
          "address": 139574276,
          "mapX": 36,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139574260,
          "doors": [
            {
              "_door": 0,
              "address": 139574260,
              "destination": 139573908,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139574276,
              "complement": 139573892,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SKULA] // Not needed but feels kinda dumb
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139582576,
              "xPos": 176,
              "yPos": 120,
              "type": 4,
              "subtype": 3,
              "varA": 38,
              "varB": 29
            }
          ]
        },
        {
          "_area": 7,
          "_room": 33,
          "address": 139574540,
          "mapX": 158,
          "mapY": 12,
          "mapWidth": 2,
          "mapHeight": 5,
          "doorList": 139574444,
          "doors": [
            {
              "_door": 0,
              "address": 139574444,
              "destination": 139572700,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139574540,
              "complement": 139572684,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 5,
                    "locks": [Locks.RUSH, Locks.UNDINE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.RUSH, Locks.UNDINE]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139574460,
              "destination": 139572876,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 256,
              "destYPos": 768,
              "direction": 8,
              "sourceRoom": 139574540,
              "complement": 139572860,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.FLIGHT] // Being kind and not making them drop and reset
                  },
                  {
                    "door": 5,
                    "locks": [Locks.RUSH, Locks.UNDINE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.RUSH, Locks.UNDINE]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139574476,
              "destination": 139577212,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139574540,
              "complement": 139577180,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 4,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 5,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139574492,
              "destination": 139571132,
              "xPos": 2,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139574540,
              "complement": 139571116,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 5,
                    "locks": [Locks.RUSH, Locks.UNDINE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.RUSH, Locks.UNDINE]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139574508,
              "destination": 139572044,
              "xPos": 255,
              "yPos": 4,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139574540,
              "complement": 139572028,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 5,
                    "locks": [Locks.RUSH, Locks.UNDINE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.RUSH, Locks.UNDINE]
                  }
                ]
              }
            },
            {
              "_door": 5,
              "address": 139574524,
              "destination": 139573276,
              "xPos": 2,
              "yPos": 4,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139574540,
              "complement": 139573244,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.FLIGHT]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139582696,
              "xPos": 472,
              "yPos": 152,
              "type": 4,
              "subtype": 2,
              "varA": 113,
              "varB": 2
            },
            {
              "_item": 1,
              "address": 139582756,
              "xPos": 416,
              "yPos": 1176,
              "type": 4,
              "subtype": 4,
              "varA": 56,
              "varB": 15
            }
          ]
        },
        {
          "_area": 7,
          "_room": 34,
          "address": 139574684,
          "mapX": 147,
          "mapY": 16,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139574668,
          "doors": [
            {
              "_door": 0,
              "address": 139574668,
              "destination": 139574892,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139574684,
              "complement": 139574828
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139582840,
              "xPos": 48,
              "yPos": 136,
              "type": 4,
              "subtype": 1,
              "varA": 150,
              "varB": 6
            }
          ]
        },
        {
          "_area": 7,
          "_room": 35,
          "address": 139574892,
          "mapX": 151,
          "mapY": 16,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139574828,
          "doors": [
            {
              "_door": 0,
              "address": 139574828,
              "destination": 139574684,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139574892,
              "complement": 139574668
            },
            {
              "_door": 1,
              "address": 139574844,
              "destination": 139575756,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139574892,
              "complement": 139575740
            },
            {
              "_door": 2,
              "address": 139574860,
              "destination": 139571292,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139574892,
              "complement": 139571276,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139574876,
              "destination": 139575068,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139574892,
              "complement": 139575036,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 36,
          "address": 139575068,
          "mapX": 24,
          "mapY": 17,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139575036,
          "doors": [
            {
              "_door": 0,
              "address": 139575036,
              "destination": 139574892,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139575068,
              "complement": 139574876
            },
            {
              "_door": 1,
              "address": 139575052,
              "destination": 139575252,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139575068,
              "complement": 139575220,
              "isBossDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 37,
          "address": 139575252,
          "mapX": 153,
          "mapY": 16,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139575220,
          "doors": [
            {
              "_door": 0,
              "address": 139575220,
              "destination": 139575068,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139575252,
              "complement": 139575052
            },
            {
              "_door": 1,
              "address": 139575236,
              "destination": 139577676,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139575252,
              "complement": 139577644
            }
          ],
          "items": [],
          "isBossRoom": true
        },
        {
          "_area": 7,
          "_room": 38,
          "address": 139575388,
          "mapX": 141,
          "mapY": 15,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139575356,
          "doors": [
            {
              "_door": 0,
              "address": 139575356,
              "destination": 139587760,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139575388,
              "complement": 139587744
            },
            {
              "_door": 1,
              "address": 139575372,
              "destination": 139569132,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139575388,
              "complement": 139569084
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 7,
          "_room": 39,
          "address": 139575508,
          "mapX": 146,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139575492,
          "doors": [
            {
              "_door": 0,
              "address": 139575492,
              "destination": 139570444,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 768,
              "direction": 4,
              "sourceRoom": 139575508,
              "complement": 139570380
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 7,
          "_room": 40,
          "address": 139575636,
          "mapX": 152,
          "mapY": 14,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139575620,
          "doors": [
            {
              "_door": 0,
              "address": 139575620,
              "destination": 139571860,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139575636,
              "complement": 139571780
            }
          ],
          "items": [],
          "isWarpRoom": true
        },
        {
          "_area": 7,
          "_room": 41,
          "address": 139575756,
          "mapX": 152,
          "mapY": 16,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139575740,
          "doors": [
            {
              "_door": 0,
              "address": 139575740,
              "destination": 139574892,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139575756,
              "complement": 139574844
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 7,
          "_room": 42,
          "address": 139575916,
          "mapX": 153,
          "mapY": 12,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139575884,
          "doors": [
            {
              "_door": 0,
              "address": 139575884,
              "destination": 139571612,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139575916,
              "complement": 139571596
            },
            {
              "_door": 1,
              "address": 139575900,
              "destination": 139576108,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139575916,
              "complement": 139576044
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 43,
          "address": 139576108,
          "mapX": 154,
          "mapY": 12,
          "mapWidth": 1,
          "mapHeight": 4,
          "doorList": 139576044,
          "doors": [
            {
              "_door": 0,
              "address": 139576044,
              "destination": 139575916,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139576108,
              "complement": 139575900
            },
            {
              "_door": 1,
              "address": 139576060,
              "destination": 139577340,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139576108,
              "complement": 139577324,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139576076,
              "destination": 139576308,
              "xPos": 255,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139576108,
              "complement": 139576292,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139576092,
              "destination": 139577012,
              "xPos": 1,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139576108,
              "complement": 139576996,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 44,
          "address": 139576308,
          "mapX": 24,
          "mapY": 14,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139576276,
          "doors": [
            {
              "_door": 0,
              "address": 139576276,
              "destination": 139576524,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139576308,
              "complement": 139576476
            },
            {
              "_door": 1,
              "address": 139576292,
              "destination": 139576108,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 768,
              "direction": 6,
              "sourceRoom": 139576308,
              "complement": 139576076
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 45,
          "address": 139576524,
          "mapX": 22,
          "mapY": 14,
          "mapWidth": 2,
          "mapHeight": 3,
          "doorList": 139576476,
          "doors": [
            {
              "_door": 0,
              "address": 139576476,
              "destination": 139576308,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139576524,
              "complement": 139576276
            },
            {
              "_door": 1,
              "address": 139576492,
              "destination": 139576892,
              "xPos": 255,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139576524,
              "complement": 139576876,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139576508,
              "destination": 139576708,
              "xPos": 2,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139576524,
              "complement": 139576676,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 46,
          "address": 139576708,
          "mapX": 24,
          "mapY": 15,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139576676,
          "doors": [
            {
              "_door": 0,
              "address": 139576676,
              "destination": 139576524,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139576708,
              "complement": 139576508
            },
            {
              "_door": 1,
              "address": 139576692,
              "destination": 139571860,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139576708,
              "complement": 139571812
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 47,
          "address": 139576892,
          "mapX": 18,
          "mapY": 15,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139576860,
          "doors": [
            {
              "_door": 0,
              "address": 139576860,
              "destination": 139570444,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 1536,
              "direction": 4,
              "sourceRoom": 139576892,
              "complement": 139570412
            },
            {
              "_door": 1,
              "address": 139576876,
              "destination": 139576524,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 6,
              "sourceRoom": 139576892,
              "complement": 139576492
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 48,
          "address": 139577012,
          "mapX": 27,
          "mapY": 14,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139576996,
          "doors": [
            {
              "_door": 0,
              "address": 139576996,
              "destination": 139576108,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 768,
              "direction": 4,
              "sourceRoom": 139577012,
              "complement": 139576092
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 7,
          "_room": 49,
          "address": 139577212,
          "mapX": 160,
          "mapY": 12,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139577180,
          "doors": [
            {
              "_door": 0,
              "address": 139577180,
              "destination": 139574540,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139577212,
              "complement": 139574476,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139577196,
              "destination": 139573708,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 8,
              "sourceRoom": 139577212,
              "complement": 139573676,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 50,
          "address": 139577340,
          "mapX": 27,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139577324,
          "doors": [
            {
              "_door": 0,
              "address": 139577324,
              "destination": 139576108,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139577340,
              "complement": 139576060
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 51,
          "address": 139577500,
          "mapX": 155,
          "mapY": 16,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139577484,
          "doors": [
            {
              "_door": 0,
              "address": 139577484,
              "destination": 139577884,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139577500,
              "complement": 139577820
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139584088,
              "xPos": 48,
              "yPos": 136,
              "type": 4,
              "subtype": 2,
              "varA": 104,
              "varB": 1
            }
          ]
        },
        {
          "_area": 7,
          "_room": 52,
          "address": 139577676,
          "mapX": 27,
          "mapY": 17,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139577644,
          "doors": [
            {
              "_door": 0,
              "address": 139577644,
              "destination": 139575252,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139577676,
              "complement": 139575236
            },
            {
              "_door": 1,
              "address": 139577660,
              "destination": 139577884,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139577676,
              "complement": 139577852
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 53,
          "address": 139577884,
          "mapX": 156,
          "mapY": 16,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139577820,
          "doors": [
            {
              "_door": 0,
              "address": 139577820,
              "destination": 139577500,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139577884,
              "complement": 139577484
            },
            {
              "_door": 1,
              "address": 139577836,
              "destination": 139578044,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139577884,
              "complement": 139578028
            },
            {
              "_door": 2,
              "address": 139577852,
              "destination": 139577676,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139577884,
              "complement": 139577660,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139577868,
              "destination": 139578220,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139577884,
              "complement": 139578188,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 7,
          "_room": 54,
          "address": 139578044,
          "mapX": 157,
          "mapY": 16,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139578028,
          "doors": [
            {
              "_door": 0,
              "address": 139578028,
              "destination": 139577884,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139578044,
              "complement": 139577836
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139584292,
              "xPos": 976,
              "yPos": 136,
              "type": 4,
              "subtype": 4,
              "varA": 75,
              "varB": 43
            }
          ]
        },
        {
          "_area": 7,
          "_room": 55,
          "address": 139578220,
          "mapX": 29,
          "mapY": 17,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139578188,
          "doors": [
            {
              "_door": 0,
              "address": 139578188,
              "destination": 139577884,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139578220,
              "complement": 139577868
            },
            {
              "_door": 1,
              "address": 139578204,
              "destination": 139572372,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139578220,
              "complement": 139572356
            }
          ],
          "items": []
        }
      ]
    },
    {
      "area": "The Arena",
      "rooms": [
        {
          "_area": 8,
          "_room": 0,
          "address": 139584656,
          "mapX": 129,
          "mapY": 15,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139584640,
          "doors": [
            {
              "_door": 0,
              "address": 139584640,
              "destination": 139584808,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139584656,
              "complement": 139584776
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139588044,
              "xPos": 80,
              "yPos": 128,
              "type": 4,
              "subtype": 6,
              "varA": 8,
              "varB": 2
            }
          ]
        },
        {
          "_area": 8,
          "_room": 1,
          "address": 139584808,
          "mapX": 130,
          "mapY": 15,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139584776,
          "doors": [
            {
              "_door": 0,
              "address": 139584776,
              "destination": 139584656,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139584808,
              "complement": 139584640
            },
            {
              "_door": 1,
              "address": 139584792,
              "destination": 139585528,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 6,
              "sourceRoom": 139584808,
              "complement": 139585496
            }
          ],
          "items": [],
          "isBossRoom": true
        },
        {
          "_area": 8,
          "_room": 2,
          "address": 139584992,
          "mapX": 131,
          "mapY": 12,
          "mapWidth": 2,
          "mapHeight": 3,
          "doorList": 139584928,
          "doors": [
            {
              "_door": 0,
              "address": 139584928,
              "destination": 139585664,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139584992,
              "complement": 139585648,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139584944,
              "destination": 139585816,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139584992,
              "complement": 139585784,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139584960,
              "destination": 139585160,
              "xPos": 0,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139584992,
              "complement": 139585112,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139584976,
              "destination": 139585952,
              "xPos": 2,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139584992,
              "complement": 139585936,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139588224,
              "xPos": 464,
              "yPos": 408,
              "type": 4,
              "subtype": 3,
              "varA": 29,
              "varB": 13
            }
          ]
        },
        {
          "_area": 8,
          "_room": 3,
          "address": 139585160,
          "mapX": 3,
          "mapY": 14,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139585112,
          "doors": [
            {
              "_door": 0,
              "address": 139585112,
              "destination": 139584992,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 8,
              "sourceRoom": 139585160,
              "complement": 139584960,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.SMALL] // Being generous here
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139585128,
              "destination": 139585328,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 65520,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139585160,
              "complement": 139585280,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SMALL] // Being generous here
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139585144,
              "destination": 139586560,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139585160,
              "complement": 139586528,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 8,
          "_room": 4,
          "address": 139585328,
          "mapX": 131,
          "mapY": 14,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139585280,
          "doors": [
            {
              "_door": 0,
              "address": 139585280,
              "destination": 139585160,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 16,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139585328,
              "complement": 139585128
            },
            {
              "_door": 1,
              "address": 139585296,
              "destination": 139587880,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139585328,
              "complement": 139587864
            },
            {
              "_door": 2,
              "address": 139585312,
              "destination": 139585528,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139585328,
              "complement": 139585448
            }
          ],
          "items": []
        },
        {
          "_area": 8,
          "_room": 5,
          "address": 139585528,
          "mapX": 132,
          "mapY": 14,
          "mapWidth": 1,
          "mapHeight": 3,
          "doorList": 139585448,
          "doors": [
            {
              "_door": 0,
              "address": 139585448,
              "destination": 139585328,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139585528,
              "complement": 139585312
            },
            {
              "_door": 1,
              "address": 139585464,
              "destination": 139586104,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139585528,
              "complement": 139586072,
              "isArenaDoor": true
            },
            {
              "_door": 2,
              "address": 139585480,
              "destination": 139586256,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139585528,
              "complement": 139586224,
              "isArenaDoor": true
            },
            {
              "_door": 3,
              "address": 139585496,
              "destination": 139584808,
              "xPos": 255,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139585528,
              "complement": 139584792,
              "isBossDoor": true
            },
            {
              "_door": 4,
              "address": 139585512,
              "destination": 139586408,
              "xPos": 1,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139585528,
              "complement": 139586376,
              "isArenaDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 8,
          "_room": 6,
          "address": 139585664,
          "mapX": 133,
          "mapY": 12,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139585648,
          "doors": [
            {
              "_door": 0,
              "address": 139585648,
              "destination": 139584992,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139585664,
              "complement": 139584928
            }
          ],
          "items": [] // TODO: rando candle
        },
        {
          "_area": 8,
          "_room": 7,
          "address": 139585816,
          "mapX": 5,
          "mapY": 13,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139585784,
          "doors": [
            {
              "_door": 0,
              "address": 139585784,
              "destination": 139584992,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139585816,
              "complement": 139584944
            },
            {
              "_door": 1,
              "address": 139585800,
              "destination": 139586912,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139585816,
              "complement": 139586880
            }
          ],
          "items": []
        },
        {
          "_area": 8,
          "_room": 8,
          "address": 139585952,
          "mapX": 133,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139585936,
          "doors": [
            {
              "_door": 0,
              "address": 139585936,
              "destination": 139584992,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139585952,
              "complement": 139584976
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139589112,
              "xPos": 184,
              "yPos": 152,
              "type": 4,
              "subtype": 4,
              "varA": 65,
              "varB": 27
            }
          ]
        },
        {
          "_area": 8,
          "_room": 9,
          "address": 139586104,
          "mapX": 133,
          "mapY": 14,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139586072,
          "doors": [
            {
              "_door": 0,
              "address": 139586072,
              "destination": 139585528,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139586104,
              "complement": 139585464
            },
            {
              "_door": 1,
              "address": 139586088,
              "destination": 139587048,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139586104,
              "complement": 139587032,
              "isSpecialWall": true // idk how else to phrase this
            }
          ],
          "items": []
        },
        {
          "_area": 8,
          "_room": 10, // Worst room in the game
          "address": 139586256,
          "mapX": 5,
          "mapY": 15,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139586224,
          "doors": [
            {
              "_door": 0,
              "address": 139586224,
              "destination": 139585528,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139586256,
              "complement": 139585480,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139586240,
              "destination": 139587184,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139586256,
              "complement": 139587168,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SLIDE]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 8,
          "_room": 11,
          "address": 139586408,
          "mapX": 133,
          "mapY": 15,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139586376,
          "doors": [
            {
              "_door": 0,
              "address": 139586376,
              "destination": 139585528,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139586408,
              "complement": 139585512
            },
            {
              "_door": 1,
              "address": 139586392,
              "destination": 139587320,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139586408,
              "complement": 139587304
            }
          ],
          "items": []
        },
        {
          "_area": 8,
          "_room": 12,
          "address": 139586560,
          "mapX": 6,
          "mapY": 14,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139586528,
          "doors": [
            {
              "_door": 0,
              "address": 139586528,
              "destination": 139585160,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139586560,
              "complement": 139585144
            },
            {
              "_door": 1,
              "address": 139586544,
              "destination": 139586744,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139586560,
              "complement": 139586680
            }
          ],
          "items": []
        },
        {
          "_area": 8,
          "_room": 13,
          "address": 139586744,
          "mapX": 8,
          "mapY": 14,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139586680,
          "doors": [
            {
              "_door": 0,
              "address": 139586680,
              "destination": 139586560,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139586744,
              "complement": 139586544
            },
            {
              "_door": 1,
              "address": 139586696,
              "destination": 139586912,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 8,
              "sourceRoom": 139586744,
              "complement": 139586896
            },
            {
              "_door": 2,
              "address": 139586712,
              "destination": 139588008,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139586744,
              "complement": 139587992
            },
            {
              "_door": 3,
              "address": 139586728,
              "destination": 139587608,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139586744,
              "complement": 139587576
            }
          ],
          "items": []
        },
        {
          "_area": 8,
          "_room": 14,
          "address": 139586912,
          "mapX": 137,
          "mapY": 12,
          "mapWidth": 1,
          "mapHeight": 3,
          "doorList": 139586864,
          "doors": [
            {
              "_door": 0,
              "address": 139586864,
              "destination": 139587456,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139586912,
              "complement": 139587440
            },
            {
              "_door": 1,
              "address": 139586880,
              "destination": 139585816,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139586912,
              "complement": 139585800
            },
            {
              "_door": 2,
              "address": 139586896,
              "destination": 139586744,
              "xPos": 0,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139586912,
              "complement": 139586696
            }
          ],
          "items": []
        },
        {
          "_area": 8,
          "_room": 15,
          "address": 139587048,
          "mapX": 137,
          "mapY": 14,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139587032,
          "doors": [
            {
              "_door": 0,
              "address": 139587032,
              "destination": 139586104,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139587048,
              "complement": 139586088
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139589808,
              "xPos": 200,
              "yPos": 136,
              "type": 4,
              "subtype": 4,
              "varA": 54,
              "varB": 7
            }
          ]
        },
        {
          "_area": 8,
          "_room": 16,
          "address": 139587184,
          "mapX": 9,
          "mapY": 15,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139587168,
          "doors": [
            {
              "_door": 0,
              "address": 139587168,
              "destination": 139586256,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139587184,
              "complement": 139586240
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139589844,
              "xPos": 152,
              "yPos": 152,
              "type": 5,
              "subtype": 3,
              "varA": 49,
              "varB": 56,
              "isHardMode": true
            },
            {
              "_item": 1,
              "address": 139589856,
              "xPos": 200,
              "yPos": 136,
              "type": 4,
              "subtype": 3,
              "varA": 24,
              "varB": 17
            }
          ]
        },
        {
          "_area": 8,
          "_room": 17,
          "address": 139587320,
          "mapX": 137,
          "mapY": 15,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139587304,
          "doors": [
            {
              "_door": 0,
              "address": 139587304,
              "destination": 139586408,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139587320,
              "complement": 139586392
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139589892,
              "xPos": 200,
              "yPos": 136,
              "type": 4,
              "subtype": 4,
              "varA": 72,
              "varB": 39
            }
          ]
        },
        {
          "_area": 8,
          "_room": 18,
          "address": 139587456,
          "mapX": 138,
          "mapY": 12,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139587440,
          "doors": [
            {
              "_door": 0,
              "address": 139587440,
              "destination": 139586912,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139587456,
              "complement": 139586864
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139589952,
              "xPos": 200,
              "yPos": 127,
              "type": 4,
              "subtype": 2,
              "varA": 103,
              "varB": 1
            }
          ]
        },
        {
          "_area": 8,
          "_room": 19,
          "address": 139587608,
          "mapX": 138,
          "mapY": 14,
          "mapWidth": 2,
          "mapHeight": 3,
          "doorList": 139587576,
          "doors": [
            {
              "_door": 0,
              "address": 139587576,
              "destination": 139586744,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 512,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139587608,
              "complement": 139586728
            },
            {
              "_door": 1,
              "address": 139587592,
              "destination": 139587760,
              "xPos": 2,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139587608,
              "complement": 139587728,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS] // Can grab ledge but won't require like early garden
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 8,
          "_room": 20,
          "address": 139587760,
          "mapX": 140,
          "mapY": 15,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139587728,
          "doors": [
            {
              "_door": 0,
              "address": 139587728,
              "destination": 139587608,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139587760,
              "complement": 139587592
            },
            {
              "_door": 1,
              "address": 139587744,
              "destination": 139575388,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139587760,
              "complement": 139575356,
              "isWoodenDoor": true
            }
          ],
          "items": []
        },
        {
          "_area": 8,
          "_room": 21,
          "address": 139587880,
          "mapX": 130,
          "mapY": 14,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139587864,
          "doors": [
            {
              "_door": 0,
              "address": 139587864,
              "destination": 139585328,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139587880,
              "complement": 139585296
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 8,
          "_room": 22,
          "address": 139588008,
          "mapX": 11,
          "mapY": 14,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139587992,
          "doors": [
            {
              "_door": 0,
              "address": 139587992,
              "destination": 139586744,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139588008,
              "complement": 139586712
            }
          ],
          "items": [],
          "isWarpRoom": true
        }
      ]
    },
    {
      "area": "Top Floor",
      "rooms": [
        {
          "_area": 9,
          "_room": 0,
          "address": 139590384,
          "mapX": 152,
          "mapY": 1,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139590368,
          "doors": [
            {
              "_door": 0,
              "address": 139590368,
              "destination": 139591024,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139590384,
              "complement": 139590992
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139594668,
              "xPos": 64,
              "yPos": 167,
              "type": 4,
              "subtype": 4,
              "varA": 55,
              "varB": 8
            },
            {
              "_item": 1,
              "address": 139594680,
              "xPos": 120,
              "yPos": 168,
              "type": 4,
              "subtype": 6,
              "varA": 10,
              "varB": 3
            }
          ]
        },
        {
          "_area": 9,
          "_room": 1,
          "address": 139590552,
          "mapX": 152,
          "mapY": 1,
          "mapWidth": 4,
          "mapHeight": 2,
          "doorList": 139590504,
          "doors": [
            {
              "_door": 0,
              "address": 139590504,
              "destination": 139591024,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 224,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139590552,
              "complement": 139591008,
              "isBossDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139590520,
              "destination": 139594368,
              "xPos": 2,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 512,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139590552,
              "complement": 139594288,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139590536,
              "destination": 139592256,
              "xPos": 4,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139590552,
              "complement": 139592176,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.INACCESSIBLE]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.INACCESSIBLE]
                  },
                  {
                    "item": 1,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139594704,
              "xPos": 88,
              "yPos": 423,
              "type": 4,
              "subtype": 2,
              "varA": 116,
              "varB": 7
            },
            {
              "_item": 1,
              "address": 139594776,
              "xPos": 976,
              "yPos": 87,
              "type": 5,
              "subtype": 4,
              "varA": 70,
              "varB": 37,
              "isHardMode": true
            }
          ]
        },
        {
          "_area": 9,
          "_room": 2,
          "address": 139590696,
          "mapX": 152,
          "mapY": 4,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139590680,
          "doors": [
            {
              "_door": 0,
              "address": 139590680,
              "destination": 139590872,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 16,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139590696,
              "complement": 139590824,
              "items": [
                {
                  "item": 0,
                  "locks": [Locks.MALPHAS] // Technically reachable without anything
                }
              ]
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139594800,
              "xPos": 128,
              "yPos": 103,
              "type": 4,
              "subtype": 3,
              "varA": 44,
              "varB": 48
            }
          ]
        },
        {
          "_area": 9,
          "_room": 3,
          "address": 139590872,
          "mapX": 24,
          "mapY": 5,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139590824,
          "doors": [
            {
              "_door": 0,
              "address": 139590824,
              "destination": 139590696,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139590872,
              "complement": 139590680,
              "isBreakableDoor": true
            },
            {
              "_door": 1,
              "address": 139590840,
              "destination": 139591520,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139590872,
              "complement": 139591488,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT] // Can get through transition but won't have enough height to get to most ledges
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139590856,
              "destination": 139591680,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139590872,
              "complement": 139591648,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 4,
          "address": 139591024,
          "mapX": 153,
          "mapY": 1,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139590992,
          "doors": [
            {
              "_door": 0,
              "address": 139590992,
              "destination": 139590384,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139591024,
              "complement": 139590368,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.DRACULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139591008,
              "destination": 139590552,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 512,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139591024,
              "complement": 139590504,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.DRACULA]
                  }
                ]
              }
            }
          ],
          "items": [],
          "isBossRoom": true
        },
        {
          "_area": 9,
          "_room": 5,
          "address": 139591200,
          "mapX": 153,
          "mapY": 4,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139591168,
          "doors": [
            {
              "_door": 0,
              "address": 139591168,
              "destination": 139594368,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 256,
              "destYPos": 768,
              "direction": 8,
              "sourceRoom": 139591200,
              "complement": 139594336
            },
            {
              "_door": 1,
              "address": 139591184,
              "destination": 139591360,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139591200,
              "complement": 139591344,
              "isBreakableDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 6,
          "address": 139591360,
          "mapX": 155,
          "mapY": 4,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139591344,
          "doors": [
            {
              "_door": 0,
              "address": 139591344,
              "destination": 139591200,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139591360,
              "complement": 139591184
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139595112,
              "xPos": 152,
              "yPos": 144,
              "type": 4,
              "subtype": 8,
              "varA": 5,
              "varB": 5
            }
          ]
        },
        {
          "_area": 9,
          "_room": 7,
          "address": 139591520,
          "mapX": 26,
          "mapY": 5,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139591488,
          "doors": [
            {
              "_door": 0,
              "address": 139591488,
              "destination": 139590872,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139591520,
              "complement": 139590840
            },
            {
              "_door": 1,
              "address": 139591504,
              "destination": 139592848,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139591520,
              "complement": 139592800
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 8,
          "address": 139591680,
          "mapX": 154,
          "mapY": 5,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139591648,
          "doors": [
            {
              "_door": 0,
              "address": 139591648,
              "destination": 139590872,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139591680,
              "complement": 139590856
            },
            {
              "_door": 1,
              "address": 139591664,
              "destination": 139591856,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139591680,
              "complement": 139591808
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139595268,
              "xPos": 464,
              "yPos": 151,
              "type": 4,
              "subtype": 4,
              "varA": 69,
              "varB": 36
            }
          ]
        },
        {
          "_area": 9,
          "_room": 9,
          "address": 139591856,
          "mapX": 26,
          "mapY": 6,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139591808,
          "doors": [
            {
              "_door": 0,
              "address": 139591808,
              "destination": 139591680,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139591856,
              "complement": 139591664
            },
            {
              "_door": 1,
              "address": 139591824,
              "destination": 139593024,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139591856,
              "complement": 139592992,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS] // Can transition but not enough height for most ledges
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139591840,
              "destination": 139592032,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139591856,
              "complement": 139592000,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS] // Can transition but not enough height for most ledges
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 10,
          "address": 139592032,
          "mapX": 154,
          "mapY": 6,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139591984,
          "doors": [
            {
              "_door": 0,
              "address": 139591984,
              "destination": 139551848,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139592032,
              "complement": 139551832,
              "isWoodenDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139592000,
              "destination": 139591856,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139592032,
              "complement": 139591840
            },
            {
              "_door": 2,
              "address": 139592016,
              "destination": 139526428,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139592032,
              "complement": 139526396,
              "isWoodenDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 11,
          "address": 139592256,
          "mapX": 28,
          "mapY": 2,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139592176,
          "doors": [
            {
              "_door": 0,
              "address": 139592176,
              "destination": 139590552,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 784,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139592256,
              "complement": 139590536
            },
            {
              "_door": 1,
              "address": 139592192,
              "destination": 139593184,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139592256,
              "complement": 139593168
            },
            {
              "_door": 2,
              "address": 139592208,
              "destination": 139594368,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139592256,
              "complement": 139594304,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139592224,
              "destination": 139593344,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139592256,
              "complement": 139593328,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139592240,
              "destination": 139592480,
              "xPos": 0,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139592256,
              "complement": 139592400,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 12,
          "address": 139592480,
          "mapX": 28,
          "mapY": 3,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139592400,
          "doors": [
            {
              "_door": 0,
              "address": 139592400,
              "destination": 139592256,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139592480,
              "complement": 139592240
            },
            {
              "_door": 1,
              "address": 139592416,
              "destination": 139594168,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139592480,
              "complement": 139594152,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS] // Height for ledge past transition
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139592432,
              "destination": 139594368,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 784,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139592480,
              "complement": 139594320,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139592448,
              "destination": 139593536,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139592480,
              "complement": 139593504,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139592464,
              "destination": 139592672,
              "xPos": 0,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 16,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139592480,
              "complement": 139592624,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 13,
          "address": 139592672,
          "mapX": 28,
          "mapY": 4,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139592624,
          "doors": [
            {
              "_door": 0,
              "address": 139592624,
              "destination": 139592480,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139592672,
              "complement": 139592464
            },
            {
              "_door": 1,
              "address": 139592640,
              "destination": 139594368,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 784,
              "destYPos": 768,
              "direction": 4,
              "sourceRoom": 139592672,
              "complement": 139594352,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139592656,
              "destination": 139592848,
              "xPos": 1,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 256,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139592672,
              "complement": 139592816,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 14,
          "address": 139592848,
          "mapX": 28,
          "mapY": 5,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139592800,
          "doors": [
            {
              "_door": 0,
              "address": 139592800,
              "destination": 139591520,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139592848,
              "complement": 139591504,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139592816,
              "destination": 139592672,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 256,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139592848,
              "complement": 139592656
            },
            {
              "_door": 2,
              "address": 139592832,
              "destination": 139593744,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139592848,
              "complement": 139593664,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 15,
          "address": 139593024,
          "mapX": 156,
          "mapY": 5,
          "mapWidth": 2,
          "mapHeight": 2,
          "doorList": 139592992,
          "doors": [
            {
              "_door": 0,
              "address": 139592992,
              "destination": 139591856,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139593024,
              "complement": 139591824,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139593008,
              "destination": 139593744,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 6,
              "sourceRoom": 139593024,
              "complement": 139593712,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 16,
          "address": 139593184,
          "mapX": 29,
          "mapY": 2,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139593168,
          "doors": [
            {
              "_door": 0,
              "address": 139593168,
              "destination": 139592256,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139593184,
              "complement": 139592192
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139596264,
              "xPos": 176,
              "yPos": 151,
              "type": 4,
              "subtype": 2,
              "varA": 117,
              "varB": 7
            }
          ]
        },
        {
          "_area": 9,
          "_room": 17,
          "address": 139593344,
          "mapX": 157,
          "mapY": 2,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139593328,
          "doors": [
            {
              "_door": 0,
              "address": 139593328,
              "destination": 139592256,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139593344,
              "complement": 139592224
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 18, // TODO: This is a one-way room. Removing the wall entity is probably the best choice
          "address": 139593536,
          "mapX": 157,
          "mapY": 3,
          "mapWidth": 3,
          "mapHeight": 1,
          "doorList": 139593504,
          "doors": [
            {
              "_door": 0,
              "address": 139593504,
              "destination": 139592480,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139593536,
              "complement": 139592448
            },
            {
              "_door": 1,
              "address": 139593520,
              "destination": 139594504,
              "xPos": 3,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139593536,
              "complement": 139594472
            }
          ],
          "items": [],
          "isWeirdAnnoyingOneWayTopFloorRoom": true
        },
        {
          "_area": 9,
          "_room": 19,
          "address": 139593744,
          "mapX": 30,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 3,
          "doorList": 139593664,
          "doors": [
            {
              "_door": 0,
              "address": 139593664,
              "destination": 139592848,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139593744,
              "complement": 139592832
            },
            {
              "_door": 1,
              "address": 139593680,
              "destination": 139593888,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139593744,
              "complement": 139593872
            },
            {
              "_door": 2,
              "address": 139593696,
              "destination": 139594632,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139593744,
              "complement": 139594616,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139593712,
              "destination": 139593024,
              "xPos": 255,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139593744,
              "complement": 139593008,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139593728,
              "destination": 139594048,
              "xPos": 1,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139593744,
              "complement": 139594032,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 20,
          "address": 139593888,
          "mapX": 31,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139593872,
          "doors": [
            {
              "_door": 0,
              "address": 139593872,
              "destination": 139593744,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139593888,
              "complement": 139593680
            }
          ],
          "items": []
        },
        {
          "_area": 9,
          "_room": 21,
          "address": 139594048,
          "mapX": 31,
          "mapY": 6,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139594032,
          "doors": [
            {
              "_door": 0,
              "address": 139594032,
              "destination": 139593744,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139594048,
              "complement": 139593728
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139596636,
              "xPos": 144,
              "yPos": 151,
              "type": 4,
              "subtype": 2,
              "varA": 112,
              "varB": 2
            }
          ]
        },
        {
          "_area": 9,
          "_room": 22,
          "address": 139594168,
          "mapX": 29,
          "mapY": 3,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139594152,
          "doors": [
            {
              "_door": 0,
              "address": 139594152,
              "destination": 139592480,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139594168,
              "complement": 139592416
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 9,
          "_room": 23,
          "address": 139594368,
          "mapX": 152,
          "mapY": 2,
          "mapWidth": 4,
          "mapHeight": 4,
          "doorList": 139594288,
          "doors": [
            {
              "_door": 0,
              "address": 139594288,
              "destination": 139590552,
              "xPos": 2,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 512,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139594368,
              "complement": 139590520,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SMALL]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139594304,
              "destination": 139592256,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139594368,
              "complement": 139592208,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SMALL]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139594320,
              "destination": 139592480,
              "xPos": 4,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139594368,
              "complement": 139592432,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139594336,
              "destination": 139591200,
              "xPos": 1,
              "yPos": 4,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139594368,
              "complement": 139591168,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.FLIGHT]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139594352,
              "destination": 139592672,
              "xPos": 4,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139594368,
              "complement": 139592640,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.FLIGHT]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.FLIGHT]
                  }
                ],
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.FLIGHT]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139596672,
              "xPos": 80,
              "yPos": 119,
              "type": 4,
              "subtype": 3,
              "varA": 32,
              "varB": 15
            }
          ]
        },
        {
          "_area": 9,
          "_room": 24,
          "address": 139594504,
          "mapX": 160,
          "mapY": 3,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139594472,
          "doors": [
            {
              "_door": 0,
              "address": 139594472,
              "destination": 139593536,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 528,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139594504,
              "complement": 139593520
            },
            {
              "_door": 1,
              "address": 139594488,
              "destination": 139559936,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139594504,
              "complement": 139559904
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 9,
          "_room": 25,
          "address": 139594632,
          "mapX": 159,
          "mapY": 5,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139594616,
          "doors": [
            {
              "_door": 0,
              "address": 139594616,
              "destination": 139593744,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139594632,
              "complement": 139593696
            }
          ],
          "items": [],
          "isWarpRoom": true
        }
      ]
    },
    {
      "area": "Forbidden Area",
      "rooms": [
        {
          "_area": 10,
          "_room": 0,
          "address": 139596920,
          "mapX": 162,
          "mapY": 14,
          "mapWidth": 4,
          "mapHeight": 1,
          "doorList": 139596888,
          "doors": [
            {
              "_door": 0,
              "address": 139596888,
              "destination": 139597968,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139596920,
              "complement": 139597952
            },
            {
              "_door": 1,
              "address": 139596904,
              "destination": 139597240,
              "xPos": 4,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139596920,
              "complement": 139597208
            }
          ],
          "items": []
        },
        {
          "_area": 10, // TODO: Same as top floor one-way room
          "_room": 1,
          "address": 139597072,
          "mapX": 166,
          "mapY": 13,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139597040,
          "doors": [
            {
              "_door": 0,
              "address": 139597040,
              "destination": 139539292,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139597072,
              "complement": 139539260
            },
            {
              "_door": 1,
              "address": 139597056,
              "destination": 139597240,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139597072,
              "complement": 139597192
            }
          ],
          "items": [],
          "isWeirdAnnoyingOneWayForbiddenAreaRoom": true
        },
        {
          "_area": 10,
          "_room": 2,
          "address": 139597240,
          "mapX": 38,
          "mapY": 14,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139597192,
          "doors": [
            {
              "_door": 0,
              "address": 139597192,
              "destination": 139597072,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139597240,
              "complement": 139597056
            },
            {
              "_door": 1,
              "address": 139597208,
              "destination": 139596920,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 784,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139597240,
              "complement": 139596904,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139597224,
              "destination": 139597392,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139597240,
              "complement": 139597360,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 10,
          "_room": 3,
          "address": 139597392,
          "mapX": 167,
          "mapY": 14,
          "mapWidth": 5,
          "mapHeight": 1,
          "doorList": 139597360,
          "doors": [
            {
              "_door": 0,
              "address": 139597360,
              "destination": 139597240,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139597392,
              "complement": 139597224
            },
            {
              "_door": 1,
              "address": 139597376,
              "destination": 139597696,
              "xPos": 4,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139597392,
              "complement": 139597648
            }
          ],
          "items": []
        },
        {
          "_area": 10,
          "_room": 4,
          "address": 139597528,
          "mapX": 170,
          "mapY": 15,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139597512,
          "doors": [
            {
              "_door": 0,
              "address": 139597512,
              "destination": 139597696,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139597528,
              "complement": 139597664
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139598936,
              "xPos": 48,
              "yPos": 88,
              "type": 4,
              "subtype": 3,
              "varA": 35,
              "varB": 25
            }
          ]
        },
        {
          "_area": 10,
          "_room": 5,
          "address": 139597696,
          "mapX": 43,
          "mapY": 15,
          "mapWidth": 3,
          "mapHeight": 2,
          "doorList": 139597648,
          "doors": [
            {
              "_door": 0,
              "address": 139597648,
              "destination": 139597392,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 1024,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139597696,
              "complement": 139597376,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SKULA]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139597664,
              "destination": 139597528,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139597696,
              "complement": 139597512,
              "isBreakableDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS, Locks.SKULA]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139597680,
              "destination": 139598120,
              "xPos": 3,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139597696,
              "complement": 139598088,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 10,
          "_room": 6,
          "address": 139597832,
          "mapX": 38,
          "mapY": 16,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139597816,
          "doors": [
            {
              "_door": 0,
              "address": 139597816,
              "destination": 139598576,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139597832,
              "complement": 139598544,
              "access": {
                "items": [
                  {
                    "item": 0,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139599104,
              "xPos": 208,
              "yPos": 88,
              "type": 4,
              "subtype": 3,
              "varA": 36,
              "varB": 22
            }
          ]
        },
        {
          "_area": 10,
          "_room": 7,
          "address": 139597968,
          "mapX": 161,
          "mapY": 14,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139597936,
          "doors": [
            {
              "_door": 0,
              "address": 139597936,
              "destination": 139573276,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139597968,
              "complement": 139573260
            },
            {
              "_door": 1,
              "address": 139597952,
              "destination": 139596920,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139597968,
              "complement": 139596888
            }
          ],
          "items": [],
          "isTransitionRoom": true
        },
        {
          "_area": 10,
          "_room": 8,
          "address": 139598120,
          "mapX": 174,
          "mapY": 15,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139598088,
          "doors": [
            {
              "_door": 0,
              "address": 139598088,
              "destination": 139597696,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 528,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139598120,
              "complement": 139597680
            },
            {
              "_door": 1,
              "address": 139598104,
              "destination": 139598272,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139598120,
              "complement": 139598240
            }
          ],
          "items": []
        },
        {
          "_area": 10,
          "_room": 9,
          "address": 139598272,
          "mapX": 46,
          "mapY": 16,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139598240,
          "doors": [
            {
              "_door": 0,
              "address": 139598240,
              "destination": 139598120,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139598272,
              "complement": 139598104
            },
            {
              "_door": 1,
              "address": 139598256,
              "destination": 139598424,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1808,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139598272,
              "complement": 139598408,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 10,
          "_room": 10,
          "address": 139598424,
          "mapX": 166,
          "mapY": 16,
          "mapWidth": 8,
          "mapHeight": 1,
          "doorList": 139598392,
          "doors": [
            {
              "_door": 0,
              "address": 139598392,
              "destination": 139598576,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139598424,
              "complement": 139598560
            },
            {
              "_door": 1,
              "address": 139598408,
              "destination": 139598272,
              "xPos": 8,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139598424,
              "complement": 139598256
            }
          ],
          "items": []
        },
        {
          "_area": 10,
          "_room": 11,
          "address": 139598576,
          "mapX": 37,
          "mapY": 16,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139598544,
          "doors": [
            {
              "_door": 0,
              "address": 139598544,
              "destination": 139597832,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139598576,
              "complement": 139597816
            },
            {
              "_door": 1,
              "address": 139598560,
              "destination": 139598424,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139598576,
              "complement": 139598392,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        }
      ]
    },
    {
      "area": "Chaotic Realm",
      "rooms": [
        {
          "_area": 11,
          "_room": 0,
          "address": 139599532,
          "mapX": 129,
          "mapY": 18,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139599516,
          "doors": [
            {
              "_door": 0,
              "address": 139599516,
              "destination": 139600132,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139599532,
              "complement": 139600084
            }
          ],
          "items": [] // Chaos ring lol
        },
        {
          "_area": 11,
          "_room": 1,
          "address": 139599652,
          "mapX": 1,
          "mapY": 20,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139599636,
          "doors": [
            {
              "_door": 0,
              "address": 139599636,
              "destination": 139600324,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139599652,
              "complement": 139600292
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 11,
          "_room": 2,
          "address": 139599804,
          "mapX": 129,
          "mapY": 20,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139599772,
          "doors": [
            {
              "_door": 0,
              "address": 139599772,
              "destination": 139600324,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139599804,
              "complement": 139600308
            },
            {
              "_door": 1,
              "address": 139599788,
              "destination": 139599964,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 16,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139599804,
              "complement": 139599932
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 3,
          "address": 139599964,
          "mapX": 1,
          "mapY": 21,
          "mapWidth": 2,
          "mapHeight": 3,
          "doorList": 139599932,
          "doors": [
            {
              "_door": 0,
              "address": 139599932,
              "destination": 139599804,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139599964,
              "complement": 139599788,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139599948,
              "destination": 139600924,
              "xPos": 2,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139599964,
              "complement": 139600892,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 4,
          "address": 139600132,
          "mapX": 130,
          "mapY": 18,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139600084,
          "doors": [
            {
              "_door": 0,
              "address": 139600084,
              "destination": 139599532,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139600132,
              "complement": 139599516
            },
            {
              "_door": 1,
              "address": 139600100,
              "destination": 139600476,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139600132,
              "complement": 139600444,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.FLOAT]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139600116,
              "destination": 139602796,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139600132,
              "complement": 139602764,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 5,
          "address": 139600324,
          "mapX": 2,
          "mapY": 20,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139600276,
          "doors": [
            {
              "_door": 0,
              "address": 139600276,
              "destination": 139605028,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139600324,
              "complement": 139605012
            },
            {
              "_door": 1,
              "address": 139600292,
              "destination": 139599652,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139600324,
              "complement": 139599636
            },
            {
              "_door": 2,
              "address": 139600308,
              "destination": 139599804,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139600324,
              "complement": 139599772
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 6,
          "address": 139600476,
          "mapX": 131,
          "mapY": 18,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139600444,
          "doors": [
            {
              "_door": 0,
              "address": 139600444,
              "destination": 139600132,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139600476,
              "complement": 139600100
            },
            {
              "_door": 1,
              "address": 139600460,
              "destination": 139601380,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139600476,
              "complement": 139601332
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 7,
          "address": 139600628,
          "mapX": 3,
          "mapY": 19,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139600596,
          "doors": [
            {
              "_door": 0,
              "address": 139600596,
              "destination": 139601076,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139600628,
              "complement": 139601044
            },
            {
              "_door": 1,
              "address": 139600612,
              "destination": 139600780,
              "xPos": 0,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 16,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139600628,
              "complement": 139600748,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 8,
          "address": 139600780,
          "mapX": 3,
          "mapY": 20,
          "mapWidth": 2,
          "mapHeight": 3,
          "doorList": 139600748,
          "doors": [
            {
              "_door": 0,
              "address": 139600748,
              "destination": 139600628,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 8,
              "sourceRoom": 139600780,
              "complement": 139600612
            },
            {
              "_door": 1,
              "address": 139600764,
              "destination": 139601940,
              "xPos": 2,
              "yPos": 2,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139600780,
              "complement": 139601892,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS] // Can grab ledge but won't require like early garden
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 9,
          "address": 139600924,
          "mapX": 131,
          "mapY": 21,
          "mapWidth": 5,
          "mapHeight": 2,
          "doorList": 139600892,
          "doors": [
            {
              "_door": 0,
              "address": 139600892,
              "destination": 139599964,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139600924,
              "complement": 139599948,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139600908,
              "destination": 139605180,
              "xPos": 5,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139600924,
              "complement": 139605164,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SKULA, Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 10,
          "address": 139601076,
          "mapX": 4,
          "mapY": 19,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139601044,
          "doors": [
            {
              "_door": 0,
              "address": 139601044,
              "destination": 139600628,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139601076,
              "complement": 139600596
            },
            {
              "_door": 1,
              "address": 139601060,
              "destination": 139602220,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139601076,
              "complement": 139602188
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 11,
          "address": 139601212,
          "mapX": 132,
          "mapY": 19,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139601196,
          "doors": [
            {
              "_door": 0,
              "address": 139601196,
              "destination": 139601564,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139601212,
              "complement": 139601516
            }
          ],
          "items": [],
          "isBossRoom": true,
          "isChaos": true,
          "isWeirdChaoticRealmRoomDoNotModify": true
        },
        {
          "_area": 11,
          "_room": 12,
          "address": 139601380,
          "mapX": 133,
          "mapY": 18,
          "mapWidth": 5,
          "mapHeight": 1,
          "doorList": 139601332,
          "doors": [
            {
              "_door": 0,
              "address": 139601332,
              "destination": 139600476,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139601380,
              "complement": 139600460,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139601348,
              "destination": 139602068,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139601380,
              "complement": 139602052
            },
            {
              "_door": 2,
              "address": 139601364,
              "destination": 139604316,
              "xPos": 5,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139601380,
              "complement": 139604220,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 13,
          "address": 139601564,
          "mapX": 133,
          "mapY": 19,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139601516,
          "doors": [
            {
              "_door": 0,
              "address": 139601516,
              "destination": 139601212,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139601564,
              "complement": 139601196,
              "isBossDoor": true,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.SKULA] // Technically not necessary, but just to be safe
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139601532,
              "destination": 139602340,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139601564,
              "complement": 139602324,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.SKULA] // Technically not necessary, but just to be safe
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139601548,
              "destination": 139601764,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139601564,
              "complement": 139601732
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 14,
          "address": 139601764,
          "mapX": 5,
          "mapY": 20,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139601732,
          "doors": [
            {
              "_door": 0,
              "address": 139601732,
              "destination": 139601564,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139601764,
              "complement": 139601548,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139601748,
              "destination": 139602492,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139601764,
              "complement": 139602460
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 15,
          "address": 139601940,
          "mapX": 5,
          "mapY": 21,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139601892,
          "doors": [
            {
              "_door": 0,
              "address": 139601892,
              "destination": 139600780,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 272,
              "destYPos": 512,
              "direction": 4,
              "sourceRoom": 139601940,
              "complement": 139600764,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139601908,
              "destination": 139602492,
              "xPos": 1,
              "yPos": 255,
              "destXOffset": 65520,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 8,
              "sourceRoom": 139601940,
              "complement": 139602476
            },
            {
              "_door": 2,
              "address": 139601924,
              "destination": 139603300,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139601940,
              "complement": 139603284,
              "access": {
                "doors": [
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 16,
          "address": 139602068,
          "mapX": 6,
          "mapY": 18,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139602052,
          "doors": [
            {
              "_door": 0,
              "address": 139602052,
              "destination": 139601380,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139602068,
              "complement": 139601348
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 17,
          "address": 139602220,
          "mapX": 6,
          "mapY": 19,
          "mapWidth": 2,
          "mapHeight": 1,
          "doorList": 139602188,
          "doors": [
            {
              "_door": 0,
              "address": 139602188,
              "destination": 139601076,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139602220,
              "complement": 139601060
            },
            {
              "_door": 1,
              "address": 139602204,
              "destination": 139603500,
              "xPos": 2,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139602220,
              "complement": 139603452
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 18,
          "address": 139602340,
          "mapX": 134,
          "mapY": 19,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139602324,
          "doors": [
            {
              "_door": 0,
              "address": 139602324,
              "destination": 139601564,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139602340,
              "complement": 139601532
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 11,
          "_room": 19,
          "address": 139602492,
          "mapX": 134,
          "mapY": 20,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139602460,
          "doors": [
            {
              "_door": 0,
              "address": 139602460,
              "destination": 139601764,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139602492,
              "complement": 139601748
            },
            {
              "_door": 1,
              "address": 139602476,
              "destination": 139601940,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139602492,
              "complement": 139601908
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 20,
          "address": 139602620,
          "mapX": 12,
          "mapY": 18,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139602620,
          "doors": [],
          "items": [],
          "isBossRoom": true,
          "isChaos": true,
          "isWeirdChaoticRealmRoomDoNotModify": true
        },
        {
          "_area": 11,
          "_room": 21,
          "address": 139602796,
          "mapX": 1,
          "mapY": 19,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139602764,
          "doors": [
            {
              "_door": 0,
              "address": 139602764,
              "destination": 139600132,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139602796,
              "complement": 139600116
            },
            {
              "_door": 1,
              "address": 139602780,
              "destination": 139605028,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139602796,
              "complement": 139604996,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 22,
          "address": 139602908,
          "mapX": 13,
          "mapY": 18,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139602908,
          "doors": [],
          "items": [],
          "isBossRoom": true,
          "isChaos": true,
          "isWeirdChaoticRealmRoomDoNotModify": true
        },
        {
          "_area": 11,
          "_room": 23,
          "address": 139603028,
          "mapX": 14,
          "mapY": 18,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139603028,
          "doors": [],
          "items": [],
          "isCreditsRoom": true,
          "isWeirdChaoticRealmRoomDoNotModify": true
        },
        {
          "_area": 11,
          "_room": 24,
          "address": 139603164,
          "mapX": 135,
          "mapY": 20,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139603148,
          "doors": [
            {
              "_door": 0,
              "address": 139603148,
              "destination": 139603668,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139603164,
              "complement": 139603636
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139607228,
              "xPos": 48,
              "yPos": 184,
              "type": 4,
              "subtype": 2,
              "varA": 114,
              "varB": 2
            }
          ]
        },
        {
          "_area": 11,
          "_room": 25,
          "address": 139603300,
          "mapX": 7,
          "mapY": 21,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139603284,
          "doors": [
            {
              "_door": 0,
              "address": 139603284,
              "destination": 139601940,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139603300,
              "complement": 139601924
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 26,
          "address": 139603500,
          "mapX": 8,
          "mapY": 19,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139603452,
          "doors": [
            {
              "_door": 0,
              "address": 139603452,
              "destination": 139602220,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 272,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139603500,
              "complement": 139602204,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 1,
              "address": 139603468,
              "destination": 139603812,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139603500,
              "complement": 139603796,
              "access": {
                "doors": [
                  {
                    "door": 2,
                    "locks": [Locks.SKULA]
                  }
                ]
              }
            },
            {
              "_door": 2,
              "address": 139603484,
              "destination": 139605332,
              "xPos": 1,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139603500,
              "complement": 139605300
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 27,
          "address": 139603668,
          "mapX": 8,
          "mapY": 20,
          "mapWidth": 1,
          "mapHeight": 3,
          "doorList": 139603620,
          "doors": [
            {
              "_door": 0,
              "address": 139603620,
              "destination": 139605332,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 6,
              "sourceRoom": 139603668,
              "complement": 139605316
            },
            {
              "_door": 1,
              "address": 139603636,
              "destination": 139603164,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139603668,
              "complement": 139603148
            },
            {
              "_door": 2,
              "address": 139603652,
              "destination": 139605180,
              "xPos": 0,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139603668,
              "complement": 139605148
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 28,
          "address": 139603812,
          "mapX": 9,
          "mapY": 19,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139603796,
          "doors": [
            {
              "_door": 0,
              "address": 139603796,
              "destination": 139603500,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139603812,
              "complement": 139603468
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139607444,
              "xPos": 176,
              "yPos": 184,
              "type": 4,
              "subtype": 2,
              "varA": 108,
              "varB": 6
            }
          ]
        },
        {
          "_area": 11,
          "_room": 29,
          "address": 139603948,
          "mapX": 137,
          "mapY": 20,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139603932,
          "doors": [
            {
              "_door": 0,
              "address": 139603932,
              "destination": 139604316,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 1024,
              "direction": 6,
              "sourceRoom": 139603948,
              "complement": 139604268
            }
          ],
          "items": [
            {
              "_item": 0,
              "address": 139607480,
              "xPos": 24,
              "yPos": 120,
              "type": 4,
              "subtype": 2,
              "varA": 119,
              "varB": 7
            }
          ]
        },
        {
          "_area": 11,
          "_room": 30,
          "address": 139604068,
          "mapX": 9,
          "mapY": 22,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139604052,
          "doors": [
            {
              "_door": 0,
              "address": 139604052,
              "destination": 139604492,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139604068,
              "complement": 139604460
            }
          ],
          "items": [],
          "isSaveRoom": true
        },
        {
          "_area": 11,
          "_room": 31,
          "address": 139604316,
          "mapX": 138,
          "mapY": 18,
          "mapWidth": 1,
          "mapHeight": 7,
          "doorList": 139604220,
          "doors": [
            {
              "_door": 0,
              "address": 139604220,
              "destination": 139601380,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 1040,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139604316,
              "complement": 139601364
            },
            {
              "_door": 1,
              "address": 139604236,
              "destination": 139604620,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139604316,
              "complement": 139604604
            },
            {
              "_door": 2,
              "address": 139604252,
              "destination": 139604748,
              "xPos": 1,
              "yPos": 3,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139604316,
              "complement": 139604732,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.SMALL]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 3,
              "address": 139604268,
              "destination": 139603948,
              "xPos": 255,
              "yPos": 4,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139604316,
              "complement": 139603932,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            },
            {
              "_door": 4,
              "address": 139604284,
              "destination": 139604876,
              "xPos": 1,
              "yPos": 6,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139604316,
              "complement": 139604860,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            },
            {
              "_door": 5,
              "address": 139604300,
              "destination": 139604492,
              "xPos": 0,
              "yPos": 7,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139604316,
              "complement": 139604444,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 1,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 2,
                    "locks": [Locks.MALPHAS]
                  },
                  {
                    "door": 3,
                    "locks": [Locks.SMALL]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 32,
          "address": 139604492,
          "mapX": 10,
          "mapY": 22,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139604444,
          "doors": [
            {
              "_door": 0,
              "address": 139604444,
              "destination": 139604316,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 1536,
              "direction": 8,
              "sourceRoom": 139604492,
              "complement": 139604300
            },
            {
              "_door": 1,
              "address": 139604460,
              "destination": 139604068,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139604492,
              "complement": 139604052
            },
            {
              "_door": 2,
              "address": 139604476,
              "destination": 139605460,
              "xPos": 1,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 6,
              "sourceRoom": 139604492,
              "complement": 139605444
            },
            {
              "_door": 3,
              "address": -2,
              "destination": 139557744,
              "xPos": 0,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 5,
              "sourceRoom": 139604492,
              "complement": -1,
              "isFakeDoor": true
            }
          ],
          "items": [],
          "isFloatingGardenConnector": true
        },
        {
          "_area": 11,
          "_room": 33,
          "address": 139604620,
          "mapX": 139,
          "mapY": 18,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139604604,
          "doors": [
            {
              "_door": 0,
              "address": 139604604,
              "destination": 139604316,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139604620,
              "complement": 139604236
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 34,
          "address": 139604748,
          "mapX": 11,
          "mapY": 20,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139604732,
          "doors": [
            {
              "_door": 0,
              "address": 139604732,
              "destination": 139604316,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 768,
              "direction": 4,
              "sourceRoom": 139604748,
              "complement": 139604252
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 35,
          "address": 139604876,
          "mapX": 139,
          "mapY": 21,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139604860,
          "doors": [
            {
              "_door": 0,
              "address": 139604860,
              "destination": 139604316,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 1536,
              "direction": 4,
              "sourceRoom": 139604876,
              "complement": 139604284
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 36,
          "address": 139605028,
          "mapX": 130,
          "mapY": 19,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139604996,
          "doors": [
            {
              "_door": 0,
              "address": 139604996,
              "destination": 139602796,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139605028,
              "complement": 139602780
            },
            {
              "_door": 1,
              "address": 139605012,
              "destination": 139600324,
              "xPos": 0,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 2,
              "sourceRoom": 139605028,
              "complement": 139600276
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 37,
          "address": 139605180,
          "mapX": 136,
          "mapY": 21,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139605148,
          "doors": [
            {
              "_door": 0,
              "address": 139605148,
              "destination": 139603668,
              "xPos": 0,
              "yPos": 255,
              "destXOffset": 0,
              "destYOffset": 48,
              "destXPos": 0,
              "destYPos": 512,
              "direction": 8,
              "sourceRoom": 139605180,
              "complement": 139603652
            },
            {
              "_door": 1,
              "address": 139605164,
              "destination": 139600924,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 1040,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139605180,
              "complement": 139600908,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 38,
          "address": 139605332,
          "mapX": 137,
          "mapY": 19,
          "mapWidth": 1,
          "mapHeight": 2,
          "doorList": 139605300,
          "doors": [
            {
              "_door": 0,
              "address": 139605300,
              "destination": 139603500,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 256,
              "direction": 4,
              "sourceRoom": 139605332,
              "complement": 139603484
            },
            {
              "_door": 1,
              "address": 139605316,
              "destination": 139603668,
              "xPos": 255,
              "yPos": 1,
              "destXOffset": 0,
              "destYOffset": 0,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139605332,
              "complement": 139603620,
              "access": {
                "doors": [
                  {
                    "door": 0,
                    "locks": [Locks.MALPHAS]
                  }
                ]
              }
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 39,
          "address": 139605460,
          "mapX": 11,
          "mapY": 22,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139605444,
          "doors": [
            {
              "_door": 0,
              "address": 139605444,
              "destination": 139604492,
              "xPos": 255,
              "yPos": 0,
              "destXOffset": 0,
              "destYOffset": 65488,
              "destXPos": 0,
              "destYPos": 0,
              "direction": 4,
              "sourceRoom": 139605460,
              "complement": 139604476
            }
          ],
          "items": []
        },
        {
          "_area": 11,
          "_room": 40,
          "address": 139605548,
          "mapX": 140,
          "mapY": 18,
          "mapWidth": 1,
          "mapHeight": 1,
          "doorList": 139605548,
          "doors": [],
          "items": [],
          "isCreditsRoom": true,
          "isWeirdChaoticRealmRoomDoNotModify": true
        }
      ]
    }
  ];
}

module.exports = getFreshAreas;
