//TODO:
//- handle colors being used in HTML attributes. We're not interested in them.

main()

function main() {

    // get paragraph and span tags
    var paraTags = document.getElementsByTagName("p")
    var spanTags = document.getElementsByTagName("span")

    //check every para tag
    for (para of paraTags) {
        checkPageForColor(para)
    }




    // var counter = 0
    // for (span of spanTags) {
    //     checkPageForColor(span)
    //     counter++
    // }
    // console.log(counter)

    console.log("That's all folks!")
}


function checkPageForColor(para) {

    const cssColors = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen",
    ];
    // const pluralizedColors = ["AliceBlues", "AntiqueWhites", "Aquas", "Aquamarines", "Azures", "Beiges", "Bisques", "Blacks", "BlanchedAlmonds", "Blues", "BlueViolets", "Browns", "BurlyWoods", "CadetBlues", "Chartreuses", "Chocolates", "Corals", "CornflowerBlues", "Cornsilks", "Crimsons", "Cyans", "DarkBlues", "DarkCyans", "DarkGoldenRods", "DarkGrays", "DarkGreys", "DarkGreens", "DarkKhakis", "DarkMagentas", "DarkOliveGreens", "DarkOranges", "DarkOrchids", "DarkReds", "DarkSalmons", "DarkSeaGreens", "DarkSlateBlues", "DarkSlateGrays", "DarkSlateGreys", "DarkTurquoises", "DarkViolets", "DeepPinks", "DeepSkyBlues", "DimGrays", "DimGreys", "DodgerBlues", "FireBricks", "FloralWhites", "ForestGreens", "Fuchsias", "Gainsboros", "GhostWhites", "Golds", "GoldenRods", "Grays", "Greys", "Greens", "GreenYellows", "HoneyDews", "HotPinks", "IndianReds", "Indigos", "Ivorys", "Khakis", "Lavenders", "LavenderBlushs", "LawnGreens", "LemonChiffons", "LightBlues", "LightCorals", "LightCyans", "LightGoldenRodYellows", "LightGrays", "LightGreys", "LightGreens", "LightPinks", "LightSalmons", "LightSeaGreens", "LightSkyBlues", "LightSlateGrays", "LightSlateGreys", "LightSteelBlues", "LightYellows", "Limes", "LimeGreens", "Linens", "Magentas", "Maroons", "MediumAquaMarines", "MediumBlues", "MediumOrchids", "MediumPurples", "MediumSeaGreens", "MediumSlateBlues", "MediumSpringGreens", "MediumTurquoises", "MediumVioletReds", "MidnightBlues", "MintCreams", "MistyRoses", "Moccasins", "NavajoWhites", "Navys", "OldLaces", "Olives", "OliveDrabs", "Oranges", "OrangeReds", "Orchids", "PaleGoldenRods", "PaleGreens", "PaleTurquoises", "PaleVioletReds", "PapayaWhips", "PeachPuffs", "Perus", "Pinks", "Plums", "PowderBlues", "Purples", "RebeccaPurples", "Reds", "RosyBrowns", "RoyalBlues", "SaddleBrowns", "Salmons", "SandyBrowns", "SeaGreens", "SeaShells", "Siennas", "Silvers", "SkyBlues", "SlateBlues", "SlateGrays", "SlateGreys", "Snows", "SpringGreens", "SteelBlues", "Tans", "Teals", "Thistles", "Tomatos", "Turquoises", "Violets", "Wheats", "Whites", "WhiteSmokes", "Yellows", "YellowGreens"];


    // check all colors
    for (color of cssColors) {
        // Lower case is looking primo rn
        checkLowerCase(color, para)

        checkProperCase(color, para)
    }

    // handle initialized color formats
    checkColorFormats(para)


}


