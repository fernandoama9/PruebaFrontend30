
// ajax para sacar la info de la base de datos
var menu = [{
	"component": "partners-palm",
	"pathJS": "http://localhost:3001/dist/bundle_container1.js",
	"pathUrl": "/partners"
}, {
	"component": "change-pwd-palm",
	"pathJS": "http://localhost:3003/dist/bundle_chgpwd.js",
	"pathUrl": "/changePwd"
},{
	"component": "mcv-search-palm",
	"pathJS": "http://localhost:3004/dist/bundle_mcvsearch.js",
	"pathUrl": "/mcvSearch"
},{
	"component": "mcv-tran-palm",
	"pathJS": "http://localhost:3004/dist/bundle_mcvtran.js",
	"pathUrl": "/mcvTransaction"
},{
	"component": "add-usr-palm",
	"pathJS": "http://localhost:3003/dist/bundle_addusr.js",
	"pathUrl": "/addUser"
}];
export default  menu;