
var lang = {
  annual_sale: {n: '', s: [{i: 92, c: '1', n: '50万以下'}, {i: 93, c: '2', n: '50-99万'}, {i: 94, c: '3', n: '100-499万'}, {i: 95, c: '4', n: '500-999万'}, {i: 96, c: '5', n: '1000万以上'}], i: 20},
  attribute_type: {n: '', s: [{i: 120001, c: '1', n: '商品属性'}, {i: 120002, c: '2', n: '物料属性'}], i: 120},
  contact_role: {n: '', s: [{i: 116, c: '1', n: '总负责人'}, {i: 117, c: '2', n: '询价联系人'}, {i: 118, c: '3', n: '商品资料联系人'}, {i: 119, c: '4', n: '跟单联系人'}, {i: 120, c: '5', n: 'QC检查联系人'}, {i: 121, c: '6', n: '发货联系人'}, {i: 122, c: '7', n: '财会联系人'}, {i: 123, c: '8', n: '其他'}], i: 26},
  freight_cost_type: {n: '', s: [{i: 33, c: 'v', n: '体积'}, {i: 32, c: 'w', n: '重量'}], i: 6},
  goods_pic_type: {n: '', s: [{i: 119004, c: 'a', n: '配件'}, {i: 119002, c: 'b', n: '背图'}, {i: 119007, c: 'd', n: '特色细节'}, {i: 119001, c: 'm', n: '主图'}, {i: 119006, c: 'o', n: '其他'}, {i: 119005, c: 'p', n: '包装'}, {i: 119008, c: 'r', n: '右侧图'}, {i: 119003, c: 's', n: '左侧图'}], i: 119},
  material: {
    n: '',
    s: [
      {i: 149101, c: 'ABS', n: 'ABS'},
      {i: 149103, c: 'AS', n: 'AS'},
      {i: 149650, c: 'boli', n: '玻璃'},
      {i: 149104, c: 'BSK', n: 'BS（K料）'},
      {i: 149251, c: 'buliao', n: '布料'},
      {i: 149250, c: 'burong', n: '布绒'},
      {i: 149054, c: 'buxiugang', n: '不锈钢'},
      {i: 149450, c: 'chixing', n: '磁性'},
      {i: 149202, c: 'ecp', n: '二层皮'},
      {i: 149109, c: 'EVA', n: 'EVA'},
      {i: 1000103, c: 'FZ', n: '肥皂'},
      {i: 149113, c: 'HDPE', n: 'HDPE'},
      {i: 149051, c: 'hejin', n: '合金'},
      {i: 149117, c: 'HIPS', n: 'HIPS（改料）'},
      {i: 1000104, c: 'HM', n: '海绵'},
      {i: 149050, c: 'js', n: '金属'},
      {i: 149112, c: 'LDPE', n: 'LDPE'},
      {i: 1000105, c: 'LM', n: '铝膜'},
      {i: 149252, c: 'maoliao', n: '毛料'},
      {i: 149256, c: 'maozhanbu', n: '毛毡布'},
      {i: 149102, c: 'MBS', n: 'MBS'},
      {i: 149253, c: 'mian', n: '棉'},
      {i: 149700, c: 'mianfen', n: '面粉'},
      {i: 149300, c: 'muzhi', n: '木质'},
      {i: 149254, c: 'niujinbu', n: '牛津布'},
      {i: 149116, c: 'OPP', n: 'OPP'},
      {i: 149150, c: 'other', n: '其它'},
      {i: 149118, c: 'PA', n: 'PA（尼龙）'},
      {i: 149500, c: 'paomo', n: '泡沫'},
      {i: 149111, c: 'PE', n: 'PE'},
      {i: 149114, c: 'PET', n: 'PET（聚酯）'},
      {i: 149200, c: 'pizhi', n: '皮质'},
      {i: 149119, c: 'PMMA', n: 'PMMA（亚克力）'},
      {i: 149110, c: 'PO', n: 'PO'},
      {i: 149115, c: 'PP', n: 'PP（丙料）'},
      {i: 149120, c: 'PPU', n: 'PPU（热塑性聚氨酯）'},
      {i: 149105, c: 'PS', n: 'PS(明苯）'},
      {i: 149204, c: 'pu', n: 'PU'},
      {i: 149122, c: 'PVC2', n: 'PVC（聚氯）'},
      {i: 149600, c: 'rbxiangjiao', n: 'RB橡胶'},
      {i: 149900, c: 'rujiao', n: '乳胶'},
      {i: 149255, c: 'shedingbu', n: '色丁布'},
      {i: 149800, c: 'shefen', n: '色粉'},
      {i: 149550, c: 'shigao', n: '石膏'},
      {i: 149850, c: 'shila', n: '石蜡'},
      {i: 149121, c: 'sio2', n: '二氧化硅'},
      {i: 149100, c: 'sl', n: '塑料'},
      {i: 149400, c: 'taochi', n: '陶瓷'},
      {i: 149201, c: 'tcp', n: '头层皮'},
      {i: 149750, c: 'tefulong', n: '特氟龙（一种不黏涂层）'},
      {i: 149053, c: 'tie', n: '铁'},
      {i: 1000101, c: 'TJ', n: '搪胶'},
      {i: 149052, c: 'tong', n: '铜'},
      {i: 149107, c: 'TPR', n: 'TPR'},
      {i: 149108, c: 'TPU', n: 'TPU'},
      {i: 149350, c: 'zhizhi', n: '纸质'},
      {i: 149203, c: 'zsp', n: '再生皮'}
    ],
    i: 149
  },
  new_protect: {n: '', s: [{i: 154004, c: '0', n: '无'}, {i: 1000123, c: '1', n: '1天'}, {i: 1000126, c: '15', n: '15天'}, {i: 1000124, c: '2', n: '2天'}, {i: 154001, c: '30', n: '30天'}, {i: 154002, c: '60', n: '60天'}, {i: 1000125, c: '7', n: '7天'}, {i: 1000127, c: '90', n: '90天'}], i: 154},
  pkg_type: {n: '', s: [{i: 201001, c: '1', n: '整装'}, {i: 201002, c: '2', n: '分装'}], i: 201},
  prd_composition_main_secondary: {n: '', s: [{i: 124001, c: '1', n: '主'}, {i: 124002, c: '2', n: '副'}], i: 124},
  prd_goods_copyright: {n: '', s: [{i: 107001, c: '1', n: '自有版权'}, {i: 107002, c: '2', n: '第三方版权'}, {i: 107003, c: '3', n: '无授权'}, {i: 107004, c: '4', n: 'A货'}], i: 107},
  prd_goods_out_box_unit: {n: '', s: [{i: 108010, c: '10', n: '外箱'}], i: 108},
  prd_goods_package_lang: {n: '', s: [{i: 155010, c: 'ar', n: '阿拉伯文'}, {i: 155016, c: 'el', n: '希腊文'}, {i: 155001, c: 'en', n: '英文'}, {i: 155009, c: 'es', n: '西班牙文'}, {i: 155007, c: 'fr', n: '法文'}, {i: 155008, c: 'it', n: '意大利文'}, {i: 155006, c: 'ja', n: '日文'}, {i: 155015, c: 'kk', n: '哈萨克文'}, {i: 155005, c: 'ko', n: '韩文'}, {i: 155018, c: 'other', n: '其他'}, {i: 155013, c: 'pt', n: '葡萄牙文'}, {i: 155002, c: 'ru', n: '俄文'}, {i: 155012, c: 'th', n: '泰文'}, {i: 155011, c: 'tr', n: '土耳其文'}, {i: 155004, c: 'uk', n: '乌克兰文'}, {i: 155014, c: 'vi', n: '越南文'}, {i: 155003, c: 'zh', n: '中文'}, {i: 155017, c: 'zh_en', n: '中英文'}], i: 155},
  prd_goods_sku_bulk_type: {n: '', s: [{i: 177001, c: '1', n: '不集单'}, {i: 177002, c: '2', n: '集成品'}, {i: 177003, c: '3', n: '集物料'}], i: 177},
  prd_goods_sku_src: {n: '', s: [{i: 104001, c: '1', n: '原厂'}, {i: 104002, c: '2', n: '自有品牌'}, {i: 104003, c: '3', n: '客户改版'}], i: 104},
  prd_goods_sku_status: {n: '', s: [{i: 110008, c: '-1', n: '审核未通过'}, {i: 110001, c: '0', n: '未上架(新录入)'}, {i: 110002, c: '1', n: '上架审批中'}, {i: 110003, c: '2', n: '已上架(在架销售中)'}, {i: 110004, c: '3', n: '已下架'}, {i: 110005, c: '4', n: '下架审批中'}, {i: 110006, c: '5', n: '待下架(停产)'}, {i: 110007, c: '6', n: '首次上架审批中'}], i: 110},
  prd_goods_sku_stop_reason: {n: '', s: [{i: 729001, c: 'stop', n: '商品停产'}, {i: 729002, c: 'transfer', n: '商品转让'}], i: 729},
  prodev_project_dev_level: {n: '', s: [{i: 861, c: '1', n: '小改'}, {i: 862, c: '2', n: '半自主'}, {i: 863, c: '3', n: '全自主'}], i: 78},
  prodev_revise_redesign_item: {n: '', s: [{i: 109001, c: '1', n: '改产品外包装'}, {i: 109010, c: '10', n: '装量'}, {i: 109011, c: '11', n: '内箱数'}, {i: 109012, c: '12', n: '更改原厂包装结构'}, {i: 109013, c: '13', n: '混装'}, {i: 109002, c: '2', n: '改配件'}, {i: 109003, c: '3', n: '改产品颜色'}, {i: 109004, c: '4', n: '不干胶（可印膜）'}, {i: 109005, c: '5', n: '表面印刷'}, {i: 109006, c: '6', n: '胶件色'}, {i: 109007, c: '7', n: '胶件凹凸件'}, {i: 109008, c: '8', n: 'IC'}, {i: 109009, c: '9', n: '配件'}], i: 109},
  public_sex: {n: '', s: [{i: 457002, c: '0', n: '女'}, {i: 457001, c: '1', n: '男'}], i: 457},
  pub_purchase_unit: {n: '', s: [{i: 129014, c: 'ben', n: '本'}, {i: 129015, c: 'dai', n: '袋'}, {i: 129008, c: 'ge', n: '个'}, {i: 129016, c: 'he', n: '盒'}, {i: 129012, c: 'jian', n: '件'}, {i: 129011, c: 'ke', n: '颗'}, {i: 129003, c: 'kg', n: '千克'}, {i: 129005, c: 'l', n: '升'}, {i: 129009, c: 'ling', n: '令'}, {i: 129006, c: 'm2', n: '平方米'}, {i: 129007, c: 'm3', n: '立方米'}, {i: 129004, c: 'ml', n: '毫升'}, {i: 129017, c: 'PCS', n: 'PCS'}, {i: 129018, c: 'pian', n: '片'}, {i: 129002, c: 'tao', n: '套'}, {i: 129013, c: 'tiao', n: '条'}, {i: 129019, c: 'TONG', n: '桶'}, {i: 129020, c: 'XIANG', n: '箱'}, {i: 129010, c: 'zhang', n: '张'}, {i: 129001, c: 'zhi', n: '只'}], i: 129},
  region_type: {n: '', s: [{i: 456001, c: '1', n: '洲'}, {i: 456010, c: '10', n: '大区'}, {i: 456002, c: '2', n: '国家'}, {i: 456003, c: '3', n: '地区'}, {i: 456004, c: '4', n: '直辖市'}, {i: 456005, c: '5', n: '省'}, {i: 456006, c: '6', n: '副省级城市'}, {i: 456007, c: '7', n: '地级市'}, {i: 456008, c: '8', n: '县/县级市'}, {i: 456009, c: '9', n: '其他'}], i: 456},
  supplier_certification: {n: '', s: [{i: 702001, c: 'BSCI', n: 'BSCI'}, {i: 702006, c: 'EICC', n: 'EICC'}, {i: 702008, c: 'ETI/SEDE', n: 'ETI/SEDE'}, {i: 702007, c: 'GSV/C-TPAT', n: 'GSV/C-TPAT'}, {i: 702003, c: 'ICTI', n: 'ICTI'}, {i: 702004, c: 'ISO', n: 'ISO'}, {i: 702009, c: 'OE100/GOTS', n: 'OE100/GOTS'}, {i: 702002, c: 'SA8000', n: 'SA8000'}, {i: 702005, c: 'WRAP', n: 'WRAP'}], i: 702},
  supplier_nature: {n: '', s: [{i: 78, c: '1', n: '国有企业'}, {i: 79, c: '2', n: '集体企业'}, {i: 80, c: '3', n: '有限责任公司'}, {i: 81, c: '4', n: '股份有限公司'}, {i: 82, c: '5', n: '私营企业'}, {i: 83, c: '6', n: '中外合资企业'}, {i: 84, c: '7', n: '外商投资企业'}, {i: 85, c: '8', n: '个体经营'}], i: 18},
  sup_brand_ownership: {n: '', s: [{i: 123001, c: '1', n: '自有'}, {i: 123002, c: '2', n: '授权'}, {i: 123003, c: '3', n: '私有'}], i: 123},
  sup_certification_type: {
    n: '',
    s: [
      {i: 115002, c: '10P', n: '10P'},
      {i: 115003, c: '13P', n: '13P'},
      {i: 115004, c: '3P', n: '3P'},
      {i: 115005, c: '6P', n: '6P'},
      {i: 115006, c: '7P', n: '7P'},
      {i: 115007, c: '8P', n: '8P'},
      {i: 115008, c: '9P', n: '9P'},
      {i: 115009, c: 'ASTM_F963', n: 'ASTM-F963'},
      {i: 115010, c: 'AZO', n: 'AZO'},
      {i: 115001, c: 'CCC', n: 'CCC'},
      {i: 115011, c: 'CD', n: 'CD'},
      {i: 115012, c: 'CE', n: 'CE'},
      {i: 115013, c: 'C_TPAT', n: 'C-TPAT'},
      {i: 115014, c: 'EMC', n: 'EMC'},
      {i: 115015, c: 'EN60825', n: 'EN60825'},
      {i: 115016, c: 'EN62115', n: 'EN62115'},
      {i: 115017, c: 'EN71', n: 'EN71'},
      {i: 115018, c: 'FCC', n: 'FCC'},
      {i: 115019, c: 'GB19865', n: 'GB19865'},
      {i: 115020, c: 'GB6675', n: 'GB6675'},
      {i: 115021, c: 'GS', n: 'GS'},
      {i: 115022, c: 'HR4040_CPSIA', n: 'HR4040/CPSIA'},
      {i: 115023, c: 'ICTI', n: 'ICTI'},
      {i: 115024, c: 'IEC60825', n: 'IEC60825'},
      {i: 115025, c: 'ILAC', n: 'ILAC'},
      {i: 115026, c: 'ISO8124', n: 'ISO8124'},
      {i: 115027, c: 'PB', n: 'PB'},
      {i: 115028, c: 'PHTHALATES', n: 'PHTHALATES'},
      {i: 115030, c: 'REACH', n: 'REACH'},
      {i: 115031, c: 'ROHS', n: 'ROHS'},
      {i: 115029, c: 'R_TTE', n: 'R&TTE'},
      {i: 115032, c: 'SGS', n: 'SGS'},
      {i: 115033, c: 'UK', n: 'UK证书'},
      {i: 115034, c: 'USP51', n: 'USP51'},
      {i: 115035, c: 'USP61_62', n: 'USP61.62'}
    ],
    i: 115
  },
  sup_supplier_permission_category: {n: '', s: [{i: 709002, c: 'goods', n: '商品管理'}, {i: 709001, c: 'trade', n: '交易管理'}], i: 709},
  unit_jiliang: {n: '', s: [{i: 31, c: 'ben', n: '本'}, {i: 25, c: 'ge', n: '个'}, {i: 1000000, c: 'he', n: '盒'}, {i: 29, c: 'jian', n: '件'}, {i: 855009, c: 'K', n: '克'}, {i: 28, c: 'ke', n: '颗'}, {i: 20, c: 'kg', n: '千克'}, {i: 22, c: 'l', n: '升'}, {i: 26, c: 'ling', n: '令'}, {i: 855011, c: 'LM', n: '厘米'}, {i: 23, c: 'm2', n: '平方米'}, {i: 24, c: 'm3', n: '立方米'}, {i: 21, c: 'ml', n: '毫升'}, {i: 1000122, c: 'pcs', n: 'PCS'}, {i: 19, c: 'tao', n: '套'}, {i: 30, c: 'tiao', n: '条'}, {i: 27, c: 'zhang', n: '张'}, {i: 18, c: 'zhi', n: '只'}], i: 5},
  unit_type: {n: '', s: [{i: 699005, c: 'ban', n: '板'}, {i: 699007, c: 'bao', n: '包'}, {i: 699002, c: 'dai', n: '袋'}, {i: 699012, c: 'guan', n: '罐'}, {i: 699001, c: 'he', n: '盒'}, {i: 699013, c: 'jia', n: '架'}, {i: 699009, c: 'ka', n: '卡'}, {i: 699014, c: 'lan', n: '篮'}, {i: 699003, c: 'nx', n: '内箱'}, {i: 699011, c: 'PCS', n: 'PCS'}, {i: 699008, c: 'pian', n: '片'}, {i: 699010, c: 'tiao', n: '条'}, {i: 699015, c: 'ton', n: '桶'}, {i: 699006, c: 'TONG', n: '筒'}, {i: 699004, c: 'wx', n: '外箱'}, {i: 699016, c: 'zhao', n: '罩'}], i: 699},
  worker_number: {n: '', s: [{i: 97, c: '1', n: '50人以下'}, {i: 98, c: '2', n: '50-99人'}, {i: 99, c: '3', n: '100-499人'}, {i: 100, c: '4', n: '500-999人'}, {i: 101, c: '5', n: '1000人以上'}], i: 21},


  search_result: {n:'',s: ['Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry', 'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'],i:10000},


  prd_items:{n:'', s:[{ name:'蜘蛛侠', pinpai:'超级厉害', leimu:'玩具>积木', num: 3, url: '',}, { name:'美女', pinpai:'时尚', leimu:'玩具>美女', num: 4, url: ''}, { name:'美女2', pinpai:'时尚', leimu:'模特>美女', num: 4, url: ''}, { name:'美女', pinpai:'时尚', leimu:'玩具>美女', num: 41, url: ''}, { name:'图片', pinpai:'一般', leimu:'玩具>画画', num: 5, url: ''}, { name:'美女', pinpai:'时尚', leimu:'玩具>美女', num: 4, url: ''}, { name:'猫', pinpai:'动物', leimu:'玩具>猫', num: 4, url: ''},] ,i:10001}
};
var find = function (lang, codeArray, itemCode) {
  for (var i = 0, k = lang[codeArray[0]].s.length; i < k; i++) {
    if (lang[codeArray[0]].s[i].c == codeArray[1]) {
      return lang[codeArray[0]].s[i];
    }
  }
  return itemCode;
};

