export type SubmissionData = FormData | object;

export interface SubmissionOptions {
  endpoint?: string;
  clientName?: string;
  fetchImpl?: typeof fetch;
}

interface SuccessBody {
  id: string;
  data: object;
}

interface ErrorBody {
  errors: Array<{
    field: string;
    message: string;
    code: string | null;
    properties: object;
  }>;
}

export type SubmissionBody = SuccessBody | ErrorBody;

export interface SubmissionResponse {
  body: SubmissionBody;
  response: Response;
}
