/** 
<header>
  <nav class="navbar">
    <div class="navbar_contener">
      <div class="navbar__logo">
        <a href="#">Madelyn Torff</a>
      </div>
      <dvi class="navbar__menu">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </dvi>
    </div>
  </nav>
</header>
 */

class Component {
  /** @type {Node | null} */
  node = null;

  /**
   * @param {Node | null} node
   * @param {...Component} children
   * */
  constructor(node, ...children) {
    this.node = node;
  }

  /**  @param {Node | null} node  */
  appendTo(node) {
    if (this.node) node.appendChild(this.node);
  }
}

class Header extends Component {
  node = document.createElement("header");

  /**
   * @param {...Component} children
   */
  constructor(...children) {
    super(null);

    for (const child of children) child.appendTo(this.node);
  }
}

class Nav extends Component {
  node = document.createElement("div");

  /**
   * @param {...NavItem} children
   */
  constructor(...children) {
    super(null);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    this.node.appendChild(nav);
    nav.appendChild(ul);

    for (const child of children) child.appendTo(ul);
  }
}

class NavItem extends Component {
  node = document.createElement("li");

  /**
   * @param {string} name
   * @param {string} href
   */
  constructor(name, href) {
    super(null);

    const link = document.createElement("a");

    link.innerText = name;
    link.href = href;

    this.node.appendChild(link);
  }
}

const header = new Header(
  new Nav(
    new NavItem("Test 1", "/test1"),
    new NavItem("Test 2", "/test2"),
    new NavItem("Test 3", "/test3")
  )
);

header.appendTo(document.getElementById("root"));