function checkLowerCase(color, para) {

    // singular and plural forms of the color
    var singularColor = color.toLowerCase()
    var pluralColor = color.toLowerCase().concat("s")

    // merge into array
    singularAndPlural = [singularColor, pluralColor]
        // then attempt to change the color of all matching strings
    singularAndPlural.forEach(color => {

        // check for a singular color
        if (para.innerText.includes(color)) {



            // maybe:
            // find angle brackets, push the matches to an array in order of occurence
            // then, replace each match with "TEMP"
            // after colorization, replace "TEMP" with array items without /g flag, as as to replace them in their order


            // Here's some regex for finding the brackets: /[<].*(color).*[>]/gi


            // interrupt code when encountering color in attribute tag
            // BAD_FORMULA = new RegExp("[<].*(" + color + ").*[>]", "i")
            // lit formula can be found below

            // let ignoreHTMLRegExp = new RegExp("<[^<]*?(" + violet + ")[^<]*?>", 'gi')
            // para.innherHTML = para.innerHTML.replace(ignoreHTMLColor, `${ignoreHTMLColor}TEMPORARY`)


            newExp = new RegExp('(?<=<[^<]*?(' + color + ')[^<]*?>)(\\b(' + color + ')\\b)', 'gi')




            // formula for inserting the color change
            var stylizedWord = `<span style="color:${singularColor};font-weight:bolder;">${color}</span>`

            // if contrast is likely to be low, darken the background
            if (isColorLight(singularColor)) {
                stylizedWord = `<span style="color:${singularColor};font-weight:bolder;background-color:black;padding:0 3px;border-radius:3px;">${color}</span>`
            }

            // catch the color yellow
            if (color == "yellow" || color == "yellows") {
                stylizedWord = `<span style="color:gold;font-weight:bolder;">${color}</span>`
            }





            // find instance of word in the string
            // the first backslash escapes the second; "\b" == word boundary; "g" == global search; "i" == case-insensitive;
            // var findWholeWord = new RegExp("\\b" + color + "\\b", "gi");

            // add color to website HTML
            para.innerHTML = para.innerHTML.replace(newExp, stylizedWord)

        }
    })


}

function checkProperCase(color, para) {

    // contains at least one instance of the color's word
    var paraString = para.innerText

    // if the desired color exists, edit the element
    if (paraString.includes(color)) {
        // console.log(color, "found!")





        // formula for inserting the color change
        var styleParams = `<span style="color:${color};font-weight:bolder;">${color}</span>`

        // if contrast is likely to be low, darken the background
        if (isColorLight(color)) {
            styleParams = `<span style="color:${color};font-weight:bolder;background-color:black;padding:0 3px;border-radius:3px;">${color}</span>`
        }

        // catch the color yellow
        if (color == "Yellow" || color == "Yellows") {
            styleParams = `<span style="color:gold;font-weight:bolder;">${color}</span>`
        }

        // ignores colors in HTML
        newExp = new RegExp('(?<=<[^<]*?(' + color + ')[^<]*?>)(\\b(' + color + ')\\b)', 'gi')
            // add color to website HTML
        para.innerHTML = para.innerHTML.replace(newExp, styleParams)
    }
}

function checkColorFormats(para) {

    // contains at least one instance of the color's word
    var paraString = para.innerText

    // check cyan, magenta, yellow, and key/black
    if (paraString.includes('CMYK')) {
        newExp = new RegExp('(?<=<[^<]*?(' + 'CMYK' + ')[^<]*?>)(\\b(' + 'CMYK' + ')\\b)', 'gi')

        // wrap coloring here
        stylizedSpan = `<span style="color:cyan;font-weight:bolder;">C</span><span style="color:magenta;font-weight:bolder;">M</span><span style="color:gold;font-weight:bolder;">Y</span><span style="color:black;font-weight:bolder;">K</span>`

        // commit changes to website
        para.innerHTML = para.innerHTML.replace(newExp, stylizedSpan)

        // check for RBG string
    } else if (paraString.includes('RGB')) {
        newExp = new RegExp('(?<=<[^<]*?(' + 'RGB' + ')[^<]*?>)(\\b(' + 'RGB' + ')\\b)', 'gi')

        // wrap coloring here
        stylizedSpan = `<span style="color:red;font-weight:bolder;">R</span><span style="color:green;font-weight:bolder;">G</span><span style="color:blue;font-weight:bolder;">B</span>`

        // commit changes to website
        para.innerHTML = para.innerHTML.replace(newExp, stylizedSpan)
    }
}

function isColorLight(color) {
    // these colors will be specially given black backgrounds; use sparingly
    const lightColors = ["white", "azure", "Azure"]

    // test if the current color is light
    let activeLightColor = lightColors.some(testingColor => {
        return testingColor == color
    })

    // send back out of function
    return activeLightColor
}

// test function
function checkHTMLBodyTest(color) {
    var body = document.body.innerHTML

    re = new RegExp("\\b" + color + "\\b", "gi");


    // formula for inserting the color change
    var styleParams = `<span style="color:${color};font-weight:bolder;">PROOF</span>`

    // add color to website HTML
    body = body.replace(re, styleParams)
}