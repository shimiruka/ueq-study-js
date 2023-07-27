// オブジェクトの実装
const person = {
  firstName: "Ken",
  lastName: "Takahashi",
  age: 29,
  gender: "male",
  interests: [
    {
      name: "programming",
      emoji: "💻",
    },
    {
      name: "motorcycle",
      emoji: "🏍",
    },
  ],
  greeting: function () {
    alert("Hi! I'm " + this.firstName + " " + this.lastName);
  },
};

// オブジェクト→JSON
const personObj = {
  firstName: "Ken",
  lastName: "Takahashi",
  age: 29,
  gender: "male",
  interests: [
    {
      name: "programming",
      emoji: "💻",
    },
    {
      name: "motorcycle",
      emoji: "🏍",
    },
  ],
};
const personStr = JSON.stringify(personObj);

// JSON→オブジェクト
const jsonStr = `
{
	"id": 1,
	"name": "Leanne Graham",
	"username": "Bret",
	"email": "Sincere@april.biz",
	"address": {
		"street": "Kulas Light",
		"suite": "Apt. 556",
		"city": "Gwenborough",
		"zipcode": "92998-3874",
		"geo": {
			"lat": "-37.3159",
			"lng": "81.1496"
		}
	},
	"phone": "1-770-736-8031 x56442",
	"website": "hildegard.org",
	"company": {
		"name": "Romaguera-Crona",
		"catchPhrase": "Multi-layered client-server neural-net",
		"bs": "harness real-time e-markets"
	}
}
`;
const user = JSON.parse(jsonStr);
console.log(user.email);
