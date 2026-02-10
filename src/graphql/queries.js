import { gql } from '@apollo/client';

export const GET_ME = gql`
  query GetMe {
    me {
      id
      name
      email
      role
      avatar
      phone
      address {
        street
        city
        state
        zipCode
        country
      }
      wishlist {
        id
        name
        price
        images {
          url
        }
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts(
    $page: Int
    $limit: Int
    $category: String
    $search: String
    $minPrice: Float
    $maxPrice: Float
    $sort: String
  ) {
    products(
      page: $page
      limit: $limit
      category: $category
      search: $search
      minPrice: $minPrice
      maxPrice: $maxPrice
      sort: $sort
    ) {
      products {
        id
        name
        description
        price
        compareAtPrice
        category
        images {
          url
        }
        brand
        stock
        ratings {
          average
          count
        }
        isFeatured
      }
      totalProducts
      totalPages
      currentPage
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      description
      price
      compareAtPrice
      category
      subcategory
      images {
        url
      }
      brand
      stock
      sku
      ratings {
        average
        count
      }
      reviews {
        id
        user {
          id
          name
          avatar
        }
        rating
        comment
        createdAt
      }
      specifications {
        key
        value
      }
      tags
      isFeatured
      createdAt
    }
  }
`;

export const GET_FEATURED_PRODUCTS = gql`
  query GetFeaturedProducts {
    featuredProducts {
      id
      name
      price
      compareAtPrice
      images {
        url
      }
      ratings {
        average
        count
      }
    }
  }
`;

export const GET_MY_ORDERS = gql`
  query GetMyOrders($page: Int, $limit: Int) {
    myOrders(page: $page, limit: $limit) {
      orders {
        id
        orderItems {
          name
          quantity
          price
          image
        }
        totalPrice
        status
        isPaid
        isDelivered
        createdAt
      }
      totalOrders
      totalPages
      currentPage
    }
  }
`;

export const GET_ORDER = gql`
  query GetOrder($id: ID!) {
    order(id: $id) {
      id
      user {
        name
        email
      }
      orderItems {
        product {
          id
          name
        }
        name
        quantity
        price
        image
      }
      shippingAddress {
        street
        city
        state
        zipCode
        country
      }
      paymentMethod
      itemsPrice
      taxPrice
      shippingPrice
      totalPrice
      isPaid
      paidAt
      isDelivered
      deliveredAt
      status
      trackingNumber
      createdAt
    }
  }
`;

export const GET_ALL_ORDERS = gql`
  query GetAllOrders($page: Int, $limit: Int, $status: String) {
    allOrders(page: $page, limit: $limit, status: $status) {
      orders {
        id
        user {
          name
          email
        }
        totalPrice
        status
        isPaid
        isDelivered
        createdAt
      }
      totalOrders
      totalPages
      currentPage
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers($page: Int, $limit: Int) {
    allUsers(page: $page, limit: $limit) {
      id
      name
      email
      role
      createdAt
    }
  }
`;

export const GET_STATS = gql`
  query GetStats {
    stats {
      totalUsers
      totalProducts
      totalOrders
      totalRevenue
      recentOrders {
        id
        user {
          name
        }
        totalPrice
        status
        createdAt
      }
    }
  }
`;
