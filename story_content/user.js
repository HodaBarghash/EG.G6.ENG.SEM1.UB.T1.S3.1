function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ScYWA1y1FM":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v29q1attempts:player.GetVar("v29q1attempts"),v29q1answeredcorrect:player.GetVar("v29q1answeredcorrect"),v29q2attempts:player.GetVar("v29q2attempts"),v29q2answeredcorrect:player.GetVar("v29q2answeredcorrect")})
	}
	)
}

