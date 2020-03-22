
const template = document.createElement('template');
template.innerHTML = `
  <style>
  .badge {
		position: absolute;
		bottom: 0;
		right: 2vw;
		position: fixed;
		margin-bottom: 1vh;
	}

  </style>

  <div class="badge">
		<a target="_blank" href="https://breakthru.site"><img height="35vh" src="badge.svg"></a>
  </div>
`;

class UserCard extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({
			mode: 'open'
		});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

}

window.customElements.define('user-card', UserCard);
