/**
 * 涓枃233鐝綔涓氬叕鍛婃澘 - 浜や簰閫昏緫
 */

// ========================================
// 浣滀笟鏁版嵁 
// ========================================

const homeworkData = {
  homeworks: [
    {
      id: "hw004",
      subject: "闆ㄨ鍫?,
      title: "姘戦棿鏂囧闆ㄨ鍫傜瓟棰?,
      description: "浣滀笟浠ラ檮浠剁被鍨嬫彁浜わ紝涓嶈鐩存帴澶嶅埗绮樿创鏂囧瓧銆?,
      publishDate: "2026-04-13",
      dueDate: "2026-04-19",
      status: "active"
    },
    {
      id: "hw005",
      subject: "闆ㄨ鍫?,
      title: "鏂囧璇勮涓庡啓浣滈洦璇惧爞绛旈",
      description: "鏃犺姹傘€?,
      publishDate: "2026-04-13",
      dueDate: "2026-04-19",
      status: "active"
    },
    {
      id: "hw008",
      subject: "鏅€氫綔涓?,
      title: "搴旂敤璇█瀛﹁鍫備綔涓?,
      description: "鍗曞厓娴嬭瘯\n\n瑕佹眰锛歕n1. 鍐欏ソ涓汉淇℃伅\n2. 涓婅鍓嶄氦缁欐垜",
      publishDate: "2026-04-21",
      dueDate: "2026-04-22",
      status: "active"
    },
    {
      id: "hw009",
      subject: "鏅€氫綔涓?,
      title: "搴旂敤璇█瀛﹁涔﹀績寰?,
      description: "璇讳功蹇冨緱\n\n鎻愪氦椤哄簭锛堣鍦ㄤ竴璧凤級锛歕n1. 灏侀潰锛氱敤绋跨焊鍐欙紝娓呮鍐欐槑璇剧▼鍚嶇О銆佷笓涓氥€佺彮绾с€佸鍚嶃€佸鍙穃n2. 鎵撳嵃鐨勬湡鍒婅鏂囧師鏂嘰n3. 璇讳功蹇冨緱锛堟墜鍐欙級锛屾斁鍦ㄨ鏂囦笅闈n\n鈿狅笍 涓婅鍓嶄氦缁欐垜",
      publishDate: "2026-04-21",
      dueDate: "2026-04-22",
      status: "active"
    },
    {
      id: "hw006",
      subject: "璁烘枃鍐欎綔",
      title: "涔犺繎骞虫€讳功璁板叧浜庢暀鑲查噸瑕佽杩扮爺绌?鏈熸湯璁烘枃",
      description: "鑰冩牳棰樼洰锛歕n璇峰洿缁曚範杩戝钩鎬讳功璁板叧浜庢暀鑲查噸瑕佽杩颁腑\"鍧氭寔鎶婄珛寰锋爲浜轰綔涓烘牴鏈换鍔"鎴朶"鍧氭寔鎶婃暀甯堥槦浼嶅缓璁句綔涓哄熀纭€宸ヤ綔\"鐨勫唴瀹癸紝缁撳悎鑷繁鐨勪笓涓氬涔犵粡鍘嗗拰璁よ瘑锛屽啓浣滀竴绡囪鏂囥€俓n\n瑕佹眰锛歕n1. 浜岄€変竴锛岃鑷懡棰橈紝缁熶竴鐢ㄥ鏍＄瓟棰樼焊锛岄粦鑹茬瑪鎵嬪啓\n2. 鐢ㄥ鏈鏂囩殑閫氱敤鏍煎紡锛屽瓧鏁颁笉灏戜簬2000瀛梊n3. 鑷繁鐙珛瀹屾垚锛屼弗绂佹妱琚紝鍙彁鍓嶅噯澶嘰n4. 绗?鍛ㄨ绋嬬粨鏉熷悗锛岀敱瀛︿範濮斿憳缁熶竴鏀堕綈锛屾寜鐝骇銆佸鍙锋帓鍒楁暣榻愪笂浜n5. 娉ㄦ剰锛氫綔涓氳璇︾粏鍐欏嚭瀛﹂櫌锛屼笓涓氥€佸勾绾с€佺彮绾с€佸鍚嶅拰瀛﹀彿\n\n璁烘枃鏍煎紡瑕佹眰锛歕n鏍囬锛氱畝鏄庢鎷牳蹇冨唴瀹筡n浣滆€咃細缃叉槑濮撳悕\n鎽樿锛氳鏄庣爺绌剁洰鐨勩€佹柟娉曘€佺粨鏋滃拰缁撹\n鍏抽敭璇嶏細3-5涓牳蹇冩湳璇璡n姝ｆ枃锛歕n  搴忚锛氳儗鏅拰鎰忎箟\n  璁鸿瘉锛氬垎鐐硅杩帮紙1銆?銆?銆?绛夛級\n  缁撹锛氭€荤粨鎴愭灉\n鍙傝€冩枃鐚細鍒楀嚭寮曠敤璧勬枡",
      publishDate: "2026-04-14",
      dueDate: "2026-04-20",
      status: "active"
    },
    {
      id: "hw007",
      subject: "璁烘枃鍐欎綔",
      title: "搴旂敤璇█瀛︾粨璇捐鏂?,
      description: "璁烘枃閫夐鑼冨洿锛歕n1. 缁撳悎璇█鏁欏鐨勬湰璐ㄥ睘鎬т笌鏍稿績鐩爣锛岃皥璋堜綘瀵瑰綋鍓嶈鏂囨暀瀛︾幇鐘剁殑璁よ瘑涓庢€濊€僜n2. 鍥寸粫銆岃鐮佽浆鎹㈢殑浜ら檯鍔熻兘銆嶈繖涓€鏍稿績锛屼换閫変竴涓爺绌惰搴︼紝闃愯堪浣犵殑鐞嗚В涓庣湅娉昞n3. 鍥寸粫銆岃瑷€鐨勭ぞ浼氬彉浣撱€嶏紝浠婚€変竴涓叿浣撹瑙掞紝璋堣皥浣犵殑瑙傜偣涓庡垎鏋怽n4. 缃戠粶娴佽璇簲鐢ㄥ強鍏剁ぞ浼氭枃鍖栧績鐞嗗垎鏋怽n5. 鍥寸粫銆屽簲鐢ㄨ瑷€瀛︾殑鑼冨洿銆嶏紝浠婚€変竴涓叿浣撹瑙掕繘琛屽垎鏋怽n6. 缁撳悎姹夎浣滀负鍥介檯閫氱敤璇殑鏃朵唬鑳屾櫙锛岃皥璋堜綘瀵瑰綋鍓嶅浗闄呬腑鏂囨暀鑲茬殑璁よ瘑涓庢€濊€僜n7. 鍏朵粬涓庛€婂簲鐢ㄨ瑷€瀛︺€嬭绋嬬浉鍏崇殑涓婚\n\n璁烘枃瑕佹眰锛歕n1. 浠婚€夊叾涓€锛岃嚜鎷熼鐩紝鍐欎竴绡囦笉灏戜簬3000瀛楃殑璁烘枃\n2. 闇€鍖呭惈銆岄鐩€佹憳瑕併€佸叧閿瘝銆佹鏂囥€佸弬鑰冩枃鐚€嶇瓑閮ㄥ垎\n3. 璁虹偣鏄庣‘锛岃璇佸厖鍒嗭紱鐞嗚涓庡疄闄呯浉鑱旂郴锛屾湁鑷繁鐨勮鐐瑰拰鎬濊€僜n4. 涓嫳鏂囨憳瑕併€佷腑鑻辨枃鍏抽敭璇峔n5. 鍒嗙骇鏍囬鏍煎紡锛氫竴绾э紙涓€銆侊級銆佷簩绾э紙锛堜竴锛夛級銆佷笁绾э紙1.锛夈€佸洓绾э紙锛?锛夛級銆佷簲绾э紙鈶狅級\n6. 鍙傝€冩枃鐚?-5绡囷紙瀛︿綅璁烘枃D銆佷笓钁桵銆佹湡鍒婃枃绔燡锛塡n\n鈿狅笍鎸夋瘯涓氳鏂囨瑙勬牸寮忓啓锛屾牸寮忎笉鍚堟牸鑰呬笉鏀捐繘璁烘枃闆哱n\n鎻愪氦淇℃伅锛歕n- 鎻愪氦鏃堕棿锛氫簲涓€鍋囨湡鍚庯紙绗?0鍛級\n- 鎻愪氦鍦扮偣锛?06鍔炲叕瀹?,
      publishDate: "2026-04-15",
      dueDate: "2026-05-06",
      status: "active"
    },
            {
      id: "hw011",
      subject: "鏅€氫綔涓?,
      title: "鏂囧姒傝鏈熶腑浣滀笟",
      description: "鐢ㄧ粨鏋勪富涔夋柟娉曞垎鏋愪竴閮ㄤ綔鍝侊紝绋跨焊鎵嬪啓锛屾壂鎻忔垚PDF鎻愪氦锛屾埅姝㈡椂闂达細5鏈?鏃ャ€俓n\nAI 鍙傝€冩彁绀鸿瘝锛歕n\n# 浠诲姟\n璇风敤1+1+1+...=1鐨勭粨鏋勪富涔夋柟娉曞垎鏋愶紙锛堬紙杩欓噷鏄綘鐨勪綔鍝佸悕锛夛級锛夈€俓n\n# 鏍稿績鐞嗗康\n鎶婁綔鍝佹媶鎴愬涓郊姝ゅ绔嬫垨宸紓鏄捐憲鐨勫崟鍏冿紙姣忎釜鍗曞厓鏄竴涓?锛夈€傝繖浜涘崟鍏冨彲浠ユ潵鑷細浜虹墿鎯呯华鍙樺寲銆佹晠浜嬪彂灞曢樁娈点€佸悓涓€瑙掕壊鐨勪笉鍚屼晶闈€佷笉鍚屼环鍊艰鐨勫鎾炵瓑鈥斺€斿叿浣撲粠鍝釜瑙掑害鎷嗭紝鐢变綘鑷繁鍐冲畾銆俓n\n鎷嗗嚭鏉ョ殑1鐨勬暟閲忚嚦灏戜负4涓€傛瘡涓?涔嬮棿蹇呴』鏈夋竻鏅扮殑瀵圭珛鎴栧樊寮傚叧绯汇€傛渶鍚庤璁鸿瘉锛氭墍鏈夎繖浜涚湅浼煎垎鏁ｇ殑纰庣墖锛屽浣曞叡鍚屾暣鍚堟垚涓€涓粺涓€鐨勪富棰橈紙閭ｄ釜=1锛夈€俓n\n# 杈撳嚭鏍煎紡锛堜弗鏍奸伒瀹堬級\n\n1. 绗竴娈碉細璇存槑浣犻€夋嫨浜嗗摢閮ㄤ綔鍝侊紝浠ュ強浣犲喅瀹氫粠浠€涔堣搴︽媶瑙ｃ€俓n\n2. 绗簩娈碉細鐢ㄤ竴涓〃鏍煎睍绀轰綘鎷嗗嚭鐨勬墍鏈?銆傝〃鏍肩殑绗竴鍒楁槸鍗曞厓搴忓彿+鍗曞厓鍚嶇О銆傚叾浣欏垪鏄綘鑷閫夋嫨鐨?-5涓姣旂淮搴︼紙涓嶈兘鐢ㄨ韩浠姐€佹姳璐熴€佸涓栥€佸媷姘斻€佷汉鐢燂級銆傛帹鑽愮淮搴︼細鍐呭湪椹卞姩鍔涖€佸鍦ㄨ涓洪鏍笺€佸鏃堕棿鐨勬劅鍙椼€佸閲戦挶鐗╄川鐨勬€佸害銆佸浠栦汉鐩厜鐨勪緷璧栫▼搴︺€佽瑷€铏氬疄姣斾緥銆佽韩浣撳姵鍔ㄧ▼搴︺€佸够鎯充笌鐜板疄鐨勪氦闆嗘柟寮忋€佹儏缁富鑹茶皟绛夈€俓n\n3. 绗笁娈靛強涔嬪悗锛氱敤鑷劧娈佃惤閫愪竴鎻忚堪姣忎釜1涔嬮棿鐨勫绔嬪叧绯伙紝瑙ｉ噴涓轰粈涔堝畠浠槸1浠ュ強瀹冧滑濡備綍鐩镐簰鍚﹀畾鎴栭€掕繘銆俓n\n4. 鏈€鍚庝竴娈碉細鎬荤粨璁鸿瘉1+1+1+...=1锛屽嵆鎵€鏈夌鐗囧浣曟瀯鎴愪竴涓粺涓€涓婚銆傚瓧鏁颁笉闄愶紝浣嗛渶瀹屾暣銆?,
      publishDate: "2026-04-28",
      dueDate: "2026-05-07",
      status: "active"
    }

,
    {
      id: "hw001",
      subject: "瀹炶返瑕佹眰",
      title: "2023绾у骞磋鏂?,
      description: "姣忎釜鐝殑璐熻矗鑰佸笀鍙畨鎺掑鐢熻嚜鎷熼鐩紝鑰佸笀瀹℃牳锛屼豢鐓ф瘯涓氳鏂囨ā寮忥紝璁╂墍甯︾彮绾у鐢熸瘡浜哄啓涓€绡囪鏂囥€俓n\n瑕佹眰锛歕n1. 浠跨収姣曚笟璁烘枃妯″紡鎾板啓\n2. 瀛楁暟鍦?000瀛楀乏鍙砛n3. 鍙墦鍗版彁浜n4. 闇€缁忚€佸笀瀹℃牳棰樼洰\n5. 涓嬭浇妯℃澘锛?a href='./files/thesis-template.doc' download>鐐瑰嚮涓嬭浇姣曚笟璁烘枃妯℃澘</a>",
      publishDate: "2026-04-13",
      dueDate: "2026-05-17",
      status: "active"
    },
    {
      id: "hw010",
      subject: "璁烘枃鍐欎綔",
      title: "鏂囧璇勮涓庡啓浣滅粨璇捐鏂?,
      description: "浠庣ぞ浼氬巻鍙叉壒璇勩€佸舰寮忎富涔夋壒璇勩€佽嫳缇庢柊鎵硅瘎涓换閫変竴绉嶆壒璇勬柟娉曪紝瀵逛互涓嬩綔瀹剁殑涓€绡囩煭绡囧皬璇磋繘琛屽垎鏋愩€俓n\n鍙€変綔瀹讹細椴佽繀銆佹矆浠庢枃銆佸紶鐖辩幉銆佹豹鏇剧ズ銆佺櫧鍏堝媷銆佷綑鍗庛€佽嫃绔ャ€佽帿瑷€锛堟棭鏈熺煭绡囷級銆佸璇冨か銆佹捣鏄庡▉銆佸崥灏旇但鏂€佸崱浣沑n\n璁烘枃瑕佹眰锛歕n锛?锛夐鐩嚜鎷燂紝椤讳綋鐜颁綘鐨勬牳蹇冭鐐癸紙鑰岄潪浠匼"XX浣滃搧鍒嗘瀽\"锛夈€俓n锛?锛夋竻鏅扮晫瀹氫綘鎵€閫夋壒璇勬柟娉曠殑鏍稿績姒傚康锛堝\"闄岀敓鍖朶"\"寮犲姏\"绛夛級銆俓n锛?锛夌粨鍚堟枃鏈叿浣撶粏鑺傚睍寮€鍒嗘瀽锛岃鏂囬』鏈夋枃鏈瘉鎹敮鎾戙€俓n锛?锛夊瓧鏁颁笉灏戜簬2000瀛椼€俓n锛?锛夐伒瀹堝鏈鑼冿紝涓嶅緱鎶勮銆?,
      publishDate: "2026-04-21",
      dueDate: "2026-04-29",
      status: "active"
    },
    {
      id: "hw002",
      subject: "瀹炶返瑕佹眰",
      title: "2023绾у井鏍兼暀瀛﹀疄璺?,
      description: "瀹炶返鏃堕棿锛氱10鍛╘n\n闇€瀹屾垚浠ヤ笅鍐呭锛歕n1. 涓€绡囧畬鏁寸殑鏁欐锛堥珮涓垵涓鏂囦换閫変竴绡囷紝鐢靛瓙鎵嬪啓鐨嗗彲锛塡n2. 涓€绡囧畬鏁寸殑PPT\n3. 褰曡瑙嗛绾?-10鍒嗛挓锛堟ā鎷熺湡瀹炶鍫傦紝鏈夋澘涔︼級\n4. 姣忕粍璁ㄨ鎬荤粨锛屼竴缁勪氦涓€浠斤紙鍙墦鍗帮級\n5. 姣忎綅鍚屽浜や竴浠藉疄璺垫€荤粨锛堣鏂囩焊鎵嬪啓鐗堬級",
      publishDate: "2026-04-13",
      dueDate: "2026-05-10",
      status: "active"
    },
    {
      id: "hw003",
      subject: "瀹炶返瑕佹眰",
      title: "涓浗姘戜織璋冩煡",
      description: "姘戜織鏄竴涓皯鏃忔垨鍦板尯涓栦唬鐩镐紶鐨勬枃鍖栵紝鍖呮嫭楗銆佽妭鏃ャ€佺ぜ浠€佹父鑹恒€佺墿璐ㄥ拰鍙ｈ璇█绛夎澶氭柟闈€俓n\n姘戜織鐨勫姛鑳斤細\n- 鍩瑰吇鐖卞浗涓讳箟鎯呮劅\n- 瑙勮寖閬撳痉瑙傚康\n- 缁存姢绀句細鍜岃皭\n- 鍩硅偛瀹＄編鎰忚瘑\n\n瑕佹眰锛歕n1. 閫夋嫨鏌愬湴鍖虹殑涓€绉嶆皯淇楀睍寮€娣卞叆璋冩煡\n2. 鏍规嵁璋冩煡鍐呭鎷嶆垚瑙嗛\n3. 閰嶄笂瀛楀箷锛屾湁璁茶В锛屾湁褰曢煶\n4. 鍙垎缁勮繘琛岋紝涓€涓彮澶ф5-6涓棰?,
      publishDate: "2026-04-13",
      dueDate: "2026-05-24",
      status: "active"
    },
    {
      id: "hw012",
      subject: "鏅€氫綔涓?,
      title: "澶у鐢熷氨涓氬垱涓氭寚瀵肩畝鍘嗗埗浣?,
      description: "寮勪竴浠借嚜宸辩殑鐢ㄤ簬姹傝亴鐨勭畝鍘嗭紝鐢靛瓙鐗堛€俓n\n鎴鏃堕棿锛氫笅鍛ㄤ笁锛?鏈?3鏃ワ級",
      publishDate: "2026-05-06",
      dueDate: "2026-05-13",
      status: "active"
    },
    {
      id: "hw014",
      subject: "鏅€氫綔涓?,
      title: "涓璇枃璇剧▼鏍囧噯鏁欏璁捐",
      description: "浠婚€変竴绡囦腑瀛﹁鏂囪鏂囷紝鍐欎竴浠藉畬鏁寸殑鏁欏璁捐銆俓n\n鏁欏璁捐椤诲寘鍚細\n1. 鏁欏鐩爣\n2. 鏁欏閲嶉毦鐐筡n3. 鏁欏鏂规硶\n4. 鏁欏杩囩▼\n5. 鏉夸功璁捐\n\n鈿狅笍 閲嶈瑕佹眰锛歕n鍦ㄦ暀瀛︾洰鏍囥€佹暀瀛﹂噸闅剧偣绛夐儴鍒嗭紝闇€瑕佹爣娉ㄦ瘡涓€涓叿浣撹鏍囩殑鏉ュ锛屽嵆寮曠敤銆婁箟鍔℃暀鑲茶鏂囪绋嬫爣鍑嗐€嬫垨銆婃櫘閫氶珮涓鏂囪绋嬫爣鍑嗐€嬩腑鐨勫師鏂囷紝骞惰鏄庡嚭鑷摢涓眰闈紙璇剧▼鐩爣/瀛︽鐩爣/鍐呭瑕佹眰/瀛︿笟璐ㄩ噺绛夛級銆俓n\n鏍煎紡瑕佹眰锛歕n- 缁熶竴鐢╓ord鎴朚arkdown鏂囨。鎾板啓\n- 鏂囦腑娑夊強璇炬爣寮曠敤鐨勫湴鏂圭敤銆愯鏍囧師鏂囥€戞爣娉╘n- 鏈熬闄勪笂鎵€寮曠敤鐨勮鏍囧嚭澶勶紙璇剧▼鏍囧噯鍚嶇О銆侀〉鐮侊級\n- 鎴鏃堕棿锛氫笅鍛ㄤ簲锛?鏈?9鏃ワ級\n- 鎻愪氦鏂瑰紡锛氱绾告墜鍐欙紝鑷繁淇濈暀鐢靛瓙鐗圥DF",
      publishDate: "2026-05-22",
      publishDate: "2026-05-22",
      dueDate: "2026-05-29",
      status: "active"
    },
    {
      id: "hw013",
      subject: "闆ㄨ鍫?,
      title: "姘戦棿鏂囧闆ㄨ鍫傜瓟棰?,
      description: "鏉愭枡鍒嗘瀽棰橈紝璇峰浠ヤ笅涓夐棶渚濇浣滅瓟锛屽啓鍦ㄧ焊涓婏紝鎷嶆垚鍥剧墖鎻愪氦鑷抽洦璇惧爞銆俓n\n銆愭潗鏂欍€慭n寰堜箙浠ュ墠锛屽ぉ涓婃湁鍗佷釜澶槼锛屽ぇ鍦拌鐑ょ劍浜嗐€傚悗缇挎媺寮€绁炲紦锛屽皠涓嬩節涓お闃筹紝鍙暀涓嬩竴涓収鑰€澶у湴銆傜帇姣嶅濞樿祼缁欎粬涓嶆鑽紝浠栫殑濡诲瓙瀚﹀ē鍋峰伔鍚冧笅锛岄鍚戜簡鏈堜寒銆俓n\n銆愰鐩€慭n1. 杩欐鏂囨湰鍦ㄦ枃浣撲笂鏇存帴杩戠璇濊繕鏄紶璇达紵璇疯鏄庡垽鏂緷鎹€俓n2. 濡傛灉褰撳湴浜鸿鏌愬骇灞辨湁銆屽悗缇垮皠鏃ユ椂韪╁嚭鐨勮剼鍗般€嶏紝杩欎竴璇存硶灞炰簬鍝鏂囦綋锛熶负浠€涔堬紵\n3. 浣犺涓恒€屽濞ュ鏈堛€嶅湪浠婂ぉ浠嶈骞挎硾浼犳挱鐨勫師鍥犳湁鍝簺锛?,
      publishDate: "2026-05-06",
      dueDate: "2026-05-13",
      status: "active"
    },
    {
      id: "hw015",
      subject: "鏅€氫綔涓?,
      title: "澶у鐢熷氨涓氭寚瀵?鈥?闈㈣瘯鑷垜浠嬬粛",
      description: "鏈浣滀笟锛氫氦涓€浠介潰璇曡嚜鎴戜粙缁嶇瀛愶紝璇惧墠鍙ｅご灞曠ず銆俓n\n鑰佸笀缁欑殑妗嗘灦鍖呭惈涓夐儴鍒嗭細鍙戦煶璁粌 + 鑱屼笟鏍囩 + 鍥涙寮忚嚜鎴戜粙缁嶃€備笅闈㈡湁瀹屾暣璇存槑鍜孉I杈呭姪鎻愮ず璇嶏紝璇峰ソ濂界湅銆俓n\n---\n\n銆愪竴銆佸彂闊宠缁冦€慭n\"闈炲父鑽ｅ垢鑳藉鍙傚姞璐靛徃鐨勯潰璇曪紝鎴戞槸XX锛乗"\n娉ㄦ剰锛氬悕瀛楀彂闊宠瀛楀瓧娓呮櫚锛岄噸闊虫斁鍦ㄦ渶鍚庝竴涓瓧銆俓n\n銆愪簩銆佷竴鍙ヨ瘽鑱屼笟鏍囩銆慭n鐢ㄤ竴鍙ヨ瘽缁欒嚜宸卞畾浣嶏紝渚嬪锛歕n- 涓€浣嶅湪杞欢寮€鍙戦鍩熶粠涓?骞寸殑.net寮€鍙戝伐绋嬪笀\n- 涓€浣嶅湪闆跺敭琛屼笟浠庝簨8骞村競鍦鸿繍钀ョ殑宸ヤ綔鑰匼n- 鏉ヨ嚜xx澶уxx涓撲笟搴斿眾姣曚笟鐢焅n- 鍏朵粬鍚堥€傜殑琛ㄨ堪\n\n銆愪笁銆佸洓娈靛紡鑷垜浠嬬粛妗嗘灦銆慭n\n绗?娈碉細绠€鐭紑鍦篭n\"闈㈣瘯瀹樺ソ锛屾垜鏄?*锛?骞存暟瀛楄惀閿€涓撳锛岀幇浠绘煇绉戞妧鍏徃澧為暱涓氬姟璐熻矗浜恒€俓"\n鉁?绀艰矊闂€?+ 濮撳悕 + 宸ヤ綔骞撮檺/涓撲笟鑳屾櫙 + 褰撳墠鑱屼綅/鏂瑰悜\n\n绗?娈碉細鑱屼笟涓荤嚎\n\"鏃╂湡涓撴敞SEO涓庣鍩熻繍钀ワ紝鍚庝富瀵兼惌寤鸿法澧冪嫭绔嬬珯浣撶郴銆俓"\n鉁?鏍稿績鑳藉姏锛氱敤2-3涓叧閿瘝姒傛嫭浣犵殑鏍稿績绔炰簤鍔涳紙涓庡簲鑱樺矖浣嶅己鐩稿叧锛塡n鉁?鑱屼笟璺緞锛氭寜鏃堕棿椤哄簭绠€杩扮粡鍘嗭紝绐佸嚭涓庡矖浣嶇浉鍏崇殑閮ㄥ垎\n\n绗?娈碉細閲嶇偣鎴愭灉\n\"杩戜笁骞存搷鐩?涓崈涓囩骇鐢ㄦ埛澧為暱椤圭洰锛?025骞碊TC鍝佺墝椤圭洰瀹炵幇鍗曟湀GMV鐜瘮澧為暱217%銆俓"\n鉁?鏁版嵁鍖栨垚鏋滐細閫?-2涓渶鐩稿叧鐨勯」鐩紝鐢ㄦ暟鎹噺鍖栦綘鐨勪环鍊糪n\n绗?娈碉細鍔ㄦ満琛旀帴\n\"娣卞叆鐮旂┒璐靛徃鐨勪笢鍗椾簹甯傚満鎴樼暐锛屾垜鐨勮法鏂囧寲杩愯惀缁忛獙涓庝緵搴旈摼鏁板瓧鍖栬兘鍔涳紝鑳芥湁鏁堟敮鎸佸尯鍩熷競鍦轰粠0鍒?鐨勭獊鐮淬€俓"\n鉁?璇存槑涓轰綍閫夋嫨璇ュ叕鍙?宀椾綅锛屼綋鐜板琛屼笟鍜屽矖浣嶇殑鐞嗚В\n\n---\n\n銆愬簲灞婄敓閫傞厤寤鸿銆慭n涓婇潰鐨勪緥瀛愭槸閽堝鏈夊伐浣滅粡楠岀殑浜鸿璁＄殑銆備綔涓哄簲灞婄敓鍙互杩欐牱鏀癸細\n- 宸ヤ綔骞撮檺 鈫?涓撲笟鑳屾櫙/鐮旂┒鏂瑰悜\n- 宸ヤ綔缁忓巻 鈫?瀹炰範/椤圭洰/瀛︽湳缁忓巻\n- 椤圭洰鎴愭灉 鈫?瀹炰範鎴愭灉/璁烘枃/绔炶禌濂栭」/璇剧▼椤圭洰\n- 褰撳墠鑱屼綅 鈫?姣曚笟鍘诲悜/姹傝亴鏂瑰悜\n鏁翠綋妗嗘灦涓嶅姩锛屽彧鏇挎崲鍐呭鍗冲彲銆俓n\n---\n\nAI 鍙傝€冩彁绀鸿瘝\n# 鎸囦护锛氫綘鏄竴浣嶄笓涓氱殑闈㈣瘯杈呭鏁欑粌銆俓n\n璇锋寜椤哄簭鍚戠敤鎴锋彁鍑轰互涓?涓棶棰橈紝姣忔鍙棶涓€涓紝绛夌敤鎴峰洖绛斿悗鍐嶉棶涓嬩竴涓€傜敤鎴峰叏閮ㄥ洖绛斿畬姣曞悗锛岃浣犳牴鎹繖浜涘洖绛旓紝杩涜璇█娑﹁壊鍜岄€昏緫閲嶇粍锛岀敓鎴愪竴浠藉畬鏁淬€佷笓涓氥€侀€傚悎鍙ｅご琛ㄨ揪鐨勯潰璇曡嚜鎴戜粙缁嶇瀛愩€俓n\n## 浣犻渶瑕佷緷娆￠棶鐢ㄦ埛鐨?涓棶棰橈細\n\n1. 璇峰憡璇夋垜浣犵殑涓枃鍏ㄥ悕銆俓n2. 璇风敤涓€鍙ヨ瘽瀹氫箟浣犵殑鑱屼笟韬唤锛堟ā鏉匡細鏈夌粡楠岃€呯敤\"涓€浣嶅湪[琛屼笟]浠庝笟[X]骞寸殑[宀椾綅]\"锛屽簲灞婄敓鐢╘"鏉ヨ嚜[澶у][涓撲笟]鐨勫簲灞婃瘯涓氱敓\"锛夈€俓n3. 璇峰啓鍑轰綘鐨勫紑鍦虹櫧锛屾牸寮忎负\"闈㈣瘯瀹樺ソ锛屾垜鏄痆濮撳悕]锛孾绗?闂殑鑱屼笟鏍囩]\"銆傦紙鍙ˉ鍏呭綋鍓嶈亴浣嶏級\n4. 璇锋弿杩颁綘鐨勮亴涓氫富绾匡紙3-5鍙ヨ瘽锛夛紝鍖呭惈锛?-3涓牳蹇冭兘鍔涘叧閿瘝锛堜笌姹傝亴宀椾綅鐩稿叧锛夛紝骞舵寜鏃堕棿椤哄簭绠€杩扮浉鍏冲疄涔?椤圭洰/宸ヤ綔缁忓巻銆俓n5. 璇峰垎浜?-2涓渶浜溂鐨勬垚鏋滐紝蹇呴』鍖呭惈鍏蜂綋鏁版嵁銆俓n6. 璇疯鏄庝綘涓轰粈涔堥€夋嫨杩欏鍏徃/宀椾綅锛屾牸寮忓缓璁細\"鎴戝叧娉ㄥ埌璐靛徃[鍏蜂綋涓氬姟/鎴樼暐]锛屾垜鐨刐鏌愰」鑳藉姏]鑳戒负鍥㈤槦甯︽潵[鍏蜂綋浠峰€糫銆俓"锛堝彲鍋囪涓€涓涓?鍏徃鏂瑰悜锛塡n\n---\n\n## 鐢ㄦ埛鍏ㄩ儴鍥炵瓟瀹屾瘯鍚庯紝璇蜂綘杈撳嚭浠ヤ笅鍐呭锛歕n\n銆愬彂闊虫彁绀恒€慭n閽堝鐢ㄦ埛鐨勫悕瀛楋紝鎻愮ず濡備綍鍙戦煶锛氬瓧瀛楁竻鏅帮紝閲嶉煶钀藉湪鏈€鍚庝竴涓瓧銆俓n\n銆愭渶缁堥潰璇曡嚜鎴戜粙缁嶇銆慭n璇峰皢鐢ㄦ埛鎻愪緵鐨勫師濮嬪洖绛旇繘琛屾鼎鑹层€佸悎骞躲€佷紭鍖栵紝杈撳嚭涓€绡囩害250-400瀛楃殑瀹屾暣绋垮瓙锛岀粨鏋勫涓嬶細\n\n锛堢涓€娈碉細寮€鍦猴級\n锛堢浜屾锛氳亴涓氫富绾匡級\n锛堢涓夋锛氶噸鐐规垚鏋滐級\n锛堢鍥涙锛氬姩鏈鸿鎺ワ級\n\n瑕佹眰锛歕n- 璇█鑷劧娴佺晠锛岄€傚悎鍙ｅご琛ㄨ揪锛岄伩鍏嶇敓纭綏鍒椼€俓n- 灏嗙敤鎴烽浂鏁ｇ殑鍥炵瓟鏁村悎鎴愯繛璐殑娈佃惤銆俓n- 閫傚綋琛ュ厖杩炴帴璇嶏紝浣块€昏緫椤虹晠銆俓n- 淇濇寔鐢ㄦ埛鍘熸剰锛屼笉铏氭瀯淇℃伅銆俓n\n鏈€鍚庯紝璇风敤涓€鍙ヨ瘽榧撳姳鐢ㄦ埛璇惧墠鍙ｅご缁冧範銆?,
      publishDate: "2026-05-09",
      dueDate: "2026-05-21",
      status: "active"
    },
        {
      id: "hw016",
      subject: "雨课堂",
      title: "西方文论雨课堂答题",
      description: "# 角色设定\n你是一名深谙康德美学理论的哲学/文化批评学者，擅长用经典理论解剖当代现象，揭示深层张力。文风严谨锐利，分析务必详实厚重，拒绝空泛套话。\n\n# 任务目标\n协助我完成作业：运用康德\"美的分析\"四契机（无利害、无概念的普遍性、无目的的合目的性、无概念的必然性），选择当代案例进行批评性分析，揭示鉴赏判断的逻辑与张力。字数要求800-1500字。\n\n# 第一步：交互选题\n请搜索/调用你的最新知识，寻找8个常见热门文化/审美现象和2个近期爆火的社会审美热点现象，确保它们能与康德理论产生强烈张力。\n输出格式要求（极度精简）：每个选项仅限一行，格式严格为：\"编号. 现象名称（张力冲突点）\"。绝对不要输出多余解释！末尾另起一行提示：\"请回复编号（1-10）或输入自拟现象。\"\n\n# 第二步：深度写作指令（收到我的选项回复后，必须严格按以下规则生成正文）\n1. 总字数硬性要求：必须写满800-1500字，若分析不足800字视为任务失败！\n2. 理论阐释要厚实：不能只提四契机名词，必须用学术语言展开解释其核心内涵。\n3. 案例剖析要双层：\n - 第一层：详细论述该现象在表象上如何\"伪装\"或\"契合\"康德的四契机。\n - 第二层（重点）：深度剖析其背后的真实逻辑，揭示其如何违背康德原则，展开论述\"张力\"的尖锐性（如资本算法规训、消费主义陷阱、功利欲求等）。\n4. 严格执行以下结构，并充分展开每一部分：\n\n## 结构与字数分配指引：\n- 一、 引言（约150字）：引出所选现象，点明其与康德美学的表面关联及深层悖论，提出核心论点。\n- 二、 康德\"美的分析\"四契机理论基准（约250字）：逐一详述质的（无利害）、量的（无概念普遍性）、关系的（无目的合目的性）、模态的（无概念必然性/共通感）的核心哲学内涵。\n- 三、 案例的康德式表象契合（约300字）：详细分析该现象在当代受众的主观体验中，是如何呈现出无功利的愉悦、无概念的普遍认同等特征，从而伪装成一种纯粹鉴赏判断的。\n- 四、 鉴赏判断的内在张力深度揭示（约450字）：这是全篇核心！必须详细剖析该现象底层隐秘的利害关系、概念前置或功利目的。论述康德的先验\"共通感\"如何被算法/资本/消费逻辑劫持，导致审美自由沦为被规训的快感。矛盾必须尖锐、论证必须绵密！\n- 五、 结语（约100字）：总结张力，反思康德理论在当代的效力与局限。\n\n---\n现在，请执行第一步，列出10个精简选项等我选择。",
      publishDate: "2026-05-28",
      dueDate: "2026-06-01",
      status: "active"
    }
  ]

};

