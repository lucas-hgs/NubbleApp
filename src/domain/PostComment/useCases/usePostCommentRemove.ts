import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postCommentService} from '../postCommentService';

export function usePostCommentRemove(
  postId: number,
  option?: MutationOptions<string>,
) {
  const queryClient = useQueryClient();

  const mutation = useMutation<string, unknown, {postCommentId: number}>({
    mutationFn: variables => postCommentService.remove(variables.postCommentId),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
      if (option?.onSuccess) {
        option.onSuccess(data);
      }
    },
    onError: () => {
      if (option?.onError) {
        option.onError(option.errorMessage || 'Ocorreu um erro');
      }
    },
  });

  return {
    mutate: mutation.mutate,
  };
}
