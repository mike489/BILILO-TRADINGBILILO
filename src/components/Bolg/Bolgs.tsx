import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Box,
  Chip,
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
} from "@mui/material";
import {
  CalendarToday,
  Comment,
  Favorite,
  Share,
  BookmarkBorder,
  Close,
} from "@mui/icons-material";
import { blogData } from "../../data/dummyBlogData";

export interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  comments: string;
  likes?: number;
  category?: string;
  readTime?: string;
  author?: string;
  tags?: string[];
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  comments,
  likes = 0,
  category = "General",
  readTime = "5 min read",
  author = "Anonymous",
  tags = [],
  featured = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Card
        className={`w-full shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl border border-gray-100 overflow-hidden transform hover:-translate-y-1 ${
          featured ? "ring-2 ring-red-500" : ""
        }`}
        sx={{
          backgroundColor: "white",
          background: featured
            ? "linear-gradient(135deg, #fff 0%, #fef2f2 100%)"
            : "white",
        }}
      >
        {/* Category Badge */}
        <Box className="px-6 pt-6 pb-2">
          <Chip
            label={category}
            size="small"
            color="error"
            variant={featured ? "filled" : "outlined"}
            className="mb-2 font-medium"
          />
        </Box>

        <CardContent className="p-6 pt-2">
          {/* Title */}
          <Typography
            variant="h5"
            component="h2"
            className="font-bold text-gray-900 mb-3 leading-tight hover:text-red-600 transition-colors duration-200 cursor-pointer"
            onClick={() => setIsExpanded(true)}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            className="text-gray-600 leading-relaxed mb-4 line-clamp-3"
          >
            {description}
          </Typography>

          {/* Tags */}
          {tags.length > 0 && (
            <Box className="flex flex-wrap gap-1 mb-4">
              {tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  variant="outlined"
                  className="text-xs text-gray-500 border-gray-300"
                />
              ))}
            </Box>
          )}

          {/* Author Info */}
          <Box className="flex items-center gap-3 mb-4">
            <Avatar
              sx={{ width: 32, height: 32 }}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm"
            >
              {author.charAt(0).toUpperCase()}
            </Avatar>
            <Box>
              <Typography
                variant="caption"
                className="font-medium text-gray-900"
              >
                {author}
              </Typography>
              <Typography variant="caption" className="text-gray-500 block">
                {readTime}
              </Typography>
            </Box>
          </Box>

          <Divider className="my-4" />

          {/* Stats Bar */}
          <Box className="flex items-center justify-between text-sm text-gray-500">
            <Box className="flex items-center gap-4">
              <Box className="flex items-center gap-1">
                <CalendarToday sx={{ fontSize: 16 }} />
                <span>{date}</span>
              </Box>
              <Box className="flex items-center gap-1">
                <Comment sx={{ fontSize: 16 }} />
                <span>{comments}</span>
              </Box>
              <Box className="flex items-center gap-1">
                <Favorite sx={{ fontSize: 16 }} />
                <span>{likes}</span>
              </Box>
            </Box>

            <Box className="flex items-center gap-2">
              <Share className="cursor-pointer hover:text-red-600 transition-colors" />
              <BookmarkBorder className="cursor-pointer hover:text-red-600 transition-colors" />
            </Box>
          </Box>
        </CardContent>

        {/* View Details Button */}
        <CardActions className="p-4 pt-0">
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => setIsExpanded(true)}
            className="hover:bg-red-50"
          >
            View Full Details
          </Button>
        </CardActions>
      </Card>

      {/* Expanded View Dialog */}
      <Dialog
        open={isExpanded}
        onClose={() => setIsExpanded(false)}
        maxWidth="md"
        fullWidth
      >
        <AppBar position="static" elevation={0} className="bg-red-600">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className="text-white"
            >
              Blog Post Details
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setIsExpanded(false)}
            >
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>

        <DialogContent dividers className="bg-gray-50">
          <Box className="p-4">
            {/* Header */}
            <Box className="flex justify-between items-start mb-4">
              <Chip
                label={category}
                color="error"
                variant={featured ? "filled" : "outlined"}
              />
              {featured && (
                <Chip label="Featured" color="warning" variant="filled" />
              )}
            </Box>

            {/* Title */}
            <Typography variant="h4" className="font-bold text-gray-900 mb-4">
              {title}
            </Typography>

            {/* Author and Meta Info */}
            <Box className="flex items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
              <Avatar
                sx={{ width: 48, height: 48 }}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white"
              >
                {author.charAt(0).toUpperCase()}
              </Avatar>
              <Box>
                <Typography variant="h6" className="font-semibold">
                  {author}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Published on {date} • {readTime}
                </Typography>
              </Box>
            </Box>

            {/* Full Description */}
            <Typography
              variant="body1"
              className="text-gray-700 leading-relaxed mb-6 text-lg"
            >
              {description}
            </Typography>

            {/* Extended Content */}
            <Paper className="p-4 mb-6 bg-blue-50 border-l-4 border-blue-500">
              <Typography variant="h6" className="font-semibold mb-2">
                Extended Content Preview
              </Typography>
              <Typography variant="body2" className="text-gray-700">
                This is where the full blog post content would appear. The card
                description is just a preview. In a real application, this would
                contain the complete article with images, code snippets, and
                detailed explanations.
              </Typography>
            </Paper>

            {/* Tags */}
            <Box className="mb-6">
              <Typography variant="h6" className="font-semibold mb-2">
                Tags
              </Typography>
              <Box className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions className="bg-white">
          <Button onClick={() => setIsExpanded(false)}>Close</Button>
          <Button
            variant="contained"
            color="primary"
            className="bg-red-600 hover:bg-red-700"
          >
            Read Full Article
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const BlogCards: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Box
          className="text-center mb-12"
          sx={{ maxWidth: 800, margin: "0 auto", mb: 8 }}
        >
          <Typography variant="h3" className="font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </Typography>
          <Typography
            variant="h6"
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Discover insightful articles on technology, lifestyle, programming,
            and more
          </Typography>
        </Box>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              comments={blog.comments}
              likes={blog.likes}
              category={blog.category}
              readTime={blog.readTime}
              author={blog.author}
              tags={blog.tags}
              featured={blog.featured}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
