export const data = [
	{
        subModuleName: 'Place holder Submodule Name',
        subModuleImage: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/information.png',
		subModuleTopics: [
		{
			topicName: 'Place holder Topic Name',
			topicTheory: [
			{
				mainTexts: [
                {
                    id: Math.random(),
                    text: 'Place holder MainText'
                }, ],

				subTexts: [
				{
					id: Math.random(),
					subText: 'Place holder SubText',
				},
				{
					id: Math.random(),
					subText: 'Place holder SubText 2',
                }, ],

                images: [
				{
                    id: Math.random(),
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSodFnBBwFrIQ2dL1N4LzjniOYOFbbNk6dS0Q&usqp=CAU'
                }, ],
				
                videos: [
                {
                    id: Math.random(),
                    src: 'https://www.youtube.com/embed/C0DPdy98e4c'
                }, ],
			}, ],
			topicExercises: [
			{
				questionText: 'Place holder Question Text',
				rightAnswer: '0',
				image: '',
				answers: [
				{
					id: Math.random(),
					answerText: 'Place holder answerText',
				},
				{
					id: Math.random(),
					answerText: 'Place holder answerText',
				}, ],
			}, ],
		}, ],
		subModuleExercises: [
		{
            questionText: 'Place holder Question Text',
			rightAnswer: '0',
			image: '',
			answers: [
			{
                id: Math.random(),
				answerText: 'Place holder answerText',
			}, ],
		}, ],
    }, ]
    
export default {
    data,
}