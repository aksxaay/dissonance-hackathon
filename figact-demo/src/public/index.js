
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	DemoCarouselWithAirtableData_Vector: tryRequire('./DemoCarouselWithAirtableData_Vector.png') || require('./questionMark.png'),
	DemoTextImageWithAirtableData_Ellipse1: tryRequire('./DemoTextImageWithAirtableData_Ellipse1.png') || require('./questionMark.png'),
	DemoListWithAirtableData_img: tryRequire('./DemoListWithAirtableData_img.png') || require('./questionMark.png'),
	DemoCarouselWithAirtableData_Vector_1: tryRequire('./DemoCarouselWithAirtableData_Vector_1.png') || require('./questionMark.png'),
	DemoInputPasswordButton_Vector: tryRequire('./DemoInputPasswordButton_Vector.png') || require('./questionMark.png'),
	DemoPageNavigation_Vector: tryRequire('./DemoPageNavigation_Vector.png') || require('./questionMark.png'),
	DemoPageNavigation_Vector_1: tryRequire('./DemoPageNavigation_Vector_1.png') || require('./questionMark.png'),
	DemoCarouselWithAirtableData_abc: tryRequire('./DemoCarouselWithAirtableData_abc.png') || require('./questionMark.png'),
	DemoInputPasswordButton_Vector_1: tryRequire('./DemoInputPasswordButton_Vector_1.png') || require('./questionMark.png'),
	DemoCarouselWithAirtableData_Vector_2: tryRequire('./DemoCarouselWithAirtableData_Vector_2.png') || require('./questionMark.png'),
	DemoCarouselWithAirtableData_Vector_3: tryRequire('./DemoCarouselWithAirtableData_Vector_3.png') || require('./questionMark.png'),
	CombinationDemo_image31: tryRequire('./CombinationDemo_image31.png') || require('./questionMark.png'),
	CombinationDemo_image35: tryRequire('./CombinationDemo_image35.png') || require('./questionMark.png'),
	CombinationDemo_image23: tryRequire('./CombinationDemo_image23.png') || require('./questionMark.png'),
	CombinationDemo_image34: tryRequire('./CombinationDemo_image34.png') || require('./questionMark.png'),
	CombinationDemo_image29: tryRequire('./CombinationDemo_image29.png') || require('./questionMark.png'),
	CombinationDemo_Vector: tryRequire('./CombinationDemo_Vector.png') || require('./questionMark.png'),
	CombinationDemo_Vector_1: tryRequire('./CombinationDemo_Vector_1.png') || require('./questionMark.png'),
	CombinationDemo_Vector_2: tryRequire('./CombinationDemo_Vector_2.png') || require('./questionMark.png'),
	CombinationDemo_Vector_3: tryRequire('./CombinationDemo_Vector_3.png') || require('./questionMark.png'),
	CombinationDemo_Vector_4: tryRequire('./CombinationDemo_Vector_4.png') || require('./questionMark.png'),
	CombinationDemo_Vector_5: tryRequire('./CombinationDemo_Vector_5.png') || require('./questionMark.png'),
}