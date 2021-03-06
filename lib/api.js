
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'


const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
 
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  // Remove .md from filename/slug
  const realSlug = slug.replace(/\.md$/, '')
  // Get full path of location of file
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  //Extract the matter from markdown files to get titles/dates
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPostsSorted(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

export function getAllLanguagesFromGithubUser(user) {

  let languageList = []

}

