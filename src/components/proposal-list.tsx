'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination"
import { api } from '~/trpc/react'

interface Proposal {
  id: number;
  interestedStudies: string | null;
  formLearning: string | null;
  studyTime: string | null;
  contact: string | null;
  createdAt: Date;
  createdById: string;
}



export function ProposalListComponent() {
  const [ allProposals ] = api.proposal.getAll.useSuspenseQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProposals.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allProposals.length / itemsPerPage);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Proposal List</h1>
      <Table>
        <TableCaption>A list of all proposals.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Interested Studies</TableHead>
            <TableHead>Study Type</TableHead>
            <TableHead>Study Time</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Created By</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((proposal: Proposal) => (
            <TableRow key={proposal.id}>
              <TableCell>{proposal.id}</TableCell>
              <TableCell>{proposal.interestedStudies || 'N/A'}</TableCell>
              <TableCell>{proposal.formLearning || 'N/A'}</TableCell>
              <TableCell>{proposal.studyTime || 'N/A'}</TableCell>
              <TableCell>{proposal.contact || 'N/A'}</TableCell>
              <TableCell>{format(proposal.createdAt, 'PPP')}</TableCell>
              <TableCell>{proposal.createdById}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              isActive={currentPage > 1}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink 
                onClick={() => setCurrentPage(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              isActive={currentPage < totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}