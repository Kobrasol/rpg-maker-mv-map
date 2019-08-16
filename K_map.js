//=============================================================================
// K_map.js
//=============================================================================
/*:
* @plugindesc Отображает миникарту локации
* @author Kobrasol
*
* @param enableMap
* @desc Показать/скрыть (мини карту)
* @type boolean
* @desc Если "ВКЛ", то карта отображается.
* @default true
*
* @param PlayMapX
* @desc Координата X (номер переменной)
* @default 101
*
* @param PlayMapY
* @desc Координата Y (номер переменной)
* @default 102
*
* @help
* ===========================================================================
*                                 Мини карта
*                                 Версия 0.01
*                                  Kobrasol
* ===========================================================================
*
* Этот плагин для отображения мини карты локации
*
*
* ===========================================================================
*  Установка плагина
* ===========================================================================
* Скопируйте плагин K_map.js в папку плагинов и подключите.
*/

(function() {
	var parameters = PluginManager.parameters('K_map');
	var enableMap = Number(parameters['enableMap']);
	var PlayMapX = Number(parameters['PlayMapX']);
	var PlayMapY = Number(parameters['PlayMapY']);
	//Обновление всех окон
	var _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
	Scene_Map.prototype.createAllWindows = function() {
	_Scene_Map_createAllWindows.call(this);
	this._K_map = new K_map(10,10, 120, 60);
	this.addWindow(this._K_map);
};
function K_map() {
this.initialize.apply(this, arguments);
}
K_map.prototype = Object.create(Window_Base.prototype);
K_map.prototype.constructor = K_map;
K_map.prototype.standardPadding = function() {
return 0;
};
K_map.prototype.initialize = function(x, y, width, height) {
Window_Base.prototype.initialize.call(this, x, y, width, height);
this._id = 1;
};
K_map.prototype.update = function() {
	this.contents.clear();
	if ($gameSwitches.value(enableMap)) {
		this.show();
		this.resetTextColor();
		var itemId = $gameVariables.value(PlayMapX);
			if (itemId == 0) {
				itemId = 1;
			}
this.drawIcon($dataItems[itemId].iconIndex, 15, 15);
this.drawTextEx(":" + $gameVariables.value(PlayMapY), 52, 15);
} else {
	this.hide();
    }
}
})();
