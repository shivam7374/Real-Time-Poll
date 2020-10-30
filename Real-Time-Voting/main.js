const realtime = new Ably.Realtime({ key: "bHfuJA.62rfqQ:ZpaCuUXJJcZ9HWqL" });
const myVotingChannel = realtime.channels.get("voting-channel");

function castVote(choice) {
  myVotingChannel.publish("vote", choice, (err) => {
    console.log(choice);
    console.log(err);
  });
}
