const list = ({start, count, token}) => {
  return $.ajax({
    url: '/api/position',
    type: 'get',
    data: {
      start,
      count
    },
    headers: {
      'X-Access-Token': token
    },
    success: (result) => {
      return result
    }
  })
}

const findById = (id) => {
  return $.ajax({
    url: `/api/position/${id}`,
    success: (result) => {
      return result
    }
  })
}

const remove = (id, filename) => {
  return $.ajax({
    url: '/api/position',
    type: 'delete',
    data: {
      id,
      filename
    },
    success: (result) => {
      if (result.ret) {
        return result
      }
    }
  })
}

const findByKeywords = ({keywords, start, count, token}) => {
  return $.ajax({
    url: '/api/position/search',
    type: 'post',
    headers: {
      'X-Access-Token': token
    },
    data: {
      keywords,
      start,
      count
    },
    success: (result) => {
      return result
    }
  })
}

module.exports = {
  list,
  remove,
  findById,
  findByKeywords
}
