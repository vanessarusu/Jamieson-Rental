var words = [
    {
        text: 'Load Safety',
        weight: 1,
        link: '#'
    },
    {
        text: 'Road Safety',
        weight: 6,
        link: '#'
    },
    {
        text: 'Car Safety',
        weight: 2,
        link: '#'
    },
    {
        text: 'Truck Rentals',
        weight: 4,
        link: '#'
    },
    {
        text: 'Keyword 1',
        weight: 9,
        link: '#'
    }
];
$('#keywords').css({
    'width': '90%',
    'margin': '0 auto'
});
$('#keywords').jQCloud(words, {
    height: 200,
    autoResize: true,
    removeOverflowing: false,
    fontSize: ['8px','10px', '12px', '14px', '16px', '18px', '20px', '22px', '24px', '26px']
});