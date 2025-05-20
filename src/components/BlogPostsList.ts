type TPost = {
    id: number
    image: string
    category: string
    date: string
    author: string
    title: string
    description: string
}

const BlogPostsList: TPost[] = [
    {
        id: 1,
        image: '/images/blog/1.png',
        category: 'Marketing',
        date: 'June 12, 2020',
        author: 'By Soham Alexander',
        title: 'Digital Marketing Game: What You Need to Know to Stay Ahead?',
        description: "Nunc nulla vestibulum nunc quam arcu tristique convallis. Posuere augue pellentesque mauris gravida..."
    },

    {
        id: 2,
        image: '/images/blog/2.png',
        category: 'Ad Tips',
        date: 'June 6, 2020',
        author: 'By Shawn Edwards',
        title: 'How to Evaluate and Compare Social Media Tools Today.',
        description: "Nunc nulla vestibulum nunc quam arcu tristique convallis. Posuere augue pellentesque mauris gravida..."
    },

    {
        id: 3,
        image: '/images/blog/3.png',
        category: 'SEO',
        date: 'May 1, 2020',
        author: 'By Shawn Edwards',
        title: 'The Best Practices to Optimize Your Website for Mobile.',
        description: "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida..."
    },

    {
        id: 4,
        image: '/images/blog/4.png',
        category: 'Paid Search',
        date: 'April 25, 2020',
        author: 'By Diane Mccoy',
        title: '10 Seriously Underused Paid Search Strategies.',
        description: "Euismod congue faucibus diam etiam diam netus vitae ornare vitae. Cursus sollicitudin posuere venenatis..."
    },

    {
        id: 5,
        image: '/images/blog/5.png',
        category: 'Media & Press',
        date: 'June 3, 2020',
        author: 'By Shawn Edwards',
        title: 'How to Create Content That Gets Linked and Shared.',
        description: "Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae.."
    },

    {
        id: 6,
        image: '/images/blog/6.png',
        category: 'Ad Tips',
        date: 'March 18, 2020',
        author: 'By Jane Cooper',
        title: '12 Simple Tips to Creating an Effective Ad.',
        description: "Imperdiet risus consectetur dignissim lorem sollicitudin eget bibendum pellentesque nec. Adipiscing viverra in non euismod. Amet nulla aliquam nulla magna..."
    },

]

export default BlogPostsList