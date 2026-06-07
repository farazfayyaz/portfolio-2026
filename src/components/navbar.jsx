import React from 'react'; // import React

// component named 'Navbar'
export default function Navbar () {
    return (
        <nav>
            <div>

                {/* Brand Name - Faraz */}
                <span>
                    Faraz
                </span>

                {/* Nav links - desktop navigation */}
                <div>
                    <a>About</a>
                    <a>Experience</a>
                    <a>Visitor Board</a>
                </div>

                {/* call to action */}
                <button>
                    Resume
                </button>

            </div>
        </nav>
    );
}