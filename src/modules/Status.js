const config = require('../../config.json');
const errors = require('../data/errors.json');

const { Discord, client, errEmbed } = require('./Discord');

const { logToLog } = require('../utils/Logging');

logToLog('<src/modules/Status.js> Passed');
function getStatus()
{
    logToLog('<src/modules/Status.js/Function getStatus> Passed');
    return new Promise((resolve) =>
    {
        try
        {
            const { bot } = require('./Bot');

            const statusEmbed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, '', 'https://github.com/DrMoraschi/AFKBot')
            .setColor(config.discord['embed-hex-color'])
            .setTitle('Status results')
            .setThumbnail(client.user.avatarURL())
            .addFields(
                { name: 'Username', value: bot.username, inline: true },
                { name: 'Host', value: config.server.host, inline: true },
                { name: 'Port', value: config.server.port, inline: true },
                { name: 'Version', value: bot.version, inline: true },
                { name: 'Ping', value: bot.player.ping, inline: true },
                { name: 'Position', value: `x: ${Math.floor(bot.entity.position.x)} y: ${Math.floor(bot.entity.position.y)} z:  ${Math.floor(bot.entity.position.z)}`, inline: true },
                { name: 'Looking', value: `Yaw: ${Math.floor(bot.entity.yaw)} Pitch: ${Math.floor(bot.entity.yaw)}`, inline: true }
            );
            
            resolve(statusEmbed);
        }
        catch (err)
        {
            logToLog(`<src/modules/Status.js/ERROR Function getStatus> ERROR: ${err}`);
            errEmbed(errors.status['TypeError: Cannot read property \'username\' of undefined'], `- Make sure the bot is started`);
        };
    });
};

module.exports = {
    getStatus
};