import { Context, Schema, Logger, h } from 'koishi';
import {} from 'koishi-plugin-adapter-onebot';

export const name = 'group-deliver-message';

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

const logger = new Logger('group-deliver-message');

export function apply(ctx: Context) {
  // write your plugin here
  ctx.command('群发 <group>').action(async (argv, group) => {
    logger.info('argv:%o', argv);
    logger.info('group:%o', group);
    const guildId = group ?? argv.session.guildId;
    if (guildId) {
      logger.info('guildId:%o', guildId);
      const members = argv.session.bot.getGuildMemberIter(guildId);
      for await (const member of members) {
        if (member.user.id == '108720516' || member.user.id == '3563720030') {
          logger.info('member:%o', member);
          if (argv.session.onebot) {
            logger.info('member:%o 111', member);
            argv.session.onebot.sendPrivateMsg(member.user.id, '你好');
          }
        }
      }
    }
  });
}
