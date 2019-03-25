/* eslint-disable quotes, comma-dangle */
const mockReference = {
    "AGREEMENT_TYPE": [
        {
            "id": 1,
            "code": "E01",
            "description": "Grazing Licence",
            "active": true
        },
        {
            "id": 2,
            "code": "E02",
            "description": "Grazing Permit",
            "active": true
        },
        {
            "id": 3,
            "code": "H01",
            "description": "Haycutting Licence",
            "active": true
        },
        {
            "id": 4,
            "code": "H02",
            "description": "Haycutting Permit",
            "active": true
        }
    ],
    "AGREEMENT_EXEMPTION_STATUS": [
        {
            "id": 1,
            "code": "N",
            "description": "Not Exempt",
            "active": true
        },
        {
            "id": 2,
            "code": "PA",
            "description": "Preparing and Obtaining Approval",
            "active": true
        },
        {
            "id": 3,
            "code": "OA",
            "description": "Obtaining Approval",
            "active": true
        }
    ],
    "LIVESTOCK_TYPE": [
        {
            "id": 1,
            "name": "Cow with Calf",
            "auFactor": 1,
            "active": true
        },
        {
            "id": 2,
            "name": "Bull",
            "auFactor": 1.5,
            "active": true
        },
        {
            "id": 3,
            "name": "Yearling",
            "auFactor": 0.7,
            "active": true
        },
        {
            "id": 4,
            "name": "Horse",
            "auFactor": 1.25,
            "active": true
        },
        {
            "id": 5,
            "name": "Sheep",
            "auFactor": 0.2,
            "active": true
        },
        {
            "id": 6,
            "name": "Alpaca",
            "auFactor": 0.1,
            "active": true
        },
        {
            "id": 7,
            "name": "Ass",
            "auFactor": 1.25,
            "active": true
        },
        {
            "id": 8,
            "name": "Goat",
            "auFactor": 0.2,
            "active": true
        },
        {
            "id": 9,
            "name": "Llama",
            "auFactor": 0.2,
            "active": true
        },
        {
            "id": 10,
            "name": "Mule",
            "auFactor": 1.25,
            "active": true
        }
    ],
    "PLAN_STATUS": [
        {
            "id": 1,
            "code": "C",
            "name": "Created",
            "active": true
        },
        {
            "id": 2,
            "code": "O",
            "name": "Completed",
            "active": true
        },
        {
            "id": 3,
            "code": "P",
            "name": "Pending",
            "active": true
        },
        {
            "id": 4,
            "code": "D",
            "name": "Draft",
            "active": true
        },
        {
            "id": 5,
            "code": "R",
            "name": "Change Requested",
            "active": true
        },
        {
            "id": 6,
            "code": "SD",
            "name": "Staff Draft",
            "active": true
        },
        {
            "id": 7,
            "code": "WM",
            "name": "Wrongly Made - Without Effect",
            "active": true
        },
        {
            "id": 8,
            "code": "SW",
            "name": "Stands - Wrongly Made",
            "active": true
        },
        {
            "id": 9,
            "code": "S",
            "name": "Stands",
            "active": true
        },
        {
            "id": 10,
            "code": "NF",
            "name": "Not Approved - Further Work Required",
            "active": true
        },
        {
            "id": 11,
            "code": "NA",
            "name": "Not Approved",
            "active": true
        },
        {
            "id": 12,
            "code": "A",
            "name": "Approved",
            "active": true
        },
        {
            "id": 13,
            "code": "SR",
            "name": "Submitted For Review",
            "active": true
        },
        {
            "id": 14,
            "code": "SFD",
            "name": "Submitted For Final Decision",
            "active": true
        },
        {
            "id": 15,
            "code": "RR",
            "name": "Recommend Ready",
            "active": true
        },
        {
            "id": 16,
            "code": "RNR",
            "name": "Recommend Not Ready",
            "active": true
        },
        {
            "id": 17,
            "code": "RFD",
            "name": "Ready For Final Decision",
            "active": true
        },
        {
            "id": 18,
            "code": "AC",
            "name": "Awaiting Confirmation",
            "active": true
        },
        {
            "id": 19,
            "code": "RFS",
            "name": "Recommended For Submission",
            "active": true
        },
        {
            "id": 20,
            "code": "MSR",
            "name": "Stands - Review",
            "active": true
        }
    ],
    "CLIENT_TYPE": [
        {
            "id": 1,
            "code": "A",
            "description": "Licensee",
            "active": true
        },
        {
            "id": 2,
            "code": "B",
            "description": "Joint Venture/Partner",
            "active": true
        }
    ],
    "LIVESTOCK_IDENTIFIER_TYPE": [
        {
            "id": 1,
            "description": "Brand",
            "active": true
        },
        {
            "id": 2,
            "description": "Tag",
            "active": true
        }
    ],
    "MINISTER_ISSUE_ACTION_TYPE": [
        {
            "id": 1,
            "name": "Herding",
            "active": true,
            "placeholder": "Frequency, distance and direction livestock will be herded. Identify the high pressure area and/or lower use areas if relevant. Ex. livestock will be herded at least 1 km away from Fish Lake towards the north 3 times per week."
        },
        {
            "id": 2,
            "name": "Livestock Variables",
            "active": true,
            "placeholder": "Type and/or age of livestock to be used to address the issue. If necessary update the grazing schedule to reflect the livestock type. Ex. calves will be 5 months or older before grazing in the riparian area."
        },
        {
            "id": 3,
            "name": "Salting",
            "active": true,
            "placeholder": "Location and timing of salting using an identifiable location and a distance in metres. Ex. remove salt from the NE station (on map) after July 1st."
        },
        {
            "id": 4,
            "name": "Supplemental Feeding",
            "active": true,
            "placeholder": "Type, location and time frame of supplemental feed. Ex. locate protein tub in the south east block in the Pine pasture during the fall rotation."
        },
        {
            "id": 5,
            "name": "Timing",
            "active": true,
            "placeholder": "How livestock use will be timed. Complete the dates for the no grazing window and update the schedule as needed.  Ex. rest the Owl pasture every other year."
        },
        {
            "id": 6,
            "name": "Other",
            "active": true,
            "placeholder": "Describe the action to be taken including what, where and when."
        }
    ],
    "MINISTER_ISSUE_TYPE": [
        {
            "id": 1,
            "name": "Community Watershed",
            "active": true
        },
        {
            "id": 2,
            "name": "Conservation Areas",
            "active": true
        },
        {
            "id": 3,
            "name": "First Nations Values",
            "active": true
        },
        {
            "id": 4,
            "name": "Fish - Wildlife",
            "active": true
        },
        {
            "id": 5,
            "name": "Livestock Distribution",
            "active": true
        },
        {
            "id": 6,
            "name": "Rangeland Health",
            "active": true
        },
        {
            "id": 7,
            "name": "Recreation - Visual",
            "active": true
        },
        {
            "id": 8,
            "name": "Riparian",
            "active": true
        },
        {
            "id": 9,
            "name": "Other",
            "active": true
        }
    ],
    "AMENDMENT_TYPE": [
        {
            "id": 1,
            "code": "MNA",
            "description": "Minor Amendment",
            "active": true
        },
        {
            "id": 2,
            "code": "MA",
            "description": "Mandatory Amendment",
            "active": true
        },
        {
            "id": 3,
            "code": "A",
            "description": "Amendment",
            "active": true
        }
    ],
    "PLANT_SPECIES": [
        {
            "id": 1,
            "name": "Bentgrass",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 2,
            "name": "Bluegrass, Alkali",
            "leafStage": null,
            "stubbleHeight": 8,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 3,
            "name": "Bluegrass, Alpine",
            "leafStage": 2.5,
            "stubbleHeight": 8,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 4,
            "name": "Bluegrass, Canada",
            "leafStage": 2.5,
            "stubbleHeight": 8,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 5,
            "name": "Bluegrass, Cusick's",
            "leafStage": 2.5,
            "stubbleHeight": 8,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 6,
            "name": "Bluegrass, Fowl",
            "leafStage": 2.5,
            "stubbleHeight": 8,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 7,
            "name": "Bluegrass, Kentucky",
            "leafStage": 2.5,
            "stubbleHeight": 8,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 8,
            "name": "Bluegrass, Sandberg",
            "leafStage": 2.5,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 9,
            "name": "Brome, California",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 10,
            "name": "Brome, Fringed",
            "leafStage": 3,
            "stubbleHeight": 10,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 11,
            "name": "Brome, Japanese",
            "leafStage": 3,
            "stubbleHeight": 10,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 12,
            "name": "Brome, Pumpelly",
            "leafStage": 3,
            "stubbleHeight": 10,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 13,
            "name": "Brome, Smooth",
            "leafStage": 3,
            "stubbleHeight": 10,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 14,
            "name": "Cheatgrass",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 15,
            "name": "Fescue, Altai",
            "leafStage": 4.5,
            "stubbleHeight": 17,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 16,
            "name": "Fescue, Creeping Red",
            "leafStage": null,
            "stubbleHeight": 7,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 17,
            "name": "Fescue, Idaho",
            "leafStage": 4,
            "stubbleHeight": 12,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 18,
            "name": "Fescue, Rough",
            "leafStage": 4.5,
            "stubbleHeight": 17,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 19,
            "name": "Fescue, Western",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 20,
            "name": "Foxtail Barley",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 21,
            "name": "Hairgrass, tufted",
            "leafStage": 4,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 22,
            "name": "Junegrass",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 23,
            "name": "Mannagrass",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 24,
            "name": "Mat Muhly",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 25,
            "name": "Needle-and-thread grass",
            "leafStage": 3,
            "stubbleHeight": 12,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 26,
            "name": "Needlegrass, Columbia",
            "leafStage": 3,
            "stubbleHeight": 12,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 27,
            "name": "Needlegrass, Green",
            "leafStage": null,
            "stubbleHeight": 12,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 28,
            "name": "Needlegrass, Richardson's",
            "leafStage": null,
            "stubbleHeight": 12,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 29,
            "name": "Needlegrass, Stiff",
            "leafStage": 3,
            "stubbleHeight": 12,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 30,
            "name": "Nuttal's alkaligrass",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 31,
            "name": "Orchard grass",
            "leafStage": 3,
            "stubbleHeight": 10,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 32,
            "name": "Pinegrass",
            "leafStage": 2.5,
            "stubbleHeight": 15,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 33,
            "name": "Porcupine Grass",
            "leafStage": 3,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 34,
            "name": "Reedgrass, Canada",
            "leafStage": 3,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 35,
            "name": "Reedgrass, Purple",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 36,
            "name": "Ricegrass, Indian",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 37,
            "name": "Ricegrass, Rough-leaved",
            "leafStage": 3,
            "stubbleHeight": 8,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 38,
            "name": "Saltgrass",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 39,
            "name": "Sedge, beaked",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 40,
            "name": "Sedge, Field",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 41,
            "name": "Sedge, Smooth black",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 42,
            "name": "Threeawn",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 43,
            "name": "Timber oatgrass",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 44,
            "name": "Timothy, Alpine",
            "leafStage": null,
            "stubbleHeight": 10,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 45,
            "name": "Timothy, domestic",
            "leafStage": null,
            "stubbleHeight": 8,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 46,
            "name": "Trisetum, nodding",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 47,
            "name": "Trisetum, Spike",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 48,
            "name": "Wheatgrass, bluebunch",
            "leafStage": 4,
            "stubbleHeight": 15,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 49,
            "name": "Wheatgrass, crested",
            "leafStage": 3.5,
            "stubbleHeight": 8,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 50,
            "name": "Wheatgrass, northern",
            "leafStage": 5.5,
            "stubbleHeight": 15,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 51,
            "name": "Wheatgrass, Slender",
            "leafStage": 4,
            "stubbleHeight": 15,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 52,
            "name": "Wheatgrass, western",
            "leafStage": 4,
            "stubbleHeight": 12,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 53,
            "name": "Wildrye, Blue",
            "leafStage": 4,
            "stubbleHeight": 15,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 54,
            "name": "Wildrye, Canada",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 55,
            "name": "Wildrye, Giant",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 56,
            "name": "Other",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": false
        },
        {
            "id": 57,
            "name": "Alder",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 58,
            "name": "Antelope-Brush",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 59,
            "name": "Birch, bog",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 60,
            "name": "Bitterbrush",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 61,
            "name": "Ceanothus, Snowbrush",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 62,
            "name": "Ceanothus, Redstem",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 63,
            "name": "Cherry, Choke",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 64,
            "name": "Cherry, Pin",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 65,
            "name": "Cinquefoil, Shrubby",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 66,
            "name": "Dogwood, Red-osier",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 67,
            "name": "Ninebark",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 68,
            "name": "Oceanspray",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 69,
            "name": "Raspberry sp.",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 70,
            "name": "Rose, Prickly",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 71,
            "name": "Rose, Woods",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 72,
            "name": "Sagebrush, Big",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 73,
            "name": "Sagebrush, Prairie",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 74,
            "name": "Saskatoon",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 75,
            "name": "Snowberry",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 76,
            "name": "Sumac",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 77,
            "name": "Trembling Aspen",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 78,
            "name": "Twinberry, Black",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 79,
            "name": "Twinberry, Red",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 80,
            "name": "Willow spp",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        },
        {
            "id": 81,
            "name": "Other",
            "leafStage": null,
            "stubbleHeight": null,
            "annualGrowth": null,
            "active": true,
            "isShrubUse": true
        }
    ],
    "PLANT_COMMUNITY_TYPE": [
        {
            "id": 1,
            "name": "Alkali saltgrass",
            "active": true
        },
        {
            "id": 2,
            "name": "Awned sedge",
            "active": true
        },
        {
            "id": 3,
            "name": "Barclay willow",
            "active": true
        },
        {
            "id": 4,
            "name": "Beaked sedge",
            "active": true
        },
        {
            "id": 5,
            "name": "Cattail",
            "active": true
        },
        {
            "id": 6,
            "name": "Crested Wheat Grass seeded lower grassland",
            "active": true
        },
        {
            "id": 7,
            "name": "Douglas fir bunchgrass",
            "active": true
        },
        {
            "id": 8,
            "name": "Douglas fir pinegrass",
            "active": true
        },
        {
            "id": 9,
            "name": "Great bulrush",
            "active": true
        },
        {
            "id": 10,
            "name": "Grey leaved willow - glow moss",
            "active": true
        },
        {
            "id": 11,
            "name": "Kootenay middle grassland",
            "active": true
        },
        {
            "id": 12,
            "name": "Lodgepole pine pinegrass",
            "active": true
        },
        {
            "id": 13,
            "name": "Nuttall's salt grass",
            "active": true
        },
        {
            "id": 14,
            "name": "Okanagan lower grassland",
            "active": true
        },
        {
            "id": 15,
            "name": "Peace aspen forest",
            "active": true
        },
        {
            "id": 16,
            "name": "Peace grassland",
            "active": true
        },
        {
            "id": 17,
            "name": "Peace shrubland",
            "active": true
        },
        {
            "id": 18,
            "name": "Scrub birch",
            "active": true
        },
        {
            "id": 19,
            "name": "Southern Interior yellow pine forest",
            "active": true
        },
        {
            "id": 20,
            "name": "Spike rush",
            "active": true
        },
        {
            "id": 21,
            "name": "Sub-alpine fescue grassland",
            "active": true
        },
        {
            "id": 22,
            "name": "Sub-alpine tall forb",
            "active": true
        },
        {
            "id": 23,
            "name": "Thompson Nicola lower grassland",
            "active": true
        },
        {
            "id": 24,
            "name": "Thompson Nicola middle grassland",
            "active": true
        },
        {
            "id": 25,
            "name": "Thompson Nicola upper grassland",
            "active": true
        },
        {
            "id": 26,
            "name": "Tufted hairgrass",
            "active": true
        },
        {
            "id": 27,
            "name": "Other",
            "active": true
        }
    ],
    "PLANT_COMMUNITY_ELEVATION": [
        {
            "id": 1,
            "name": "<500",
            "active": true
        },
        {
            "id": 2,
            "name": "500-699",
            "active": true
        },
        {
            "id": 3,
            "name": "700-899",
            "active": true
        },
        {
            "id": 4,
            "name": "900-1099",
            "active": true
        },
        {
            "id": 5,
            "name": "1100-1299",
            "active": true
        },
        {
            "id": 6,
            "name": "1300-1500",
            "active": true
        },
        {
            "id": 7,
            "name": ">1500",
            "active": true
        }
    ],
    "PLANT_COMMUNITY_ACTION_TYPE": [
        {
            "id": 1,
            "name": "Herding",
            "active": true
        },
        {
            "id": 2,
            "name": "Livestock Variables",
            "active": true
        },
        {
            "id": 3,
            "name": "Salting",
            "active": true
        },
        {
            "id": 4,
            "name": "Supplemental Feeding",
            "active": true
        },
        {
            "id": 5,
            "name": "Timing",
            "active": true
        },
        {
            "id": 6,
            "name": "Other",
            "active": true
        }
    ],
    "MONITORING_AREA_HEALTH": [
        {
            "id": 1,
            "name": "Properly Functioning Condition",
            "active": true
        },
        {
            "id": 2,
            "name": "Slightly at Risk",
            "active": true
        },
        {
            "id": 3,
            "name": "Moderately at Risk",
            "active": true
        },
        {
            "id": 4,
            "name": "Highly at Risk",
            "active": true
        },
        {
            "id": 5,
            "name": "Non-functional",
            "active": true
        }
    ],
    "MONITORING_AREA_PURPOSE_TYPE": [
        {
            "id": 1,
            "name": "Range Readiness",
            "active": true
        },
        {
            "id": 2,
            "name": "Stubble Height",
            "active": true
        },
        {
            "id": 3,
            "name": "Shrub Usage",
            "active": true
        },
        {
            "id": 4,
            "name": "Key Area",
            "active": true
        },
        {
            "id": 5,
            "name": "Other",
            "active": true
        }
    ],
    "MANAGEMENT_CONSIDERATION_TYPE": [
        {
            "id": 1,
            "name": "Concern",
            "active": true
        },
        {
            "id": 2,
            "name": "Opportunity",
            "active": true
        },
        {
            "id": 3,
            "name": "Other",
            "active": true
        }
    ],
    "ADDITIONAL_REQUIREMENT_CATEGORY": [
        {
            "id": 1,
            "name": "Notice or Order",
            "active": true
        },
        {
            "id": 2,
            "name": "Land Use Plan",
            "active": true
        },
        {
            "id": 3,
            "name": "Memorandum of Understanding",
            "active": true
        },
        {
            "id": 4,
            "name": "Agreement",
            "active": true
        },
        {
            "id": 5,
            "name": "Other",
            "active": true
        }
    ]
};
export default mockReference;
