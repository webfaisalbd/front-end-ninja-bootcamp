const root = ReactDOM.createRoot(document.getElementById("root"));

const parentDiv = React.createElement("div", { className: "parent" },
    [
        React.createElement("div", { className: "parent-one" },
            [
                React.createElement("h1", { className: "parent-title" }, "I am parent"),
                React.createElement("p", {}, "Barir Korta")
            ]
        ),
        React.createElement("div", { className: "parent-two" },
            [
                React.createElement("h1", { className: "parent-title" }, "I am parent two"),
                React.createElement("p", {}, "Barir second Korta")
            ]
        )
    ]
)

root.render(parentDiv)