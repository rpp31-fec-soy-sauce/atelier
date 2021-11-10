/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, fireEvent, screen, within } from '../../../test-utils';
 import ReviewTiles from '../../../../client/src/components/ratings/ReviewTiles.jsx';

 beforeEach(() => render(<ReviewTiles />));

  test('review body should exist', () => {
    expect(
      screen.getByRole('1016925',
      { value: 'I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothing at all.  I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothing at all.' })
      ).toBeInTheDocument();
  });

  test('show more should be enabled', () => {
    expect(
      screen.getByRole('showMore', { value: 'Show More ▾' })
    ).toBeEnabled();
  });

  test('Show more button should be enabled when long review', () => {
    const longReview = screen.getByRole('1016925');
    expect(within(longReview).getByText('Show More ▾')).toBeVisible();
  });

  test('Show more button not visible after  click', () => {
    const longReview = screen.getByRole('1016925');
    const longReviewShowMoreButton = within(longReview).getByText('Show More ▾');
    fireEvent.click(longReviewShowMoreButton);
    expect(longReviewShowMoreButton).not.toBeVisible();
  });

  test('review body should exist', () => {
    expect(
      screen.getByRole('1016926',
      { value: 'I really did not like this product solely because I am tiny and do not fit into it.' })
    ).toBeInTheDocument();
  });

  test('More reviews button should be invisible when short review', () => {
    const shortReview = screen.getByRole('1016926');
    expect(within(shortReview).getByText('Show More ▾')).not.toBeVisible();
  });