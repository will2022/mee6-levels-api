interface IdentifierObject {
    id: string;
}

type Identifier = IdentifierObject | string;

interface Role {
    color: number;
    hoist: boolean;
    id: string;
    managed: boolean;
    mentionable: boolean;
    name: string;
    permissions: number;
    position: number;
}

interface Reward {
  role: Role;
  level: number;
}

interface XPInfo {
    userXp: number;
    levelXp: number;
    totalXp: number;
}

interface User {
    id: string;
    level: number;
    username: string;
    discriminator: string;
    avatarUrl: string;
    messageCount: number;
    tag: string;
    xp: XPInfo;
    rank: number;
}

export default class Mee6LevelsApi {
    private static getId(guildOrUser: Identifier): string;
    public static getRoleRewards(guild: Identifier): Promise<Reward[]>;
    public static getLeaderboardPage(guild: Identifier, limit?: number, page?: number): Promise<User[]>;
    public static getLeaderboard(guild: Identifier): Promise<User[]>;
    public static getUserXp(guild: Identifier, user: Identifier): Promise<User | undefined>;
}
