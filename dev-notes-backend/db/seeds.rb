# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
anne = User.create(name: "Anne")

Note.create([
    {
        title: "Inline vs Block Elements",
        topic: "HTML",
        content: "An inline element does not start on a new line and only takes up as much width as necessary.A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can). https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements",
        user: anne
    },

    {
        title: "CSS Display: None, Block, Inline and Inline-Block",
        topic: "CSS",
        content: "An explanation of the differences between display: none and visibility: hidden, understanding display: block, inline and inline-block. https://medium.com/better-programming/understanding-css-display-none-block-inline-and-inline-block-63f6510df93",
        user: anne
    }

])