var condition = function (itemCode) {
  if (!itemCode) {
    return itemCode;
  }
  var codeArray = itemCode.split('.');
  if (codeArray.length != 2) {
    return itemCode;
  }
  if (!lang[codeArray[0]]) {
    return itemCode;
  }
  if (lang[codeArray[0]].s.length === 0) {
    return itemCode;
  }
  return codeArray;
};

var __getDictMap = function (categoryCode) {
  var list = lang[categoryCode]?lang[categoryCode].s:[];
  var map = {};
  for (var i in list) {
    map[list[i].c] = list[i].n;
  }
  return map;
};

var __getServerDictCategory = function (categoryCode) {
  if (!categoryCode) {
    return categoryCode;
  }
  if (!lang[categoryCode]) {
    return categoryCode;
  }
  return lang[categoryCode];

};

var __getServerDict = function () {
  return lang;
};

var __getServerDictItem = function (itemCode) {
  var codeArray = condition(itemCode);
  if (codeArray === itemCode) {
    return itemCode;
  }
  return find(lang, codeArray, itemCode).n || itemCode;
};


var __getServerDictItemObject = function (itemCode) {
  var codeArray = condition(itemCode);
  if (codeArray === itemCode) {
    return itemCode;
  }
  return find(lang, codeArray, itemCode);
};

module.exports = {
  __getDictMap : __getDictMap,
  __getServerDictCategory : __getServerDictCategory,
  __getServerDict : __getServerDict,
  __getServerDictItem : __getServerDictItem,
  __getServerDictItemObject : __getServerDictItemObject,
};


