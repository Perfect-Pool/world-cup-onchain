# ⚽ World Cup

**World Cup Onchain** combines the thrill of the FIFA World Cup with the power of blockchain. Predict match outcomes, submit your brackets, and watch the jackpot grow. Your accurate predictions could lead to big winnings!

Predict, Score High, and Earn – The Ultimate Bracket Experience, Powered by Base.

## Game Structure

The WorldCup contract manages a tournament with 8 groups of 4 teams each (32 teams total) followed by a bracket-style knockout tournament with the 16 top teams. The tournament consists of 5 rounds in total.

### Group Stage (First Round)

The first round consists of 8 groups with 4 teams each. Players can bet on the final order of teams in each group. The top two teams from each group (16 teams total) advance to the knockout stage.

### Knockout Stage (Rounds 2-5)

- **Round 2 (Round of 16)**: 8 matches between the 16 qualified teams
- **Round 3 (Quarter-finals)**: 4 matches between the 8 winners from Round 2
- **Round 4 (Semi-finals)**: 2 matches between the 4 winners from Round 3
- **Round 5 (Final)**: The championship match between the 2 winners from Round 4

## Betting Mechanics

While the game is not activated, players can bet on the results of the matches by using the WorldCupEntry contract, minting a dynamic onchain NFT.

When the game is activated by an administrator, no more bets will be accepted and the results of the matches can be set according to the real games.

Each correct prediction earns points. Those who achieve the highest score will share the Jackpot.