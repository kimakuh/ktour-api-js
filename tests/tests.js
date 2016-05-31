var serviceKey = "<Your Service Key>";

QUnit.module("KTourApiAppCenter", function(){

	KTourApiAppCenter.defaultCenter().setUp(
		"<Your App Name>", 
		serviceKey, 
		KTourApiAppCenter.languageType.Chs);

	QUnit.test("defaultCenter", function(assert){
		assert.notOk(null, KTourApiAppCenter.defaultCenter());
		assert.equal(KTourApiAppCenter.uniqueInstance, KTourApiAppCenter.defaultCenter());
	});

	QUnit.test("setUp", function(assert){
		assert.equal(decodeURIComponent(serviceKey), KTourApiAppCenter.defaultCenter().serviceKey);
		assert.equal("ChsService", KTourApiAppCenter.defaultCenter().lang);
	});

	QUnit.test("call-areaCode", function(assert){
		var async = assert.async();

		KTourApiAppCenter.defaultCenter().call({
			path: "areaCode", 
			param: new KTourApiListParam(10, 1, {areaCode: null}),
			completion: function(result, error){
				console.log("areaCode", result, error);
				assert.ok(result != null);
				assert.ok(result instanceof KTourApiListResult);
				assert.equal(0, result.resultCode);
				assert.equal("OK", result.resultMsg);
				assert.ok(result.items.length > 0);
				assert.ok(error == null);
				async();
			}
		});
	});

	QUnit.test("call-categoryCode", function(assert){
		var async = assert.async();

		KTourApiAppCenter.defaultCenter().call({
			path: "categoryCode", 
			param: new KTourApiListParam(10, 1, {contentTypeId: null, cat1: null, cat2: null, cat3: null}),
			completion: function(result, error){
				console.log("categoryCode", result, error);
				assert.ok(result != null);
				assert.ok(result instanceof KTourApiListResult);
				assert.equal(0, result.resultCode);
				assert.equal("OK", result.resultMsg);
				assert.ok(result.items.length > 0);
				assert.ok(error == null);
				async();
			}
		});
	});

	QUnit.test("call-areaBasedList", function(assert){
		var async = assert.async();

		KTourApiAppCenter.defaultCenter().call({
			path: "areaBasedList", 
			param: new KTourApiListParam(10, 1, {contentTypeId: null, cat1: null, cat2: null, cat3: null, areaCode: null, sigunguCode: null}),
			completion: function(result, error){
				console.log("areaBasedList", result, error);
				assert.ok(result != null);
				assert.ok(result instanceof KTourApiListResult);
				assert.equal(0, result.resultCode);
				assert.equal("OK", result.resultMsg);
				assert.ok(result.items.length > 0);
				assert.ok(error == null);
				async();
			}
		});
	});

	QUnit.test("call-locationBasedList", function(assert){
		var async = assert.async();

		KTourApiAppCenter.defaultCenter().call({
			path: "locationBasedList", 
			param: new KTourApiListParam(10, 1, {contentTypeId: null, mapX: 126.981611, mapY: 37.568477, radius: 1000}),
			completion: function(result, error){
				console.log("locationBasedList", result, error);
				assert.ok(result != null);
				assert.ok(result instanceof KTourApiListResult);
				assert.equal(0, result.resultCode);
				assert.equal("OK", result.resultMsg);
				assert.ok(result.items.length > 0);
				assert.ok(error == null);
				async();
			}
		});
	});

	QUnit.test("call-searchFestival", function(assert){
		var async = assert.async();

		KTourApiAppCenter.defaultCenter().call({
			path: "searchFestival", 
			param: new KTourApiListParam(10, 1, {contentTypeId: null, eventStartDate: null, eventEndDate: null, areaCode: null, sigunguCode: null}),
			completion: function(result, error){
				console.log("searchFestival", result, error);
				assert.ok(result != null);
				assert.ok(result instanceof KTourApiListResult);
				assert.equal(0, result.resultCode);
				assert.equal("OK", result.resultMsg);
				assert.ok(result.items.length > 0);
				assert.ok(error == null);
				async();
			}
		});
	});

	QUnit.test("call-searchKeyword", function(assert){
		var async = assert.async();

		KTourApiAppCenter.defaultCenter().call({
			path: "searchKeyword", 
			param: new KTourApiListParam(10, 1, {keyword: "马斋", contentTypeId: null, cat1: null, cat2: null, cat3: null, areaCode: null, sigunguCode: null}),
			completion: function(result, error){
				console.log("searchKeyword", result, error);
				assert.ok(result != null);
				assert.ok(result instanceof KTourApiListResult);
				assert.equal(0, result.resultCode);
				assert.equal("OK", result.resultMsg);
				assert.ok(result.items.length > 0);
				assert.ok(error == null);
				async();
			}
		});
	});

	QUnit.test("call-searchStay", function(assert){
		var async = assert.async();

		KTourApiAppCenter.defaultCenter().call({
			path: "searchStay", 
			param: new KTourApiListParam(10, 1, {contentTypeId: null, areaCode: null, sigunguCode: null}),
			completion: function(result, error){
				console.log("searchStay", result, error);
				assert.ok(result != null);
				assert.ok(result instanceof KTourApiListResult);
				assert.equal(0, result.resultCode);
				assert.equal("OK", result.resultMsg);
				assert.ok(result.items.length > 0);
				assert.ok(error == null);
				async();
			}
		});
	});

	QUnit.test("call-detailCommon", function(assert){
		var async = assert.async();

		KTourApiAppCenter.defaultCenter().call({
			path: "detailCommon", 
			param: new KTourApiParam({contentId: 1342755, contentTypeId: null, defaultYN: true, firstImageYN: true, areacodeYN: true, catcodeYN: true, addrinfoYN: true, mapinfoYN: true, overviewYN: true, transGuideYN: true}),
			completion: function(result, error){
				console.log("detailCommon", result, error);
				assert.ok(result != null);
				assert.ok(result instanceof KTourApiResult);
				assert.equal(0, result.resultCode);
				assert.equal("OK", result.resultMsg);
				assert.ok(result.items.length > 0);
				assert.ok(error == null);
				async();
			}
		});
	});

	QUnit.test("call-detailInfo", function(assert){
		var async = assert.async();

		KTourApiAppCenter.defaultCenter().call({
			path: "detailInfo", 
			param: new KTourApiParam({contentId: 1342755, contentTypeId: 82, detailYN: true}),
			completion: function(result, error){
				console.log("detailInfo", result, error);
				assert.ok(result != null);
				assert.ok(result instanceof KTourApiResult);
				assert.equal(0, result.resultCode);
				assert.equal("OK", result.resultMsg);
				assert.ok(error == null);
				async();
			}
		});
	});

	QUnit.test("call-detailImage", function(assert){
		var async = assert.async();

		KTourApiAppCenter.defaultCenter().call({
			path: "detailImage", 
			param: new KTourApiParam({contentId: 1342755, contentTypeId: 82, imageYN: true}),
			completion: function(result, error){
				console.log("detailImage", result, error);
				assert.ok(result != null);
				assert.ok(result instanceof KTourApiResult);
				assert.equal(0, result.resultCode);
				assert.equal("OK", result.resultMsg);
				assert.ok(result.items.length > 0);
				assert.ok(error == null);
				async();
			}
		});
	});

	QUnit.test("call-detailIntro", function(assert){
		var async = assert.async();

		KTourApiAppCenter.defaultCenter().call({
			path: "detailIntro", 
			param: new KTourApiParam({contentId: 1342755, contentTypeId: 82, introYN: true}),
			completion: function(result, error){
				console.log("detailIntro", result, error);
				assert.ok(result != null);
				assert.ok(result instanceof KTourApiResult);
				assert.equal(0, result.resultCode);
				assert.equal("OK", result.resultMsg);
				assert.ok(result.items.length > 0);
				assert.ok(error == null);
				async();
			}
		});
	});
});