var x=[
	{
		"id": "g-1",
		"group": "Exterior",
		"categories": [
			{
				"id": "g-1-c-1",
				"name": "Exterior Front",
				"items": [
					{
						"partid": "g-1-c-1-i-1",
						"name": "Bonnet",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"},
							{"id": "d", "name": "Pin Holes,Orangepeel other defects etc on paint surface", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-1-i-2",
						"name": "Bonnet Support Member",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-1-i-3",
						"name": "Cross member",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-1-i-4",
						"name": "Lamp Support",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-1-i-5",
						"name": "Left Apron",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-1-i-6",
						"name": "Right Apron",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-1-i-7",
						"name": "Headlight",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Faded ( L)", "type": "boolean"},
							{"id": "b", "name": "Faded ( R)", "type": "boolean"},
							{"id": "c", "name": "Clamps Broken ( L)", "type": "boolean"},
							{"id": "d", "name": "Clamps Broken ( R)", "type": "boolean"},
							{"id": "e", "name": "Scratch (L)", "type": "boolean"},
							{"id": "f", "name": "Scratch ( R)", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-1-i-8",
						"name": "Windshield wiper",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Wiper blade change ( L)", "type": "boolean"},
							{"id": "b", "name": "Wiper Blade change ( R)", "type": "boolean"},
							{"id": "c", "name": "Wiper arm( L)", "type": "boolean"},
							{"id": "d", "name": "Wiper arm ( R)", "type": "boolean"},
							{"id": "e", "name": "Wiper Motor", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-1-i-9",
						"name": "Windshield glass",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Replacement required", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-1-i-10",
						"name": "Fog Lamp",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Repair fog lamp ( L)", "type": "boolean"},
							{"id": "b", "name": "Repair fog lamp ( R)", "type": "boolean"},
							{"id": "c", "name": "Replace light ( L)", "type": "boolean"},
							{"id": "d", "name": "Replace Light ( R)", "type": "boolean"}
						]
					}, 
					{
						"partid": "g-1-c-1-i-11",
						"name": "Roof",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"},
							{"id": "d", "name": "Pin Holes,Orangepeel other defects etc on paint surface", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-1-i-12",
						"name": "Bumper",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Repair and Repaint required for Both", "type": "boolean"},
							{"id": "b", "name": "Repair and Repaint required for one", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-1-i-13",
						"name": "Decals/emblems/trim pieces in place",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Change emblems", "type": "boolean"},
							{"id": "b", "name": "Change trim pieces", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-1-i-14",
						"name": "Grill",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Repair", "type": "boolean"},
							{"id": "b", "name": "Repalce", "type": "boolean"}
						]
					}
				]
			},
			{
				"id": "g-1-c-2",
				"name": "Exterior Right",
				"items": [
					{
						"partid": "g-1-c-2-i-1",
						"name": "Right Fender",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"},
							{"id": "d", "name": "Pin Holes,Orangepeel other defects etc on paint surface", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-2-i-2",
						"name": "Front Door",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"},
							{"id": "d", "name": "Pin Holes,Orangepeel other defects etc on paint surface", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-2-i-3",
						"name": "Rear Door",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"},
							{"id": "d", "name": "Pin Holes,Orangepeel other defects etc on paint surface", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-2-i-4",
						"name": "Rear Quarter Panel",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"},
							{"id": "d", "name": "Pin Holes,Orangepeel other defects etc on paint surface", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-2-i-5",
						"name": "Running board",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"},
							{"id": "d", "name": "Pin Holes,Orangepeel other defects etc on paint surface", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-2-i-6",
						"name": "Right A-Pillar",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-2-i-7",
						"name": "Right B-Pillar",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-2-i-8",
						"name": "Right C-Pillar",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-2-i-9",
						"name": "Side View mirror",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Repair", "type": "boolean"},
							{"id": "b", "name": "Replace", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-2-i-10",
						"name": "Glass (Front)",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Replace", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-2-i-11",
						"name": "Glass (Rear)",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Repair", "type": "boolean"},
							{"id": "b", "name": "Replace", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-2-i-12",
						"name": "Alloy/Rim",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Need replacement (Front Right)", "type": "boolean"},
							{"id": "b", "name": "Need Replacement (Rear Right)", "type": "boolean"}
						]
					}
			    ]
			},
			{
				"id": "g-1-c-3",
				"name": "Exterior Left",
				"items": [
					{
						"partid": "g-1-c-3-i-1",
						"name": "Left Fender",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"},
							{"id": "d", "name": "Pin Holes,Orangepeel other defects etc on paint surface", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-3-i-2",
						"name": "Front Door",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"},
							{"id": "d", "name": "Pin Holes,Orangepeel other defects etc on paint surface", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-3-i-3",
						"name": "Rear Door",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"},
							{"id": "d", "name": "Pin Holes,Orangepeel other defects etc on paint surface", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-3-i-4",
						"name": "Rear Quarter Panel",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"},
							{"id": "d", "name": "Pin Holes,Orangepeel other defects etc on paint surface", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-3-i-5",
						"name": "Running board",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-3-i-6",
						"name": "Left A-Pillar",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-3-i-7",
						"name": "Left B-Pillar",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired"},
							{"id": "b", "name": "To be Repaired"}
						]
					},
					{
						"partid": "g-1-c-3-i-8",
						"name": "Left C-Pillar",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-3-i-9",
						"name": "Side View mirror",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Repair", "type": "boolean"},
							{"id": "b", "name": "Replace", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-3-i-10",
						"name": "Glass (Front)",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Replace", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-3-i-11",
						"name": "Glass (Rear)",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Repair", "type": "boolean"},
							{"id": "b", "name": "Replace", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-3-i-12",
						"name": "Alloy/Rim",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Need replacement (Front Right)", "type": "boolean"},
							{"id": "b", "name": "Need Replacement (Rear Right) ", "type": "boolean"}
						]
					}
			    ]
			},
			{
				"id": "g-1-c-4",
				"name": "Exterior Rear",
				"items": [
					{
						"partid": "g-1-c-4-i-1",
						"name": "Dicky",
						"ok": [
							{"id": "a", "name": "Original panel , Original paint", "type": "boolean"},
							{"id": "b", "name": "Original panel , repainted", "type": "boolean"},
							{"id": "c", "name": "Replaced Panel , repainted", "type": "boolean"}
						],
						"notok": [
							{"id": "a", "name": "Dry Dent", "type": "boolean"},
							{"id": "b", "name": "Paint", "type": "boolean"},
							{"id": "c", "name": "Panel change & Paint", "type": "boolean"},
							{"id": "d", "name": "Pin Holes,Orangepeel other defects etc on paint surface", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-4-i-2",
						"name": "Rear Left Quarter Panel",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-4-i-3",
						"name": "Rear Right Quarter Panel",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-4-i-4",
						"name": "Check exterior of catalytic converter for damage",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-1-c-4-i-5",
						"name": "Dicky Floor",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Already Repaired", "type": "boolean"},
							{"id": "b", "name": "To be Repaired", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-4-i-6",
						"name": "Tail Light",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Change light ( L)", "type": "boolean"},
							{"id": "b", "name": "Change light ( R)", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-4-i-7",
						"name": "Rear Glass wiper",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Wiper Blade change", "type": "boolean"},
							{"id": "b", "name": "Wiper arm change", "type": "boolean"},
							{"id": "c", "name": "Wiper Motor", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-4-i-8",
						"name": "Windshield glass",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Replacement required", "type": "boolean"}
						]
					},
					{
						"partid": "g-1-c-4-i-9",
						"name": "Bumper",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Paint", "type": "boolean"},
							{"id": "b", "name": "Change + Paint", "type": "boolean"}
						]
					}
				]
			}
		]
	},
	{
		"id": "g-2",
		"group": "Interior",
		"categories": [
			{
				"id": "g-2-c-1",
				"name": "Interior/Electrical",
				"items": [
					{
						"partid": "g-2-c-1-i-1",
						"name": "Dashboard",
						"ok": [],
						"notok": [
							{"id": "a", "name": "clean", "type": "boolean"},
							{"id": "b", "name": "change", "type": "boolean"}
						]
					},
					{
						"partid": "g-2-c-1-i-2",
						"name": "Seats",
						"ok": [],
						"notok": [
							{"id": "a", "name": "clean", "type": "boolean"},
							{"id": "b", "name": "change", "type": "boolean"}
						]
					},
					{
						"partid": "g-2-c-1-i-3",
						"name": "Head Rest",
						"ok": [],
						"notok": [
							{"id": "a", "name": "clean", "type": "boolean"},
							{"id": "b", "name": "change", "type": "boolean"},
							{"id": "c", "name": "N/A", "type": "boolean"}
						]
					},
					{
						"partid": "g-2-c-1-i-4",
						"name": "Glove Box",
						"ok": [],
						"notok": [
							{"id": "a", "name": "clean", "type": "boolean"},
							{"id": "b", "name": "change", "type": "boolean"}
						]
					},
					{
						"partid": "g-2-c-1-i-5",
						"name": "Door Trim",
						"ok": [],
						"notok": [
							{"id": "a", "name": "clean", "type": "boolean"},
							{"id": "b", "name": "change", "type": "boolean"}
						]
					},
					{
						"partid": "g-2-c-1-i-6",
						"name": "Carpet",
						"ok": [],
						"notok": [
							{"id": "a", "name": "clean", "type": "boolean"},
							{"id": "b", "name": "change", "type": "boolean"}
						]
					},
					{
						"partid": "g-2-c-1-i-7",
						"name": "Partial Shelf",
						"ok": [],
						"notok": [
							{"id": "a", "name": "clean", "type": "boolean"},
							{"id": "b", "name": "change", "type": "boolean"}
						]
					},
					{
						"partid": "g-2-c-1-i-8",
						"name": "Roof lining",
						"ok": [],
						"notok": [
							{"id": "a", "name": "clean", "type": "boolean"},
							{"id": "b", "name": "change", "type": "boolean"}
						]
					},
					{
						"partid": "g-2-c-1-i-9",
						"name": "Ac vents/Grill",
						"ok": [],
						"notok": [
							{"id": "a", "name": "clean", "type": "boolean"},
							{"id": "b", "name": "change", "type": "boolean"}
						]
					},
					{
						"partid": "g-2-c-1-i-10",
						"name": "Remote key fob",
						"ok": [],
						"notok": [
							{"id": "a", "name": "change", "type": "boolean"}
						]
					},
					{
						"partid": "g-2-c-1-i-11",
						"name": "Check glovebox operation and lighting",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Repair", "type": "boolean"}
						]
					},
					{
						"partid": "g-2-c-1-i-12",
						"name": "Check for torn/worn pedal rubbers",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Change pedal rubbers", "type": "boolean"}
						]
					},
					{
						"partid": "g-2-c-1-i-13",
						"name": "Check visually SRS/airbag",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-14",
						"name": "Check for airbag system",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-15",
						"name": "Check head restraint operation/adjustment",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-16",
						"name": "Door/liftgate/trunk",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-17",
						"name": "Seat adjuster",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-18",
						"name": "Steering column adjuster",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-19",
						"name": "Check memory and function of steering column controls",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-20",
						"name": "Check panel illumination including dimmer",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-21",
						"name": "Check front seat electric motor operation and memory",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-22",
						"name": "Ignition switch",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-23",
						"name": "Trip computer/overhead console",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-24",
						"name": "Heated seat",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-25",
						"name": "Heating, ventilation, air conditioning system",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-26",
						"name": "Turn signal/hazard lamps",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-27",
						"name": "Horn",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-28",
						"name": "Brake lamps",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-29",
						"name": "Headlamp/high beam/low beam/Beam adjuster",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-30",
						"name": "Interior lamps",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-31",
						"name": "Door locks (all switches)",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-32",
						"name": "Check fuel flap function",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-33",
						"name": "Check toolkit and locking wheel nut",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-34",
						"name": "Check function of headlight washers",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-35",
						"name": "Check the child safety function",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-36",
						"name": "Check armrests, handles, trims and dashboards paddling for condition, damage and tears",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-37",
						"name": "Rear defroster",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-38",
						"name": "Seat belts",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-39",
						"name": "Convertible top",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-40",
						"name": "Sunroof",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-41",
						"name": "Check speedometer operation",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-42",
						"name": "Check odometer/trip counter operating correctly",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-43",
						"name": "Power Window",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-44",
						"name": "Check function of satellite navigation system and navigation software; update if necessary check for rattles",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-45",
						"name": "Cruise control",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-46",
						"name": "Instrument panel/gauges",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-2-c-1-i-47",
						"name": "Sound and/or entertainment system",
						"ok": [],
						"notok": []
					}
				]
			}
		]
	},
	{
		"id": "g-3",
		"group": "Function & Drive train",
		"categories": [
			{
				"id": "g-3-c-1",
				"name": "Functions",
				"items": [
					{
						"partid": "g-3-c-1-i-1",
						"name": "Engine oil leakage",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Tapped cover leakage", "type": "boolean"},
							{"id": "b", "name": "Timing side leakage", "type": "boolean"},
							{"id": "c", "name": "Oil seal leakage", "type": "boolean"},
							{"id": "d", "name": "Chamber leakage", "type": "boolean"},
							{"id": "e", "name": "Chamber damaged", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-2",
						"name": "Coolant leakage",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Defective water pump", "type": "boolean"},
							{"id": "b", "name": "Coolant bottle damaged", "type": "boolean"},
							{"id": "c", "name": "Hoose pipe leakage", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-3",
						"name": "Radaitor",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Blockage", "type": "boolean"},
							{"id": "b", "name": "Damage", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-4",
						"name": "Abnormal Noise",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Tappet Adjustment", "type": "boolean"},
							{"id": "b", "name": "Timing Adjustment", "type": "boolean"},
							{"id": "c", "name": "Knocking ( In diesel)", "type": "boolean"},
							{"id": "d", "name": "Cranking Noise", "type": "boolean"},
							{"id": "e", "name": "Over Hauling", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-5",
						"name": "Black Smoke",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Thottle body choke", "type": "boolean"},
							{"id": "b", "name": "Timing Valve issue", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-6",
						"name": "Engine Rpm Defect",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Air filter choke", "type": "boolean"},
							{"id": "b", "name": "Throttle body choke", "type": "boolean"},
							{"id": "c", "name": "RPM setting required", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-7",
						"name": "Starter Motor",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Battery Replace", "type": "boolean"},
							{"id": "b", "name": "Starter motor Repair", "type": "boolean"},
							{"id": "c", "name": "Starter motor replace", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-8",
						"name": "Ease of starting",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-9",
						"name": "Defective belts",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Alternator belt", "type": "boolean"},
							{"id": "b", "name": "Alternator bearing", "type": "boolean"},
							{"id": "c", "name": "Ac belt", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-10",
						"name": "Engine Hoses",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-11",
						"name": "Exhuast System",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-12",
						"name": "Shocker/Strut",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Front left change", "type": "boolean"},
							{"id": "b", "name": "Front Right Change", "type": "boolean"},
							{"id": "c", "name": "Rear Left change", "type": "boolean"},
							{"id": "d", "name": "Rear Right change", "type": "boolean"},
							{"id": "e", "name": "Change any two", "type": "boolean"},
							{"id": "f", "name": "Change any Three", "type": "boolean"},
							{"id": "g", "name": "Change all four", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-13",
						"name": "Rubber mounts",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Front left change", "type": "boolean"},
							{"id": "b", "name": "Front Right Change", "type": "boolean"},
							{"id": "c", "name": "Rear Left change", "type": "boolean"},
							{"id": "d", "name": "Rear Right change", "type": "boolean"},
							{"id": "e", "name": "Change any two", "type": "boolean"},
							{"id": "f", "name": "Change any Three", "type": "boolean"},
							{"id": "g", "name": "Change all four", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-14",
						"name": "suspension arm",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Change left", "type": "boolean"},
							{"id": "b", "name": "Change right", "type": "boolean"},
							{"id": "c", "name": "Change both", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-15",
						"name": "Steering assembly",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-16",
						"name": "Steering wheel centre alignment",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-17",
						"name": "Steering load while turing",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-18",
						"name": "Steering wheel straight stability",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-19",
						"name": "Wheel balance",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-20",
						"name": "Brake Shoe Damage",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Any two Change", "type": "boolean"},
							{"id": "b", "name": "All four change", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-21",
						"name": "Wheel Cylinder",
						"ok": [],
						"notok": [
							{"id": "a", "name": "One damaged", "type": "boolean"},
							{"id": "b", "name": "Both damaged", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-22",
						"name": "Brake Booster",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Damaged", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-23",
						"name": "Brake Disc",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Front Left", "type": "boolean"},
							{"id": "b", "name": "Front Right", "type": "boolean"},
							{"id": "c", "name": "Rear Left", "type": "boolean"},
							{"id": "d", "name": "Rear Right", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-24",
						"name": "Brake calliper movement",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-25",
						"name": "Antilock brake system",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-26",
						"name": "Overall Breaking system",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-27",
						"name": "Brakes shoes to have more than 50% lining",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Any two change", "type": "boolean"},
							{"id": "b", "name": "All Four to be changed", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-28",
						"name": "Acceleration performance",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-29",
						"name": "Clutch Defect",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Minor adjustment ( Wire change , Clutch cylinder)", "type": "boolean"},
							{"id": "b", "name": "Major ( Clutch plate, Pressure plate, release bearing,Clutch plate)", "type": "boolean"}
						]
					},
					{
						"partid": "g-3-c-1-i-30",
						"name": "Transmision / Differential oil leakage",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-31",
						"name": "Gear Shifting",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-32",
						"name": "Gear Box Noise",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-33",
						"name": "Automatic transmission fluid and filter",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-34",
						"name": "Manual transmission fluid",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-35",
						"name": "AT shift quality/AT shift points No Jerks while shifting",
						"ok": [
							{"id": "a", "name": "OK", "type": "boolean"},
							{"id": "b", "name": "N/A", "type": "boolean"}
						],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-36",
						"name": "Transfer case all wheel drive performance",
						"ok": [],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-37",
						"name": "Front Differential Fluid (4*4 only)",
						"ok": [
							{"id": "a", "name": "OK", "type": "boolean"},
							{"id": "b", "name": "N/A", "type": "boolean"}
						],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-38",
						"name": "Rear differential fluid ( 4*4, RWD, AWD)",
						"ok": [
							{"id": "a", "name": "OK", "type": "boolean"},
							{"id": "b", "name": "N/A", "type": "boolean"}
						],
						"notok": []
					},
					{
						"partid": "g-3-c-1-i-39",
						"name": "Transfer case fluid ( 4*4, AWD)",
						"ok": [
							{"id": "a", "name": "OK", "type": "boolean"},
							{"id": "b", "name": "N/A", "type": "boolean"}
						],
						"notok": []
					}
				]
			}
		]
	},
	{
		"id": "g-4",
		"group": "Misc",
		"categories": [
			{
				"id": "g-4-c-1",
				"name": "Misc",
				"items": [
					{
						"partid": "g-4-c-1-i-1",
						"name": "Identify non-MG accessories",
						"ok": [],
						"notok": []
					}
				]
			}
		]
	},
	{
		"id": "g-5",
		"group": "Tyres",
		"group_id": "tyres",
		"categories": [
			{
				"id": "g-5-c-1",
				"name": "Tyres",
				"items": [
					{
						"partid": "g-5-c-1-i-1",
						"name": "LF",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Replacement", "type": "boolean"}
						]
					},
					{
						"partid": "g-5-c-1-i-2",
						"name": "RF",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Replacement", "type": "boolean"}
						]
					},
					{
						"partid": "g-5-c-1-i-3",
						"name": "LR",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Replacement", "type": "boolean"}
						]
					},
					{
						"partid": "g-5-c-1-i-4",
						"name": "RR",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Replacement", "type": "boolean"}
						]
					},
					{
						"partid": "g-5-c-1-i-5",
						"name": "Stepney",
						"ok": [],
						"notok": [
							{"id": "a", "name": "Replacement", "type": "boolean"}
						]
					}
				]
			} 
		]
	},
	{
		"id": "g-6",
		"group": "Accidental Details",
		"group_id": "acc_details",
		"categories": [{
			"id": "g-6-c-1",
			"name": "Accidental Details",
			"items": false,
			"remarks":""
		}]
	}
]