// ========================================
// 绉戠洰棰滆壊閰嶇疆
// ========================================

const subjectColors =     ;

// ========================================
// DOM 鍏冪礌
// ========================================

const elements = {
  currentDate: document.getElementById('currentDate'),
  currentWeekday: document.getElementById('currentWeekday'),
  searchInput: document.getElementById('searchInput'),
  searchClear: document.getElementById('searchClear'),
  filterButtons: document.getElementById('filterButtons'),
  showExpiredBtn: document.getElementById('showExpiredBtn'),
  homeworkGrid: document.getElementById('homeworkGrid'),
  emptyState: document.getElementById('emptyState'),
  loadingState: document.getElementById('loadingState'),
  modalOverlay: document.getElementById('modalOverlay'),
  modal: document.getElementById('homeworkModal'),
  modalContent: document.getElementById('modalContent'),
  modalClose: document.getElementById('modalClose'),
  lastUpdated: document.getElementById('lastUpdated')
};

// ========================================
// 宸ュ叿鍑芥暟
// ========================================

/**
 * 鏍煎紡鍖栨棩鏈? */
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}鏈?{day}鏃;
}

/**
 * 鏍煎紡鍖栧畬鏁存棩鏈? */
function formatFullDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}骞?{month}鏈?{day}鏃;
}

