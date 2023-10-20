//this is to enable multi vendo setup, set to true when multi vendo is supported
var isMultiVendo = true;

// 0 = traditional (client choose a vendo) , 1 = auto select vendo base on interface name
var multiVendoOption = 0;

//list here all node mcu address for multi vendo setup
var multiVendoAddresses = [
	{
		vendoName: "MALUBAY TOWNSITE", //change accordingly to your vendo name
		vendoIp: "10.20.0.2", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false, //change true if you want to enable eloading station
		hotspotAddress: "10.20.0.1", // use for multi vendo option = 1, means your vendo map to this hotspot and autoselect it when client connected to this
		interfaceName: "vlan20" // hotspot interface name preser
	},{
		vendoName: "MALUBAY DALASA", //change accordingly to your vendo name
		vendoIp: "10.77.0.2", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false, //change true if you want to enable eloading station
		hotspotAddress: "10.77.0.1", // use for multi vendo option = 1, means your vendo map to this hotspot and autoselect it when client connected to this
		interfaceName: "vlan10" // hotspot interface name preser
	},{
		vendoName: "MIRAYAN GYM", //change accordingly to your vendo name
		vendoIp: "10.11.0.26", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false, //change true if you want to enable eloading station
		hotspotAddress: "10.11.0.1", // use for multi vendo option = 1, means your vendo map to this hotspot and autoselect it when client connected to this
		interfaceName: "vlan11" // hotspot interface name preser
	},
	{
		vendoName: "MIRAYAN RM STORE", //change accordingly to your vendo name
		vendoIp: "10.22.0.160", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false, //change true if you want to enable eloading station
		hotspotAddress: "10.22.0.1", // use for multi vendo option = 1, means your vendo map to this hotspot and autoselect it when client connected to this
		interfaceName: "vlan22" // hotspot interface name preser

	}, 
	{
		vendoName: "MIRAYAN JIMENEZ STORE", //change accordingly to your vendo name
		vendoIp: "10.33.0.98", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false, //change true if you want to enable eloading station
		hotspotAddress: "10.33.0.1", // use for multi vendo option = 1, means your vendo map to this hotspot and autoselect it when client connected to this
		interfaceName: "vlan33" // hotspot interface name preser

	}, 
	{
		vendoName: "MIRAYAN JANETH STORE", //change accordingly to your vendo name
		vendoIp: "10.44.0.27", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false, //change true if you want to enable eloading station
		hotspotAddress: "10.44.0.1", // use for multi vendo option = 1, means your vendo map to this hotspot and autoselect it when client connected to this
		interfaceName: "vlan44" // hotspot interface name preser

	}, {
		vendoName: "MIRAYAN BUNDOK", //change accordingly to your vendo name
		vendoIp: "10.55.0.3", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false, //change true if you want to enable eloading station
		hotspotAddress: "10.55.0.1", // use for multi vendo option = 1, means your vendo map to this hotspot and autoselect it when client connected to this
		interfaceName: "vlan55" // hotspot interface name preser

	}, 
	 
];


//0 means its login by username only, 1 = means if login by username + password
var loginOption = 0; //replace 1 if you want login voucher by username + password

//put here the default selected address
var vendorIpAddress = "10.0.0.1";

var dataRateOption = false; //replace true if you enable data rates

//hide pause time / logout true = you want to show pause / logout button
var showPauseTime = true;

//enable extend time button for customers
var showExtendTimeButton = true;

//disable voucher input
var disableVoucherInput = false;

slidingText = 'SEARCH, GAMES, BROWSE? MEKUS-MEKUS MO NA YAN INSAN!'; //sliding text
CstFooter = '- INTERLiNK -'; //footer text
Tittle = 'HOW TO USE?';
Step1 = '1. Click "INSERT COIN" button.';
Step2 = '2. Insert a Coin when LED light is Blinking.';
Step3 = '3. Click "DONE" when finished';