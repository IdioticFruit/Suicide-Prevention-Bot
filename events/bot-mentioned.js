module.exports = async (message, lang) => {
    const { MessageEmbed } = require('discord.js');
	const { __ } = require('../bot.js');

	const suicide = new MessageEmbed()
		.setColor('#04d384')
		.setTitle(__("Bot Mentioned. Here is my helpline embed: Suicide Prevention Bot", lang))
		.setAuthor({
			name: __("Please give the helpline just one chance", lang),
			iconURL: 'https://spbot.ml/siround.png'
		})
		.setDescription(__("This bot has automatically detected a keyword related to suicide\n", lang))
		.addField(__("We care about you.", lang), __("Your life is important. We all care very deeply about you. I understand you don't feel like you matter right know, but I can tell you with 100% confidence that you do. I know you might be reluctant, but please just give the suicide prevention hotline just one more chance.", lang), false)
		.addField(__("United States", lang), __("Call (800) 273-8255 or Text HOME to 741741", lang), true)
		.addField(__("United Kingdom", lang), __("Call 116-123 or Text SHOUT to 85258", lang), true)
		.addField(__("Canada", lang), __("Call (833) 456-4566 or Text 45645", lang), true)
		.addField(__("India", lang), __("Call +91 80 23655557", lang), true)
		.addField(__("Japan", lang), __("Call 810352869090", lang), true)
		.addField(__("Other Countries?", lang), __("[Click Here.](https://spbot.ml/hotlines)", lang), true)
		.addField(__("Need Extra Support?", lang), __("Come talk to real people to help you through this Discord! [Click here.](https://discord.gg/sdY4jyY)", lang), false)
		.setFooter({
			text: __('I care about you. Please try to give the helplines just one chance. I know you can make it through this. Report a bug: https://discord.gg/YHvfUqVgWS. Website: https://spbot.ml/. Type /dmmute to prevent others from telling me to send you DMs', lang),
			iconURL: 'https://spbot.ml/siround.png'
		});

    return message.channel.send({ embeds: [suicide] });
};