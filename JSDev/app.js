
function closeBoxFunc() {
	var closeBox = document.querySelector('#closeBox')
	var alertBox = document.querySelector('#addAlert')
	var alertText = document.querySelector('#alertTxt')

	closeBox.onclick = function() {
		alertBox.style.height = '0px'
		alertTxt.style.display = 'none'
		alertBox.style.transition = '0.7s'
		closeBox.style.display = 'none'

		console.log(`Box fechada`)
	}
}
closeBoxFunc()
	var nome = document.querySelector('#n1')
	var ano = document.querySelector('#n2')
	var mes = document.querySelector('#n3')
	var dia = document.querySelector('#n4')
	var descricao = document.querySelector('#n5')
	var capital = document.querySelector('#n7')
	var investimento = document.querySelector('#n6')
	var btn = document.querySelector('#btnGet')

function addNewTable() {
	var btn = document.querySelector('#btnGet')
	var titleTable = document.querySelector('#titleTable')
	titleTable.innerHTML = ""

	btn.onclick = function(){
		if (!nome.value || !descricao.value || !capital.value || !investimento.value) {
			var alertBoxDisplay = document.querySelector('#alertBoxDisplay')
			var submitAlertBox = document.querySelector('#submitAlertBox')
			alertBoxDisplay.style.display = 'block'

			submitAlertBox.onclick = function() {
				alertBoxDisplay.style.display = 'none'
			}
		}else {
			var delayAlert = function() {
				var alertBoxDisplay = document.querySelector('#alertBoxDisplay')
				var alertBox = document.querySelector('#alertBox')
				var submitAlertBox = document.querySelector('#submitAlertBox')
				var contentAlertBox = document.querySelector('#contentAlertBox')

				submitAlertBox.style.backgroundColor = 'rgb(74, 232, 209)'
				alertBoxDisplay.style.display = 'block';
				alertBox.style.backgroundColor = '#3BDC9D'
				contentAlertBox.innerText = 'Sua consulta foi adicionada com sucesso!'

			submitAlertBox.onclick = function() {
				alertBoxDisplay.style.display = 'none';

				if (true) {
					nome.value = ""
					dia.value = ""
					mes.value = ""
					ano.value = ""
					descricao.value = ""
					capital.value = ""
					investimento.value = ""
				}
			}
		}

		setTimeout(delayAlert, 1000)
			
		var action = function() {
			titleTable.innerHTML = `<th>Nome</th>
								    <th>Data</th>
								    <th>Descrição</th>
								    <th>Capital</th>
								    <th>Investimento</th>`

			var table = document.querySelector('#table')
			var novaTabela = document.createElement('table')
			var novaTr = document.createElement('tr')
			var nomeTd = document.createElement('td')
			var dataTd = document.createElement('td')
			var descricaoTd = document.createElement('td')
			var capitalTd = document.createElement('td')
			var investimentoTd = document.createElement('td')
			var btnCloseBox = document.createElement('td')

			var data = `${dia.value}/${mes.value}/${ano.value}`

			var getNomeTd = document.createTextNode(nome.value)
				nomeTd.appendChild(getNomeTd)
			var getDataTd = document.createTextNode(data)
				dataTd.appendChild(getDataTd)
			var getDescricaoTd = document.createTextNode(`${descricao.value}`)
				descricaoTd.appendChild(getDescricaoTd)
			var getCapitalTd = document.createTextNode(`R$ ${capital.value}`)
				capitalTd.appendChild(getCapitalTd)
			var getInvestimentoTd = document.createTextNode(`R$ ${investimento.value}`)
				investimentoTd.appendChild(getInvestimentoTd)
			var getBtnCloseBox = document.createElement('i')
				btnCloseBox.appendChild(getBtnCloseBox)

				getBtnCloseBox.setAttribute("class", "fas fa-times")
				getBtnCloseBox.setAttribute("style", "color: #ff5252; cursor: pointer;")

				getBtnCloseBox.onclick = function() {
					var closing = function() {
						novaTr.style.display = 'none'
					}
					setTimeout(closing, 600)
				}

				table.appendChild(novaTr)
				novaTr.appendChild(nomeTd)
				novaTr.appendChild(dataTd)
				novaTr.appendChild(descricaoTd)
				novaTr.appendChild(capitalTd)
				novaTr.appendChild(investimentoTd)
				novaTr.appendChild(btnCloseBox)
			}
			setTimeout(action,1500)
		}

	}
}

addNewTable()