/**
 * 鑾峰彇鏄熸湡鍑? */
function getWeekday(dateStr) {
  const weekdays = ['鏄熸湡鏃?, '鏄熸湡涓€', '鏄熸湡浜?, '鏄熸湡涓?, '鏄熸湡鍥?, '鏄熸湡浜?, '鏄熸湡鍏?];
  const date = new Date(dateStr);
  return weekdays[date.getDay()];
}

/**
 * 璁＄畻璺濈鎴鏃ユ湡鐨勫ぉ鏁? */
function getDaysUntilDue(dueDateStr) {
  const now = new Date();
  // 灏嗘棩鏈熷瓧绗︿覆瑙ｆ瀽涓烘湰鍦版棩鏈熺殑寮€濮嬶紙00:00:00锛?  const due = new Date(dueDateStr + 'T00:00:00');
  // 璁剧疆涓哄綋澶╃粨鏉熷墠涓€鍒伙紙23:59:59锛変互渚夸粖澶╂埅姝㈢殑浣滀笟鏄剧ず涓?澶?  const dueEnd = new Date(due.getFullYear(), due.getMonth(), due.getDate(), 23, 59, 59);
  const diff = dueEnd - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
}

/**
 * 鑾峰彇鐩稿鏃堕棿鎻忚堪
 */
