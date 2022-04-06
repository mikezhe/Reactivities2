using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Comments
{
    public class List
    {
        public class Query : IRequest<Result<PagedList<CommentDto>>>
        {
            public Guid ActivityId {get;set;}
            public PagingParams Params {get;set;}
        }
        public class Handler : IRequestHandler<Query, Result<PagedList<CommentDto>>>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
            _mapper = mapper;
            _context = context;

            }

            public async Task<Result<PagedList<CommentDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
               var  query = _context.Comments
                                    .Where(x => x.Activity.Id == request.ActivityId )
                                    .OrderBy(x => x.CreatedAt)
                                    .ProjectTo<CommentDto>(_mapper.ConfigurationProvider)
                                   .AsQueryable();
                return  Result<PagedList<CommentDto>> .Success(
                    await PagedList<CommentDto>.CreateAsync(query, request.Params.PageNumber, request.Params.PageSize)
                );
            }
        }
    }
}