function getCountdownText(days) {
  if (days < 0) {
    return { text: '宸叉埅姝?, value: null, urgent: false };
  } else if (days === 0) {
    return { text: '浠婂ぉ鎴', value: '鏈€鍚?, urgent: true };
  } else if (days === 1) {
    return { text: '鏄庡ぉ鎴', value: '1', urgent: true };
  } else if (days <= 3) {
    return { text: '澶╁悗鎴', value: String(days), urgent: true };
  } else {
    return { text: '澶╁悗鎴', value: String(days), urgent: false };
  }
}

/**
 * 鑾峰彇浠婂ぉ鐨勬棩鏈熷瓧绗︿覆
 */
function getTodayString() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

// ========================================
// UI 娓叉煋鍑芥暟
// ========================================

/**
 * 娓叉煋鏃ユ湡淇℃伅
 */
function renderDateInfo() {
  const today = new Date();
  const dateStr = `${today.getFullYear()}骞?{today.getMonth() + 1}鏈?{today.getDate()}鏃;
  elements.currentDate.textContent = dateStr;
  elements.currentWeekday.textContent = getWeekday(getTodayString());
  elements.lastUpdated.textContent = `${dateStr} ${getWeekday(getTodayString())}`;
}

/**
 * 鍒涘缓浣滀笟鍗＄墖 HTML
 */
function createHomeworkCard(homework, index) {
  const subjectStyle = subjectColors[homework.subject] || subjectColors["鍏朵粬"];
  const daysUntilDue = getDaysUntilDue(homework.dueDate);
  const countdown = getCountdownText(daysUntilDue);
  const isExpired = homework.status === 'expired' || daysUntilDue < 0;

  return `
    <article class="homework-card ${isExpired ? 'expired' : ''}"
             data-id="${homework.id}"
             data-subject="${homework.subject}"
             style="animation-delay: ${index * 0.1}s; --subject-color: ${subjectStyle.color}; --subject-bg: ${subjectStyle.bg};">
      <div class="card-accent"></div>
      ${isExpired ? '<span class="card-expired-overlay">宸叉埅姝?/span>' : ''}
      <div class="card-content">
        <div class="card-header">
          <span class="subject-tag" style="--subject-color: ${subjectStyle.color}; --subject-bg: ${subjectStyle.bg};">
            ${homework.subject}
          </span>
          <span class="card-status ${homework.status}">
            ${isExpired ? '宸叉埅姝? : '杩涜涓?}
          </span>
        </div>
        <h3 class="card-title">${homework.title}</h3>
        <p class="card-description">${homework.description.split('\n')[0]}</p>
        <div class="card-footer">
          <div class="card-date">
            <span class="date-label">鎴鏃ユ湡</span>
            <span class="date-value">${formatDate(homework.dueDate)} 路 ${getWeekday(homework.dueDate)}</span>
          </div>
          ${!isExpired ? `
          <div class="card-countdown">
            <span class="countdown-value ${countdown.urgent ? 'urgent' : ''}">${countdown.value}</span>
            <span class="countdown-label">${countdown.text}</span>
          </div>
          ` : ''}
        </div>
      </div>
    </article>
  `;
}

/**
 * 娓叉煋浣滀笟鍒楄〃
 */
function renderHomeworks(homeworks) {
  if (homeworks.length === 0) {
    elements.homeworkGrid.innerHTML = '';
    elements.emptyState.style.display = 'block';
    return;
  }

  elements.emptyState.style.display = 'none';
  elements.homeworkGrid.innerHTML = homeworks
    .map((hw, index) => createHomeworkCard(hw, index))
    .join('');

  // 閲嶆柊缁戝畾鍗＄墖鐐瑰嚮浜嬩欢
  bindCardEvents();
}

/**
 * 娓叉煋妯℃€佹鍐呭
 */
function renderModal(homework) {
  const subjectStyle = subjectColors[homework.subject] || subjectColors["鍏朵粬"];
  const countdown = getCountdownText(getDaysUntilDue(homework.dueDate));
  const isExpired = homework.status === 'expired' || getDaysUntilDue(homework.dueDate) < 0;

  // Check if description has AI prompt (after --- divider)
  const hasAIPrompt = homework.description.includes('AI 鍙傝€冩彁绀鸿瘝');
  const aiPromptText = hasAIPrompt
    ? homework.description.split('AI 鍙傝€冩彁绀鸿瘝')[1].replace(/^[:锛歖\n?/, '').trim()
    : '';

  elements.modal.style.setProperty('--subject-color', subjectStyle.color);
  elements.modal.style.setProperty('--subject-bg', subjectStyle.bg);

  const copyBtnHTML = ''; // copy button now inside code block

  // Build description HTML - show intro, then AI prompt in code block
  const parts = homework.description.split('AI 鍙傝€冩彁绀鸿瘝');
  let descHTML = '';
  if (parts.length > 1) {
    // Has AI prompt - show intro then code block with copy button inside
    const intro = parts[0].split('\n').map(p => `<p>${p}</p>`).join('');
    const copyBtn = `<button class="copy-prompt-btn" onclick="copyAIPrompt()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      澶嶅埗
    </button>`;
    descHTML = intro + `
      <div class="prompt-label">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
        AI 鍙傝€冩彁绀鸿瘝
      </div>
      <pre class="prompt-code"><div class="prompt-header">${copyBtn}</div><code>${aiPromptText.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
    `;
  } else {
    // No AI prompt - just normal paragraphs
    descHTML = homework.description.split('\n').map(p => `<p>${p}</p>`).join('');
  }

  elements.modalContent.innerHTML = `
    <div class="modal-accent" style="background: ${subjectStyle.color};"></div>
    <div class="modal-header">
      <span class="modal-subject" style="--subject-color: ${subjectStyle.color}; --subject-bg: ${subjectStyle.bg};">
        ${homework.subject}
      </span>
      <h2 class="modal-title">${homework.title}</h2>
      <div class="modal-meta">
        <div class="modal-meta-item">
          <span class="modal-meta-label">鍙戝竷鏃ユ湡</span>
          <span class="modal-meta-value">${formatFullDate(homework.publishDate)} 路 ${getWeekday(homework.publishDate)}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">鎴鏃ユ湡</span>
          <span class="modal-meta-value">${formatFullDate(homework.dueDate)} 路 ${getWeekday(homework.dueDate)}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">鐘舵€?/span>
          <span class="modal-meta-value" style="color: ${isExpired ? 'var(--text-muted)' : countdown.urgent ? 'var(--accent)' : 'var(--subject-math)'};">
            ${isExpired ? '宸叉埅姝? : (countdown.value !== null ? countdown.value + countdown.text : countdown.text)}
          </span>
        </div>
      </div>
      ${copyBtnHTML}
    </div>
    <div class="modal-description">
      ${descHTML}
    </div>
  `;

  // Store AI prompt for copy function
  if (hasAIPrompt) {
    window._currentAIPrompt = aiPromptText;
  }
}

/**
 * 澶嶅埗AI鎻愮ず璇嶅埌鍓创鏉? */
function copyAIPrompt() {
  const prompt = window._currentAIPrompt || '';
  if (!prompt) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(prompt).then(() => {
      showCopyToast('宸插鍒跺埌鍓创鏉?);
    }).catch(() => {
      fallbackCopyText(prompt);
    });
  } else {
    fallbackCopyText(prompt);
  }
}

function fallbackCopyText(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showCopyToast('宸插鍒跺埌鍓创鏉?);
  } catch(e) {
    showCopyToast('澶嶅埗澶辫触锛岃鎵嬪姩閫夋嫨澶嶅埗');
  }
  document.body.removeChild(textarea);
}

function showCopyToast(message) {
  // Remove existing toast
  const existing = document.querySelector('.copy-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'copy-toast';
  toast.textContent = message;
  toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:10px 20px;border-radius:20px;font-size:14px;z-index:10000;animation:fadeIn 0.3s';
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 2000);
}

// ========================================
// 浜嬩欢澶勭悊
// ========================================

// 褰撳墠绛涢€夌姸鎬?let currentFilter = 'all';
let searchQuery = '';
let debounceTimer = null;
let showExpired = false; // 鏄惁鏄剧ず宸茶繃鏈熶綔涓?
/**
 * 绛涢€変綔涓? */
function filterHomeworks() {
  let filtered = [...homeworkData.homeworks];

  // 鎸夋埅姝㈡棩鏈熻繃婊?  const today = getTodayString();
  if (showExpired) {
    // 鍙樉绀哄凡鎴鐨勪綔涓?    filtered = filtered.filter(hw => hw.dueDate < today);
  } else {
    // 鍙樉绀烘湭鎴鐨勪綔涓?    filtered = filtered.filter(hw => hw.dueDate >= today);
  }

  // 鎸夋埅姝㈡棩鏈熸帓搴忥紙鏈€杩戠殑鍦ㄥ墠锛? 浣跨敤鏈湴鏃ユ湡姣旇緝
  filtered.sort((a, b) => {
    const dateA = new Date(a.dueDate + 'T00:00:00');
    const dateB = new Date(b.dueDate + 'T00:00:00');
    return dateA - dateB;
  });

  // 鎸夌鐩瓫閫?  if (currentFilter !== 'all') {
    filtered = filtered.filter(hw => hw.subject === currentFilter);
  }

  // 鎸夊叧閿瘝鎼滅储
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(hw =>
      hw.title.toLowerCase().includes(query) ||
      hw.description.toLowerCase().includes(query) ||
      hw.subject.toLowerCase().includes(query)
    );
  }

  renderHomeworks(filtered);
}

/**
 * 缁戝畾鍗＄墖鐐瑰嚮浜嬩欢
 */
function bindCardEvents() {
  const cards = elements.homeworkGrid.querySelectorAll('.homework-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const homework = homeworkData.homeworks.find(hw => hw.id === id);
      if (homework) {
        openModal(homework);
      }
    });
  });
}

/**
 * 鎵撳紑妯℃€佹
 */
function openModal(homework) {
  renderModal(homework);
  elements.modalOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

/**
 * 鍏抽棴妯℃€佹
 */
function closeModal() {
  elements.modalOverlay.classList.remove('visible');
  document.body.style.overflow = '';
}

/**
 * 鍒濆鍖栦簨浠剁洃鍚? */
function initEventListeners() {
  // 绛涢€夋寜閽?  elements.filterButtons.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // 鏇存柊鎸夐挳鐘舵€?    elements.filterButtons.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    // 鏇存柊绛涢€?    currentFilter = btn.dataset.filter;
    filterHomeworks();
  });

  // 鎼滅储杈撳叆
  elements.searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;

    // 鏄剧ず/闅愯棌娓呴櫎鎸夐挳
    if (searchQuery) {
      elements.searchClear.classList.add('visible');
    } else {
      elements.searchClear.classList.remove('visible');
    }

    // 闃叉姈
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      filterHomeworks();
    }, 300);
  });

  // 娓呴櫎鎼滅储
  elements.searchClear.addEventListener('click', () => {
    elements.searchInput.value = '';
    searchQuery = '';
    elements.searchClear.classList.remove('visible');
    filterHomeworks();
  });

  // 鏌ョ湅宸叉埅姝㈡寜閽?  elements.showExpiredBtn.addEventListener('click', () => {
    showExpired = !showExpired;
    elements.showExpiredBtn.classList.toggle('active', showExpired);
    elements.showExpiredBtn.innerHTML = showExpired
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
         </svg>
         闅愯棌宸叉埅姝
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
         </svg>
         鏌ョ湅宸叉埅姝;
    filterHomeworks();
  });

  // 妯℃€佹鍏抽棴
  elements.modalClose.addEventListener('click', closeModal);
  elements.modalOverlay.addEventListener('click', (e) => {
    if (e.target === elements.modalOverlay) {
      closeModal();
    }
  });

  // ESC 閿叧闂ā鎬佹
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.modalOverlay.classList.contains('visible')) {
      closeModal();
    }
  });
}

// ========================================
// 鍒濆鍖?// ========================================

function init() {
  // 娓叉煋鏃ユ湡淇℃伅
  renderDateInfo();

  // 闅愯棌鍔犺浇鐘舵€?  elements.loadingState.classList.remove('visible');

  // 鍒濆鍖栦簨浠剁洃鍚?  initEventListeners();

  // 鍒濆娓叉煋
  filterHomeworks();
}

// DOM 鍔犺浇瀹屾垚鍚庡垵濮嬪寲
document.addEventListener('DOMContentLoaded', init);


